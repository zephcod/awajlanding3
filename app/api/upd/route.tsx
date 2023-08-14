import { sql } from '@vercel/postgres'

export async function drop() {
  // Delete table with raw SQL
  await sql`DROP TABLE pets;`
  return new Response('table gone')
  // console.log(`Table deleted`)
      }