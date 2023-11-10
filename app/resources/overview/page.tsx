import UnderConstruction from '@/components/under_construction'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Awaj AI Overview Tour',
  description: 'Overview tour of Awaj AI software and related platforms',
}

const TourAwaj = () => {
  return (
      <UnderConstruction title={'Awaj Tour'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default TourAwaj