import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Homepage/Header/Header";
import Heading from "../components/Homepage/Heading/Heading";
import LoginForm from "../components/Homepage/LoginForm/LoginForm";
import RefLogo from "../components/Homepage/RefLogo/RefLogo";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/Homepage/AboutUs/AboutUs";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pixelmate</title>
        <meta name="description" content="Pixelmate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar dark={false} />
      <Header />

      <main className={styles.main}>
        <div className={styles.main__row}>
          <div >
            <Heading />
          </div>
          {screenWidth > 900 && (
            <div>
              <LoginForm />
            </div>
          )}
        </div>
        <div className={styles.main__col}>
          <div className={styles.spacer} ></div>
          <div className={styles.main__row}>
            <AboutUs />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
