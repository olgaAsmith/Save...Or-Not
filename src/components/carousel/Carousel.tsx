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
            src={galleryImage1}
            alt="Location screenshot"
            style={{ borderRadius: "6px", width: '90%', height: '608.633px' }}
          />
        </div>
        <div>
        <Image
            src={galleryImage2}
            alt="Location screenshot"
            style={{ borderRadius: "6px", width: '90%', height: '608.633px' }}
          />
        </div>
        <div>
        <Image
            src={galleryImage3}
            alt="Location screenshot"
            style={{ borderRadius: "6px", width: '90%', height: '608.633px' }}
          />
        </div>
        <div>
        <Image
            src={galleryImage1}
            alt="Location screenshot"
            style={{ borderRadius: "6px", width: '90%', height: '608.633px'}}
          />
        </div>
        <div>
        <Image
            src={galleryImage2}
            alt="Location screenshot"
            style={{ borderRadius: "6px", width: '90%', height: '608.633px' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
