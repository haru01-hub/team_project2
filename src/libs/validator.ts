// CART
import { z } from 'zod'
export const cartItemSchema = z.object({
  productId: z.string().min(1, 'Product is required'),
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required'),
  qty: z.number().int().nonnegative('Quantity must be a non-negative number'),
  image: z.string().min(1, 'Image is required'),
  // price: z,
  // .number()
  // .refine(
  //   // (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
  //   // 'Price must have exactly two decimal places (e.g., 49.99)'
  // ),
})
export const shippingAddressSchema = z.object({
  fullName: z.string().min(3, 'Name must be at least 3 characters'),
  streetAddress: z.string().min(3, 'Address must be at least 3 characters'),
  city: z.string().min(3, 'city must be at least 3 characters'),
  postalCode: z.string().min(3, 'Postal code must be at least 3 characters'),
  country: z.string().min(3, 'Country must be at least 3 characters'),
  lat: z.number().optional(),
  lng: z.number().optional(),
})

export const paymentMethodSchema = z.object({
  type: z.string().min(1, 'Payment method is required'),
})
// .refine((data) => PAYMENT_METHODS.includes(data.type), {
//   path: ['type'],
//   message: 'Invalid payment method',
// })
