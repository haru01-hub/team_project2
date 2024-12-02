import connectMongoDB, { Topic } from '@/src/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { topicId, userId } = await request.json() // 클라이언트에서 전달받은 topicId와 userId
    if (!topicId || !userId) {
      console.error('Topic ID and User ID are required')
      return NextResponse.json(
        { message: 'Topic ID and User ID are required' },
        { status: 400 }
      )
    }

    await connectMongoDB()
    console.log('MongoDB connected')

    // topicId에 해당하는 토픽 찾기
    const topic = await Topic.findById(topicId)
    if (!topic) {
      console.error('Topic not found:', topicId)
      return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
    }

    // 이미 좋아요를 눌렀는지 확인
    if (topic.likedBy.includes(userId)) {
      return NextResponse.json({ likes: topic.likes }, { status: 200 })
    }

    // 좋아요 수 증가 및 likedBy 배열에 사용자 ID 추가
    topic.likes += 1
    topic.likedBy.push(userId)
    await topic.save()

    console.log('likes updated:', topic.likes)

    return NextResponse.json({ likes: topic.likes }, { status: 200 })
  } catch (error) {
    console.error('Error in POST /api/topics/like:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
