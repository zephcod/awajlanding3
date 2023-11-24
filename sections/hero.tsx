import React from 'react'
import '@/styles/hero_animation.css'
import Image from "next/image"
import styles from '@/sections/page.module.css'
import Rocket from '@/public/character/awaj_hero.webp'
import Statue1 from '@/public/landmark/ethiopian_landmark.png'
import BubbleBg from '@/components/UI/bubble_bg';
import Link from 'next/link';
import { buttonVariants } from '@/components/UI/button';
import CtaHeadline from './ctas/cta_headline';
import ColorButton from '@/components/button/color_btn';
import RoundButton from '@/components/button/round';
import ScrollLink from '@/components/UI/scroll_link'

const Hero = () => {
  return (
        <div className="loop-wrapper">
            <div className={styles.container}>
                <div className={styles.glass}>
                    {/* <div className={styles.header}>
                    <Image src={Awaj} width={200} height={200}  alt='Social Media Awaj Ad'/>
                    </div>
                    <br/> */}
                    <div className={styles.subtitle}>
                        <h2>
                        🏆 Win the digital race!
                        </h2>
                    </div>
                    <div className={styles.desc}>
                        <p >
                        Claim your market share online and get tangible results.
                        </p>
                    </div>
                    <div className='h-4 border-border border-dashed border-b-2 mb-8'></div>
                    <div className='flex md:hidden flex-row gap-4 justify-center items-center'>
                        <ScrollLink href={'#deals'}>Check Deals 🡣</ScrollLink>
                        <Link href={'/resources/overview'} target='_blank'>
                            <div className={buttonVariants({
                                variant:'outline',
                                size: "default",
                            })}
                            >
                            Take a Tour 🡥
                            <span className="sr-only">Take a tour</span>
                            </div>
                        </Link>
                    </div>
                    <div className='relative hidden md:flex flex-row justify-evenly items-baseline gap-4'>
                        <ColorButton text='Check Deals 🡣' url='#deals'></ColorButton>
                        <RoundButton url='/resources/overview' text='Take a Tour 🡥'></RoundButton>
                    </div>
                </div>
                <div className='hidden md:flex'><CtaHeadline/></div>
            </div>
            <BubbleBg/>
            <div className='statue1'><Image src={Statue1.src} objectFit={'100vw'} width={3400} height={400} alt=''/></div>
            <div className='statue2'><Image src={Statue1.src} objectFit={'100vw'} width={3400} height={400}alt=''/></div>
            <div className="hill"></div>
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