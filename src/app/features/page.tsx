import styles from './page.module.sass'
import { bebas } from '@/utils/fonts'

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}></div>
      <div className={styles.features__content}>
        <h3 className={styles.features__subtitle}>What’s so special?</h3>
        <h2 className={styles.features__title}>Features</h2>
        
       {/*  <div className={styles.features__items}>
          <div className={styles.features__scale}>
            <div className={styles.features__circle}></div>
            <div className={styles.features__line}></div>
            <div className={styles.features__circle}></div>
            <div className={styles.features__line}></div>
            <div className={styles.features__circle}></div>
          </div>
          <ul className={styles.features__list}>
            <li>
              <h4 className={styles.features__name}>SURVIVE AT ALL COSTS</h4>
              <p className={styles.features__text}>You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.</p>
            </li>
            <li>
              <h4 className={styles.features__name}>CREATE ALLIES & ENEMIES</h4>
              <p className={styles.features__text}>Forge alliances with fellow survivors to increase your chances of escape, but be wary—betrayals can happen when desperation sets in.</p>
            </li>
            <li>
              <h4 className={styles.features__name}>IMPRESS THE AUDIENCE</h4>
              <p className={styles.features__text}>Show off your survival skills and make daring moves to win over the audience. The more they like you, the more likely they are to support your bid for freedom.</p>
            </li>
          </ul>
        </div> */}


      </div>

    </section>
  )
}
