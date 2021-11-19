import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import { getUserData, getUsers } from "../../lib/users";

import IconLocation from "../../public/img/icon-location.svg";
import ArrowLeft from "../../public/img/arrow-left.svg";

import styles from "../../styles/DesignerPage.module.scss";
import cardStyles from "../../components/DesignersPage/DesignerCard/DesignerCard.module.scss";
import { UserI } from "../../Types";

const DesignerPage: NextPage = ({ userData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { user } = userData;
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
        <div className={styles.designer__card}>
          <Link href="/designers">
            <div className={styles.designer__back}>
              <ArrowLeft />
              <p className={styles.designer__back_text}>ZPĚT</p>
            </div>
          </Link>
          <div className={cardStyles.card__content}>
            <div className={cardStyles.card__content__header}>
              <p className={cardStyles.card__content__header__username}>{user.username }</p>
              <p className={cardStyles.card__content__header__name}>{user.name}</p>
              <p className={cardStyles.card__content__header__email}>{user.email}</p>
            </div>
            <div className={cardStyles.card__content__adress}>
              <div className={cardStyles.card__content__adress__col_i}>
                <IconLocation />
              </div>
              <div className={cardStyles.card__content__adress__col}>
                <p className={cardStyles.card__content__adress__city}>{user.address.city}</p>
                <p className={cardStyles.card__content__adress__street}>{user.address.street}</p>
                <p className={cardStyles.card__content__adress__street}>
                  {user.address.zipcode} {user.address.city}
                </p>
              </div>
            </div>
            <div className={cardStyles.card__content__web}>{user.website}</div>

            <div className={styles.designer__card__company}>
              <p className={styles.designer__card__company__heading}>Pixelmate s.r.o.</p>
              <p className={styles.designer__card__company__text}>
                Pellentesque habitant morbi tristique senectus et netus malesuada.
              </p>
            </div>
          </div>
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
