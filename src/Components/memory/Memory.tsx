import image1 from "../../assets/icons/memory mosaic image 1.svg";
import BottomNavigation from "../common/BottomNavigation";
import Header from "./Header";

function Memory() {
  return (
    <div className="bg-custom-background-gradient relative  max-w-md mx-auto min-h-screen flex flex-col  ">
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
      <div className="mt-auto sticky bottom-0 w-full max-w-md">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default Memory;
