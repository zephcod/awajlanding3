'use client'
import Image from "next/image";
import React, { useState,useEffect } from "react";
import style from '@/sections/ctas/video.module.css';
import Content from "@/public/headline-tag.jpg";
import Youtube from "@/public/social/youtube.png";

const embedID = "3cTtzwTGRB8";

const Embed = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const onThumbnailClick = () => {
    setImageClicked(true);
  };

  useEffect(()=>{
    const playImg = document.querySelector("#play-button");

    playImg!.addEventListener("click",onThumbnailClick,{once:true});
  },[])

  return (
    <div className='relative flex justify-center items-center rounded-lg'>
    <div className={style.video}>
      {!imageClicked ? (
        <>
          <Image
            src={Content}
            height={360}
            alt="yt thumbnail"
            priority
            className="rounded-2xl"
          />
          {/* <img id="play-button" className={style.play} src="http://addplaybuttontoimage.way4info.net/Images/Icons/7.png" alt="play button" /> */}
          <Image
            id="play-button"
            src={Youtube}
            alt="youtube play"
            width={200}
            className={style.play}
            priority
        />
          
        </>
      ) : (
        <iframe
          allow="autoplay"
          allowFullScreen
          src={
            imageClicked
              ? `https://www.youtube.com/embed/${embedID}?rel=0&showinfo=0&autoplay=1`
              : ""
          }
          title="youtube video"
        />
      )}
    </div>
    </div>
  );
};
export default Embed;
