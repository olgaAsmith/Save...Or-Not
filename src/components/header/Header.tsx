"use client";

import Link from "next/link";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.sass";
import { useState, MouseEvent } from "react";

const Header = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Eng");

  const clickOnSelect = () => {
    setToggleOpen(!toggleOpen);
  };

  //* change items from current to chosen and
  const clickOnSelectItem = (e: MouseEvent<HTMLElement>) => {
    const prevValue = selectedValue;
    const nextValue = (e.target as HTMLInputElement).textContent || "";
    setToggleOpen(false);
    setSelectedValue(nextValue);
    setTimeout(() => {
      (e.target as HTMLInputElement).textContent = prevValue;
    }, 1000);
  };

  return (
    <header className={styles.header}>
      <Link href="#" className={`${styles.header__logo} link logo`}></Link>
      <Navigation />
      <div className={styles.header__content}>
        <div className={`${styles.select}`}>
          <div onClick={clickOnSelect} className={styles.select__header}>
            <span className={styles.select__current}>{selectedValue}</span>
            <div className={styles.select__icon}></div>
          </div>
          <div
            className={`${styles.select__body} ${
              toggleOpen ? styles.select__body_active : ""
            }`}
          >
            <div onClick={clickOnSelectItem} className={styles.select__item}>
              Rus
            </div>
            <div onClick={clickOnSelectItem} className={styles.select__item}>
              Fra
            </div>
            <div onClick={clickOnSelectItem} className={styles.select__item}>
              Deu
            </div>
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
};

export default Header;
