import React from 'react'
import Image from "next/image";
import Funnel from "@/public/funnel-01.png";
import ROI from "@/public/character/awaj-roi.png";
import styles from '@/sections/ctas/headline1.module.css'
import LogoSlider from './logoslider';
import Link from 'next/link';
import Embed from './video';
import Testimonial from './testimoninal';

const Headline1 = () => {
  return (
    <div className={styles.containerMain}>
      <h1 className='text-center text-4xl lg:text-5xl font-bold leading-[1.15] text-muted-foreground mb-8 mx-2'>All-in-one Digital {' '}
      <span className=' underline'>Marketing</span> {' '} & {' '} <span className='underline'>Sales</span> </h1>
        <div className={styles.headline1_canvas}>
          <Image
              src={Funnel}
              alt=""
              height={800}
              className='rounded-md '
              />
          <div className='relative flex flex-col items-center gap-8'>
            <h2 className='text-center text-xl lg:text-3xl font-light leading-[1.15] w-fit'>
               "We help you {' '}
               <span className='font-bold text-primary'>Captivate & Nurture</span> your clients
               <br /> while refining your {' '}
               <span className='font-bold text-primary'>Offer & Sales</span>{' '}strategy"
            </h2>
            <Embed/>
            <Testimonial/>
          </div>
      </div>
      <LogoSlider/>
        <div className={styles.headline2_canvas}>
          <div className={styles.headline_col}>
            <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1">
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h2 className="p-1 font-semibold text-lg">
                  Average 6.7X ROAS
                </h2>
                <p className="pb-2 text-md font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h2 className="p-1 font-semibold text-lg">
                Robust Templates
                </h2>
                <p className="pb-2 text-md font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h2 className="p-1 font-semibold text-lg">
                Flexible Packages
                </h2>
                <p className="pb-2 text-md font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                </p>
              </div>
            </div>
          </div>
          <div className='relative flex-2'>
            <Image
              src={ROI}
              alt=""
              width={600}
              height={400}
              className='rounded-md'
              />
          </div>
          <div className={styles.headline_col}>
            <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1">
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h2 className="p-1 font-semibold text-lg">
                  Marketing AI Models
                </h2>
                <p className="pb-2 text-md font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h2 className="p-1 font-semibold text-lg">
                Vast Ditigal Resources
                </h2>
                <p className="pb-2 text-md font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                </p>
              </div>
              <div className='ring-1 ring-accent bg-card opacity-70 rounded-md shadow-md p-4 items-center flex flex-col'>
                <h2 className="p-1 font-semibold text-lg">
                Result 6
                </h2>
                <p className="pb-2 text-md font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Headline1