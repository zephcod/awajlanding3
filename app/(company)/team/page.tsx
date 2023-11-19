import type { Metadata } from 'next'
import styles from "./page.module.css"
import { Separator } from "@/components/UI/separator"
import Image from "next/image"
import Banner from "@/public/character/awaj_team_banner.png"
import Content from "@/public/character/contatti.png"
import ETH from "@/public/logo/et.svg"
import UAE from "@/public/logo/ae.svg"
import Mission1 from "@/public/casestudy/hand_bulb.png"
import Mission2 from "@/public/casestudy/technology.png"
import Faqs from "@/components/faq/faqs"
import Stats from "@/sections/stats"
import ContactUs from "@/sections/ctas/contact"
import GlassFlash from '@/components/UI/flash_glass'
import Aman from '@/public/profile/aman.jpg'
import Ibsa from '@/public/profile/ibsa.png'
import Sof from '@/public/profile/sofi.jpg'
import Leul from '@/public/profile/avatar2.png'
import Nat from '@/public/profile/nati.png'
import Eden from '@/public/profile/eden.png'
import Nahom from '@/public/profile/nahom.png'
import Maya from '@/public/profile/maya.png'
import Samri from '@/public/profile/samri.png'
import Kal from '@/public/profile/kal.png'
import Ela from '@/public/profile/eal.png'
import Abel from '@/public/profile/abel.png'

export const metadata: Metadata = {
  title: 'Awaj AI Teams and Career Opportunities',
  description: 'Career opportunities and the team behind Awaj AI, the agency, and related platforms',
}

const industries = [
  {
    photo: Aman,
    title: 'CEO',
    name:'Amanuel Melesse',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Ibsa,
    title: 'COO',
    name:'Ibsaa Bekele',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Eden,
    title: 'CMO',
    name:'Eden Mulugeta',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Sof,
    title: 'CTO',
    name:'Sofonias Melesse',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Nat,
    title: 'Fullstack Dev',
    name:'Natnael Asefaw',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Leul,
    title: 'Data Scientist',
    name:'Luel Ashenafi',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Nahom,
    title: 'Creative Director',
    name:'Nahom Yohannes',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Maya,
    title: 'Social Media Guru',
    name:'Maya Mengstu',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Samri,
    title: 'Graphic Designer',
    name:'Samrawit Ashenafi',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Kal,
    title: 'Sales Manager',
    name:'Kalkidan Berihun',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Ela,
    title: 'Video Editor',
    name:'Elias Dawit',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
  {
    photo: Abel ,
    title: 'Photographer/Designer',
    name:'Abel Birhanu',
    desc:'An industry maven with a passion for disrupting the digital landscape.',
  },
];


const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={Banner}
          fill={true}
          alt="About Awaj AI - Creative Banner"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className="text-lg text-primary-foreground font-bold leading-[1.15] ">Digital Storytellers</h1>
          <h2 className="text-md text-primary-foreground pt-2 font-semibold">
            Handcrafting digital experiences
          </h2>
        </div>
      </div>
      <div className="max-w-3xl text-muted-foreground my-10 px-2 m-auto">
        <div className='flex flex-row flex-wrap gap-2 w-full'>
          <h2 className="font-semibold text-3xl text-muted-foreground">Behind Awaj AI</h2>
          <Image src={ETH} width={50}  alt='Awaj AI Ethiopia' className='rounded-3xl'/>
          <Image src={UAE} width={50}  alt='Awaj AI UAE' className='rounded-3xl'/>
        </div>
        <p className="mt-4 mb-2">
          Awaj AI is originally created in Ethiopia and UAE with a team of 4 young professionals. 
          Their multi-disciplinary expertise in marketing, sales, computer science, engineering, 
          and economics is the key to the excellence in the solutions we provide. 
          The algorithm that fuels Awaj AI took a great deal of commitment to reach where we are now, 
          and we are further evolving and iterating to deliver the best CRM tool for SMEs in developing countries.
        </p>
          <Image src={Content} width={700} height={500} alt='Awaj AI Case Studies Icon'/>
          <br />
        <h2 className="font-semibold text-3xl text-muted-foreground">Meet the Masters Behind Our Magic.</h2>
        <p className="mt-4 mb-10">
        In the dynamic world of digital marketing, success is a result of innovation, strategy, and the relentless pursuit of excellence. 
        Get to know the wizards who make the magic happen at Awaj AI:
        </p>
      </div>
      <div className='max-w-6xl m-auto grid gap-4 grid-cols-1 md:grid-cols-4'>
        {industries.map((ind, indIndex) => (
          <div key={indIndex}>
            <GlassFlash>
              <div className='flex flex-col gap-4 items-center text-muted-foreground'>
                <Image src={ind.photo} alt={ind.name} className='mt-5 rounded-md' height={200}/>
                <div className='bg-card flex ring-border ring-inset ring-1 rounded-xl flex-col items-center p-4'>
                  <h3 className='font-bold text-lg md:text-xl'>{ind.name}</h3>
                  <h3 className='font-light text-base md:text-lg'>{ind.title}</h3>
                  <Separator/>
                  <p className='text-start pt-2 px-3'>{ind.desc}</p>
                </div>
              </div>
            </GlassFlash>
          </div>
        ))}
      </div>
      <div className='max-w-5xl mt-12 mx-auto'>
        <Separator/>
        <h2 className="font-semibold text-center mt-12 text-3xl text-muted-foreground">Work with us.</h2>
      </div>
      <div className='flex flex-col md:flex-row max-w-5xl px-2 m-auto gap-16'>
        <div className='flex-1 flex flex-col gap-4 items-center'>
          <Image src={Mission2} width={200} height={200} alt='Awaj AI Case Studies Icon'/>
          <div>
            <h2 className="font-semibold text-3xl text-muted-foreground">Technical Excellence.</h2>
            <p className='text-muted-foreground py-3'>
            If you are interested in working with an agile team to develop, customize, integrate, test, and maintain web, 
            mobile and desktop-based CRM applications built on various technology frameworks we are the right fit for you. 
            Join our growing team to be a part of a brighter future!
            </p>
          </div>
        <Separator/>
        </div>
        <div className='flex-1 flex flex-col gap-4 items-center'>
          <Image src={Mission1} width={200} height={200} alt='Awaj AI Case Studies Icon'/>
          <div>
            <h2 className="font-semibold text-3xl text-muted-foreground">Greatest Improvisers.</h2>
            <p className='text-muted-foreground py-3'>
            We are looking for self-directed learners who take full responsibility for growth and skill development. 
            We compensate our team very attractively. In exchange we will hold you accountable to meeting deadlines 
            and take ownership of problems and shepherd the process until resolved.
            </p>
          </div>
        <Separator/>
        </div>
      </div>
      <div className="h-12"></div>
      <Stats/>
      <ContactUs/>
      <div className="h-16"></div>
      <Faqs/>
    </div>
  )
}

export default Team