import BottomNavigation from "../../common/BottomNavigation";
import Header from "../Header";
import VideoPlayer from "./VideoPlayer";

const Shorts = () => {
  return (
    <div className="bg-custom-background-gradient relative flex-wrap max-w-md mx-auto min-h-screen flex flex-col ">
      <header className="">
        <Header />
      </header>
      <main className="h-[88vh] ">
        <VideoPlayer />
      </main>
      <footer className="mt-auto ">
        <BottomNavigation />
      </footer>
    </div>
  );
};

export default Shorts;
