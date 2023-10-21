import styles from "./Quotes.module.sass";
import Image, { StaticImageData } from "next/image";
import { bebas } from "@/utils/fonts";
import { FC } from "react";

interface QuotesTwitsProps {
  id?: number;
  name: string;
  about: string;
  message: string;
  avatar: StaticImageData;
  data: string;
  isRound: boolean;
  isLineAnimation: boolean;
}

const QuotesTwits: FC<QuotesTwitsProps> = ({
  name,
  about,
  avatar,
  message,
  data,
  isRound,
}) => {
  return (
    <li
      className={` ${styles.quotes__area}
      ${isRound ? styles.quotes__area_round : ""}
      `}
    >
      <div className={`${styles.quotes__user}`}>
        <div className={`${styles.quotes__avatar}`}>
          <Image
            src={avatar}
            alt={`'${name}'s photo`}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className={`${styles.quotes__infoarea}`}>
          <p className={`${styles.quotes__name} ${bebas.className}`}>{name}</p>
          <p className={`${styles.quotes__info}`}>{about}</p>
        </div>
        <div className={`${styles.quotes__icon}`}></div>
      </div>
      <p className={`${styles.quotes__twit}`}>{`“${message}”`}</p>
      <p className={`${styles.quotes__data}`}>{data}</p>
    </li>
  );
};

export default QuotesTwits;
