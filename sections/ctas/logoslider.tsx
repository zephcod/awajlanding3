import React from 'react'
import Image from "next/image";
import SnapChat from '@/public/social/snapcat.png'
import Pintrest from '@/public/social/pinterest.png'
import Google from '@/public/social/google.png'
import YouTube from '@/public/social/youtube.png'
import Insta from '@/public/social/instagram.png'
import styles from '@/sections/ctas/logoslider.module.css'


const LogoSlider = () => {
  return (
    <div className={styles.containerMain}>
        <div className={styles.logo_slider}>
              <div className={styles.logo_slide}><Image src={Insta} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={YouTube} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Pintrest} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={SnapChat} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Pintrest} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Insta} fill style={{objectFit:'contain'}}  alt=''/></div>
              <div className={styles.logo_slide}><Image src={Google} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={YouTube} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={SnapChat} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Google} fill style={{objectFit:'contain'}} alt=''/></div>
        </div>
    </div>
  )
}

export default LogoSlider