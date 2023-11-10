import { db }from '@/db';
import {  solutions } from '@/db/schema';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

      const faqs = await db.select().from(solutions)
      let json_response = {
        status:'success',
        results: faqs.length,
        faq: faqs,};

        return NextResponse.json(json_response);
}