import photo from "@/images/photo.jpg";
import photo2 from "@/images/photo2.jpg";
import photo3 from "@/images/photo3.jpg";
import { StaticImageData } from "next/image";

type Quote = {
  id: number;
  name: string;
  about: string;
  message: string;
  data: string;
  avatar: StaticImageData;
};

export const initialQuotes: Quote[] = [
  {
    id: 1,
    name: "Chris Archer",
    about: "PC Gamer",
    message: "One of my gaming highlights of the year.",
    data: "October 8, 2023",
    avatar: photo,
  },
  {
    id: 2,
    name: "Lilli Cole",
    about: "Product manager",
    message: "The next big thing in the world of streamingand survival games",
    data: "October 9, 2023",
    avatar: photo2,
  },
  {
    id: 3,
    name: "Ba Wong",
    about: "Artist",
    message: "Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.",
    data: "October 10, 2023",
    avatar: photo3,
  },
  {
    id: 4,
    name: "Ben Kewill Jr.",
    about: "PC Gamer",
    message: "Amazing SOS!!! Let's play with us!",
    data: "October 11, 2023",
    avatar: photo,
  },
  {
    id: 5,
    name: "Jenny Paports",
    about: "Homemaker",
    message: "Just see for yourself",
    data: "October 12, 2023",
    avatar: photo2,
  },
];
