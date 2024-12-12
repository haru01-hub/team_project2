'use server'

// import { db } from '@vercel/postgres'
import { desc } from 'drizzle-orm'
import db from 'src/db/drizzle'
import { products } from 'src/db/schema'

// import db from '@/db/drizzle'
// import { products } from '@/db/schema'

export async function getLatestProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4,
  })
  return data
}
