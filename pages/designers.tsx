import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Designers.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import DesignerCard from "../components/DesignersPage/DesignerCard/DesignerCard";

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
        <div className={styles.designers__main}>
          <div className={styles.designers__grid}>
            <DesignerCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DesignersPage;
