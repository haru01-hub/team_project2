import Link from 'next/link'
import Image from 'next/image'
import AddTopicPage from '../addTopic/page'

export default function MyprofilePage() {
  return (
    <div>
      <h3 className="text-2xl text-left font-bold mb-2">My profile</h3>
      <hr />
      <br />
      <div className="flex">
        <div>
          <Image
            className="bg-gray-400 hover:bg-cyan-200 mr-2 ml-4 rounded-full"
            src="/profile.jpg"
            alt="프로필 사진"
            width={90}
            height={90}
          />
        </div>
      </div>
      <div
        className="bg-gray-300 mt-5 rounded-3xl"
        style={{ width: '100%', height: '90px' }}
      >
        <div className="flex items-center justify-between mr-5 mt-10">
          <h1 className="ml-10 pt-7">
            My Point
            <span className="ml-5 mr-5 font-bold text-3xl text-yellow-100">
              10,000
            </span>
            Point
          </h1>
          <div className="flex text-gray-800">
            <Link href="/receipt">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 mr-5 hover:bg-blue-200">
                이용내역
              </p>
            </Link>
            <Link href="/product">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 hover:bg-blue-200">
                포인트사용하기
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="border-2 mt-10 p-10 underline w-1/4">
          <Link href="" className="mb-5 text-black hover:text-blue-400">
            NewWrite
          </Link>
          <hr />
          <Link href="/app/EditTopicForm" className="hover:text-blue-400 mb-4">
            2024.10.08
          </Link>
          <br />
          <hr />
          <Link href="" className="hover:text-blue-400 mb-4">
            2024.06.18
          </Link>
          <br />
          <hr />
          <Link href="" className="hover:text-blue-400 mb-4">
            2024.01.13
          </Link>
          <br />
          <hr />
          <Link href="" className="hover:text-blue-400 mb-4">
            2023.09.23
          </Link>
          <br />
        </div>

        <div className="ml-10 w-3/4 mt-5">
          <AddTopicPage />
          <div className="flex justify-between mt-1">
            <Link href="/write" className="underline hover:text-gray-400">
              ▶ 작성된 독후감 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
