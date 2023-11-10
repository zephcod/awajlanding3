import React from 'react'
import styles from '@/components/input/input.module.css'
import Button from '../button/button'

const MultipleInput = () => {
  return (
    <form className={styles.form}>
    <input type="text" placeholder="email" className={styles.input} />
    <textarea
      className={styles.textArea}
      placeholder="message"
    ></textarea>
    <Button text='Submit' url='/'/>
  </form>
  )
}

export default MultipleInput