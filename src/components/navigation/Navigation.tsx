import Link from "next/link";
import styles from "./Navigation.module.sass";
import { FC, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

const Navigation: FC = () => {
  //* menu toggle burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const clickOnBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  //*close after click on nav link
  const handleClickMenu = () => {
    setIsBurgerMenuOpen(false);
  };
  const linked = useSelectedLayoutSegment();

  //* active link
  const isActive = (href: string) => {
    return linked === href ? "nav__active" : "";
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
          <Link className={`link`} href="./" onClick={handleClickMenu}>
            Main
          </Link>
        </li>
        <li>
          <Link
            className={`link ${isActive("about")}`}
            href="./about"
            onClick={handleClickMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${isActive("features")}`}
            href="./features"
            onClick={handleClickMenu}
          >
            Game features
          </Link>
        </li>
        <li>
          <Link
            className={`link ${isActive("requirements")}`}
            href="./requirements"
            onClick={handleClickMenu}
          >
            System requirements
          </Link>
        </li>
        <li>
          <Link
            className={`link ${isActive("news")}`}
            href="./news"
            onClick={handleClickMenu}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            className={`link ${isActive("quotes")}`}
            href="./quotes"
            onClick={handleClickMenu}
          >
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
