import React from 'react'
import type { Metadata } from 'next'
import UnderConstruction from '@/components/under_construction';

export const metadata: Metadata = {
  title: 'Awaj AI Tools',
  description: 'Awaj AI tools and solutions for digital marketing and sales.',
}


const AI_Tools = () => {
  return (
    <UnderConstruction title={'Awaj Tools'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default AI_Tools