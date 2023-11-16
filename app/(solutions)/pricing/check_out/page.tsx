import React from 'react'
import type { Metadata } from 'next'
import GlassModal from '@/components/modal/modal'
import PaymentOptions from '@/sections/payment_options'
import UnderConstruction from '@/components/under_construction'

export const metadata: Metadata = {
  title: 'Check Out',
  description: 'Awaj Ad AI Tools',
}

const CheckOut = () => {
  return (
    <div>
      <UnderConstruction title={'Check Out'} date={''}/>
      <GlassModal/>
      <PaymentOptions/>
    </div>
  )
}

export default CheckOut