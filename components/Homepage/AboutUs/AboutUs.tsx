import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./AboutUs.module.scss";
import Button from "../../Button/Button";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs__main}>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__text_container_left}>
            <p className={styles.aboutUs__heading_small}>Poznejte Pixelmate tým</p>
            <h2 className={styles.aboutUs__heading}>Jsme mladí a hraví, startupy nás baví</h2>
            <p className={styles.aboutUs__text}>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Pellentesque arcu. Ut tempus purus at lorem. Nam quis nulla. Aenean placerat.
              Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis
              velit mauris vel metus. Fusce tellus. Praesent id justo in neque elementum ultrices.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam.
            </p>
          </div>
        </div>

        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__container_image}>
            <Image src="/img/Component-13–1@2x.png" height={480} width={593} />
          </div>
          <div className={styles.aboutUs__text_container_right}>
            <p className={styles.aboutUs__text}>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Pellentesque arcu. Ut tempus purus at lorem. Nam quis nulla. Aenean placerat.
              Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis
              velit mauris vel metus. Fusce tellus. Praesent id justo in neque elementum ultrices.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs__button_container}>
        <Link href="/designers">
          <Button design="fill" onClick={() => {}} text="CO DALŠÍHO SE ŠUŠKÁ" />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
