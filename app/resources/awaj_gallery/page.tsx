import UnderConstruction from '@/components/under_construction'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'Awaj AI Gallery',
  description: 'Curated gallery of successful projects under Awaj AI software, the agency, and related platforms',
}


const AwajGallery = () => {
  return (
    <UnderConstruction title={'Awaj Gallery'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default AwajGallery