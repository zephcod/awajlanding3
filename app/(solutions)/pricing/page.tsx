import Button from '@/components/button/button';
import styles from '@/components/pricing/page.module.css'
import GlassModal from '@/components/modal/modal';
import PopularOrders from '@/components/pricing/popular_orders';
import Subscriptions from '@/components/pricing/subscription';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awaj pricing and plans',
  description: 'Awaj digital advertising monthly and annual subscription pricings and plans',
}

export default function Price(){

  return (
    <section className='w-full'>
      <div className={styles.container}>
      <>
        <h1 className="py-4 text-3xl text-center text-muted-foreground font-extrabold leading-[1.15] lg:text-4xl">
          Plans tailored to needs.
        </h1>
        <p className='text-base text-muted-foreground text-center max-w-3xl'>
          We offer subscription in three packages. 
          Test Awaj Essential monthly plan and see our services in action! 
          Our Business and Premium packages will also be available starting from January 2024. 
          You can pre-order now, refunds are guaranteed.
        </p>
        <br />
        <em className='text-base text-muted-foreground text-center max-w-3xl'>
          No hidden fees - Everything included.
        </em>
        <br/>
      </>
      <Subscriptions/>
      <div className='mt-8 text-base text-muted-foreground text-center max-w-3xl'>
        <h2 className=' font-semibold text-2xl'>
          Not ready to order yet?
        </h2>
        <br/>
        <p>
        Get a demo to see the key advertising workflows or start with Awaj free 
        and get access to our standard tools, reports and marketing databases.
        </p>
        <br/>
      </div>
      </div>
      <div className='flex flex-row justify-center items-center align-middle gap-6 mb-8'>
      <GlassModal/>
      </div>
      <div className='mt-8 text-base text-muted-foreground text-center max-w-3xl m-auto'>
        <br/>
        <h2 className=' font-semibold text-2xl'>
          Popular one time solutions
        </h2>
      </div>
      <PopularOrders/>
    </section>
  );
}