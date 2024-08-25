import image1 from "../../assets/icons/memory mosaic image 1.svg";
import BottomNavigation from "../common/BottomNavigation";
import Header from "./Header";

function Memory() {
  return (
    <div className="bg-custom-background-gradient relative flex-wrap max-w-md mx-auto ">
      {/* <video
        className="w-[238.5px] h-[341.6px] ml-8 mt-5 rounded-2xl"
        controls
        src={
          "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/oxvpmklsmwkentauljij"
        }
      ></video>
      <video
        className="w-[238.5px] h-[341.6px] ml-8 mt-5 rounded-2xl"
        controls
        src={
          "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/jjankm9ddctcrcthfwth"
        }
      ></video>
      <video
        className="w-[238.5px] h-[341.6px] ml-8 mt-5 rounded-2xl"
        controls
        src={
          "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/v1/wellpeace/videos/wqmu2jo4hbg4zzlqzspv"
        }
      ></video> */}
      <Header />
      <div>
        <div className="relative">
          <img
            className="w-[238.5px] h-[341.6px] ml-8 mt-5"
            src={image1}
            alt="image"
          />
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Memory;
