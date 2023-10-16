"use client";

import { FC, useEffect, useState } from "react";
import styles from "./page.module.sass";
import { bebas } from "@/utils/fonts";
import { featuresData } from "@/utils/consts/features";

const Features: FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isCircleActive, setIsCircleActive] = useState(false);
  const [isLineFirstMove, setIsLineFirstMove] = useState(false);
  const [isLineSecondMove, setIsLineSecondMove] = useState(false);
  const [isLineThirdMove, setIsLineThirdMove] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); //*set index for identify active element

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuresData.length); //*count+ index for identify active element
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //* stepping for line and setting active classes for visual effects
  useEffect(() => {
    setIsTextVisible(true);
    setIsCircleActive(true);
    if (activeIndex === 0) {
      setIsLineThirdMove(false);
      setIsLineFirstMove(true);
    } else if (activeIndex === 1) {
      setIsLineFirstMove(false);
      setIsLineSecondMove(true);
    } else if (activeIndex === 2) {
      setIsLineSecondMove(false);
      setIsLineThirdMove(true);
    }
  }, [activeIndex]);

  return (
    <section className={styles.features}>
      <div className={styles.features__container}></div>
      <div className={styles.features__content}>
        <h3 className={`${bebas.className} ${styles.features__subtitle}`}>
          What’s so special?
        </h3>
        <h2 className={`${bebas.className} ${styles.features__title}`}>
          Features
        </h2>
        <ul className={styles.features__list}>
          {featuresData.map((feature, index) => (
            <li className={styles.features__item} key={index}>
              <h4 className={`${bebas.className} ${styles.features__name}`}>
                {feature.title}
              </h4>
              <p
                className={`${styles.features__text} text ${
                  activeIndex === index && isTextVisible
                    ? styles.features__text_visible
                    : styles.features__text_invisible
                }`}
              >
                {feature.text}
              </p>
              <span
                className={`${styles.features__circle} ${
                  activeIndex === index && isCircleActive
                    ? styles.features__circle_active
                    : ""
                }`}
              ></span>
              {index === 0 ? (
                <span
                  className={`
                  ${styles.features__line}
                  ${isLineFirstMove ? styles.features__line_move_first : ""}
                  ${isLineSecondMove ? styles.features__line_move_second : ""}
                  ${isLineThirdMove ? styles.features__line_move_third : ""}
                `}
                ></span>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
