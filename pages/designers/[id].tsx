import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import DesignerCard from "../../components/DesignersPage/DesignerCard/DesignerCard";

import { getUserData, getUsers } from "../../lib/users";

import styles from "../../styles/DesignerPage.module.scss";
import { UserI } from "../../Types";

const DesignerPage: NextPage = ({ userData }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <NavBar dark />

      <main className={styles.designer__main}>
        <div>
          <DesignerCard user={userData.user} />
        </div>
        <div>
          <Image src="/img/designer.png" width={557} height={620} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const users = await getUsers();

  const paths = users.map((user: { user: UserI }) => ({
    params: { id: user.user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const userData = await getUserData(params.id);
    return {
      props: {
        userData,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default DesignerPage;
