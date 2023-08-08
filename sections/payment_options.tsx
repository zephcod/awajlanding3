import React from 'react'
import Image from "next/image";
import Banks from "../public/all_banks.webp";
import styles from '@/sections/page.module.css';

const PaymentOptions = () => {
  return (
    <div className={styles.pay_canvas}>
          <h2 className="text-2xl text-center font-bold">EASY PAYMENT OPTIONS!</h2><br/>
          <span className='text-base font-light text-center'>
            You can make payment in Ethiopia through Tele Birr, CBE Birr, Commercial Bank of Ethiopia, 
            Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank</span><br/>
        <div className={styles.payImgContainer}>
          <Image src={Banks} width={300} height={100} className={styles.image}  alt='Social Media Awaj Ad'/>
        </div>
    </div>
  )
}

export default PaymentOptions