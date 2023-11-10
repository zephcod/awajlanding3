import React from 'react'
import type { Metadata } from 'next'
import UnderConstruction from '@/components/under_construction'

export const metadata: Metadata = {
  title: 'Awaj Contents',
  description: 'Assorted digital resources from Awaj AI, the agency, and related platforms',
}


const Content_Hub = () => {
  return (
    <UnderConstruction title={'Content Hub'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default Content_Hub