'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Hawi from "@/public/profile/avatar2.png";
import Stars from "@/public/character/five-stars-rating.png";


interface ToolTipProps {
    title:string; tip:string; 
  }
  function ToolTip (props:ToolTipProps){
    return(
    <div>

    </div>
    )
  }


function Testimonial() {
  const slides = [
    {
      url: Hawi,
      client:'Addis Alemayehu',
      title:'CEO, Kazana Group',
      testimonial:'Terewalu peace new...',
    },
    {
      url: Hawi,
      client:'Solomon Tech',
      title:'CEO, Kazana Group',
      testimonial:'Terewalu peace new...',
    },
    {
      url: Hawi,
      client:'Rahel Atnafu',
      title:'CEO, Kazana Group',
      testimonial:'Terewalu peace new...',
    },
    {
      url: Hawi,
      client:'Gechene Zuri',
      title:'CEO, Kazana Group',
      testimonial:'Terewalu peace new...',
    },
    {
      url: Hawi,
      client:'MC Sayamregn',
      title:'CEO, Kazana Group',
      testimonial:'Terewalu peace new...',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[280px] m-2 '>
      <div className='flex flex-row items-center duration-500 justify-center'>
        <div className='rounded-full p-2 bg-accent hover:bg-card opacity-50 text-muted-forground cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='flex flex-col md:flex-row bg-card shadow-md rounded-lg mx-2'>
            <div className='flex flex-col items-center p-4'>
                <Image src={slides[currentIndex].url} alt='' width={68} className='mb-2 ring-2 ring-border shadow-md rounded-full'/>
                <p>{slides[currentIndex].client}</p>
                <p className='text-muted-foreground text-sm'>{slides[currentIndex].title}</p>
            </div>
            <div className='flex flex-col items-center justify-start bg-accent gap-2 p-4'>
                <Image src={Stars} alt='' height={50} className='border-border border-b-2'/>
                <p>Additionally, ve along the campaign. </p>
                <p className='text-muted-foreground'>{slides[currentIndex].testimonial}</p>
            </div>
        </div>
        <div className='rounded-full p-2 bg-accent hover:bg-card opacity-50 text-muted-forground cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer text-muted-foreground'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;