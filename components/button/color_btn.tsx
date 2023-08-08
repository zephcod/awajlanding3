import React, { FunctionComponent } from 'react'
import styles from '@/components/button/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  children?: any;
  url: string;
  text: string;
}

const ColorButton: FunctionComponent<ButtonProps> = ({children,url,text}) => {
  return (
    <div>
    <Link href={url}>
    <button className={styles.color_btn}>
        {children}
    <span><p className='pb-1'>{text}</p></span>
    </button>
    </Link>
    </div>
  )
}

export default ColorButton