import React, { useEffect } from "react";
import PixelmateLogoLight from "../../public/img/Pixelmate_logo_claim_white.svg";
import PixelmateLogoDark from "../../public/img/Pixelmate_logo_claim_dark.svg";

import styles from "./NavBar.module.scss";

import Button from "../Button/Button";
import { NavbarPropsI } from "../../Types";

const NavBar: React.FC<NavbarPropsI> = (props: NavbarPropsI) => {
  const { dark } = props;
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? styles.navbar_scrolled : styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo_container}>
          <a href="/">{dark ? <PixelmateLogoLight /> : <PixelmateLogoDark />}</a>
        </div>
        <div className={styles.navbar__menu_container}>
          <ul className={dark ? styles.navbar__menu_light : styles.navbar__menu_dark}>
            <li className={styles.navbar__menu_item}>
              <a href="/designers" className={styles.navbar__menu_item_link}>
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
