import * as schema from './schema'

import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'
const db = drizzle(sql, {
  schema,
})

// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'

// const connectionString = process.env.DATABASE_URL
// if (!connectionString) {
//   throw new Error('DATABASE_URL is not defined')
// }

// const client = postgres(connectionString)
// const db = drizzle(client)
export default db
