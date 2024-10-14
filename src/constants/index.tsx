import { portfolio1 } from "../assets";

export const NAV_LIST = [
  {
    title: 'Home',
    id: '#',
  },
  {
    title: 'About',
    id: '#about',
  },
  {
    title: 'Skills',
    id: '#skills',
  },
  {
    title: 'Portfolio',
    id: '#portfolio',
  },
] as const;

export const PORTOFOLIO_LIST = [
  {
    imageAsset: portfolio1,
    title: "Asadeal",
    text: "Developed a full-stack online shop using pure PHP, Bootstrap, and Tailwind CSS for a seamless shopping experience.",
    link: "https://github.com/Asadell/online-shop",
  },
  {
    imageAsset: portfolio1,
    title: "Asadelic",
    text: "Created a Flutter-based social media application focusing on the front-end design and user interface.",
    link: "https://github.com/Asadell/asadelic_social_app",
  },
  {
    imageAsset: portfolio1,
    title: "Glamora",
    text: "Developed Glamora, a beauty and fashion platform that helps users enhance their confidence through personalized solutions and interactive experiences.",
    link: "https://github.com/Asadell/glamora",
  },
];