'use client'
import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsMegaphoneFill } from "react-icons/bs";
import Image from "next/image";
import Content from "@/public/character/img-tab-1.png";
import Social from "@/public/character/img-tab-2.png";
import Digital from "@/public/character/img-tab-3.png";
import Marketing from "@/public/character/img-tab-4.png";
import styles from '@/sections/service_carousel/service_caraouse.module.css'
import Outline from "@/components/button/outline";



const ServiceCarousel = () => {
  const [showService, setShowService] = useState(1);

  return (
    <div className={styles.containerMain}>
      <div className={styles.btncanvas}>
          <div className={styles.btn}>
            <button className={styles.round} type="button" onClick={() => setShowService(1)}>
              <span><AiFillFire/></span>
            </button>
            <div className={styles.tag}>
            Content <br/> Marketing
            </div> 
          </div>
          <div className={styles.btn}>
            <button className={styles.round} type="button" onClick={() => setShowService(2)}>
                <span><AiTwotoneLike/></span>
            </button>
            <div className={styles.tag}>
            Social <br/> Media
            </div> 
          </div>
          <div className={styles.btn}>
            <button className={styles.round} type="button" onClick={() => setShowService(3)}>
              <span><BsMegaphoneFill/></span>
            </button>
            <div className={styles.tag}>
            Digital <br/> Advertising
            </div> 
          </div>
          <div className={styles.btn}>
            <button className={styles.round} type="button" onClick={() => setShowService(4)}>
            <span><AiOutlineLineChart/></span>
            </button>
            <div className={styles.tag}>
            Marketing <br/> Solutions
            </div> 
          </div>
        </div>
      <div className={styles.canvas}>
        {showService===1 ? (
          <div className={styles.modal}>
          <div className={styles.feature}>
          <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
            First! Your USD 50,00 Gift Voucher is about to expire! Shop now the
            latest Summer-Trends.
          </h2>
            <Outline text="Check" url="/"/>
          </div>
            <div className={styles.imgContainer}>
            <Image src={Content} width={400} height={400}  alt='Content Marketing Awaj Ad'/>
            </div>
          </div>
        ) : 
        showService===2 ? (
          <div className={styles.modal}>
            <div className={styles.feature}>
            <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
              Second! Your USD 50,00 Gift Voucher is about to expire! Shop now the
              latest Summer-Trends.
            </h2>
              <Outline text="Check" url="/"/>
            </div>
            <div className={styles.imgContainer}>
              <Image src={Social} width={400} height={400}  alt='Social Media Awaj Ad'/>
            </div>
          </div>
        ) : 
        showService===3 ? (
          <div className={styles.modal}>
            <div className={styles.feature}>
            <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
              Third! Your USD 50,00 Gift Voucher is about to expire! Shop now the
              latest Summer-Trends.
            </h2>
              <Outline text="Check" url="/"/>
            </div>
            <div className={styles.imgContainer}>
              <Image src={Digital} width={400} height={400}  alt='Social Media Awaj Ad'/>
            </div>
          </div>
        ) : 
        /* show service 4 */
          <div className={styles.modal}>
            <div className={styles.feature}>
            <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
              Fourth! Your USD 50,00 Gift Voucher is about to expire! Shop now the
              latest Summer-Trends.
            </h2>
              <Outline text="Check" url="/"/>
            </div>
            <div className={styles.imgContainer}>
              <Image src={Marketing} width={400} height={400}  alt='Awaj Ad Marketing Solutions'/>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ServiceCarousel;
