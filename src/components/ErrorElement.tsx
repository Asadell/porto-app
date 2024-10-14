import { NavLink } from "react-router-dom";
import { errorGif } from "../assets";

const ErrorElement = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-image">
      <img src={errorGif} alt="Error Gif" className="w-[400px] h-[300px] mb-10"/>
      <NavLink to='/' className='py-4 px-10 text-primary font-semibold border border-primary rounded-full  hover:bg-primary hover:text-white'>Ke Halaman Utama</NavLink>
    </div>
  );
}

export default ErrorElement;