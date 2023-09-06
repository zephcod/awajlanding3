import React from 'react'
import Payment_Card from '@/components/cards/payment-card';
import Link from 'next/link';

const PaymentOptions = () => {
  return (
    <div className='relative flex flex-col py-8 gap-4 w-full justify-center'>
    <h2 className="text-3xl text-center font-bold leading-[1.15] lg:text-4xl">Easy payment options</h2>
    <div className='flex flex-col md:flex-row gap-8 max-w-4xl p-6 md:p-0 justify-between items-center my-0 mx-auto'>
          <Payment_Card/>
        <div className='text-base font-light text-center flex-1'>
            You can make payment in Ethiopia through Tele Birr, CBE Birr, Commercial Bank of Ethiopia, 
            Dashen Bank, Oromia Bank, Amhara Bank and Abyssinia Bank
            <br/>
            <Link href={'pricing/payment-processing'} className='text-primary'>
              See how payment is processed 🡥
            </Link>
        </div>
    </div>
    </div>
  )
}

export default PaymentOptions