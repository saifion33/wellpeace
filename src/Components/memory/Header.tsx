import { FaChevronLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdImages } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate();
  return (
    <header className="bg-slate-50 bg-opacity-20 backdrop-blur-xl sticky top-0 left-0 z-20 py-2">
      <div className="flex justify-between items-center px-4">
        <div onClick={()=>navigate(-1)} className="">
          <FaChevronLeft className="text-stone-50 cursor-pointer size-5" />
        </div>
        <div>
          <p className="font-poppins text-white text-center">{window.location.href.includes("/shorts")?"Relaxing Shorts":"Memory Mosaic"}</p>
        </div>
        {window.location.href.includes("/shorts") ? (
          <Link to={"/memory"} className="">
            <IoMdImages className="text-2xl text-stone-50" />
          </Link>
        ) : (
          <Link to={"/memory/shorts"} className="">
            <FaCirclePlay className=" text-2xl text-stone-50" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
