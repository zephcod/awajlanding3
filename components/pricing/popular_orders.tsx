import React from 'react'
import Image from "next/image";
import styles from '@/components/pricing/popular_orders.module.css';
import Fb from '@/public/social/facebook.png'
import LinkedIn from '@/public/social/linkdin.png'
import Twitter from '@/public/social/twitter.png'
import Tictok from '@/public/social/tictok.png'
import Telegram from '@/public/social/telegram.png'
import SnapChat from '@/public/social/snapcat.png'
import Pintrest from '@/public/social/pinterest.png'
import Google from '@/public/social/google.png'
import YouTube from '@/public/social/youtube.png'
import Insta from '@/public/social/instagram.png'
import Link from 'next/link';
import ExpandingArrow from '../expanding_arrow';

interface ArticleCardrProps {
  id: number; title:string; price:string; img:string;
}
function ArticleCard (props:ArticleCardrProps) {
  return (
    <article className={styles.card}>
    <header className={styles.card_header}>
      <p>17 Orders this week</p>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.imgContainer}>
      <Image
          src={props.img}
          fill={true}
          alt=""
          className={styles.image}
          />
    </div>
      <div className={styles.price}>
        <div className={styles.author_name_prefix}>Starting from</div>
        {props.price}
      </div>
    <div className={styles.tags}>
      <Link href="/pricing/check_out">Order</Link>
      <Link href="/pricing/one-time-order">+ Campaign</Link>
    </div>
    </article>
  )
}


const PopularOrders = () => {
  return (
    <div className={styles.container}>
    <section className={styles.card_list}>
          <ArticleCard
            id={1}
            title='Facebook'
            price='1,500ETB'
            img={Fb.src}/>
          <ArticleCard
            id={2}
            title='Instagram'
            price='7,000ETB'
            img={Insta.src}/>
          <ArticleCard
            id={3}
            title='Linked In'
            price='1,500ETB'
            img={LinkedIn.src}/>
          <ArticleCard
            id={4}
            title='You Tube'
            price='1,500ETB'
            img={YouTube.src}/>
          <ArticleCard
            id={5}
            title='Tic Tok'
            price='1,500ETB'
            img={Tictok.src}/>
          <ArticleCard
            id={6}
            title='Google'
            price='1,500ETB'
            img={Google.src}/>
          <ArticleCard
            id={7}
            title='Snap Chat'
            price='1,500ETB'
            img={SnapChat.src}/>
          <ArticleCard
            id={8}
            title='Pintrest'
            price='1,500ETB'
            img={Pintrest.src}/>
          <ArticleCard
            id={9}
            title='Telegram'
            price='1,500ETB'
            img={Telegram.src}/>
          <ArticleCard
            id={10}
            title='Twitter'
            price='1,500ETB'
            img={Twitter.src}/>
      </section>
        <div className='absolute my-auto bottom-1'>
          <Link href={'/categories/solutions'} className="relative group mt-20 sm:mt-0 rounded-full flex items-center justify-center mx-auto text-primary-foreground dark:text-secondary text-lg font-light py-2 px-6 transition-all">
            <p>Check more solutions...</p>
          <ExpandingArrow/>
          </Link>
        </div>
      </div>
  )
}

export default PopularOrders