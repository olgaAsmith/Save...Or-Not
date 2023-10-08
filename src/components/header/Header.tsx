import Link from 'next/link';
import Navigation from '../navigation/Navigation';
import styles from './Header.module.sass';


export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='#' className={`${styles.header__logo} link`}></Link>
      <Navigation />
      <div className={styles.header__content}>
        <select name="lang" id="lang-select">
          <option value='eng'>eng</option>
          <option value='fra'>fra</option>
          <option value='deu'>deu</option>
        </select>
        <div className='splitter splitter_white'></div>
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
