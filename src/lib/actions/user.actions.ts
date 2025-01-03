import db from 'src/db/drizzle'
import { ShippingAddress } from 'src/types'
import { z } from 'zod'

// export async function getUserById(userId: string) {
//   const user = await db.query.users.findFirst({
//     where: (users, { eq }) => eq(users.id, userId),
//   })
//   if (!user) throw new Error('User not found')
//   return user
// }
// export async function updateUserAddress(data: ShippingAddress) {
//   try {
//     const session = await auth()
//     const currentUser = await db.query.users.findFirst({
//       where: (users, { eq }) => eq(users.id, session?.user.id!),
//     })
//     if (!currentUser) throw new Error('User not found')

//     const address = shippingAddressSchema.parse(data)
//     await db.update(users).set({ address }).where(eq(users.id, currentUser.id))
//     revalidatePath('/place-order')
//     return {
//       success: true,
//       message: 'User updated successfully',
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }
// export async function updateUserPaymentMethod(
//   data: z.infer<typeof paymentMethodSchema>
// ) {
//   try {
//     const session = await auth()
//     const currentUser = await db.query.users.findFirst({
//       where: (users, { eq }) => eq(users.id, session?.user.id!),
//     })
//     if (!currentUser) throw new Error('User not found')
//     const paymentMethod = paymentMethodSchema.parse(data)
//     await db
//       .update(users)
//       .set({ paymentMethod: paymentMethod.type })
//       .where(eq(users.id, currentUser.id))
//     // revalidatePath('/place-order')
//     return {
//       success: true,
//       message: 'User updated successfully',
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }
