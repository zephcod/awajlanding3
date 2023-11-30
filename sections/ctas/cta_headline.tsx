import React from 'react'
import { Icons } from '@/components/UI/icons'
import styles from '@/sections/ctas/cta_headline.module.css'
import '@/styles/hero_animation.css'
import Image from "next/image"
import Content from "@/public/awajai_cloud-min.webp"
import Link from 'next/link'
import { buttonVariants } from '@/components/UI/button'

const CtaHeadline = () => {
  return (
    <div className={styles.containerMain}>
          <p className='text-xl md:text-2xl text-muted-foreground py-3'>
            Join the <span className='text-primary'>AI</span>  playground!
          </p>
          {/* <Icons.arrowDown className='text-muted-foreground animate-bounce'/> */}
          <div className="max-w-5xl mx-auto text-center flex flex-col w-full items-center">
            <Image className='cloud' src={Content} width={400} height={400} alt='Awaj AI Downloads Icon'/>
            <br />
            <Link href="https://meda.awajai.com/">
                <div
                  className={buttonVariants({
                    variant:'default',
                    size: "default",
                  })}
                >
                  <div className='flex flex-row gap-1 items-center px-2 py-1'>
                    Get Started
                    <Icons.arrowUpRight className='h-4 w-4'/>
                  </div>
                  <span className="sr-only">Get started</span>
                </div>
              </Link>
            <p className='mt-2 text-base font-light text-muted-foreground'>
              Claim your 50 free coins.
            </p>
          </div>
    </div>
  )
}

export default CtaHeadline