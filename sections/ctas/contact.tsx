import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Content from "@/public/casestudy/hand_heart.png"
import { Icons } from '@/components/UI/icons'

const ContactUs = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-10'></div>
        <div className='text-muted-foreground items-center text-center flex flex-col-reverse md:flex-row mx-auto max-w-4xl py-4'>
            <div className=''>
                    <Link href={'/contact'} className='cursor-pointer'>
                        <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-fit p-4 m-auto'>
                            <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Get in touch</h3>
                            <Icons.smile className='h-8 w-8 '/>
                        </div>
                    </Link>
                <p className='px-4'>
                Do you have a question, suggestion, partnerships ideas or just want to say hello? We love hearing from you. 
                Reach out to us through this link, and we'll get back to you promptly.
                </p>
                <Link href={'/contact'} className=' font-semibold hover:underline'>
                    Contact Us 🡥
                </Link>
            </div>
            <div className=''>
                <Image src={Content} width={300} height={300} alt='Awaj AI Contact Us Icon'/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs