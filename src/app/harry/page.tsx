// import { auth, currentUser } from '@clerk/nextjs/server'
import TopicList from '@/src/components/TopicList'
import React from 'react'
export default async function harryPage() {
  // const { userId } = auth()
  // const user = await currentUser()
  return (
    <div className="flex">
      <div>
        <h2 className="text-2xl text-center font-bold mb-2">Book Review</h2>
        <TopicList />
        <div
          className=" border-2 border-slate-200 mr-7 mt-5"
          // style={{
          //   width: '50%',
          //   height: '500px',
          // }}
        >
          <p className="mb-5 pr-20 pl-20">
            리뷰 게시판입니다. 다른 사람들에게 책을 추천해보아요!
          </p>
          <hr />
          <div className="mb-5">
            {/* {userId && ( */}
            <div className="mt-5 ml-5 font-bold">
              <p>이름: ★★★★☆</p>
              {/* {user?.fullName} */}
            </div>
            {/* )} */}
            <p className="ml-5">리뷰를 작성해주세요.</p>
            <div className="flex items-center justify-between">
              <p className="ml-5 text-slate-400">2024.10.19. 14:14</p>
            </div>
          </div>
          <hr />
          <div className="mb-5">
            {/* {userId && ( */}
            <div className="mt-5 ml-5 font-bold">
              <p>이름: ★★★★★</p>
            </div>
            {/* )} */}
            <p className="ml-5">리뷰를 작성해주세요.</p>
            <div className="flex items-center justify-between">
              <p className="ml-5 text-slate-400">2024.10.19. 14:14</p>
            </div>
          </div>
          <hr />
          <div className="mb-5">
            {/* {userId && ( */}
            <div className="mt-5 ml-5 font-bold">
              <p>이름: ★☆☆☆☆</p>
            </div>
            {/* )} */}
            <p className="ml-5">리뷰를 작성해주세요.</p>
            <div className="flex items-center justify-between">
              <p className="ml-5 text-slate-400">2024.10.19. 14:14</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-center font-bold mb-2">Book Debate</h2>
        <div
          className="border-2 border-slate-200 mr-7 mt-5"
          // style={{
          //   width: '50%',
          //   height: '500px',
          // }}
        >
          <p className="mb-5 pr-20 pl-20">
            토론게시판입니다. 자신의 의견을 적어주세요!
          </p>
          <hr />
          <div className="mb-5 ">
            {/* {userId && ( */}
            <div className="flex justify-between mt-5 ml-5 pr-7 font-bold">
              <p>이름: </p>
              <div className="border-gray-200 border-2">
                <p className="pr-1 pl-1">♡</p>
              </div>
            </div>
            {/* )} */}

            <p className="ml-5">
              토론 참여자들을 기다리고 있습니다. <br />
              당신과 토론 참가자를 탐색 중입니다!
            </p>
            <div className="flex items-center justify-between">
              <p className="ml-5 text-slate-400">2024.10.19. 14:14</p>
            </div>
          </div>
          <hr />
          <div className="mb-5">
            {/* {userId && ( */}
            <div className="flex justify-between mt-5 ml-5 pr-7 font-bold">
              <p>이름:</p>
              <div className="border-gray-200 border-2">
                <p className="pr-1 pl-1">♡</p>
              </div>
            </div>
            {/* )} */}
            <p className="ml-5">
              토론 참여자들을 기다리고 있습니다. <br />
              당신과 토론 참가자를 탐색 중입니다!
            </p>
            <div className="flex items-center justify-between">
              <p className="ml-5 text-slate-400">2024.10.19. 14:14</p>
            </div>
          </div>
          <hr />
          <div className="mb-5">
            {/* {userId && ( */}
            <div className="flex justify-between mt-5 ml-5 pr-7 font-bold">
              <p>이름: </p>
              <div className="border-gray-200 border-2">
                <p className="pr-1 pl-1">♡</p>
              </div>
            </div>
            {/* )} */}
            <p className="ml-5">
              토론 참여자들을 기다리고 있습니다. <br />
              당신과 토론 참가자를 탐색 중입니다!
            </p>
            <div className="flex items-center justify-between">
              <p className="ml-5 text-slate-400">2024.10.19. 14:14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
