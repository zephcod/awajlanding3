import React, { FunctionComponent } from 'react'
import styles from '@/components/button/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  children?: any;
  url: string;
  text: string;
}

const RoundButton: FunctionComponent<ButtonProps> = ({children,url,text}) => {
  return (
    <div>
    <Link href={url}>
    <button className={styles.round}>
        {children}
    </button>
    <p className={styles.tag}>{text}</p>
    </Link>
    </div>
  )
}

export default RoundButton