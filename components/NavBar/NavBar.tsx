import React, { useLayoutEffect } from "react";
import PixelmateLogo from "../../public/img/Pixelmate_logo_claim_white.svg";

import styles from "./NavBar.module.scss";

import Button from "../Button/Button";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? styles.navbar_scrolled : styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo_container}>
          <PixelmateLogo />
        </div>
        <div className={styles.navbar__menu_container}>
          <ul className={styles.navbar__menu}>
            <li className={styles.navbar__menu_item}>
              <a href="#" className={styles.navbar__menu_item_link}>
                Designeři
              </a>
            </li>
            <li className={styles.navbar__menu_item}>
              <a href="#" className={styles.navbar__menu_item_link}>
                Portfolio
              </a>
            </li>
            <li className={styles.navbar__menu_item}>
              <Button onClick={() => {}} design="outline" text="Přihlásit se" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
