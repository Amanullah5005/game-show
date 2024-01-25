// G2.js
// import AlertPopup from "@/components/Alert";
// import AppContext from "@/components/AppContext";
import styles from "@/styles/Games.module.css";
import React, { useState, useContext } from "react";
// import Head from "next/head";
import Link from "next/link";
// import AddressLine from "@/components/AddressLine";

const SomePage = () => {
  return (
    <div>
      <div className={`${styles.GameCardsDiv} row`}>
        {/* Game cards start */}
        <div className={`${styles.GameCardsDivSingular} `}>
          <div className={styles.cardContainer}>
            <div className={styles.cardImage}>
              {/* Image goes here, you can replace it with your image path */}
              <img
                src={
                  "/Graphics/IMGs/rock.png"
                }
                alt="No Alt"
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Rock Paper Scissors</h2>
              <p className={styles.cardTags}>
              "Strategy", "Classic", "Quick Play"
              </p>
              <div className={styles.cardPrice}>
                <span>"Play Rock paper scissors game and earn points by beating the system"</span>
              </div>

              <div className={` row container`}>
                {/* <div className={`${styles.ImgSliderSectionBuyBTN}  row container`}> */}
                <button className={`Btn2`}>
                  {/* <Link href="/" className={styles.logo}> */}
                  <Link href="/Games/Game1" className={styles.logo}>
                    Play Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.GameCardsDivSingular} `}>
          <div className={styles.cardContainer}>
            <div className={styles.cardImage}>
              {/* Image goes here, you can replace it with your image path */}
              <img
                src={
                  "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeieeuk7i4mtghkacsssvo4cnwthmg72tjjcevj2bgfbtyqg5mafuwm/rock.png"
                }
                alt="No Alt"
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Rock Paper Scissors</h2>
              <p className={styles.cardTags}>
              "Strategy", "Classic", "Quick Play"
              </p>
              <div className={styles.cardPrice}>
                <span>"Play Rock paper scissors game and earn points by beating the system"</span>
              </div>

              <div className={` row container`}>
                {/* <div className={`${styles.ImgSliderSectionBuyBTN}  row container`}> */}
                <button className={`Btn2`}>
                  {/* <Link href="/" className={styles.logo}> */}
                  <Link href="/Games/Game2" className={styles.logo}>
                    Play Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Game cards start */}
      </div>
    </div>
  );
};

export default SomePage;
