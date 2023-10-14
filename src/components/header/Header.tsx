'use client'

import Link from "next/link";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.sass";
import { useState } from "react";

const Header = () => {

  const [isSelectActive, setIsSelectActive] = useState(false)

  return (
    <header className={styles.header}>
      <Link href="#" className={`${styles.header__logo} link logo`}></Link>
      <Navigation />
      <div className={styles.header__content}>
        <div className={`${styles.select}`}>
          <div className={styles.select__header}>
            <span className={styles.select__current}>Eng</span>
            <div className={styles.select__icon}></div>
          </div>
          <div className={`${styles.select__body} ${isSelectActive ? styles.select__body_active : ''}`}>
            <div className={styles.select__item}>Rus</div>
            <div className={styles.select__item}>Fra</div>
            <div className={styles.select__item}>Deu</div>
          </div>
        </div>
        <div className="splitter splitter_white"></div>
        <ul className={styles.header__refs}>
          <li>
            <Link
              href="/"
              className={`${styles.header__link_ref} ${styles.link_xbox} link`}
            ></Link>
          </li>
          <li>
            <Link
              href="/"
              className={`${styles.header__link_ref} ${styles.link_steam} link`}
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;