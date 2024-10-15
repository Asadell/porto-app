import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
// import { PORTOFOLIO_LIST } from "../../constants";
import { portfolio1 } from "../../assets";
import portfolio2 from '../../assets/portfolio1.png';
import portfolio3 from '../../../public/assets/portfolio1.png'

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
        {/* <div className="grid grid-cols-3 gap-5">
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
        </div> */}
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col shadow-lg">
            <div>
              <img src={portfolio1} alt="Asadelic" />
            </div>
            <div className="flex flex-col p-8">
              <span className="font-bold text-2xl">Import from index src assets</span>
              <span className="mt-3 text-base">tetxt</span>
              <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                <a href="" target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg">
            <div>
              <img src={portfolio2} alt="Asadelic" />
            </div>
            <div className="flex flex-col p-8">
              <span className="font-bold text-2xl">Import Manual inside file</span>
              <span className="mt-3 text-base">tetxt</span>
              <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                <a href="" target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg">
            <div>
              <img src={portfolio3} alt="Asadelic" />
            </div>
            <div className="flex flex-col p-8">
              <span className="font-bold text-2xl">Import Manual from public</span>
              <span className="mt-3 text-base">tetxt</span>
              <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                <a href="" target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col shadow-lg">
            <div>
              <img src="../../assets/portfolio1.png" alt="Asadelic" />
            </div>
            <div className="flex flex-col p-8">
              <span className="font-bold text-2xl">Relative URL src assets</span>
              <span className="mt-3 text-base">tetxt</span>
              <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                <a href="" target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg">
            <div>
              <img src="/assets/portfolio1.png" alt="Asadelic" />
            </div>
            <div className="flex flex-col p-8">
              <span className="font-bold text-2xl">Relative URL Public Folder</span>
              <span className="mt-3 text-base">tetxt</span>
              <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                <a href="" target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg">
            <div>
              <img src="../../../public/assets/portfolio1.png" alt="Asadelic" />
            </div>
            <div className="flex flex-col p-8">
              <span className="font-bold text-2xl">Relative URL Public Folder FULL</span>
              <span className="mt-3 text-base">tetxt</span>
              <div className="group mt-6 flex flex-row items-center gap-2 w-fit">
                <a href="" target="_blank"  className="font-semibold group-hover:font-bold">View In Github</a>  <GoArrowUpRight/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
