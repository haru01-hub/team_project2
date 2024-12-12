// import React from 'react'
// import Header from 'src/components/Header'
// import Footer from 'src/components/shared/footer'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex h-screen flex-col">
//       {/* <Header /> */}
//       <main className="flex-1 wrapper">{children}</main>
//       <Footer />
//     </div>
//   )
// }

import React from 'react'

import Footer from 'src/components/shared/footer'
import { ShoppingCart } from 'lucide-react'

import Link from 'next/link'

import { Button } from 'src/components/ui/button'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      {/* <Header /> */}
      <header className="w-full border-b">
        <div className="wrapper flex-between">
          <div className="flex-start">
            <Link href="/" className="flex-start">
              WITH BOOK
              {/* <Image
                src="/assets/icons/logo.svg"
                width={48}
                height={48}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME} */}
            </Link>
          </div>
          <div className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart />
                Cart
              </Link>
            </Button>
            {/* <Button asChild>
              <Link href="/cart">
                <ShoppingCart />
                Sign In
              </Link>
            </Button> */}
          </div>
        </div>
      </header>
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  )
}
