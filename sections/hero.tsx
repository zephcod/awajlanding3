import React from 'react'
import '@/styles/hero_animation.css'
import Image from "next/image";
import Awaj from "@/public/awaj_hero1.png";
import styles from '@/sections/page.module.css'
import Rocket from '@/public/character/awaj_hero.webp'
import Tree from '@/public/character/tree.svg'
import Statue5 from '@/public/character/awaj_ethio_lion.png'
import Statue4 from '@/public/landmark/4.png'
import Statue3 from '@/public/landmark/3.png'
import Statue2 from '@/public/landmark/2.png'
import Statue1 from '@/public/landmark/1.png'
import BubbleBg from '@/components/UI/bubble_bg';
import Link from 'next/link';
import { buttonVariants } from '@/components/UI/button';
import CtaHeadline from './ctas/cta_headline';
import ColorButton from '@/components/button/color_btn';
import RoundButton from '@/components/button/round';

const Hero = () => {
  return (
        <div className="loop-wrapper">
            <div className={styles.container}>
                <div className='hidden md:flex'><CtaHeadline/></div>
                <div className={styles.glass}>
                    <div className={styles.header}>
                    <Image src={Awaj} width={200} height={200}  alt='Social Media Awaj Ad'/>
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
                    <div className='h-4 border-border border-dashed border-b-2 mb-8'></div>
                    <div className='relative flex flex-col md:flex-row justify-evenly gap-4'>
                        <ColorButton text='Check Deals' url='/pricing/deals'></ColorButton>
                        <RoundButton url='/resources/tour' text='Take a tour'></RoundButton>
                    </div>
                </div>
            </div>
            <BubbleBg/>
            <div className="mountain"></div>
            <div className="hill"></div>
            <div className="tree"><Image src={Tree.src} width={300} height={300}alt=''/></div>
            <div className="tree"><Image src={Tree.src} width={300} height={300}alt=''/></div>
            <div className="tree"><Image src={Tree.src} width={300} height={300}alt=''/></div>
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
            <Image src={Rocket.src} width={600} height={800}alt=''/>
                <div className='awaj'>አዋጅ!</div>
                <div className='awaj'>አዋጅ!</div>
                <div className='awaj'>አዋጅ!</div>
            </div>
        </div>
  )
}

export default Hero