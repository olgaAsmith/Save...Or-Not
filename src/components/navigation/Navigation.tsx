import Link from "next/link";
import styles from "./Navigation.module.sass";
import { FC, useState } from "react";

const Navigation: FC = () => {
  //* menu toggle burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const clickOnBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div
        className={`${
          isBurgerMenuOpen ? styles.header__burgerActive : styles.header__burger
        }`}
        onClick={clickOnBurgerMenu}
      ></div>
      <ul
        className={`${styles.header__menu} ${
          isBurgerMenuOpen ? styles.header__menuActive : ""
        }`}
      >
        <li>
          <Link className="link" href="./">
            Main
          </Link>
        </li>
        <li>
          <Link className="link" href="./about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="./features">
            Game features
          </Link>
        </li>
        <li>
          <Link className="link" href="./requirements">
            System requirements
          </Link>
        </li>
        <li>
          <Link className="link" href="./news">
            News
          </Link>
        </li>
        <li>
          <Link className="link" href="./quotes">
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
