// import { products } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import { products } from 'src/db/schema'
import { cartItemSchema, shippingAddressSchema } from 'src/libs/validator'
import { z } from 'zod'

// PRODUCTS
export type Product = InferSelectModel<typeof products>
export type CartItem = z.infer<typeof cartItemSchema>
export type ShippingAddress = z.infer<typeof shippingAddressSchema>
