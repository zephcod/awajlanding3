import { Icons } from '@/components/UI/icons'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Content from "@/public/casestudy/hand_app.png"

const DownloadSection = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-10'></div>
        <div className='text-muted-foreground items-center text-center flex flex-col-reverse md:flex-row mx-auto max-w-4xl py-4'>
            <div className=''>
                <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-full p-4 m-auto'>
                    <Link href={'/resources/downloads'} className='cursor-pointer'>
                        <Icons.downlaod className='h-8 w-8 '/>
                    </Link>
                    <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Download Awaj
                    <span className='text-primary'>{' '}AI{" "}</span></h3>
                </div>
                <p className='px-4'>Install Awaj AI across all of your compatible systems. 
                Whether you&apos;re in the office or you&apos;re out and about - 
                Awaj is ready whenever, and wherever, you are!</p>
                <Link href={'/resources/downloads'} className=' font-semibold hover:underline'>
                    Check Downloads 🡥
                </Link>
            </div>
            <div className=''>
                <Image src={Content} width={300} height={300} alt='Awaj AI Downloads Icon'/>
            </div>
        </div>
    </div>
  )
}

export default DownloadSection