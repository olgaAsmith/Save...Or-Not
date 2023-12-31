import styles from "./page.module.sass";
import { bebas } from "@/utils/fonts";
import { openSans } from "@/utils/fonts";
import { FC } from "react";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.main__title} ${bebas.className}`}>
        Survive at all costs
      </h1>
      <h2 className={`${styles.main__subtitle} ${bebas.className}`}>
        Experience new social battle royale game
      </h2>
      <button className={`${styles.main__button} button`}>
        <p className={`${styles.main__minititle} ${openSans.className}`}>
          Buy Now on Steam
        </p>
        <div className="splitter splitter_brown"></div>
        <p className={`${styles.main__price} ${openSans.className}`}>$14.99</p>
      </button>
    </main>
  );
};

export default Main;
