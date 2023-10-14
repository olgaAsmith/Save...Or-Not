import styles from "./page.module.sass";
import { bebas } from "@/utils/fonts";

const Requirements = () => {
  return (
    <section className={styles.requirements}>
      <h3 className={`${bebas.className} ${styles.requirements__subtitle}`}>
        Can My Computer Run this game?
      </h3>
      <h2 className={`${bebas.className} ${styles.requirements__title}`}>
        system requirements
      </h2>
      <ul className={styles.requirements__list}>
        <li className={styles.requirements__element}>
          <p className={`${bebas.className} ${styles.requirements__item}`}>
            OS:
          </p>
          <p className={`${styles.requirements__text} text`}>
            Windows 7 64-bit only (No OSX support at this time)
          </p>
        </li>
        <li className={styles.requirements__element}>
          <p className={`${bebas.className} ${styles.requirements__item}`}>
            pROCESSOR:
          </p>
          <p className={`${styles.requirements__text} text`}>
            Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ
          </p>
        </li>
        <li className={styles.requirements__element}>
          <p className={`${bebas.className} ${styles.requirements__item}`}>
            mEMORY:
          </p>
          <p className={`${styles.requirements__text} text`}>8GB RAM</p>
        </li>
        <li className={styles.requirements__element}>
          <p className={`${bebas.className} ${styles.requirements__item}`}>
            storage:
          </p>
          <p className={`${styles.requirements__text} text`}>
            8GB available space
          </p>
        </li>
        <li
          className={`${styles.requirements__element} ${styles.requirements__longer}`}
        >
          <p className={`${bebas.className} ${styles.requirements__item}`}>
            GRAPHICS:
          </p>
          <p className={`${styles.requirements__text} text`}>
            NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11
            (Shader Model 5)
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Requirements;
