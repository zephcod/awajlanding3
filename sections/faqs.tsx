import React from 'react'
import styles from '@/sections/page.module.css';
import Outline from '@/components/button/outline';

const Faqs = () => {
  return (
    <div className={styles.faq_canvas}>
        <div className={styles.faq_canvas2}>
          <h2 className="text-2xl text-center font-bold">Frequently asked questions</h2><br/>
        <div className={styles.faq_tier}>
            <div className={styles.faq_mode}>
                    <h1>Question 1</h1>
                <div className={styles.faq_card}>
                    <p>
                    You can make payment in Ethiopia through Tele Birr, CBE Birr, 
                    Commercial Bank of Ethiopia, Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank
                    </p>
                </div>
            </div>
            <div className={styles.faq_mode}>
                <h1>Question 2</h1>
                <div className={styles.faq_card}>
                    <p>
                    You can make payment in Ethiopia through Tele Birr, CBE Birr, 
                    Commercial Bank of Ethiopia, Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank
                    </p>
                </div>
            </div>
            <div className={styles.faq_mode}>
                <h1>Question 3</h1>
                <div className={styles.faq_card}>
                    <p>
                    You can make payment in Ethiopia through Tele Birr, CBE Birr, 
                    Commercial Bank of Ethiopia, Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank
                    </p>
                </div>
            </div>
        </div>
        <Outline text='Check more  FAQs' url='/faqs'/>
        </div>
    </div>
  )
}

export default Faqs