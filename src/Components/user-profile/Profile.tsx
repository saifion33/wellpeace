import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdQuestionMark } from "react-icons/md";
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
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../common/ToggleSwitch";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";

import { logout } from "../../redux/slices/auth";
import { firebaseSignout } from "../../helpers";
import { auth } from "../../firebase";
function Profile() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch=useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleSignout=async()=>{
   const res=await firebaseSignout();
   if (res) {
    dispatch(logout());
    navigate('/');
   }
  }

  useEffect(()=>{
    const user=auth.currentUser
    console.log(user);
  },[])
  return (
    <div className="bg-custom-background-gradient relative flex-wrap pt-6 ">
      <header className="flex justify-between items-center px-4">
        <FaChevronLeft
          onClick={() => navigate(-1)}
          className="text-stone-50 cursor-pointer "
        />
        <h2 className="font-poppins text-[#FFF5E9] text-center">Profile</h2>
        <MdQuestionMark className="text-stone-50" />
      </header>
      <div className="relative flex  justify-center items-center p-4 mt-10">
        <div className="relative w-fit">
          {user?.imageUrl ? (
            <img src={user.imageUrl} alt={user.name} />
          ) : user?.name ? (
            <h1 className="w-20 h-20 rounded-full flex justify-center items-center bg-stone-50 bg-opacity-30 text-5xl">{user.name.slice(0, 1).toUpperCase()}</h1>
          ) : (
            <img
              className="w-20 h-20 bg-transparent "
              src={profileIcon}
              alt="profile-icon"
            />
          )}
          <img
            className="absolute  -right-3 bottom-0"
            src={editpic}
            alt="edit-icon"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between pr-2 ">
          <div className="flex items-center">
            <img
              className="w-[77.4px] h-[77.4px] bg-transparent"
              src={languageicon}
              alt="language-icon"
            />
            <p className="text-white font-poppins">Language</p>
          </div>
          <MdOutlineKeyboardArrowRight className="text-2xl bg-slate-900 p-1 rounded text-stone-50" />
        </div>
        <div className="flex items-center justify-between pr-2">
          <div className="flex items-center">
            <img
              className="w-[77.4px] h-[77.4px] bg-transparent"
              src={theme}
              alt="language-icon"
            />
            <p className="text-white font-poppins">Theme</p>
          </div>
          <div>
            <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
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
          <div onClick={handleSignout} className="flex items-center space-x-2">
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
