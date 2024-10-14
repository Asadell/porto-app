import { useRef } from "react";
import { logo } from "../assets";
import { NAV_LIST } from "../constants";

type Section = typeof NAV_LIST[number]['title'];

const Navbar = () => {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (section : Section) => {
    switch (section) {
      case 'Home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Portfolio':
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-w-full h-[120px] bg-white flex items-center justify-between px-[120px]">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </a>
      <div className="flex items-center">
        <nav className="flex flex-row gap-10">
          {NAV_LIST.map((item, index) => (
            <button key={index} onClick={() => scrollToSection(item.title)} className="text-lg font-semibold hover:font-bold w-20">{item.title}</button>
          ))}
        </nav>
      </div>
      <a href="https://github.com/Asadell" target="_blank" className="flex items-center font-semibold bg-transparent text-primary border border-primary rounded px-8 py-4 hover:bg-primary hover:text-white">
        Contact Me
      </a>
    </div>
  )
}

export default Navbar;
