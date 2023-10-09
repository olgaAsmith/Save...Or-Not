import styles from "./page.module.sass";
import Image from "next/image";
import skull from '@/images/skull.jpg'
import { bebas } from "@/utils/fonts";

export default function News() {
  return (
  <section className={styles.subscribe}>
    <div>
      <Image
      src={skull}
      alt='Древний драгоценный череп'
      width= {446}
      height= {694}
      />
    </div>
    <div className={`${styles.subscribe__content}`}>
    <p className={`${bebas.className} ${styles.subscribe__subtitle}`}>Want to stay in touch?</p>
    <h2 className={`${bebas.className} ${styles.subscribe__title}`}>newsletter SUBSCRIBE </h2>
    <p className={`${styles.subscribe__text} text`}>
      In order to start receiving our news, all you have to do is enter your
      email address. Everything else will be taken care of by us. We will
      send you emails containing information about game. We don’t spam.
    </p>
    <form>
      <input className={`${styles.subscribe__input}`} type='email' name='subscribeEmail' value='' placeholder='Your email address'></input>
      <button className={`${styles.subscribe__button} button`}>Subscribe now</button>
    </form>
    </div>
  </section>
  );
}
