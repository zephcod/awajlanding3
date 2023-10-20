import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '@/app/resources/awaj_cases/page.module.css'
import { Icons } from '@/components/UI/icons'
import Link from 'next/link'
import { buttonVariants } from '@/components/UI/button'
import Content from "@/public/63.png";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/UI/tooltip'
import GlassFlash from '@/components/UI/flash_glass'
import Hawi from '@/public/character/megafono.png'
import ExpandingArrow from '@/components/expanding_arrow'
import { QuickCampaign } from '@/components/pricing/quick_campaign'
import Faqs from '@/components/faq/faqs'


export const metadata: Metadata = {
  title: 'Awaj AI case studies',
  description: 'Marketing, advertising and sales project done by awaj ai digital agency',
}

const industries = [
  {
    url: Hawi,
    industry:'Apps',
    desc:'We help apps to increase their exposure and bring them to more devices with a custom ASO (App Store Optimization). By leveraging impressions, we ensure traffic and download to your apps.',
  },
  {
    url: Hawi,
    industry:'B2B',
    desc:'Business to Business relationships are the backbones for a developing economy like Ethiopia. Nurturing marketing and sales conversations between businesses is at the top of our priorities as a company.',
  },
  {
    url: Hawi,
    industry:'Beauty & Skin Care',
    desc:'To make sure beauty and skincare brand find the success and praise it deserves, we employ influencers along with paid ad contents to help brands raise in the crowded internet marketplace.',
  },
  {
    url: Hawi,
    industry:'Clothing & Jewelry',
    desc:'It’s not easy for clothing and jewelry brands to rise to the top and stand out among a sea of competitors, but we have proven content and paid ad strategies that convert attractive ROAS.',
  },
  {
    url: Hawi,
    industry:'Delivery Services',
    desc:'Delivery services are rising in popularity in developing economies like Ethiopia, and the right SEO strategy will help increase brand awareness while ensuring market authority.',
  },
  {
    url: Hawi,
    industry:'Finance',
    desc:'We help financial companies boost brand awareness and increase market share in this highly competitive industry by leveraging online engagement strategies.',
  },
  {
    url: Hawi,
    industry:'Food & Beverage',
    desc:'With so many competing businesses in the food and beverage space. We leverage novel social media and content strategies to increase brand awareness and create omnipresence.',
  },
  {
    url: Hawi,
    industry:'Health & Wellness',
    desc:'Health and wellness space is among the first to adopt digital marketing schemes and rightfully so; we leverage continuously proven strategies to compete and stand out.',
  },
  {
    url: Hawi,
    industry:'Lifestyle',
    desc:'It can be hard to stand out as an up-and-coming lifestyle brand, but we have the experience and passion to make it happen by leveraging social media, content, and influencers.',
  },
  {
    url: Hawi,
    industry:'Medical & Pharma',
    desc:'Medical and Pharma Industries are emerging in developing economies like Ethiopia. Brands that stand out now will instill a brand awareness and market authority for decades to come.',
  },
  {
    url: Hawi,
    industry:'Real Estate',
    desc:'The real estate industry is competitive and ever-changing; we employ solid SEO strategy to make an impact and follow up with social media to nurture and instill awareness.',
  },
  {
    url: Hawi,
    industry:'Technology',
    desc:'Technology companies are the closest to the digital world, yet they are amongst the least to utilize digital marketing and sales. Our strategies help grab audience and increase product awareness.',
  },
];

interface ToolTipProps {
  title:string; tip:string; 
}
function ToolTip (props:ToolTipProps){
  return(
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger >
        <div className="block cursor-pointer">{props.title}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{props.tip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}


const Cases = () => {
  return (
    <div className='w-full'>
    <div className={styles.container}>
      <h1 className="py-6 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
        Awaj Ethiopia Case Studies 
      </h1>
      <div className={styles.headline1_canvas}>
        <div className={'flex flex-col md:flex-row justify-evenly max-w-4xl items-center'}>
          <Image src={Content} alt='awaj case studies' width={600}/>
          <div className='text-base text-muted-foreground text-start'>
            <p className='text-xl md:text-2xl md:font-bold font-semibold'>
            Learn from the smarts!
            </p><br/> 
            <p>To make a mark in your target market, you need to stand out and get ahead of the competition. 
              We&apos;re here to help!</p>
            <br />
            <p>We help brands grow through effective Digital marketing & sales strategies across several industries. 
              Below are some of the top industries we specialize in:</p>
            <div className='mt-8 flex flex-col items-center text-center text-muted-foreground'>
              <div className="border-border border-t-2 border-dashed h-8 w-full"></div>
              <p>
              More interested in a visual portfolio? 
              </p>
                <div className='mt-4'>
                  <Link href="/resources/how_it_works">
                      <div
                      className={buttonVariants({
                          variant:'outline',
                          size: "default",
                      })}
                      >
                      Check Gallery 🡥
                      <span className="sr-only">See how it works</span>
                      </div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-24'></div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
        {industries.map((ind, indIndex) => (
          <Link href={'#'} key={indIndex} className='relative group hover:cursor-pointer transition-all'>
            <GlassFlash>
              <div className='flex flex-col gap-4 items-center text-muted-foreground'>
                <Image src={ind.url} alt={ind.industry} className='mt-6' height={150}/>
                <div className='bg-card flex ring-border ring-inset ring-1 rounded-xl flex-col items-center p-4 gap-4'>
                  <p className='font-bold text-xl md:text-2xl'>{ind.industry}</p>
                  <p className='text-justify px-3'>{ind.desc}</p>
                  <div className='flex flex-rox items-center justify-start'>
                    <p>See Projects{' '}</p> 
                    <ExpandingArrow/>
                  </div>
                </div>
              </div>
            </GlassFlash>
          </Link>
        ))}
      </div>
    </div>
    <QuickCampaign/>
    <Faqs/>
  </div>
  )
}

export default Cases