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
        <div className='absolute w-4 h-4 bg-primary rounded-full right-3 top-2 z-20 animate-ping'>
        </div>
          <div className='absolute right-3 top-2 w-4 h-4 rounded-full bg-primary z-30'></div>
        <button className={styles.color_btn}>
          <span><p className='pb-1'>{text}</p></span>
        </button>
      </div>
    </Link>
    </div>
  )
}

export default ColorButton