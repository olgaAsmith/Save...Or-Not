import styles from "./page.module.sass";
import Image from "next/image";
import galleryImage1 from "@/images/gallery_image.jpg";
import galleryImage2 from "@/images/gallery_image2.jpg";
import galleryImage3 from "@/images/gallery_image3.jpg";
import galleryImage4 from "@/images/gallery_image.jpg";
import galleryImage5 from "@/images/gallery_image2.jpg";
import { bebas } from "@/utils/fonts";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <h3 className={`${styles.about__subtitle} ${bebas.className}`}>
          What is SOS?
        </h3>
        <h2 className={`${styles.about__title} ${bebas.className}`}>
          social battle royale game
        </h2>
        <div className={styles.about__line}></div>
        <p className={`${styles.about__text} text`}>
          Each round, you and 15 other contestants compete to escape a deadly
          island filled with monsters. The trick is: three people can survive.
          Will you run solo or form friendships with others to escape?{" "}
        </p>
        <p className={`${styles.about__text} text`}>
          Making the right decisions could be the difference between life and
          death.
        </p>
      </div>
      <div className={`${styles.about__content} ${styles.about__gallery}`}>
        <div className={`${styles.about__image} ${styles.about__image_first}`}>
          <Image
            src={galleryImage1}
            alt="Location screenshot"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className={`${styles.about__image} ${styles.about__image_second}`}>
          <Image
            src={galleryImage2}
            alt="Location screenshot"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className={`${styles.about__image} ${styles.about__image_third}`}>
          <Image
            src={galleryImage3}
            alt="Location screenshot"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className={styles.about__arrow}></div>
        <div className={styles.about__toggler}>
          <button className={`${styles.about__switcher}`}></button>
          <button className={`${styles.about__switcher}`}></button>
          <button className={`${styles.about__switcher}`}></button>
          <button
            className={`${styles.about__switcher} ${styles.about__switcher_active}`}
          ></button>
          <button className={`${styles.about__switcher}`}></button>
        </div>
      </div>
    </section>
  );
}
