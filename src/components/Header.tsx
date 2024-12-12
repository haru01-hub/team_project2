// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignOutButton,
//   SignUpButton,
//   UserButton,
// } from '@clerk/nextjs'

'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const { status, data: session } = useSession()
  if (status === 'loading') {
    // 세션 로딩 중일 때 로딩 표시
    return (
      <nav className="bg-green-900 py-7 px-8">
        <div className="text-white">Loading...</div>
      </nav>
    )
  }
  return (
    <div>
      <nav className="bg-green-900 py-7 px-8 pr-10 pl-10">
        <div className="flex items-center container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-2xl text-white hover:text-yellow-300 mr-4">
                <h1 className="font-serif text-lg">WITH BOOK</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <Link
              href="/team-info"
              className=" text-white hover:text-yellow-300 mr-8 ml-8"
            >
              Team info
            </Link>
          </div>
          <div className="flex items-center font-bold">
            {/* <SignedOut> */}
            <div className=" text-white hover:text-yellow-300 mr-4">
              {/* <SignInButton /> */}
            </div>
            <div className=" text-white hover:text-yellow-300 mr-4">
              {/* <SignUpButton /> */}
            </div>
            {/* </SignedOut>

            <SignedIn> */}
            {/* <Link
                href="/profile"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                Profile
              </Link> */}
            {/* <Link
                href="/dashboard"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                Team information
              </Link> */}

            <Link
              href="/book-rank"
              className=" text-white hover:text-yellow-300 mr-8"
            >
              Reader Ranking
            </Link>
            <Link
              href="/book-list"
              className=" text-white hover:text-yellow-300 mr-8"
            >
              Book List
            </Link>
            <Link
              href="/my_profile"
              className=" text-white hover:text-yellow-300 mr-4"
            >
              My Profile
            </Link>

            <div className=" text-white hover:text-yellow-300 mr-4">
              {/* <UserButton /> */}
            </div>
            <div className=" text-white hover:text-yellow-300 mr-4">
              {/* <SignOutButton /> */}
            </div>
            {/* </SignedIn> */}

            <div className="flex gap-4 ml-20">
              {status === 'authenticated' ? (
                <>
                  <div className="flex gap-2 items-center mr-7">
                    <Image
                      className="rounded-full"
                      src={session?.user?.image ?? '/default-avatar.png'}
                      width={40}
                      height={40}
                      alt={session?.user?.name ?? 'user'}
                    />
                    <span className="text-white font-bold">
                      {session?.user?.name}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded-md text-sm font-light"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md text-lg font-bold"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
