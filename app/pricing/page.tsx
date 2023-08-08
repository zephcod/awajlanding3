'use client'
import Button from '@/components/button/button';
import { ReactNode } from 'react';
import React, { useState } from "react";
import styles from '@/app/pricing/page.module.css'
import '@/app/pricing/test.css'
import type { Metadata } from 'next'
import Outline from '@/components/button/outline';
import { BsCheck } from 'react-icons/bs';
import GlassModal from '@/components/modal/modal';
import PaymentOptions from '@/sections/payment_options';
import PopularOrders from '@/app/pricing/popular_orders';
import Faqs from '@/sections/faqs';

// export const metadata: Metadata = {
//   title: 'Awaj Pricing',
//   description: 'Awaj Advertising Agency Plans and Pricing',
// }


export default function Price(){
  const [selectMonthly,setSelectMonthly ] = useState<Boolean>(true);

  interface PriceWrapperProps {
    id: number; title:string; price:string; feature1:string; feature2:string; feature3:string; feature4:string; feature5:string; feature6:string; feature7:string; feature8:string;
  }
  
  function PriceWrapper(props:PriceWrapperProps) {
    return (
        <div key={props.id} className={styles.canvas}>
        <div className= {styles.card}>
          <div className={styles.banner}>
            <p className='text-center p-2'>
              {props.title}
            </p>
            <p className={selectMonthly===true?'price_title':'price_title2'}>
            {props.price}
            </p>
          </div>
          <div className={styles.detail}>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature1}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature2}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature3}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature4}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature5}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature6}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature7}</p>
            </div>
            <div className='px-2 flex flex-row items-center gap-2'>
              <BsCheck/><p>{props.feature8}</p>
            </div>
          </div>
          <Outline text='Order' url='/pricing/check_out'/>
        </div>
        </div>
    );
  }

  return (
    <section className='w-full'>
      <div className={styles.container}>
      <div className='text-center'>
        <h1 className={styles.header}>
          Plans tailored to needs.
        </h1>
        <p className={styles.desc}>
          We offer subscription in three packages. 
          Test Awaj Essential monthly plan and see our services in action! 
          Our Business and Premium packages will also be available starting from August 2023. 
          You can pre-order now, refunds are guaranteed.
        </p>
        <em className={styles.desc}>
          Prices DO NOT include 15% VAT.
        </em>
        <br/>
      </div>
      <div className={styles.toggler} onClick={() => {
          setSelectMonthly((prev) => !prev);
          }}>
        <div className={styles.icon}>Annualy</div>
        <div className={styles.icon}>Monthly</div>
        <div
          className={selectMonthly===true?'ball2':'ball1'}
          style={selectMonthly === true ? { left: "2px" } : { right: "2px" }}/>
      </div><br/>
      <div className={styles.tiercard}>
        <PriceWrapper 
        price={selectMonthly?'2000ETB':'1500ETB'} 
        title='Essential' 
        id={1} 
        feature1='key advertising workflows'
        feature2='key advertising workflows'
        feature3='key advertising workflows'
        feature4='key advertising workflows'
        feature5='key advertising workflows'
        feature6='key advertising workflows'
        feature7='key advertising workflows'
        feature8='key advertising workflows'
        />
        <PriceWrapper 
        price={selectMonthly?'4000ETB':'3500ETB'} 
        title='Business' 
        id={2} 
        feature1='key advertising workflows'
        feature2='key advertising workflows'
        feature3='key advertising workflows'
        feature4='key advertising workflows'
        feature5='key advertising workflows'
        feature6='key advertising workflows'
        feature7='key advertising workflows'
        feature8='key advertising workflows'
        />
        <PriceWrapper 
        price={selectMonthly?'8000ETB':'7500ETB'}
        title='Premium' 
        id={3} 
        feature1='key advertising workflows'
        feature2='key advertising workflows'
        feature3='key advertising workflows'
        feature4='key advertising workflows'
        feature5='key advertising workflows'
        feature6='key advertising workflows'
        feature7='key advertising workflows'
        feature8='key advertising workflows'
        />
        </div>
      <div className={styles.desc}>
        <h2 className='text-center'>
          Not ready to order yet?
        </h2>
        <br/>
        <p>
        Get a demo to see the key advertising workflows or start with Awaj free 
        and get access to our standard tools, reports and marketing databases.
        </p>
        <br/>
      </div>
      </div>
      <div className='flex flex-row justify-center items-center align-middle gap-6 mb-8'>
      <Button text="Try Awaj" url="/"/>
      <GlassModal/>
      </div>
      <PopularOrders/>
      <PaymentOptions/>
      <Faqs/>
    </section>
  );
}