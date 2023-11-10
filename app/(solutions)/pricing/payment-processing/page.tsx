import React from 'react'
import Image from 'next/image'
import Content from "@/public/4payment.png";

const PaymentProcessing = () => {
  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <h1 className="pt-4 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
          Your payments will be processed in seconds.
        </h1>
        <div className='flex flex-col md:flex-row mb-6 max-w-4xl m-auto items-center'>
        <p className='text-base text-muted-foreground'>
          We offer subscription in three packages. 
          Test Awaj Essential monthly plan and see our services in action! 
          Our Business and Premium packages will also be available starting from August 2023. 
          You can pre-order now, refunds are guaranteed.
          <br/>
          <br/>
        <em>
          Prices DO NOT include 15% VAT.
        </em>
        </p>
        <Image src={Content} alt='' width={400}/>
        </div>
      <div className='flex flex-col m-auto'>
        <h2 className='text-center text-2xl font-semibold'>
          Do you want a custom deal?
        </h2>
        <br/>
        <p>
        Build your own customized marketing campaign...
        </p>
        <br/>
      </div>
      </div>
      <div className='flex flex-row justify-center items-center align-middle gap-6 mb-8'>
      </div>
    </section>
  )
}

export default PaymentProcessing