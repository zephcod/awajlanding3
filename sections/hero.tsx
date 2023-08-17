import React from 'react'
import '@/styles/hero_animation.css'
import Image from "next/image";
import Awaj from "@/public/awaj_hero1.png";
import styles from '@/sections/page.module.css'
import Statue5 from '@/public/character/awaj_ethio_lion.png'
import Statue4 from '@/public/landmark/4.png'
import Statue3 from '@/public/landmark/3.png'
import Statue2 from '@/public/landmark/2.png'
import Statue1 from '@/public/landmark/1.png'
import BubbleBg from '@/components/UI/bubble_bg';
import Link from 'next/link';
import { buttonVariants } from '@/components/UI/button';

const Hero = () => {
  return (
        <div className="loop-wrapper">
            <div className={styles.container}>
                <div className={styles.glass}>
                    <div className={styles.header}>
                    <Image src={Awaj} width={300} height={300}  alt='Social Media Awaj Ad'/>
                    </div>
                    <br/>
                    <div className={styles.subtitle}>
                        <h2>
                        Boost your online presence!
                        </h2>
                    </div>
                    <br/>
                    <div className={styles.desc}>
                        <p >
                        Grow your revenue 10X by leveraging Awaj's digital marketing tools for content marketing 
                        and social media advertising.
                        </p>
                    </div>
                </div>
                <div>
                <Link href="/pricing/deals">
                <div
                  className={buttonVariants({
                    variant:'outline',
                    size: "default",
                  })}
                >
                  Check Deals
                  <span className="sr-only">Check Deals</span>
                </div>
              </Link>
                </div>
            </div>
            <BubbleBg/>
            <div className="mountain"></div>
            <div className="hill"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            {/* <div className='statue1'>
                <Image src={Statue1.src} width={500} height={300}alt=''/></div>
            <div className='statue2'>
                <Image src={Statue3.src} width={100} height={150}alt=''/></div>
            <div className='statue3'>
                <Image src={Statue2.src} width={500} height={300}alt=''/></div>
            <div className='statue4'>
                <Image src={Statue4.src} width={125} height={125}alt=''/></div>
            <div className='statue5'>
                <Image src={Statue5.src} width={400} height={300}alt=''/></div> */}
            <div className="truck">
                <div className='awaj'>አዋጅ!</div>
                <div className='awaj'>አዋጅ!</div>
                <div className='awaj'>አዋጅ!</div>
            </div>
        </div>
  )
}

export default Hero