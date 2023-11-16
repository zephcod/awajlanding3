import { Icons } from '@/components/UI/icons'
import React from 'react'
import Image from "next/image"
import Content from "@/public/casestudy/cases-icon.png"
import Link from 'next/link'
import Testimonial from './testimoninal'

const CasesSection = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-10'></div>
        <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-full m-auto'>
            <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Get Results with Awaj
            <span className='text-primary'>{' '}AI</span>.</h3>
            <Icons.chart className='h-8 w-8 '/>
        </div>
        <div className='text-muted-foreground items-center text-center flex flex-col md:flex-row mx-auto max-w-4xl'>
            <div className=''>
                <p className='p-4 md:p-0 max-w-xl'>Our clients have been outspoken about how we have helped them achieve their goals. 
                Here are some of the testimonials we have collected:</p>
                <br />
                <Testimonial/>
            </div>
            <div className='p-2 max-w-xs'>
            <Image src={Content} width={400} height={300} alt='Awaj AI Case Studies Icon'/>
                <Link href={'/resources/awaj_case_studies'} className='text-primary font-semibold hover:underline'>
                    Check Case Studies 🡥
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CasesSection