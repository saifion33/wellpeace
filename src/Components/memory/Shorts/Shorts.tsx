import { useEffect, useState } from "react";
import BottomNavigation from "../../common/BottomNavigation";
import Header from "../Header";
import VideoPlayer from "./VideoPlayer";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import { getShortVideoApi } from "../../../API";
const storedVideos = sessionStorage.getItem("shortVideos");
const Shorts = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState<IVideo[] | null>(
    storedVideos ? JSON.parse(storedVideos) : null
  );
  const getAllVideos = async () => {
    try {
      setIsLoading(true);
      const token = await auth.currentUser?.getIdToken();

      if (token) {
        const res = await getShortVideoApi(token);
        console.log(res);
        const videoList: IVideo[] = res.data.videos;
        setVideos(videoList);
        sessionStorage.setItem("shortVideos", JSON.stringify(videoList));
        setIsLoading(false);
        return;
      }
      toast.warning("Please Login");
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      const errMsg = error as { message: string };
      toast.error(errMsg.message);
      console.log(error);
    }
  };
  useEffect(() => {
    if (!storedVideos) {
      getAllVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-custom-background-gradient relative flex-wrap max-w-md mx-auto min-h-screen flex flex-col ">
      <header className="">
        <Header />
      </header>
      <main className="h-[88vh] ">
        {!isLoading && videos && <VideoPlayer videosList={videos} />}
        {isLoading && (
          <div className="h-full w-full flex justify-center items-center">
            <div className="text-center w-full ">
              <ImSpinner2 className="text-5xl text-stone-50 animate-spin mx-auto" />
              <p className="mt-3 text-stone-50">
                Please Wait. Videos is loading
              </p>
            </div>
          </div>
        )}
      </main>
      <footer className="mt-auto ">
        <BottomNavigation />
      </footer>
    </div>
  );
};

export default Shorts;
