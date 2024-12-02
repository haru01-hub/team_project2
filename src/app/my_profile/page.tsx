// // AddTopic Component
//'use client'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export function AddTopic() {
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!title || !description) {
//       alert('Title and description are required.')
//       return
//     }
//     try {
//       const res = await fetch('/api/topics', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, description }),
//       })
//       if (res.ok) {
//         router.push('/write')
//         router.refresh()
//       } else {
//         throw new Error('Failed to create a topic')
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <form className="flex flex-col gap-3 w-full mt-5" onSubmit={handleSubmit}>
//       <input
//         className="border border-slate-500 p-4 w-full"
//         type="text"
//         placeholder="Title"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//       />
//       <textarea
//         className="border border-slate-500 p-4 w-full"
//         placeholder="Description"
//         onChange={(e) => setDescription(e.target.value)}
//         value={description}
//         rows={4}
//       />
//       <div className="flex justify-end">
//         <button
//           className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
//           type="submit"
//         >
//           Add Write
//         </button>
//       </div>
//     </form>
//   )
// }

// DashboardPage Component
import Link from 'next/link'
import Image from 'next/image'

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
        <div>
          <Link href="/profile" className="ml-5 underline hover:text-gray-400">
            ▶ 내 프로필 보기
          </Link>
        </div>
        <p className="ml-20 text-center font-bold">
          ❝ 모든 인간의 삶은 각자 자신에게로 이르는 길이다. ❞<br />- 데미안
        </p>
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
            <Link href="/purchase">
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
          {/* <AddTopic /> */}
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
