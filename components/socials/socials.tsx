import React from "react";
import { ReactNode } from 'react';
import styles from "@/components/socials/comp.module.css";
import Image from "next/image";
import Link from "next/link";

const social_item = [
    {
      id:"1",
      alt:"Awaj Ad Facebook Account",
      url:"/about",
      img:"/social/svg/Facebook_icon.svg"
    },
    {
      id:"2",
      alt:"Awaj Ad Instagram Account",
      url:"/about",
      img:"/social/svg/Instagramicon.svg"
    },
    {
      id:"3",
      alt:"Awaj Ad Twitter Account",
      url:"/about",
      img:"/social/svg/Twitter_icon.svg"
    },
    {
      id:"4",
      alt:"Awaj Ad You Tube Account",
      url:"/about",
      img:"/social/svg/Youtube_icon.svg"
    },
    {
      id:"5",
      alt:"Awaj Ad Snapchat Account",
      url:"/about",
      img:"/social/svg/Snapcat_icon.svg"
    },
    {
      id:"6",
      alt:"Awaj Ad Tictok Account",
      url:"/about",
      img:"/social/svg/Tictok_icon.svg"
    },
    {
      id:"7",
      alt:"Awaj Ad Linked In Account",
      url:"/about",
      img:"/social/svg/Linkedin_icon.svg"
    },
    {
      id:"8",
      alt:"Awaj Ad Telegram Account",
      url:"/about",
      img:"/social/svg/Telegram_icon.svg"
    },
    {
      id:"9",
      alt:"Awaj Ad Whatsapp Account",
      url:"/about",
      img:"/social/svg/Whatsapp_icon.svg"
    },
  ];

function SocialList({}: { children: ReactNode }) {
    return (
      <div className="flex flex-row mx-auto w-full items-center px-0 md:px-12">
      {social_item.map(card=>(
        <div className={styles.social} key={card.id} >
        <Link href={card.url}>
          <Image src={card.img} width={25} height={25} className={styles.icon} alt={card.alt}/>
        </Link>
        </div>
      ))}
      </div>
    );
  }

const Socials = () => {
  return (
    <div className={styles.container}>
      <SocialList>
      </SocialList>
    </div>
  );
};

export default Socials;
