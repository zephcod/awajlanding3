import ColorButton from '@/components/button/color_btn'
import SingleInput from '@/components/input/singleinput'
import styles from '@/sections/ctas/cta_headline.module.css'
import React from 'react'

const CtaHeadline = () => {
  return (
    <div className={styles.containerMain}>
          <h2 className="text-2xl text-center">
            Get measurable results!
            <br />
            Discover the world of new age marketing
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <SingleInput/><br/>
            <ColorButton text='View All' url='/'></ColorButton>
          </div>
    </div>
  )
}

export default CtaHeadline