import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import styles from "../styles/Designers.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import DesignerCard from "../components/DesignersPage/DesignerCard/DesignerCard";
import SearchFiled from "../components/DesignersPage/SearchFiled/SearchField";

import { getUsers } from "../lib/users";
import { UserI } from "../Types";

const DesignersPage: NextPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState("");
  const filterUsers = (name: string) =>
    users.filter((user: { user: UserI }) =>
      user.user.name.toLowerCase().includes(name.toLowerCase())
    );

  let skeletons = [];
  for (let i = 0; i < 6; i++) {
    const user: UserI = {
      id: i,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        city: "",
        zipcode: "",
      },
      website: "",
      phone: "",
    };
    skeletons.push(user);
  }
  return (
    <>
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

        <main className={styles.main}>
          <SearchFiled onChange={(e) => setSearch(e.target.value)} />
          <div className={styles.designers__main}>
            <div className={styles.designers__grid}>
              {users
                ? filterUsers(search).map((user: { user: UserI }) => {
                    return <DesignerCard key={user.user.id} user={user.user} />;
                  })
                : skeletons.map((user: UserI) => {
                    return <DesignerCard key={user.id} user={user} />;
                  })}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
};

export default DesignersPage;
