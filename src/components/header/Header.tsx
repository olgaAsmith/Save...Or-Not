import Link from "next/link";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="#" className={`${styles.header__logo} link logo`}></Link>
      <Navigation />
      <div className={styles.header__content}>
        <select className={styles.header__select} name="lang" id="lang-select">
          <option className={styles.header__option} value="eng">eng</option>
          <option className={styles.header__option} value="fra">fra</option>
          <option className={styles.header__option} value="deu">deu</option>
        </select>
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