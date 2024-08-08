import { FaChevronLeft } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import profileIcon from "../../assets/icons/profile icon.svg";
import languageicon from "../../assets/icons/language icon.svg";
import theme from "../../assets/icons/theme icon.svg";
import help from "../../assets/icons/help icon.svg";
import about from "../../assets/icons/about us icon.svg";
import feedback from "../../assets/icons/feedback icon.svg";
import supercoins from "../../assets/icons/supercoin icon.svg";
import logouticon from "../../assets/icons/logout icon .svg";
import editpic from "../../assets/icons/edit icon.svg";
import BottomNavigation from "../common/BottomNavigation";
function Profile() {
  return (
    <div className="bg-custom-background-gradient relative flex-wrap pt-6 ">
      <div>
        <div className="absolute left-7">
          <FaChevronLeft className="text-stone-50 cursor-pointer size-5" />
        </div>
        <div>
          <h2 className="text-[17px] font-poppins text-[#FFF5E9] text-center">
            Profile
          </h2>
        </div>
        <div>
          <MdQuestionMark className="text-white size-5 absolute right-5 top-6" />
        </div>
      </div>
      <div className="relative mt-[2.5rem] p-4">
        <img
          className="w-[77.4px] h-[77.4px] bg-transparent mt-[0.5rem] ml-[100px]"
          src={profileIcon}
          alt="profile-icon"
        />
        <img
          className="absolute w-[20.3px] h-[20.3px] left-[173px] top-[77px]"
          src={editpic}
          alt="edit-icon"
        />
      </div>

      <div>
        <div className="flex items-center">
          <img
            className="w-[77.4px] h-[77.4px] bg-transparent"
            src={languageicon}
            alt="language-icon"
          />
          <p className="text-white font-poppins">Language</p>
        </div>
        <div className="flex items-center -mt-[10px]">
          <img
            className="w-[77.4px] h-[77.4px] bg-transparent"
            src={theme}
            alt="language-icon"
          />
          <p className="text-white font-poppins">Theme</p>
        </div>
        <div className="flex items-center -mt-[10px]">
          <img
            className="w-[77.4px] h-[77.4px] bg-transparent"
            src={help}
            alt="language-icon"
          />
          <p className="text-white font-poppins">Help & Support</p>
        </div>
        <div className="flex items-center -mt-[10px]">
          <img
            className="w-[77.4px] h-[77.4px] bg-transparent"
            src={about}
            alt="language-icon"
          />
          <p className="text-white font-poppins">About us</p>
        </div>
        <div className="flex items-center -mt-[10px]">
          <img
            className="w-[77.4px] h-[77.4px] bg-transparent"
            src={feedback}
            alt="language-icon"
          />
          <p className="text-white font-poppins">Feedback</p>
        </div>
        <div className="flex items-center -mt-[10px]">
          <img
            className="w-[77.4px] h-[77.4px] bg-transparent"
            src={supercoins}
            alt="language-icon"
          />
          <p className="text-white font-poppins">Supercoins</p>
        </div>
        <div className="flex w-full justify-between px-3">
          <div className="flex items-center space-x-2">
            <img src={logouticon} alt="logout-icon" className="size-9" />
            <p className="text-white">Logout</p>
          </div>
          <p className="text-white mt-2">Privacy & Policy</p>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Profile;
