'use client'

import styles from "./Carousel.module.sass";
import Image from "next/image";
import { FC } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import galleryImage1 from "@/images/gallery_image.jpg";
import galleryImage2 from "@/images/gallery_image2.jpg";
import galleryImage3 from "@/images/gallery_image3.jpg";

const Gallery: FC = () => {

  return (
    <div className={styles.carousel}>
      <Carousel>
        <div>
        <Image
            className={styles.image__carousel}
            src={galleryImage1}
            alt="Location screenshot"
            style={{ borderRadius: "6px", objectFit: 'cover' }}
          />
        </div>
        <div>
        <Image
            className={styles.image__carousel}
            src={galleryImage2}
            alt="Location screenshot"
            style={{ borderRadius: "6px", objectFit: 'cover' }}
          />
        </div>
        <div>
        <Image
            className={styles.image__carousel}
            src={galleryImage3}
            alt="Location screenshot"
            style={{ borderRadius: "6px", objectFit: 'cover' }}
          />
        </div>
        <div>
        <Image
            className={styles.image__carousel}
            src={galleryImage1}
            alt="Location screenshot"
            style={{ borderRadius: "6px", objectFit: 'cover'}}
          />
        </div>
        <div>
        <Image
            src={galleryImage2}
            alt="Location screenshot"
            className={styles.image__carousel}
            style={{ borderRadius: "6px", objectFit: 'cover' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
