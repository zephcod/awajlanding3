import { db }from '@/db';
import {  faqsTable } from '@/db/schema';
import type { Faqs } from "@/types"

async function getFaqs():Promise<Faqs[]> {
    const users = await db.select().from(faqsTable)
    return users;
}

export default getFaqs