import { GoArrowUpRight } from "react-icons/go";
import { heroasadel } from "../../assets";

const Hero = () => {
  return (
    <div className="flex items-center w-full px-[120px] py-16 bg-bgshade">
      <div className="basis-1/2 flex flex-col gap-5 p-10">
        <span className="font-bold">Hey heyy hello &#128075;</span>
        <span className="font-bold text-5xl">I'm a <span className="bg-primary text-transparent bg-clip-text">full stack</span> developer (React.js & Node.js)</span>
        <span className="font-semibold">I'm Asadel, a passionate Full Stack Developer. I've been helping businesses bring their ideas to life through innovative web solutions for 1 years</span>
        <a href="https://github.com/Asadell" target="_blank" className="w-fit flex items-center font-semibold bg-transparent text-primary rounded px-8 py-4 hover:font-bold">
          View Portofolio <GoArrowUpRight color="primary" />
        </a>
      </div>
      <div className="basis-1/2 pl-20">
        <img src={heroasadel} alt="Asadel" className="w-[400px]" />
      </div>
    </div>
  )
}

export default Hero;
