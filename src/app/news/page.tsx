"use client";

import styles from "./page.module.sass";
import Image from "next/image";
import skull from "@/images/skull.jpg";
import { bebas } from "@/utils/fonts";
import { FC, useState } from "react";
import Popup from "@/components/popup/Popup";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
}

const News: FC = () => {
  const [isPopupActive, setIsisPopupActive] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  //*react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = () => {
    const userEmail = getValues("email");
    setPopupMessage(
      `Congratulations, you have just subscribed to us. Wait for news on your mail ${userEmail}`,
    );
    setIsisPopupActive(true);
    reset();
  };

  //*closing modal
  const closePopup = () => {
    setIsisPopupActive(false);
  };

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
        <form
          className={`${styles.subscribe__form}`}
          name="SubscribeToNews"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className={`${styles.subscribe__span}`}>
            {errors.email?.message}
          </span>
          <input
            {...register("email", {
              required: "Please, write your email adress",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please, write correct email",
              },
            })}
            className={`${styles.subscribe__input}`}
            placeholder="Your email address"
          ></input>
          <button
            className={`${styles.subscribe__button} button`}
            type="submit"
          >
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
