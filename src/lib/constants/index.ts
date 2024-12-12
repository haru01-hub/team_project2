export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Amazona'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'An Amazon clone built with Next.js, Postgres, Shadcn'
export const shippingAddressDefaultValues = {
  fullName: '',
  streetAddress: '',
  city: '',
  postalCode: '',
  country: '',
}
// export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
//   ? process.env.PAYMENT_METHODS.split(', ')
//   : ['PayPal', 'Stripe', 'CashOnDelivery']
// export const DEFAULT_PAYMENT_METHOD =
//   process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'
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
// export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
//   ? process.env.PAYMENT_METHODS.split(', ')
//   : ['PayPal', 'Stripe', 'CashOnDelivery']
// export const DEFAULT_PAYMENT_METHOD =
//   process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'
