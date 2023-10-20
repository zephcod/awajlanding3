import React from 'react'
import styles from '@/app/resources/downloads/page.module.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Hands from '@/public/download-5893.png'
import Link from 'next/link';
import { buttonVariants } from '@/components/UI/button';
import { Icons } from '@/components/UI/icons';
import Faqs from '@/components/faq/faqs';


export const metadata: Metadata = {
  title: 'Awaj AI Downloads',
  description: 'Awaj AI Advertising Agency Downloads',
}



const Downloads = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col w-full mx-auto text-center gap-2 px-6'>
      <h1 className="py-6 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
        Download Awaj AI
      </h1>
      <div className={styles.headline1_canvas}>
        <div className={'flex flex-col md:flex-row justify-evenly max-w-4xl items-center'}>
          <Image src={Hands} alt='awaj case studies' width={600}/>
          <div className='text-base text-muted-foreground text-start'>
            <p className='text-xl md:text-2xl md:font-bold font-semibold'>
            Awaj - Everywhere!
            </p><br/> 
            <p>Whether you&apos;re in the office or you&apos;re out and about - 
                Awaj is ready whenever, and wherever, you are!</p>
            <br />
            <p>Install Awaj AI across all of your compatible systems
            to gain full access to our tools, get notifications, and move your marketing and sales forward.</p>
            <div className='mt-8 flex flex-col items-center text-center text-muted-foreground'>
              <div className="border-border border-t-2 border-dashed h-8 w-full"></div>
              <p>
              Don&apos;t have an account? 
              </p>
                <div className='mt-4'>
                  <Link href="/resources/how_it_works">
                      <div
                      className={buttonVariants({
                          variant:'outline',
                          size: "default",
                      })}
                      >
                      Register Here 🡥
                      <span className="sr-only">See how it works</span>
                      </div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-8 p-4 md:p-8 items-center text-center rounded-lg bg-accent w-full md:w-1/2 mx-auto '>
          <h2 className='text-lg text-center font-bold leading-[1.15] lg:text-2xl py-6'>
              Choose platform
          </h2>
          <div className='flex flex-row p-2 w-full justify-between items-center'>
            <p>OS</p>
            <p>Version</p>
            <p>Link</p>
          </div>
          <div className='flex flex-row gap-4 py-8 w-full justify-between items-center h-14 border-border border-b border-t'>
            <div className='bg-card rounded-full shadow-lg'> <Icons.check className='bg-muted m-2 rounded-full p-1 shadow-md'/> </div>
            <p>v1.08</p>
            <Link href="#">
                  <div
                    className={buttonVariants({
                      variant:'outline',
                      size: "default",
                    })}
                    >
                    Download
                    <span className="sr-only">Download</span>
                  </div>
            </Link>
          </div>
          <div className='flex flex-row gap-4 py-8 w-full justify-between items-center h-14 border-border border-b'>
            <div className='bg-card rounded-full shadow-lg'> <Icons.check className='bg-muted m-2 rounded-full p-1 shadow-md'/> </div>
            <p>v1.08</p>
            <Link href="#">
                  <div
                    className={buttonVariants({
                      variant:'outline',
                      size: "default",
                    })}
                    >
                    Download
                    <span className="sr-only">Download</span>
                  </div>
            </Link>
          </div>
          <div className='flex flex-row gap-4 py-8 w-full justify-between items-center h-14 border-border border-b'>
            <div className='bg-card rounded-full shadow-lg'> <Icons.check className='bg-muted m-2 rounded-full p-1 shadow-md'/> </div>
            <p>v1.08</p>
            <Link href="#">
                  <div
                    className={buttonVariants({
                      variant:'outline',
                      size: "default",
                    })}
                    >
                    Download
                    <span className="sr-only">Download</span>
                  </div>
            </Link>
          </div>
          <div className='flex flex-row gap-4 py-8 w-full justify-between items-center h-14'>
            <div className='bg-card rounded-full shadow-lg'> <Icons.check className='bg-muted m-2 rounded-full p-1 shadow-md'/> </div>
            <p>v1.08</p>
            <Link href="#">
                  <div
                    className={buttonVariants({
                      variant:'outline',
                      size: "default",
                    })}
                  >
                    Download
                    <span className="sr-only">Download</span>
                  </div>
            </Link>
          </div>
      </div>
      <div className='my-8'>
        <h2 className='text-lg text-center font-bold leading-[1.15] lg:text-2xl pt-6 pb-2'> Already have Awaj on your device?</h2>
        <p className='py-4 text-sm font-light lg:text-base max-w-2xl'>Learn how you can boost your 
        marketing with simple instructions or get a demo to see how the application works in action.</p>
      </div>
    </div>
      <Faqs/>
   </>
  )
}

export default Downloads