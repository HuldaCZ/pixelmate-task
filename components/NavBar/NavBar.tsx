import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PixelmateLogoLight from "../../public/img/Pixelmate_logo_claim_white.svg";
import PixelmateLogoDark from "../../public/img/Pixelmate_logo_claim_dark.svg";
import IconCancel from "../../public/img/cancel.svg";
import IconMenu from "../../public/img/menu.svg";

import Link from "next/link";

import styles from "./NavBar.module.scss";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { NavbarPropsI } from "../../Types";

const NavBar: React.FC<NavbarPropsI> = (props: NavbarPropsI) => {
  const router = useRouter();
  const { dark } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setActivePath(router.pathname);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLink = (path: string) => {
    if (activePath === path) {
      return dark && !isScrolled ? styles.active_dark : styles.active_light;
    }
    return "";
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      <nav className={isScrolled ? styles.navbar_scrolled : styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__logo_container}>
            <Link href="/">
              <a href="/">{dark && !isScrolled ? <PixelmateLogoDark /> : <PixelmateLogoLight />}</a>
            </Link>
          </div>
          <div className={styles.navbar__menu_container}>
            {width > 768 ? (
              <ul className={styles.navbar__menu}>
                <li className={styles.navbar__menu_item}>
                  <Link href="/designers">
                    <p
                      className={`${
                        dark && !isScrolled
                          ? styles.navbar__menu_item_link_dark
                          : styles.navbar__menu_item_link_light
                      } 
                  ${activeLink("/designers")} `}
                    >
                      Designeři
                    </p>
                  </Link>
                </li>
                <li className={styles.navbar__menu_item}>
                  <a
                    href="#"
                    className={
                      dark && !isScrolled
                        ? styles.navbar__menu_item_link_dark
                        : styles.navbar__menu_item_link_light
                    }
                  >
                    Portfolio
                  </a>
                </li>
                <li className={styles.navbar__menu_item}>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    design={dark && !isScrolled ? "outline-dark" : "outline-light"}
                    text="Přihlásit se"
                  />
                </li>
              </ul>
            ) : (
              <div className={styles.navbar__burger_icon}>
                <IconMenu onClick={() => setIsBurgerActive(true)} fill={dark && !isScrolled ? "black" : "white"} />
              </div>
            )}
          </div>
        </div>
      </nav>
      {isBurgerActive && (
        <div className={styles.navbar__burger_container}>
          <div className={styles.navbar__burger_cancel}>
            <IconCancel onClick={() => setIsBurgerActive(false)} />
          </div>
          <ul className={styles.navbar__burger_menu}>
          <li className={`${styles.navbar__menu_item} ${styles.navbar__burger_menu_item}`}>
              <Link href="/">
                <p
                  onClick={() => setIsBurgerActive(false)}
                  className={`${styles.navbar__menu_item_link_light} 
                  ${activeLink("/")} `}
                >
                  Domů
                </p>
              </Link>
            </li>
            <li className={`${styles.navbar__menu_item} ${styles.navbar__burger_menu_item}`}>
              <Link href="/designers">
                <p
                  onClick={() => setIsBurgerActive(false)}
                  className={`${styles.navbar__menu_item_link_light} 
                  ${activeLink("/designers")} `}
                >
                  Designeři
                </p>
              </Link>
            </li>
            <li className={`${styles.navbar__menu_item} ${styles.navbar__burger_menu_item}`}>
              <a
                href="#"
                className={styles.navbar__menu_item_link_light}
                onClick={() => setIsBurgerActive(false)}
              >
                Portfolio
              </a>
            </li>
            <li className={`${styles.navbar__menu_item} ${styles.navbar__burger_menu_item}`}>
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsBurgerActive(false);
                }}
                design={"outline-light"}
                text="Přihlásit se"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
