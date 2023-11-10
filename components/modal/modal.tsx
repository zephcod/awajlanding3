'use client'
import React, { useState } from "react";
import styles from '@/components/modal/comp.module.css'
import Outline from "../button/outline";

const GlassModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
    <div className="flex md:flex-col justify-center items-center">
      <div className="flex gap-5 ">
        <button className={styles.button}
          type="button"
          aria-label="button"
          onClick={() => setShowModal(true)}>
          Get a Demo
        </button>
      </div>
      {showModal ? (
        <React.Fragment>
        <div className={styles.modal_backdrop} onClick={() => setShowModal(false)}></div>
          <div onAuxClick={() => setShowModal(false)}
          className={styles.modal}>
            <div className={styles.modal_cat}>
              <h1 className="text-lg mt-2 mx-4 font-semibold">
                VOD Demo
              </h1>
              <h2 className="text-base mt-2 mx-4 text-justify">
                Wath a 10-minute Video-on-demand that illustrates how you
                can utilize Awajs marketing and advertising tools effeciently.
              </h2>
              <Outline text="Play Demo" url="/contact"/>
            </div>
            <div  className={styles.modal_cat}>
              <h1 className="text-lg mt-2 mx-4 font-semibold">
                Live Demo
              </h1>
              <h2 className="text-base mt-2 mx-4 text-justify">
                Join a live and guided online tour of the advertising and 
                marketing tools and their process hosted by the team at Awaj Ad.
              </h2>
              <Outline text="Schedule Demo" url="/contact"/>
            </div>
        </div>
        </React.Fragment>
      ) : null}
    </div>
      </React.Fragment>
  );
};

export default GlassModal;
