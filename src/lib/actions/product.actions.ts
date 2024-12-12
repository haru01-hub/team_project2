'use server'

import { desc, eq } from 'drizzle-orm'
import db from 'src/db/drizzle'
import { products } from 'src/db/schema'

// export async function getLatestProducts() {
//   const data = await db
//     .select()
//     .from(products)
//     .orderBy(desc(products.createdAt))
//     .limit(4)

//   return data
// }

export async function getLatestProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4,
  })
  return data
}

export async function getProductBySlug(slug: string) {
  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1)

  return product
}
