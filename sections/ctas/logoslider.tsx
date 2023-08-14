import React from 'react'
import styles from '@/sections/ctas/logoslider.module.css'
import Image from "next/image";
import Anbessa from '@/public/logo/logos_anebesacham.png'
import Babi from '@/public/logo/logos_babisbistro.png'
import Capital from '@/public/logo/logos_capitalhotel.png'
import Deliver from '@/public/logo/logos_delier addis.png'
import Entoto from '@/public/logo/logos_entotopark.png'
import EtFitness from '@/public/logo/logos_ethiofitnessadnutriton.png'
import Kestedemena from '@/public/logo/logos_kesetedemena.png'
import Monarch from '@/public/logo/logos_monarch.png'
import Hayat from '@/public/logo/logos_hyattregency.png'
import Century from '@/public/logo/logos_centurymall.png'


const LogoSlider = () => {
  return (
    <div className={styles.containerMain}>
        <div className={styles.logo_slider}>
              <div className={styles.logo_slide}><Image src={Century} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Anbessa} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Kestedemena} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={EtFitness} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Deliver} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Babi} fill style={{objectFit:'contain'}}  alt=''/></div>
              <div className={styles.logo_slide}><Image src={Monarch} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Capital} fill style={{objectFit:'contain'}} alt=''/></div>
              <div className={styles.logo_slide}><Image src={Entoto} fill style={{objectFit:'contain'}} alt=''/></div>
              {/* <div className={styles.logo_slide}><Image src={Hayat} fill style={{objectFit:'contain'}} alt=''/></div> */}
        </div>
    </div>
  )
}

export default LogoSlider