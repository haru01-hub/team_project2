import TopicList from src/components/TopicList'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">독후감 목록</h1>
      <p className="mb-4">사용자의 독후감 목록 표시</p>
      <TopicList />
    </div>
  )
}
