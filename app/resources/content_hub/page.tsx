import React from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import {Tilt} from 'react-tilt'
import Image from 'next/image'
import Card from '@/public/all_banks.webp'

export const metadata: Metadata = {
  title: 'How it Works',
  description: 'How Awaj Advertising Agency Works',
}




const Content_Hub = () => {
  return (
    <Tilt options={{ max: 35, speed: 10000, transition: true, easing:"cubic-bezier(.03,.98,.52,.99)", }}>
    <div className={styles.container}>
    <div className={styles.glass}>
        <div >
            Awaj Payment Options
        </div>
        <div className='my-6'>
          <Image
          sizes={'lg'}
          alt={'page under construction'}
          width={640}
          height={640}
          src={Card.src}
        />
        </div>
    </div>
    </div>
    </Tilt>
  )
}

export default Content_Hub