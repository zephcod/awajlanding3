import React, { FunctionComponent } from 'react'
import styles from '@/components/button/button.module.css'
import Link from 'next/link'
import { Badge } from '../UI/badge';

interface ButtonProps {
  url: string;
  text: string;
}

const ColorButton: FunctionComponent<ButtonProps> = ({url,text}) => {
  return (
    <div>
    <Link href={url}>
      <div className='relative flex flex-col justify-center'>
        <div className='hidden md:block absolute w-5 h-5 bg-primary rounded-full right-3 top-2 z-20 animate-ping'>
        </div>
          <div className='hidden md:block absolute right-3 top-2 w-5 h-5 rounded-full bg-primary z-30'><p className='z-40 text-gray-800 text-xs p-[2px]'> +1</p> </div>
        <button className={styles.color_btn}>
          <span><p className='pb-1'>{text}</p></span>
        </button>
      </div>
    </Link>
    </div>
  )
}

export default ColorButton