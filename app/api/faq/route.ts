import { db }from '@/db';
import {  faqsTable } from '@/db/schema';
import { inArray } from 'drizzle-orm';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url)
    const lim = searchParams.get('limit')
    const tag = searchParams.get('tag')
    const faqs = await db.select().from(faqsTable).limit(Number(lim))
    let json_response = {
        status:'success',
        results: faqs.length,
        faq: faqs,};
    return NextResponse.json(json_response);
}