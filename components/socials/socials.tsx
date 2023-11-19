import React from "react";
import { ReactNode } from 'react';
import styles from "@/components/socials/comp.module.css";
import Image from "next/image";
import Link from "next/link";

const social_item = [
    {
      id:"1",
      alt:"Awaj Ad Facebook Account",
      url:"https://www.facebook.com/AwajAIcom",
      img:"/social/svg/Facebook_icon.svg"
    },
    {
      id:"2",
      alt:"Awaj Ad Instagram Account",
      url:"https://www.instagram.com/awajaicom",
      img:"/social/svg/Instagramicon.svg"
    },
    {
      id:"3",
      alt:"Awaj Ad Twitter / X Account",
      url:"https://twitter.com/AwajAicom",
      img:"/social/svg/Twitter_icon.svg"
    },
    {
      id:"4",
      alt:"Awaj Ad You Tube Account",
      url:"https://www.youtube.com/@AwajAIcom",
      img:"/social/svg/Youtube_icon.svg"
    },
    {
      id:"5",
      alt:"Awaj Ad Pinterest Account",
      url:"https://www.pinterest.com/AwajAIcom",
      img:"/social/svg/Pinterest_icon.svg"
    },
    {
      id:"6",
      alt:"Awaj Ad Tictok Account",
      url:"https://www.tiktok.com/@awajai",
      img:"/social/svg/Tictok_icon.svg"
    },
    {
      id:"7",
      alt:"Awaj Ad Linked In Account",
      url:"https://www.linkedin.com/company/awajaicom",
      img:"/social/svg/Linkedin_icon.svg"
    },
    {
      id:"8",
      alt:"Awaj Ad Telegram Account",
      url:"http://t.me/awajaicom",
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
        <Link href={card.url} target='_blank'>
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
