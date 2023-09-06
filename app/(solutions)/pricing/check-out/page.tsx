import React from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Image from 'next/image'
import GlassModal from '@/components/modal/modal'

export const metadata: Metadata = {
  title: 'Check Out',
  description: 'Awaj Ad AI Tools',
}

const CheckOut = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
      Check Out
      </h1>
      <h1 className={styles.title}>
      Page under review!
      </h1>
      <p className={styles.desc}>
      This page is currently under review please check us back after 9:00am GMT 3/12/22.
        If you need anything, we are always available to chat. 
        Sorry if we caused any incovenience.
      </p>
      <Image
          sizes={'lg'}
          alt={'page under construction'}
          width={640}
          height={640}
          src={'https://gennbi.com/src/under-construction-01.svg'}
        />
        <GlassModal/>
    </div>
  )
}

export default CheckOut