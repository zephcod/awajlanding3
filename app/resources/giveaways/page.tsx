import React from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Image from 'next/image'
import { CiWarning } from "react-icons/ci";
import UnderConstruction from '@/components/under_construction';

export const metadata: Metadata = {
  title: 'Awaj AI Giveaways',
  description: 'Giveaway contents from Awaj AI and the agency',
}


const Giveaways = () => {
  return (
    <UnderConstruction title={'Awaj Giveaways'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default Giveaways