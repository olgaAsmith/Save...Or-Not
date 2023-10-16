import { FC } from "react";
import styles from "./page.module.sass";
import { bebas } from "@/utils/fonts";
import FeaturesList from "@/components/FeaturesList/FeaturesList";

const Features: FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}></div>
      <div className={styles.features__content}>
        <h3 className={`${bebas.className} ${styles.features__subtitle}`}>
          What’s so special?
        </h3>
        <h2 className={`${bebas.className} ${styles.features__title}`}>
          Features
        </h2>
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
