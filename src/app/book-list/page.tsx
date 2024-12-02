import Link from 'next/link'

export default async function BookRank() {
  return (
    <div>
      <div
        className="ml-50 p-2 border-2 rounded-3xl mb-5 text-right"
        style={{
          width: '350px',
          height: '50px',
        }}
      >
        🔍
      </div>
      <div className="flex">
        <Link href="" className="text-cyan-600 hover:text-cyan-300">
          <h3 className="text-2xl text-left font-bold mb-2">Fantasy ︱ </h3>
        </Link>
        <Link href="" className=" hover:text-cyan-300">
          <h3 className="text-2xl text-left font-bold mb-2">
            a detective story ︱
          </h3>
        </Link>
        <Link href="" className=" hover:text-cyan-300">
          <h3 className="text-2xl text-left font-bold mb-2"> mystery ︱ </h3>
        </Link>
        <Link href="" className=" hover:text-cyan-300">
          <h3 className="text-2xl text-left font-bold mb-2">Romance</h3>
        </Link>
        <Link href="" className=" hover:text-cyan-300">
          <h3 className="text-2xl text-left font-bold mb-2">
            a scientific book
          </h3>
        </Link>
      </div>
      <hr />
      <div className="flex">
        <Link href="/harry">
          <img
            src="/Harry.jpg"
            width={200}
            height={200}
            className="mt-5 mr-10"
          />
          <h1
            className=" text-black hover:text-red-800 mr-4 mt-2
          text-center font-bold "
          >
            해리포터
          </h1>
          <br />
        </Link>
        <Link href="/harry">
          <img
            src="/ring.jpg"
            width={200}
            height={200}
            className="mt-5 mr-10"
          />
          <h1 className=" text-black hover:text-red-800 mr-4 mt-2 text-center font-bold ">
            반지의 제왕
          </h1>
          <br />
        </Link>
        <Link href="/harry">
          <img
            src="/nami.jpg"
            width={200}
            height={200}
            className="mt-5 mr-10"
          />
          <h1 className=" text-black hover:text-red-800 mr-4 mt-2 text-center font-bold ">
            나미야 잡화점의 기적
          </h1>
          <br />
        </Link>
        <Link href="/harry">
          <img
            src="/dream.jpg"
            width={200}
            height={200}
            className="mt-5 mr-10"
          />
          <h1 className=" text-black hover:text-red-800 mr-4 mt-2 text-center font-bold ">
            달러구트 꿈 백화점
          </h1>
          <br />
        </Link>
      </div>
      <p className="text-center">도서 목록이 보여질 예정입니다.</p>
    </div>
  )
}
