import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test E-Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}