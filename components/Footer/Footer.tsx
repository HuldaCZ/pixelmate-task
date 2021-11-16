import React from "react";

import PixelmateLogo from "../../public/img/Pixelmate_logo_claim_white.svg";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__text}>
          <p>© All rights reserved 2013-2019. Pixelmate s.r.o.</p>
        </div>
        <div className={styles.footer__container__logo}>
          <PixelmateLogo />
        </div>
        <div className={styles.footer__container__text}>
          <p>Zásady ochrany osobních údajů</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
