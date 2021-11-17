import React, { useEffect } from "react";
import { useRouter } from "next/router";

import PixelmateLogoLight from "../../public/img/Pixelmate_logo_claim_white.svg";
import PixelmateLogoDark from "../../public/img/Pixelmate_logo_claim_dark.svg";
import Link from "next/link";

import styles from "./NavBar.module.scss";

import Button from "../Button/Button";
import { NavbarPropsI } from "../../Types";

const NavBar: React.FC<NavbarPropsI> = (props: NavbarPropsI) => {
  const router = useRouter();
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
          <Link href="/">
            <a href="/">{dark ? <PixelmateLogoDark /> : <PixelmateLogoLight />}</a>
          </Link>
        </div>
        <div className={styles.navbar__menu_container}>
          <ul className={styles.navbar__menu}>
            <li className={styles.navbar__menu_item}>
              <a
                href="/designers"
                className={`${
                  dark ? styles.navbar__menu_item_link_dark : styles.navbar__menu_item_link_light
                } 
                  ${
                    router.asPath === "/designers" && dark
                      ? styles.active_dark
                      : styles.active_light
                  }`}
              >
                Designeři
              </a>
            </li>
            <li className={styles.navbar__menu_item}>
              <a
                href="#"
                className={
                  dark ? styles.navbar__menu_item_link_dark : styles.navbar__menu_item_link_light
                }
              >
                Portfolio
              </a>
            </li>
            <li className={styles.navbar__menu_item}>
              <Button
                onClick={() => {}}
                design={dark ? "outline-dark" : "outline-light"}
                text="Přihlásit se"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
