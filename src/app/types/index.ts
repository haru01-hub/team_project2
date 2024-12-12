// import { carts, products } from '@/db/schema'
// import { products } from '@/src/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import { carts, products } from 'src/db/schema'
// CART
export type Cart = InferSelectModel<typeof carts>

// PRODUCTS
export type Product = InferSelectModel<typeof products>
// export type CartItem = z.infer<typeof cartItemSchema>

// CART
// export type Cart = InferSelectModel<typeof carts>
