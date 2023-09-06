import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { CiWarning } from "react-icons/ci";
import Hands from '@/public/character/download.png'
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
      <h1 className='text-3xl font-extrabold leading-[1.15] lg:text-4xl'>
          Awaj - everywhere.
      </h1>
      <p className='py-4 text-sm font-light lg:text-base max-w-2xl'>
          Whether you`&apos;`re in the office or you`&apos;`re out and about - 
          Awaj is ready whenever, and wherever, you are! Install Awaj AI across all of your compatible systems
            to create emails, get notifications, and move your marketing forward.
      </p>
      <Image
          className='rounded-2xl my-6'
          alt={'page under construction'}
          width={680}
          height={485}
          src={Hands.src}
          />
      <div className='flex flex-col p-4 md:p-8 items-center text-center rounded-lg bg-accent w-full md:w-1/2 mx-auto '>
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