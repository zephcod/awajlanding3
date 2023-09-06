'use client'
import React from 'react'
import styles from './page.module.css';
import ExpandingArrow from '@/components/expanding_arrow';
import Link from 'next/link';
import  FaqCard  from './faq-card';


export default function Faqs () {
  return (
    <div className={styles.faq_canvas}>
        <h2 className="text-2xl text-center font-bold">Frequently asked questions</h2><br/>
            <div className={styles.faq_card2}>
            {FaqCard()}
            </div>
            <Link href={'/faqs'} className="relative group rounded-full flex items-center justify-center mx-auto text-primary-foreground dark:text-secondary text-sm font-light pt-6 px-6 transition-all">
                <p>Check more on Help Center...</p>
            <ExpandingArrow/>
            </Link>
    </div>
  )
}
