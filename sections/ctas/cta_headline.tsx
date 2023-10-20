import { Icons } from '@/components/UI/icons'
import ColorButton from '@/components/button/color_btn'
import RoundButton from '@/components/button/round'
import SingleInput from '@/components/input/singleinput'
import styles from '@/sections/ctas/cta_headline.module.css'
import React from 'react'

const CtaHeadline = () => {
  return (
    <div className={styles.containerMain}>
          <h2 className="text-2xl lg:text-3xl font-bold leading-[1.15] text-muted-foreground text-center">
            Get measurable results!
          </h2>
          <p className='text-lg md:text-xl font-light text-muted-foreground py-2'>Discover the world of new age marketing</p>
          <Icons.arrowDown className='text-muted-foreground animate-bounce'/>
          <div className="max-w-5xl mx-auto mt-4 text-center flex flex-col w-full">
            <SingleInput/><br/>
            <p className='text-base font-light text-muted-foreground'>Eg. social media for retail company</p>
          </div>
    </div>
  )
}

export default CtaHeadline