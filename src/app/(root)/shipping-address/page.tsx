import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { APP_NAME } from 'src/lib/constants'

export const metadata: Metadata = {
  title: `Shipping Address - ${APP_NAME}`,
}

// export default async function ShippingPage() {
//   const cart = await getMyCart()
//   if (!cart || cart.items.length === 0) redirect('/cart')
//   // const session = await auth()
//   // const user = await getUserById(session?.user.id!)
//   // return <ShippingAddressForm address={user.address} />
// }
