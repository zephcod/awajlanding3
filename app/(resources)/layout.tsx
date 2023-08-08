import React, { ReactNode } from 'react'
import styles from './layout.module.css'

const Layout = ({ children }: { children: ReactNode }) =>{
  return (
    <div className={styles.container}>
      <div className={styles.side_bar}>
        <div className={styles.side_content}>
          <h1 className={styles.mainTitle}>Resources</h1>
        </div>
      </div>
      <div className={styles.main_bar}>
        {children}
      </div>
    </div>
  )
}

export default Layout