import Link from 'next/link'
import styles from './Navigation.module.sass'
import linkStyles from '../../app/page.module.sass'


export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.header__menu}>
        <li>
          <Link className='link' href="./">Main</Link>
        </li>
        <li>
          <Link className='link' href="./about">About</Link>
        </li>
        <li>
          <Link className='link' href="./features">Game features</Link>
        </li>
        <li>
          <Link className='link' href="./requirments">System requirements</Link>
        </li>
        <li>
          <Link className='link' href="./quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  )
}
