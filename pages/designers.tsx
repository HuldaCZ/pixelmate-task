import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import styles from "../styles/Designers.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import DesignerCard from "../components/DesignersPage/DesignerCard/DesignerCard";

import { getUsers } from "../lib/users";
import { UserI } from "../Types";

const DesignersPage: NextPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(users);
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

      <main className={styles.main}>
        <div className={styles.designers__main}>
          <div className={styles.designers__grid}>
            {users &&
              users.map((user: { user: UserI }) => {
                return <DesignerCard key={user.user.id} user={user.user} />;
              })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const users = await getUsers();
  console.log(users);
  return {
    props: {
      users,
    },
  };
};

export default DesignersPage;
