import React from "react";
import PixelmateLogo from "../../public/img/Pixelmate_logo_claim_white.svg";

import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo_container}>
          <PixelmateLogo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
