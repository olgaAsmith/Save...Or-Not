import Link from 'next/link';
import Navigation from '../navigation/Navigation';
import styles from './Header.module.sass';


export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='#' className={`${styles.header__logo} link`}></Link>
      <Navigation />
      <div className={styles.header__content}>
       {/*  <label htmlFor="lang-select">eng</label>
        <select name="lang" id="lang-select">
          <option value='eng'></option>
          <option value='fra'></option>
          <option value='deu'></option>
        </select> */}
        <div className={styles.header__split}></div>
        <ul className={styles.header__refs}>
          <li>
            <Link href='/' className={`${styles.header__link_ref} ${styles.link_xbox} link`}></Link>
          </li>
          <li>
            <Link href='/' className={`${styles.header__link_ref} ${styles.link_steam} link`}></Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
