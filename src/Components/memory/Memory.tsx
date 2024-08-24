import image1 from "../../assets/icons/memory mosaic image 1.svg";
import BottomNavigation from "../common/BottomNavigation";
import Header from "./Header";


function Memory() {
  return (
    <div className="bg-custom-background-gradient relative flex-wrap max-w-md mx-auto ">
    <Header/>
      <div>
        <div className="relative">
          <img
            className="w-[238.5px] h-[341.6px] ml-8 mt-5"
            src={image1}
            alt="image"
          />
          <div className="absolute -top-[119px] left-0 w-full h-full flex flex-col items-center justify-center">
            <p className="font-poppins font-bold text-black">Best Day</p>
            <p className="font-poppins font-bold text-black">AUG 27, 2005</p>
          </div>
        </div>
        <div>
          <video
            className="w-[238.5px] h-[341.6px] ml-8 mt-5 rounded-2xl"
            controls
            src={
              "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/oxvpmklsmwkentauljij"
            }
          ></video>
          <div className="absolute -top-[288px] left-0 w-full h-full flex flex-col items-center justify-center">
            <p className="font-poppins font-bold text-black">Explore</p>
            <p className="font-poppins font-bold text-black">JAN 14, 2005</p>
          </div>
        </div>
        <div>
          <video
            className="w-[238.5px] h-[341.6px] ml-8 mt-5 rounded-2xl"
            controls
            src={
              "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/jjankm9ddctcrcthfwth"
            }
          ></video>
        </div>
        <div>
          <video
            className="w-[238.5px] h-[341.6px] ml-8 mt-5 rounded-2xl"
            controls
            src={
              "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/wqmu2jo4hbg4zzlqzspv"
            }
          ></video>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Memory;
