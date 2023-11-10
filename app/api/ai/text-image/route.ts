import { db }from '@/db';
import {  faqsTable } from '@/db/schema';
import { NextRequest, NextResponse } from "next/server";
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit'

export async function GET(request: NextRequest) {

    const freeTrial = await checkApiLimit()

    if (!freeTrial){
      return new NextResponse('Free trial has expired.', {status:403})
    }
    
    else{
      const faqs = await db.select().from(faqsTable).limit(1)
      let json_response = {
        status:'success',
        results: faqs.length,
        faq: faqs,};

        await increaseApiLimit()
        return NextResponse.json(json_response);
      }
}