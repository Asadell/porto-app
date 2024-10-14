import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { PORTOFOLIO_LIST } from "../../constants";

const Portfolio = () => {
  return (
    <div className="w-full px-[120px] py-16 bg-white" id="portfolio">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-base">Recent Projects</span>
            <span className="font-bold text-4xl">My Portfolio</span>
          </div>
          <div className="flex justify-center items-center w-48">
            <a href="https://github.com/Asadell" target="_blank"  className="group flex flex-row gap-1 items-center p-5 border rounded-full">
              <FaGithub color="primary" /> 
              <span className="font-semibold group-hover:font-bold">
                Visit My Github
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {PORTOFOLIO_LIST.map((item, index) => (
            <div key={index} className="flex flex-col shadow-lg">
              <div>
                <img src={item.imageAsset} alt="Asadelic" />
              </div>
              <div className="flex flex-col p-8">
                <span className="font-bold text-2xl">{item.title}</span>
                <span className="mt-3 text-base">{item.text}</span>
                <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                  <a href={item.link} target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
