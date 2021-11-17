import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const DesignersPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pixelmate - Designers</title>
        <meta name="description" content="Pixelmate - designers" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar dark={false} />


      <main className={styles.main}>

      </main>

      <Footer />
    </div>
  );
};

export default DesignersPage;
