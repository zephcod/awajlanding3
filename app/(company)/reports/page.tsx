import { db }from '@/db';
import { emailPreferences, solutions, carts, stores } from '@/db/schema';

import React from 'react'

async function Home () {
  
 const users = await db.select().from(solutions)
 const res = JSON.stringify(users);
  return (
    <div className='pt-14 items-center text-center'>{res}</div>
  )
}

export default Home