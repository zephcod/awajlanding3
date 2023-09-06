'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/UI/accordion';
import { useState } from 'react'
import useSWR from 'swr'
import {
    getTodos,
    todosUrlEndpoint as cacheKey,
    fetcher,
} from '@/app/api/faqsApi/faqApi'
import { Button } from '../UI/button';
import { Icons } from '../UI/icons';


const FaqCard = () => {
    const [limit, setLimit] = useState(3)
    const {
        isLoading,
        error,
        data: _faq,
        mutate,
    } = useSWR(`http://localhost:3000/api/faq?limit=${limit}`, fetcher)

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else 
    if (error) {
        content = <p>{error.message}</p>
    } else {
        content = _faq.faq.map((item: {question:string, id: number, answer:string}) =>(
            <Accordion key={item.id} type="single" collapsible className="w-full ">
                <AccordionItem value='Question 1'>
                    <AccordionTrigger className="text-sm capitalize">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-2">
                        {item.answer}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        ))
        // content = []
        // for (let i = _faq.faq; i.result < limit; i++) {
        //     content.push(
        //     <Accordion key={i} type="single" collapsible className="w-full ">
        //         <AccordionItem value='Question 1'>
        //             <AccordionTrigger className="text-sm capitalize">
        //                 {i.question}
        //             </AccordionTrigger>
        //             <AccordionContent>
        //                 <div className="flex flex-col space-y-2">
        //                 answer
        //                 </div>
        //             </AccordionContent>
        //         </AccordionItem>
        //       </Accordion>)
        //   }
    }


    return (
        <div className='w-full items-center gap-4 flex flex-col'>
            {content}
            <Button onClick={()=>setLimit(limit + 2)} variant='ghost'><Icons.chevronDown className='h-4 w-4 m-2'/>Load more...</Button>
        </div>
    )
  }
export default FaqCard