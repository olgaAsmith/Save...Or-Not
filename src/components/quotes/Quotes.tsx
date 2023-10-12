import styles from "./Quotes.module.sass";
import Image from "next/image";
import { bebas } from "@/utils/fonts";

export default function QuotesTwits(props) {
  return (
    <li
      className={` ${styles.quotes__area} ${
        props.isRound ? styles.quotes__area_round : ""
      }`}
    >
      <div className={`${styles.quotes__user}`}>
        <div className={`${styles.quotes__avatar}`}>
          <Image src={props.avatar} alt={`'${props.name}'s photo`} style={{ borderRadius: "50%" }} />
        </div>
        <div className={`${styles.quotes__infoarea}`}>
          <p className={`${styles.quotes__name} ${bebas.className}`}>
            {props.name}
          </p>
          <p className={`${styles.quotes__info}`}>{props.about}</p>
        </div>
        <div className={`${styles.quotes__icon}`}></div>
      </div>
      <p className={`${styles.quotes__twit}`}>{`“${props.message}”`}</p>
      <p className={`${styles.quotes__data}`}>{props.data}</p>
    </li>
  );
}
