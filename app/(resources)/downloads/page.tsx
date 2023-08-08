import React from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Image from 'next/image'
import { CiWarning } from "react-icons/ci";
import Glass_Flash from '@/components/UI/flash_glass';

export const metadata: Metadata = {
  title: 'Awaj Downloads',
  description: 'Awaj Advertising Agency Downloads',
}


const style = { color: "#808080", fontSize: "5em" }



const Downloads = () => {
  return (
    <div className={styles.container}>
      <Glass_Flash/>
    </div>
  )
}

export default Downloads