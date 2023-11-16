import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import InfluencerBg from "@/public/character/1846.png";
import UnderConstruction from "@/components/under_construction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Awaj Influencers | Awaj AI',
  description: 'Awaj AI software, the agency, and related platforms use cases and partnerships for influencers and creators',
}


const Influencers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={InfluencerBg}
          fill={true}
          alt="awaj ai digital marketing influencers"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <p className="text-lg text-primary-foreground font-bold leading-[1.15] ">Creator?</p>
          <p className="text-lg text-primary-foreground font-bold leading-[1.15] ">Influencer?</p>
          <h2 className="text-md text-primary-foreground pt-2 font-semibold">
            Handcrafting digital experiences
          </h2>
        </div>
      </div>
      <UnderConstruction title={"Awaj Influencers"} date={""}/>
    </div>
  );
};

export default Influencers;
