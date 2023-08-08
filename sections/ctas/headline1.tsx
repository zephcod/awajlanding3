import React from 'react'
import Image from "next/image";
import Character_contact from "@/public/character/contact.webp";
import styles from '@/sections/ctas/headline1.module.css'
import LogoSlider from './logoslider';

const Headline1 = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.headline1_canvas}>
          <div className={styles.imgContainer}>
            <Image
              src={Character_contact}
              alt=""
              width={300}
              height={500}
              className={styles.image}
              />
          </div>
          <div className={styles.headline_col}>
            <h1 className={styles.title}>Getting Started</h1>
            <div className="ktq4">
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
          </div>
      </div>
      <LogoSlider/>
        <div className={styles.headline2_canvas}>
          <div className={styles.headline_col}>
            <h1 className={styles.title}>Why choose Us?</h1>
            <div className="ktq4">
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={Character_contact}
              alt=""
              width={300}
              height={500}
              className={styles.image}
              />
          </div>
        </div>
    </div>
  )
}

export default Headline1