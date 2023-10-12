"use client";

import QuotesTwits from "@/components/quotes/Quotes";
import styles from "./page.module.sass";
import { bebas } from "@/utils/fonts";
import { initialQuotes } from "@/utils/quotes/quotes";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [isRound, setIsRound] = useState(false);

  useEffect(() => {
    setIsRound(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const firstElement = quotes[0];
      quotes.shift();
      quotes.push(firstElement);
      setQuotes([...quotes]);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [quotes]);

  return (
    <section className={styles.quotes}>
      <div className={`${styles.quotes__block}`}>
        <div className={`${styles.quotes__content}`}>
          <h3 className={`${bebas.className} ${styles.quotes__subtitle}`}>
            What people think?
          </h3>
          <h2 className={`${bebas.className} ${styles.quotes__title}`}>
            Press quotes
          </h2>
          <p className={`${styles.quotes__text} text`}>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
          <button className={`${styles.quotes__button} button`}>
            Read more testimonials
          </button>
        </div>
        <ul className={`${styles.quotes__blocks}`}>
          {quotes.map((quote) => {
            return (
              <QuotesTwits
                key={quote.id}
                name={quote.name}
                avatar={quote.avatar}
                about={quote.about}
                message={quote.message}
                data={quote.data}
                isRound={isRound}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Quotes;