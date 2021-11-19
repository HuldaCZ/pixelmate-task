import React from "react";

import styles from "./Header.module.scss";

import RefLogo from "../RefLogo/RefLogo";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <RefLogo />
      </div>
    </div>
  );
};

export default Header;
