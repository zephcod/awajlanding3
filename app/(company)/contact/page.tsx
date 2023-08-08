import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
import Character_contact from "@/public/character/contact.webp";
import Faqs from "@/sections/faqs";

export const metadata = {
  title: "Awaj Ad Contact Page",
  description: "Awaj Ad Contact Page",
};

const Contact = () => {
  return (
    <div className='w-full'>
      <div className={styles.maincontainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src={Character_contact}
              alt=""
              fill={true}
              className={styles.image}
              />
          </div>
          <form className={styles.form}>
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
      </div>
      <Faqs/>
    </div>
  );
};

export default Contact;
