import styles from '@/components/page.module.css'
import Image from 'next/image';
import logo from 'public/awaj_logo.png';
import Socials from './socials/socials';
import { SubscribeToNewsletterForm } from './forms/subscribe_to_newsletter_form';

const col1 = [
  {
    id:"1",
    title:"About Us",
    url:"/about",
  },
  {
    id:"2",
    title:"Careers",
    url:"/career",
  },
  {
    id:"3",
    title:"Contacts",
    url:"/contact",
  },
  {
    id:"4",
    title:"Pricing",
    url:"/pricing",
  },
  {
    id:"5",
    title:"Privacy Policy",
    url:"/privacy",
  },
  {
    id:"6",
    title:"Terms & Conditions",
    url:"/terms",
  }
];
const col2 = [
  {
    id:"1",
    title:"Reports",
    url:"/reports",
  },
  {
    id:"2",
    title:"Success Stories",
    url:"/success_stories",
  },
  {
    id:"3",
    title:"How It Works",
    url:"/how_it_works",
  },
  {
    id:"4",
    title:"Content Marketing",
    url:"/content_marketing",
  },
  {
    id:"5",
    title:"Social Media Ad",
    url:"social_media",
  },
  {
    id:"6",
    title:"AI Tools",
    url:"/ai_tools",
  }
];
const col3 = [
  {
    id:"1",
    title:"Blogs",
    url:"/blog",
  },
  {
    id:"2",
    title:"Downloads",
    url:"/downloads",
  },
  {
    id:"3",
    title:"FAQs",
    url:"/faqs",
  },
  {
    id:"4",
    title:"Getting Started",
    url:"/getting_started",
  },
  {
    id:"5",
    title:"Webinars",
    url:"/webinars",
  },
  {
    id:"6",
    title:"Help Center",
    url:"/help_center",
  }
];

function FooterList1() {
  return (
    <li>
    {col1.map(card=>(
      <a key={card.id} href={card.url}
      className="p-1 flex items-start  hover:text-orange-300 tr04">
        <div className="ml-1">
          <p className="text-sm font-light py-1 md:py-0">
            {card.title}
          </p>
        </div>
      </a>
    ))}
    </li>
  );
}

function FooterList2() {
  return (
    <li className={styles.tiercard}>
    {col2.map(card=>(
      <a key={card.id} href={card.url}
      className="p-1 flex items-start  hover:text-orange-300 tr04">
        <div className="ml-1">
          <p className="text-sm font-light py-1 md:py-0">
            {card.title}
          </p>
        </div>
      </a>
    ))}
    </li>
  );
}

function FooterList3() {
  return (
    <li className={styles.tiercard}>
    {col3.map(card=>(
      <a key={card.id} href={card.url}
      className="p-1 flex items-start  hover:text-orange-300 tr04">
        <div className="ml-1">
          <p className="text-sm font-light py-1 md:py-0">
            {card.title}
          </p>
        </div>
      </a>
    ))}
    </li>
  );
}



export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container} id='footer'>
        <div className={styles.footcta}>
          <div className='relative flex flex-col items-center justify-center'>
            <Image
              src={logo.src}
              alt="awaj ad logo"
              width={200}
              height={35}
              className="object-contain"/>
            <p className='text-sm font-light py-2 '>
              ©2023 Awaj - Ace Digital PLC. All rights reserved.
            </p>
          </div>
          <div className='flex flex-col justify-between items-center gap-2'>
            <div className='relative w-full px-0 md:px-12'>
            <SubscribeToNewsletterForm/>
            </div>
            <div className='text-sm font-light pb-2'>
            <p>
              Subscribe to our Newsletter / Socials
            </p>
            </div>
          </div>
          <Socials/>
        </div>
        <div className={styles.listcontainer}>
        <ul className="flex justify-evenly ">
          <li className="space-y-5 row-span-2">
            <h2 className="text-lg tracking-wide">Company</h2>
            <ul className="space-y-4 text-md">
              <FooterList1/>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-lg tracking-wide">Platform</h2>
            <ul className="space-y-4">
              <FooterList2/>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-lg tracking-wide">Support</h2>
            <ul className="space-y-4">
              <FooterList3/>
            </ul>
          </li>
        </ul>
       <div>
      </div>
      </div>
      </div>
    </footer>
  );
}
