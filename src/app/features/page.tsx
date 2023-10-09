import styles from './page.module.sass'
import { bebas } from '@/utils/fonts'

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}></div>
      <div className={styles.features__content}>
        <h3 className={`${bebas.className} ${styles.features__subtitle}`}>What’s so special?</h3>
        <h2 className={`${bebas.className} ${styles.features__title}`}>Features</h2>
        <ul className={styles.features__list}>
          <li className={styles.features__item}>
              <h4 className={`${bebas.className} ${styles.features__name}`}>SURVIVE AT ALL COSTS</h4>
              <p className={`${styles.features__text} text`}>You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.</p>
              <span className={styles.features__circle}></span>
              <span className={styles.features__line}></span>          
          </li>
          <li className={styles.features__item}>
              <h4 className={`${bebas.className} ${styles.features__name}`}>CREATE ALLIES & ENEMIES</h4>
              <p className={`${styles.features__text} text`}>Forge alliances with fellow survivors to increase your chances of escape, but be wary—betrayals can happen when desperation sets in.</p>
              <span className={styles.features__circle}></span>
          </li>
          <li className={styles.features__item}>
            <h4 className={`${bebas.className} ${styles.features__name}`}>IMPRESS THE AUDIENCE</h4>
            <p className={`${styles.features__text} text`}>Show off your survival skills and make daring moves to win over the audience. The more they like you, the more likely they are to support your bid for freedom.</p>
            <span className={styles.features__circle}></span>
          </li>
        </ul>
      </div>
    </section>
  )
}
