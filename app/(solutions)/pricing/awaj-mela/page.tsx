import type { Metadata } from 'next'
import styles from '@/components/pricing/page.module.css'
import PopularOrders from '@/components/pricing/popular_orders'
import MelaPricing from '@/components/pricing/melapricing'
import PaymentOptions from '@/sections/payment_options'

export const metadata: Metadata = {
  title: 'Awaj Mela',
  description: 'Awaj Mela Coins Topup',
}

const AwajAiCoins = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className="py-4 text-3xl text-center text-muted-foreground font-extrabold leading-[1.15] lg:text-4xl">
          Top up Awaj Mela Coins
        </h1>
        <p className='text-base text-muted-foreground text-center max-w-3xl'>
          We offer subscription in three packages. 
          Test Awaj Essential monthly plan and see our services in action! 
          Our Business and Premium packages will also be available starting from August 2023. 
          You can pre-order now, refunds are guaranteed.
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