import { db }from '@/db';
import { emailPreferences, solutions, faqsTable, stores } from '@/db/schema';

import React from 'react'

async function Home () {
  
 const users = await db.select().from(faqsTable)
 const res = JSON.stringify(users);
  return (
    users.map((load)=>(
      <div key={load.id} className='flex flex-row p-2 gap-2 text-start'>{load.question}{JSON.stringify(load.tags)}</div>
    ))
  )
}

export default Home