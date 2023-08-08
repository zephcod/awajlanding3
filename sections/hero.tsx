import React from 'react'
import '@/styles/hero_animation.css'
import Image from "next/image";
import Awaj from "@/public/awaj_ad.png";
import styles from '@/sections/page.module.css'
import Statue1 from '@/public/character/awaj_ethio_lion.png'
import BubbleBg from '@/components/UI/bubble_bg';
import Link from 'next/link';
import { buttonVariants } from '@/components/UI/button';

const Hero = () => {
  return (
        <div className="loop-wrapper">
            <div className={styles.container}>
                <div className={styles.glass}>
                    <div className={styles.header}>
                    <Image src={Awaj} width={400} height={400}  alt='Social Media Awaj Ad'/>
                    </div>
                    <br/>
                    <div className={styles.subtitle}>
                        <h2>
                        A Digital Marketing Ace!
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
            <div className='statue1 mb-4'>
                <Image src={Statue1.src} width={400} height={300}alt=''/>
            </div>
            {/* <div className='statue2'></div>
            <div className='statue3'></div>
            <div className='statue4'></div> */}
            <div className='statue5'></div>
            {/* <div className="rock"></div> */}
            <div className="truck">
                <div className='awaj'>አዋጅ</div>
                <div className='awaj'>አዋጅ</div>
                <div className='awaj'>አዋጅ</div>
            </div>
        </div>
  )
}

export default Hero