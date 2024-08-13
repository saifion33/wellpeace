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
import BottomNavigation from "../common/BottomNavigation";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../common/ToggleSwitch";
import { useEffect,  useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";

import { logout, setUser } from "../../redux/slices/auth";
import { firebaseSignout } from "../../helpers";
import {
  AiOutlineCheck,
  AiOutlineEdit,
} from "react-icons/ai";
import { updateUsernameApi } from "../../API";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import UpdateProfileImage from "./UpdateProfileImage";

function Profile() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [userNameAfterEdit, setUserNameAfterEdit] = useState("saifi");
  const [isNameEditing, setIsNameEditing] = useState(false);
  
  const handleSignout = async () => {
    const res = await firebaseSignout();
    if (res) {
      dispatch(logout());
      navigate("/");
    }
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameAfterEdit(e.target.value);
  };
  const handleEditNameClick=()=>{
    setIsNameEditing(true);
    user && setUserNameAfterEdit(user?.name)
  }

  const handleUpdateName=async()=>{
    setIsNameEditing(false);
    if (userNameAfterEdit.trim()===user?.name) {
      return;
    }
    if (!auth.currentUser) {
      toast.warning("Please Login")
      return;
    }
    const token=await auth.currentUser.getIdToken();
    const res=await updateUsernameApi({token,updatedUsername:userNameAfterEdit});
    const response:{message:string,user:IUser}=res.data;
    dispatch(setUser(response.user));
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-custom-background-gradient relative flex-wrap pt-6 max-w-md mx-auto ">
      <header className="flex justify-between items-center px-4">
        <FaChevronLeft
          onClick={() => navigate(-1)}
          className="text-stone-50 cursor-pointer "
        />
        <h2 className="font-poppins text-[#FFF5E9] text-center">Profile</h2>
        <MdQuestionMark className="text-stone-50" />
      </header>

      {user && (
        <div className="w-full flex flex-col items-center">
          <UpdateProfileImage
            imageUrl={user.imageUrl || profileIcon}
          />
          {!isNameEditing && (
            <div className="mt-4 flex justify-center items-center gap-3 text-xl  w-full">
              <p className=" text-lg font-semibold text-stone-50 font-montserrat text-center ">
                {user.name}
              </p>
              <AiOutlineEdit onClick={handleEditNameClick} className="bg-blue-500 rounded-full p-[1px] text-xl" />
            </div>
          )}
          {isNameEditing && (
            <div className="mt-4 flex justify-center items-center gap-3 text-xl  w-full">
              <input
                onChange={handleChangeUserName}
                type="text"
                value={userNameAfterEdit}
                className="text-lg font-semibold text-stone-50 font-montserrat text-center bg-slate-50 bg-opacity-20 focus:outline-none"
              />
              <AiOutlineCheck onClick={handleUpdateName} className="bg-green-500 rounded-full p-[1px] text-xl" />
            </div>
          )}
        </div>
      )}

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
