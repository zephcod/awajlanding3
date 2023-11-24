import React, { FunctionComponent } from 'react'
import styles from '@/components/button/button.module.css'
import ScrollLinkGhost from '../UI/scroll_link_ghost';

interface ButtonProps {
  children?: any;
  url: string;
  text: string;
}

const ColorButton: FunctionComponent<ButtonProps> = ({children,url,text}) => {
  return (
    <div>
      <ScrollLinkGhost href={url}>
        <button className={styles.color_btn}>
          {children}
          <span><p className='pb-1'>{text}</p></span>
        </button>
      </ScrollLinkGhost>
    </div>
  )
}

export default ColorButton