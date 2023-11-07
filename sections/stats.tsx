import React from 'react'
import styles from '@/sections/page.module.css';
import { Icons } from '@/components/UI/icons';
import ScrollLinkGhost from '@/components/UI/scroll_link_ghost';

const Stats = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-10'></div>
        <div className='flex flex-row text-muted-foreground justify-center text-center gap-2 w-full p-4 m-auto'>
            <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Grow with us, Awaj
            <span className='text-primary'>{' '}AI{" "}</span>is booming🔥.  </h3>
        </div>
        <div className='flex flex-col md:flex-row gap-6 mx-auto max-w-4xl py-4'>
            <div className={styles.statcanvas}>
                <Icons.hearthand className='h-14 w-14 '/>
                <p className='text-2xl font-semibold mt-6'> 12M+ </p>
                <p className='text-xl font-light px-8'> Marketing Reach </p>
            </div>
            <div className={styles.statcanvas}>
                <Icons.pen className='h-14 w-14 '/>
                <p className='text-2xl font-semibold mt-6'> 40+ </p>
                <p className='text-xl font-light px-8'> Tools & Solutions </p>
            </div>
            <div className={styles.statcanvas}>
                <Icons.rocket className='h-14 w-14 '/>
                <p className='text-2xl font-semibold mt-6'> 700+ </p>
                <p className='text-xl font-light px-8'> Successful Campaigns </p>
            </div>
        </div>
        <ScrollLinkGhost href={'#footer'}>
        <p className='p-1 text-muted-foreground'>Subscribe to our socials / newsletter 🡣</p>
        </ScrollLinkGhost>
    </div>
  )
}

export default Stats