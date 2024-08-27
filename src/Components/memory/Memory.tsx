import { IoAddCircle } from "react-icons/io5";
import image1 from "../../assets/icons/memory mosaic image 1.svg";
import BottomNavigation from "../common/BottomNavigation";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Memory() {
  const navigate=useNavigate();
  return (
    <div className="bg-custom-background-gradient relative  max-w-md mx-auto min-h-screen flex flex-col  ">
      <Header />
      <main className="py-5 flex flex-col gap-5">
        <div className="relative flex justify-center ">
          <img className="" src={image1} alt="image" />
          <div className="absolute top-6 text-center font-semibold">
            <p>Best Day</p>
            <p>Aug 27 2005</p>
          </div>
        </div>
        <div className="relative flex justify-center  ">
          <video
            className="rounded-2xl"
            controls
            src={
              "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/wqmu2jo4hbg4zzlqzspv"
            }
          ></video>
          <div className="absolute top-6 text-center font-semibold">
            <p>Explore</p>
            <p>JAN 14 2005</p>
          </div>
        </div>
        <div className="relative flex justify-center  ">
          <video
            className="rounded-2xl"
            controls
            src={
              "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/jjankm9ddctcrcthfwth"
            }
          ></video>
          <div className="absolute top-6 text-center font-semibold">
            <p>You Lost Here</p>
            <p>AUG 3 2000</p>
          </div>
        </div>
      </main>
      <div className="sticky bottom-14 flex justify-end text-4xl drop-shadow-lg pr-2 cursor-pointer text-stone-50">
        <IoAddCircle onClick={()=>navigate("upload")}/>
      </div>
      <div className="mt-auto sticky bottom-0 w-full max-w-md">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default Memory;
