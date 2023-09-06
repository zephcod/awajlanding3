import React from 'react'
import styles from '@/sections/page.module.css';
import Outline from '@/components/button/outline';
import ExpandingArrow from '@/components/expanding_arrow';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/UI/accordion';

const Faqs = () => {
  return (
    <div className={styles.faq_canvas}>
        <div className={styles.faq_canvas2}>
          <h2 className="text-2xl text-center font-bold">Frequently asked questions</h2><br/>
            <div className={styles.faq_tier}>
                <div className={styles.faq_mode}>
                    <div className={styles.faq_card}>
                        <Accordion type="single" collapsible className="w-full ">
                            <AccordionItem value='Question 1'>
                            <AccordionTrigger className="text-sm capitalize">
                                'Question 1'
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col space-y-2">
                                'You can make payment in Ethiopia through Tele Birr, CBE Birr, Commercial Bank of Ethiopia, Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank'
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className={styles.faq_mode}>
                    <div className={styles.faq_card}>
                        <Accordion type="single" collapsible className="w-full ">
                            <AccordionItem value='Question 1'>
                            <AccordionTrigger className="text-sm capitalize">
                                'Question 1'
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col space-y-2">
                                'You can make payment in Ethiopia through Tele Birr, CBE Birr, Commercial Bank of Ethiopia, Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank'
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className={styles.faq_mode}>
                    <div className={styles.faq_card}>
                        <Accordion type="single" collapsible className="w-full ">
                            <AccordionItem value='Question 1'>
                            <AccordionTrigger className="text-sm capitalize">
                                'Question 1'
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col space-y-2">
                                'You can make payment in Ethiopia through Tele Birr, CBE Birr, Commercial Bank of Ethiopia, Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank'
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Link href={'/reports'} className="relative group mt-10 sm:mt-0 rounded-full flex items-center justify-center mx-auto text-primary-foreground text-sm font-light py-2 px-6 transition-all">
                <p>See our reports...</p>
            <ExpandingArrow/>
            </Link>
        </div>
    </div>
  )
}

export default Faqs