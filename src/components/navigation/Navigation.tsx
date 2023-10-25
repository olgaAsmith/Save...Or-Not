import Link from "next/link";
import styles from "./Navigation.module.sass";
import { FC, useState } from "react";

const Navigation: FC = () => {
  //* menu toggle burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const clickOnBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const handleClickMenu = () => {
    setIsBurgerMenuOpen(false);
  }
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
          <Link className="link" href="./" onClick={handleClickMenu}>
            Main
          </Link>
        </li>
        <li>
          <Link className="link" href="./about" onClick={handleClickMenu}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="./features" onClick={handleClickMenu}>
            Game features
          </Link>
        </li>
        <li>
          <Link className="link" href="./requirements" onClick={handleClickMenu}>
            System requirements
          </Link>
        </li>
        <li>
          <Link className="link" href="./news" onClick={handleClickMenu}>
            News
          </Link>
        </li>
        <li>
          <Link className="link" href="./quotes" onClick={handleClickMenu}>
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
