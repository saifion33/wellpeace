import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/icons/wellpeace logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Treking from "../../assets/icons/trekking and tourism icon.svg";
import CulturalFests from "../../assets/icons/cultural.svg";
import Games from "../../assets/icons/games icon.svg";
import Music from "../../assets/icons/music icon.svg";
import Dancing from "../../assets/icons/dancing icon.svg";
import Excercise from "../../assets/icons/exercise icon.svg";
import charitableAct from "../../assets/icons/charitable act icon.svg";
import BottomNavigation from "../common/BottomNavigation";
function Channels() {
  return (
    <div className="bg-custom-background-gradient relative flex-wrap pt-6 ">
      <div>
            <div className="absolute left-4">
                <FaChevronLeft className="text-stone-50 cursor-pointer size-5 mr-5" />
            </div>
            <div className="flex justify-center">
                <img src={logo} alt="logo" />
            </div>
            <p className="font-poppins text-white ml-[70px] text-sm">Connect,Learn, and Thrive</p>
      </div>
      <div className="flex justify-center mt-5">
        <input 
          className="rounded-3xl p-3 bg-transparent border border-900 text-sm w-[280px] text-center placeholder-white"
          type="text" 
          placeholder="Find your tribe" 
        />
        <FaSearch className="text-white absolute right-[2.25rem] top-[9rem] size-5" />
      </div>
      <div>
          <div className="mt-9 ml-6">
            <p className="font-poppins font-bold text-white">Channel</p>
          </div>
          <IoIosArrowDown className="text-white absolute right-5 size-5 top-[220px]" />
      </div>
      
      <div className="mt-9">
          <div className="relative flex items-center">
            <img src={Treking} alt="" />
            <p className="font-poppins text-white text-xs font-bold">Trekking and Tourism</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      <div className="mt-1">
          <div className="relative flex items-center ml-4">
            <img src={charitableAct} alt="" />
            <p className="font-poppins text-white text-xs font-bold ml-2">Charitable Act</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      <div className="mt-1">
          <div className="relative flex items-center">
            <img src={CulturalFests} alt="" />
            <p className="font-poppins text-white text-xs font-bold">Cultural Fests</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      <div className="mt-1">
          <div className="relative flex items-center">
            <img src={Games} alt="" />
            <p className="font-poppins text-white text-xs font-bold">Games & Fun Zone</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      
      <div className="mt-1">
          <div className="relative flex items-center">
            <img src={Music} alt="" />
            <p className="font-poppins text-white text-xs font-bold">Music Concerts & Singing</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      <div className="mt-1">
          <div className="relative flex items-center">
            <img src={Dancing} alt="" />
            <p className="font-poppins text-white text-xs font-bold">Dancing</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      <div className="mt-1">
          <div className="relative flex items-center">
            <img src={Excercise} alt="" />
            <p className="font-poppins text-white text-xs font-bold">Excercise & Yoga</p>
            <MdKeyboardArrowRight className="text-white absolute right-5 size-7" />
          </div>
      </div>
      <div className="my-5 flex justify-center ">
          <button type="submit" className="  tracking-wide font-ubuntu font-bold flex justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-xs leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create Your Own Intrest Channel
          </button>
      </div>
      <BottomNavigation/>
    </div>
  )
}

export default Channels
