import type { Metadata } from 'next'
import styles from '@/components/pricing/page.module.css'
import PopularOrders from '@/components/pricing/popular_orders'
import MelaPricing from '@/components/pricing/melapricing'
import PaymentOptions from '@/sections/payment_options'

export const metadata: Metadata = {
  title: 'Awaj Meda',
  description: 'Awaj Meda Coins Topup',
}

const AwajAiCoins = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className="py-4 text-3xl text-center text-muted-foreground font-extrabold leading-[1.15] lg:text-4xl">
          Top up Awaj Meda Coins
        </h1>
        <p className='text-base text-muted-foreground text-center max-w-3xl'>
        Awaj Meda operates on a straightforward, prepaid Pay-As-You-Go model. 
        The cost of each request is determined based on its parameters and can be accurately forecasted in advance. 
        As you send requests, your coin balance is automatically adjusted to reflect your consumption.        
        </p>
        <br/>
        <MelaPricing/>
      </div>
      <PopularOrders/>
      <PaymentOptions/>
  </section>
  )
}

export default AwajAiCoins