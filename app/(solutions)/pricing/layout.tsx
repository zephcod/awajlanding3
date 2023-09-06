import Footer from '@/components/Footer'
import Faqs from '@/components/faq/faqs'
import PaymentOptions from '@/sections/payment_options'
import React, { ReactNode } from 'react'

const PriceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full'>
        <div>
        {children}
        </div>
        <PaymentOptions/>
        <Faqs/>
    </div>
  )
}

export default PriceLayout