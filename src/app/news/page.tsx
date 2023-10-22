'use client'

import styles from "./page.module.sass";
import Image from "next/image";
import skull from "@/images/skull.jpg";
import { bebas } from "@/utils/fonts";
import { FC, FormEvent, useState, ChangeEvent } from "react";
import Popup from "@/components/popup/Popup";

const News: FC = () => {

  const [inputValue, setInputValue] = useState('');
  const [isPopupActive, setIsisPopupActive] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  
const closePopup = () => {
  setIsisPopupActive(false);
}

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userEmail = inputValue;
    setPopupMessage(`Congratulations, you have just subscribed to us. Wait for news on your mail ${userEmail}`)
    setIsisPopupActive(true);
  }

  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribe__image}>
        <Image
          src={skull}
          alt="Древний драгоценный череп"
          width={446}
          height={694}
        />
      </div>
      <div className={`${styles.subscribe__content}`}>
        <h3 className={`${bebas.className} ${styles.subscribe__subtitle}`}>
          Want to stay in touch?
        </h3>
        <h2 className={`${bebas.className} ${styles.subscribe__title}`}>
          newsletter SUBSCRIBE{" "}
        </h2>
        <p className={`${styles.subscribe__text} text`}>
          In order to start receiving our news, all you have to do is enter your
          email address. Everything else will be taken care of by us. We will
          send you emails containing information about game. We don’t spam.
        </p>
        <form className={`${styles.subscribe__form}`}
              action="#"
              name='SubscribeToNews'
              onSubmit={handleSubmit}
              >
          <input
            className={`${styles.subscribe__input}`}
            type="email"
            name="subscribeEmail"
            defaultValue=""
            placeholder="Your email address"
            onChange={handleInputChange}
            required
          ></input>
          <button className={`${styles.subscribe__button} button`} type='submit'>
            Subscribe now
          </button>
        </form>
      </div>
      <Popup 
      isPopupActive={isPopupActive}
      popupMessage={popupMessage} 
      closePopup={closePopup}
      />
    </section>
  );
};

export default News;
function usestate(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}

