import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <div className={` row container`}>
                {/* <div className={`${styles.ImgSliderSectionBuyBTN}  row container`}> */}
                <button className={`Btn2`}>
                  {/* <Link href="/" className={styles.logo}> */}
                  <Link href="/Games" className={styles.logo}>
                    Go to Games page
                  </Link>
                </button>
              </div>
      </main>
    </>
  );
}
