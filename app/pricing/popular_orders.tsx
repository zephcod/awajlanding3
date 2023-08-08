import React from 'react'
import Image from "next/image";
import styles from '@/app/pricing/popular_orders.module.css';
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
import Outline from '@/components/button/outline';
import Link from 'next/link';

interface ArticleCardrProps {
  id: number; title:string; price:string; img:string; tag1:string; tag2:string;
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
      <Link href="/pricing/check_out">{props.tag1}</Link>
      <Link href="/pricing/one-time-order">{props.tag2}</Link>
    </div>
    </article>
  )
}


const PopularOrders = () => {
  return (
    <section className={styles.card_list}>
          <ArticleCard
      id={1}
      title='Facebook'
      price='1,500ETB'
      img={Fb.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={2}
      title='Instagram'
      price='7,000ETB'
      img={Insta.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={3}
      title='Linked In'
      price='1,500ETB'
      img={LinkedIn.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={4}
      title='You Tube'
      price='1,500ETB'
      img={YouTube.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={5}
      title='Tic Tok'
      price='1,500ETB'
      img={Tictok.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={6}
      title='Google'
      price='1,500ETB'
      img={Google.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={7}
      title='Snap Chat'
      price='1,500ETB'
      img={SnapChat.src}
      tag1='Order'
      tag2='Check Package'/>
            <ArticleCard
      id={8}
      title='Pintrest'
      price='1,500ETB'
      img={Pintrest.src}
      tag1='Order'
      tag2='Check Package'/>
                  <ArticleCard
      id={9}
      title='Telegram'
      price='1,500ETB'
      img={Telegram.src}
      tag1='Order'
      tag2='Check Package'/>
                  <ArticleCard
      id={10}
      title='Twitter'
      price='1,500ETB'
      img={Twitter.src}
      tag1='Order'
      tag2='Check Package'/>

 </section>
  )
}

export default PopularOrders