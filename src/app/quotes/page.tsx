import styles from "./page.module.sass";
import { bebas } from "@/utils/fonts";
import Image from "next/image";
import photo from '@/images/photo.jpg'

export default function Quotes() {
  return <section className={styles.quotes}>
    <div className={`${styles.quotes__block}`}>
    <div className={`${styles.quotes__content}`}>
      <h3 className={`${bebas.className} ${styles.quotes__subtitle}`}>What people think?</h3>
      <h2 className={`${bebas.className} ${styles.quotes__title}`}>Press quotes</h2>
      <p className={`${styles.quotes__text} text`}>
      Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.
      </p>
        <button className={`${styles.quotes__button} button`}>Read more testimonials</button>
    </div>
    <div className={`${styles.quotes__blocks}`}>
      <div className={`${styles.quotes__area}`}>
        <div className={`${styles.quotes__user}`}>
          <div className={`${styles.quotes__avatar}`}>
            <Image
            src={photo}
            alt='12345'
            style={{borderRadius: '50%'}}
            />
          </div>
          <div className={`${styles.quotes__infoarea}`}>
            <p className={`${styles.quotes__name} ${bebas.className}`}>Evan Lahti</p>
            <p className={`${styles.quotes__info}`}>PC Gamer</p>
          </div>
          <div className={`${styles.quotes__icon}`}></div>
        </div>
        <p className={`${styles.quotes__twit}`}>“One of my gaming highlights of the year.”</p>
        <p className={`${styles.quotes__data}`}>October 8, 2023</p>
      </div>
      <div className={`${styles.quotes__area}`}>
        <div className={`${styles.quotes__user}`}>
          <div className={`${styles.quotes__avatar}`}>
            <Image
            src={photo}
            alt='12345'
            style={{borderRadius: '50%'}}
            />
          </div>
          <div className={`${styles.quotes__infoarea}`}>
            <p className={`${styles.quotes__name} ${bebas.className}`}>Evan Lahti</p>
            <p className={`${styles.quotes__info}`}>PC Gamer</p>
          </div>
          <div className={`${styles.quotes__icon}`}></div>
        </div>
        <p className={`${styles.quotes__twit}`}>“One of my gaming highlights of the year.”</p>
        <p className={`${styles.quotes__data}`}>October 8, 2023</p>
      </div>
      <div className={`${styles.quotes__area}`}>
        <div className={`${styles.quotes__user}`}>
          <div className={`${styles.quotes__avatar}`}>
            <Image
            src={photo}
            alt='12345'
            style={{borderRadius: '50%'}}
            />
          </div>
          <div className={`${styles.quotes__infoarea}`}>
            <p className={`${styles.quotes__name} ${bebas.className}`}>Evan Lahti</p>
            <p className={`${styles.quotes__info}`}>PC Gamer</p>
          </div>
          <div className={`${styles.quotes__icon}`}></div>
        </div>
        <p className={`${styles.quotes__twit}`}>“One of my gaming highlights of the year.”</p>
        <p className={`${styles.quotes__data}`}>October 8, 2023</p>
      </div>
    </div>
    </div>
  </section>;
}
