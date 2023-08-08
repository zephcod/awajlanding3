'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from 'public/awaj_logo.png';
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import Button from "./button/button";
import styles from '@/components/page.module.css'

const links1 = [
  {
    id: 1,
    title: "Content Marketing",
    url: "/content_marketing",
    content: "Graphic, image and video generation and improvements"
  },
  {
    id: 2,
    title: "Social Media Ads",
    url: "/social_media",
    content: "Paid advertising through social media channels"
  },
  {
    id: 3,
    title: "AI Tools",
    url: "/AI_tools",
    content: "Integration of AI marketing tools"
  },
];

const links2 = [
  {
    id: 1,
    title: "Downloads",
    url: "/downloads",
    content: "Applications, assets, plug-ins and updates"
  },
  {
    id: 2,
    title: "Getting Started",
    url: "/getting_started",
    content: "Easy instructions on how to get the best out of Awaj platform"
  },
  {
    id: 3,
    title: "Blogs & Reports",
    url: "/blog",
    content: "Latest information from the Awaj team"
  },
];

const links3 = [
  {
    id: 1,
    title: "About Us",
    url: "/about",
    content: "-"
  },
  {
    id: 2,
    title: "Careers",
    url: "/career",
    content: "-"
  },
  {
    id: 3,
    title: "Contacts",
    url: "/contact",
    content: "-"
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer1, setFlyer] = React.useState(false);
  const [flyer2, setFlyer2] = React.useState(false);
  const [flyer3, setFlyer3] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-30">
      <div className="flex flex-wrap p-1 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-1">
          <Link
            href="/"
            className="hover:translate-y-0.5 tr04">
            <Image
            src={logo.src}
            alt="awaj ad logo"
            width={200}
            height={35}
            className="object-contain"
            />
          </Link>
          <button
            className="pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-wrap flex-col md:flex-row space-y-4 px-4 md:px-0 md:space-y-0 flex-grow items-start md:items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto md:pl-14 pl-1 flex flex-wrap  
          flex-col md:flex-row space-y-4 md:space-y-0 items-start md:items-center
          md:text-sm font-semibold text-1xl md:justify-center justify-items-start">
            <div className="relative">
              <button
                type="button"
                className="mr-12 group rounded-md hover:text-orange-300 tr04 inline-flex -z-10
                items-center text-sm font-semibold focus:outline-none pb-8'
                  "
                onClick={() => (setFlyer(!flyer1), setFlyerTwo(false))}
              >
                <span>Solutions</span>
                <svg
                  className={
                    flyer1 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out tr04"
                      : "ml-2 h-5 w-5 group-hover:text-orange-300"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer1
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute -z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }>
                <div className={styles.clearMenu}>
                <div className="relative grid gap-6 px-2 py-6 sm:gap-8 ">
                  {links1.map(link=>(
                    <a key={link.id} href={link.url}
                    className="-m-3 p-3 flex items-start rounded-lg hover:text-orange-300 tr04">
                      <div className="ml-4">
                        <p className="text-base font-medium">
                          {link.title}
                        </p>
                        <p className="mt-1 text-sm">
                          {link.content}
                        </p>
                      </div>
                    </a>
                  ))}
                  </div>
                  </div>
                  
                
              </div>
            </div>
            <div className="relative">
              <button
                type="button"
                className="
                group rounded-md hover:text-orange-300 tr04 inline-flex items-center text-sm font-semibold focus:outline-none pb-8'
                  "
                onClick={() => (setFlyer2(!flyer2), setFlyerTwo(false))}
              >
                <span>Resources</span>
                <svg
                  className={
                    flyer2 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out tr04"
                      : "ml-2 h-5 w-5 group-hover:text-orange-300"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer2(false)}
                className={
                  flyer2
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className={styles.clearMenu}>
                  <div className="relative grid gap-6 px-2 py-6 sm:gap-8 ">
                  {links2.map(link=>(
                    <a key={link.id} href={link.url}
                    className="-m-3 p-3 flex items-start rounded-lg hover:text-orange-300 tr04">
                      <div className="ml-4">
                        <p className="text-base font-medium">
                          {link.title}
                        </p>
                        <p className="mt-1 text-sm">
                          {link.content}
                        </p>
                      </div>
                    </a>
                  ))}
                  </div>
                </div>
              </div>
            </div>
            <a className="tr04 text-sm mr-12 md:ml-11 ml-0 cursor-pointer  hover:text-orange-300 tr04" href="/pricing">
              Pricing
            </a>
            <div className="relative">
              <button
                type="button"
                className="
                group rounded-md hover:text-orange-300 tr04 inline-flex items-center text-sm font-semibold focus:outline-none pb-8' -z-10
                  "
                onClick={() => (setFlyer3(!flyer3), setFlyerTwo(false))}
              >
                <span>Company</span>
                <svg
                  className={
                    flyer3 === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out tr04"
                      : "ml-2 h-5 w-5 group-hover:text-orange-300"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer3(false)}
                className={
                  flyer3
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className={styles.clearMenu}>
                  <div className="relative grid gap-6 px-2 py-6 sm:gap-8 ">
                  {links3.map(link=>(
                    <a key={link.id} href={link.url}
                    className="-m-3 p-3 flex items-start rounded-lg hover:text-orange-300 tr04">
                      <div className="ml-4">
                        <p className="text-base font-medium ">
                          {link.title}
                        </p>
                        <p className="mt-1 text-sm ">
                          {link.content}
                        </p>
                      </div>
                    </a>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DarkModeToggle/>
          <div className="md:ml-10">
          <Button text="Start Awaj" url="/"></Button>
          </div>
        </div>
      </div>
    </header>
  );
}
