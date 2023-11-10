import React from 'react'
import type { Metadata } from 'next'
import styles from '@/app/(company)/terms/page.module.css'
import Image from 'next/image'
import { CiWarning } from "react-icons/ci";

export const metadata: Metadata = {
  title: 'Awaj Terms & Conditions ',
  description: 'Awaj Terms & Conditions ',
}
const style = { color: "#808080", fontSize: "5em" }



const Terms = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
      Terms & Conditions
      </h1>
      <CiWarning style={style}/>
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
          objectFit={'fit'}
          width={640}
          height={640}
          src={'https://gennbi.com/src/under-construction-01.svg'}
        />
    </div>
  )
}

export default Terms