import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
import Character_contact from "@/public/character/contact.webp";
import Faqs from "@/components/faq/faqs";
import Stats from "@/sections/stats";
import MapEmbed from "@/sections/ctas/map";
import { Icons } from "@/components/UI/icons";
import HelpBg from "@/public/character/3990.png"
import Link from "next/link";
import { Separator } from "@/components/UI/separator";

export const metadata = {
  title: "Awaj Ad Contact Page",
  description: "Awaj Ad Contact Page",
};

const Contact = () => {
  return (
      <div className={styles.maincontainer}>
        <div className={styles.imgContainer}>
          <Image
            src={HelpBg}
            fill={true}
            alt="awaj ai help center"
            className={styles.img}
          />
          <div className={styles.imgText}>
            <div className="flex flex-col gap-4 items-center">
              <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center'>
                <h2 className="font-semibold text-4xl m-auto text-center text-muted-foreground">Get in touch!</h2>
                <p className="p-4 text-center text-muted-foreground max-w-2xl m-auto">
                  Do you have a question, suggestion, partnerships ideas or just want to say hello? We love hearing from you. 
                  Reach out! we&apos;ll get back to you promptly.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-2 text-muted-foreground">
                <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center w-56'>
                  <Link href={'/resources/getting_started'} className="flex flex-row gap-4 items-center">
                    <Icons.book className="h-8 w-8"/>
                    <p className="p-1 font-semibold text-lg ">
                      Awaj AI<br/>Resources 🡥
                    </p>
                  </Link>
                </div>
                <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center w-56'>
                <Link href={'/team'} className="flex flex-row gap-4 items-center">
                  <Icons.radar className="h-8 w-8"/>
                    <p className="p-1 font-semibold text-lg ">
                      Career<br/>Opportunities 🡥
                    </p>
                  </Link>
                </div>
                <div className='ring-1 ring-accent bg-card opacity-90 rounded-md shadow-md p-4 items-center w-56'>
                <Link href={'/help_center'} className="flex flex-row gap-4 items-center">
                  <Icons.addCircle className="h-8 w-8"/>
                    <p className="p-1 font-semibold text-lg ">
                      Help<br/>Center 🡥
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="flex flex-col md:flex-row gap-2 max-w-5xl m-auto text-muted-foreground mt-24">
        <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1">
          <div className="relative">
            <div className='flex flex-row gap-4 mb-2 items-center'>
              <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.office className='bg-card m-2 h-8 w-8 rounded-full p-1 shadow-md'/> </div>
              <h3 className="font-semibold text-lg  border-dashed border-b-2">
                Head Quarters
              </h3>
            </div>
            <p className="pb-2">Yeka Sub-City, Addis Abeba, Ethiopia.</p>
            <p className="pb-4">Djibuti St, Yeab Building, 802B.</p>
          </div>
          <div className="relative">
            <div className='flex flex-row gap-4 mb-2 items-center'>
              <div className='bg-primary opacity-70 rounded-full shadow-lg'> <Icons.user className='bg-card m-2 h-8 w-8 rounded-full p-1 shadow-md'/> </div>
              <h3 className="font-semibold text-lg border-dashed border-b-2">
                Contact
              </h3>
            </div>
            <div className="flex flex-row gap-4 p-1">
              <p className="w-16">Sales:</p>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.phone className="h-4 w-4"/>
                  <p>+251976873419</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.mail className="h-4 w-4"/>
                  <p>sales@awajad.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 p-1">
              <p className="w-16">Support:</p>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.phone className="h-4 w-4"/>
                  <p>+251965213662</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.mail className="h-4 w-4"/>
                  <p>support@awajad.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 p-1">
              <p className="w-16">General:</p>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.phone className="h-4 w-4"/>
                  <p>+251903569999</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Icons.mail className="h-4 w-4"/>
                  <p>info@awajad.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MapEmbed/>
        </div>
        <div className="mt-24 max-w-4xl m-auto">
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src={Character_contact}
                alt=""
                fill={true}
                className={styles.image}
                />
            </div>
            <form className={styles.form}>
              <h3 className="font-semibold text-lg text-muted-foreground ">
                Leave us a message.
              </h3>
              <input type="text" placeholder="name" className={styles.input} />
              <input type="text" placeholder="email" className={styles.input} />
              <input type="text" placeholder="phone" className={styles.input} />
              <textarea
                className={styles.textArea}
                placeholder="message"
                cols={30}
                rows={10}
                ></textarea>
              <Button url="#" text="Send"/>
            </form>
          </div>
        </div>
      <div className="h-12"></div>
      <Stats/>
      <div className="h-16"></div>
      <Faqs/>
    </div>
  );
};

export default Contact;
