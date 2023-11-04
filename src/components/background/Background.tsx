"use client";

import styles from "./Background.module.sass";
import Image from "next/image";
import bgMain from "../../images/bg.jpg";
import bgAbout from "../../images/bg2.jpg";
import bgQuotes from "../../images/bg_image5.jpg";

import { usePathname } from "next/navigation";
import { FC } from "react";

const Background: FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.background}>
      {pathname === `/` ? (
        <Image src={bgMain} alt="SOS Heroes" layout="fill" objectFit="cover" />
      ) : (
        ""
      )}
      {pathname === `/about` ? (
        <Image src={bgAbout} alt="SOS location" layout="fill" objectFit="cover" />
      ) : (
        ""
      )}
        {pathname === `/quotes` ? (
        <Image src={bgQuotes} alt="SOS location" layout="fill" objectFit="cover" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Background;
