import React from "react";
import { ReactNode } from 'react';
import styles from "@/components/socials/comp.module.css";
import Image from "next/image";

const social_item = [
    {
      id:"1",
      alt:"Awaj Ad Facebook Account",
      url:"/about",
      img:"/1.png"
    },
    {
      id:"2",
      alt:"Awaj Ad Instagram Account",
      url:"/about",
      img:"/2.png"
    },
    {
      id:"3",
      alt:"Awaj Ad Twitter Account",
      url:"/about",
      img:"/3.png"
    },
    {
      id:"4",
      alt:"Awaj Ad You Tube Account",
      url:"/about",
      img:"/4.png"
    },
    {
      id:"5",
      alt:"Awaj Ad Facebook Account",
      url:"/about",
      img:"/1.png"
    },
    {
      id:"6",
      alt:"Awaj Ad Facebook Account",
      url:"/about",
      img:"/2.png"
    },
  ];

function SocialList({}: { children: ReactNode }) {
    return (
      <div className="flex flex-row m-auto space-x-3 w-max">
      {social_item.map(card=>(
        <a key={card.id} href={card.url}>
        <div className={styles.social}>
          <Image src={card.img} width={15} height={15} className={styles.icon} alt={card.alt}/>
        </div>
        </a>
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
