"use client";

import Link from "next/link";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.sass";
import { FC } from "react";
import SelectLanguage from "../SelectLanguage/SelectLanguage";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href="#" className={`${styles.header__logo} link logo`}></Link>
      <Navigation />
      <div className={styles.header__content}>
        <SelectLanguage />
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
};

export default Header;
