import Link from "next/link";
import styles from "./Footer.module.sass";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__block}>
        <Link href="/" className={`${styles.footer__logo} link logo`}></Link>
        <ul className={styles.footer__list}>
          <li>
            <a
              href="##"
              className={`${styles.footer__link} ${styles.footer__facebook} link`}
            ></a>
          </li>
          <li>
            <a
              href="##"
              className={`${styles.footer__link} ${styles.footer__twitter} link`}
            ></a>
          </li>
          <li>
            <a
              href="##"
              className={`${styles.footer__link} ${styles.footer__youtube} link`}
            ></a>
          </li>
          <li>
            <a
              href="##"
              className={`${styles.footer__link} ${styles.footer__twitch} link`}
            ></a>
          </li>
        </ul>
      </div>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__block}>
        <p className={styles.footer__rights}>
          {" "}
          © 2023 Outpost Games, Inc. All Rights Reserved
        </p>
        <ul className={`${styles.footer__list} ${styles.footer__underlist}`}>
          <li className={styles.footer__item}>
            <a href="##" className={`${styles.footer__doc} link`}>
              Privacy Policy
            </a>
            <div className={`${styles.footer__splitter} splitter`}></div>
          </li>
          <li className={styles.footer__item}>
            <a href="##" className={`${styles.footer__doc} link`}>
              Terms of Services
            </a>
            <div className={`${styles.footer__splitter} splitter`}></div>
          </li>
          <li className={styles.footer__item}>
            <a href="##" className={`${styles.footer__doc} link`}>
              Code of Conduct{" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
