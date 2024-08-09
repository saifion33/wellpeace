import { FaSearch } from "react-icons/fa";
  import posterImage from "../assets/icons/poster.svg";

import { FaAngleRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import chart from "../assets/images/chat.svg";
import events from "../assets/images/event.svg";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "./common/BottomNavigation";
import ProductContainer from "./products/ProductContainer";
import { useAppDispatch, useAppSelector } from "../redux-hooks";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions/products";

function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {auth,products}= useAppSelector((state) => state);
  const user=auth.user;
  const {loading,random_4_products}=products
  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    navigate('/user')
  };

  return (
    <div className="bg-custom-background-gradient flex flex-col items-center ">
      <div className=" w-full max-w-md p-4 mb-6">
        <header className="flex justify-between items-center mb-3 sticky top-0 left-0 bg-lightBlue bg-opacity-40 p-2 z-10 backdrop-blur-md">
          <div>
            <h2 className="text-left drop-shadow-md text-[17px] font-poppins text-[#FFF5E9]">
              Welcome!
            </h2>
            <h2 className="text-left font-poppins font-bold -mt-1 text-[12px] text-[#000000]">
              Connect.Learn.Thrive
            </h2>
          </div>
          <div
            onClick={() => {
              user ? handleLogout() : navigate("/signup");
            }}
            className="bg-stone-50 cursor-pointer bg-opacity-40 backdrop-blur-sm w-9 h-9 flex justify-center items-center text-slate-700  px-1 pt-1 pb-[2px] text-3xl rounded-sm"
          >
            {user?.imageUrl ? (
              <img src={user.imageUrl} alt={user.name} />
            ) : user?.name ? (
              <h1 className="flex justify-center items-center w-full ">{user.name.slice(0, 1).toUpperCase()}</h1>
            ) : (
              <FaUser className="text-stone-50" />
            )}
          </div>
        </header>
        <div className="w-full flex justify-between items-center rounded-md p-1 bg-stone-50 px-2">
          <input
            placeholder="Explore"
            id="search-input"
            name="search-input"
            type="text"
            required
            className=" w-full bg-stone-50 text-[#8b8b8b] placeholder:text-[#8b8b8b] focus:outline-none"
          />
          <FaSearch className="text-xl text-[#8b8b8b]" />
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <div className="w-[88%] p-2 h-32 bg-home-page-header-gradient mt-7 flex items-center rounded-md">
              <p className="font-poppins text-white text-sm w-2/3 ">
                Peaceful minds create a healthy world
              </p>
              <img
                src={posterImage}
                alt="image icon"
                className="w-32 drop-shadow absolute right-0 top-0"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-3 ">
            <GoDotFill className="text-white size-2" />
            <GoDotFill className="text-white size-2" />
            <GoDotFill className="text-white size-2" />
          </div>
        </div>
        <div className="mt-5 flex justify-between">
          <p className="font-poppins text-stone-50 text-xs">
            Moments of Happiness, Just for You
          </p>
          <FaAngleRight className="text-white size-3" />
        </div>
        <div className="mt-5 overflow-hidden rounded-[33px]">
          <video width="600" controls className="">
            <source
              src={
                "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/video/yef2flxkxxlr8j5s0b9i"
              }
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className=" font-poppins text-stone-50 text-xs ">
            Engage & Enjoy Discover Events and Chat with Peers
          </p>
          <FaAngleRight className="text-white size-3" />
        </div>

        <div className=" w-full flex justify-center items-center space-x-2 mt-4 ">
          <div className="w-1/2 bg-stone-50 h-[132px] bg-opacity-20 rounded-md text-stone-50 space-y-3 text-xs">
            <img src={events} alt="Events" />
            <p>Events</p>
          </div>
          <div className="w-1/2 bg-stone-50 h-[132px] bg-opacity-20 rounded-md text-stone-50 space-y-3 text-xs">
            <img src={chart} alt="Chart" />
            <p>Chat Rooms</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <p className=" font-poppins text-stone-50 text-xs ">
            Mental Health Awareness
          </p>
          <FaAngleRight className="text-white size-3" />
        </div>

        <div className="mt-5 overflow-hidden rounded-[33px]">
          <video width="600" controls className="">
            <source
              src={
                "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/video/wxvd8f2zu3obutr3hhwu"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex items-center justify-center w-full mt-3 ">
          <GoDotFill className="text-white size-2" />
          <GoDotFill className="text-white size-2" />
          <GoDotFill className="text-white size-2" />
        </div>
        <div>
          <div className="flex justify-between items-center mt-5">
            <p className=" font-poppins text-stone-50 text-xs ">Products</p>
            <FaAngleRight onClick={()=>navigate('/products')} className="text-white size-3" />
          </div>
          <ProductContainer loading={loading} products={random_4_products || null} />
        </div>
      </div>
      <footer className="max-w-md w-full fixed bottom-0 flex justify-center items-center">
        <BottomNavigation />
      </footer>
    </div>
  );
}

export default Home;
