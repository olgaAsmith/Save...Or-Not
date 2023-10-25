import styles from "./page.module.sass";
import Image from "next/image";
import galleryImage1 from "@/images/gallery_image.jpg";
import galleryImage2 from "@/images/gallery_image2.jpg";
import galleryImage3 from "@/images/gallery_image3.jpg";
import { bebas } from "@/utils/fonts";
import { FC } from "react";
import Gallery from "@/components/carousel/Carousel";

const About: FC = () => {
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
      <Gallery />
    </section>
  );
};

export default About;
