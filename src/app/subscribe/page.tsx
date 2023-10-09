import styles from './page.module.sass'

export default function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div>
      </div>
      <div>
        <p>Want to stay in touch?</p>
        <h2>newsletter SUBSCRIBE </h2>
        <p className={`text`}>In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.</p>
        <form>
          <input></input>
          <button className={`button`}>Subscribe now</button>
        </form>
      </div>
    </section>
  )
}
