'use client'
import { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface LikeButtonProps {
  topicId: string
  initialLikes: number
  userId: string
}

export default function LikeButton({
  topicId,
  initialLikes,
  userId,
}: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes)
  const [hasLiked, setHasLiked] = useState<boolean>(false)

  useEffect(() => {
    // 서버에서 좋아요 상태 가져오기
    const fetchLikeStatus = async () => {
      try {
        const res = await fetch(`/api/topics/${topicId}`)
        if (!res.ok) {
          throw new Error('Failed to fetch topic data')
        }
        const data = await res.json()
        setLikes(data.topic.likes)
        setHasLiked(data.topic.likedBy.includes(userId)) // 사용자가 이미 좋아요를 눌렀는지 확인
      } catch (error) {
        console.error('Error fetching like status:', error)
      }
    }

    fetchLikeStatus()
  }, [topicId, userId])

  const handleLike = async () => {
    if (hasLiked) return

    try {
      const res = await fetch('/api/topics/like', {
        method: 'POST',
        body: JSON.stringify({ topicId, userId }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error('Failed to like the topic')
      }

      const data = await res.json()
      setLikes(data.likes)
      setHasLiked(true)
    } catch (error) {
      console.error('Error liking the topic:', error)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={`flex items-center gap-2 p-2 ${
        hasLiked ? 'text-red-500' : 'text-gray-500'
      }`}
    >
      {hasLiked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      {likes}
    </button>
  )
}
