import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

interface Iprops{
  videosList:IVideo[];
}
const VideoPlayer = ({videosList}:Iprops) => {
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"UP" | "DOWN" | null>(
    null
  );
  const userId = "dljfid";
  
  const handleLike = (e: React.MouseEvent<HTMLDivElement>, videoId:string) => {
    e.stopPropagation();
    const vid = videosList.find((v) => v._id == videoId);
    if (vid?.likes.includes(userId)) {
      vid.likes = vid.likes.filter((id) => id != userId);
    } else {
      vid?.likes.push(userId);
    }
    
  };
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const getAnimationProps = () => {
    if (swipeDirection === "UP") {
      return {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
        transition: { duration: 0.5 },
      };
    } else if (swipeDirection === "DOWN") {
      return {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
        transition: { duration: 0.5 },
      };
    }
    return {};
  };

  const handleSwipe = (direction: "UP" | "DOWN") => {
    if (direction === "UP") {
      setSwipeDirection("UP");
      setCurrentVideoIndex((prevIndex) => {
        console.log(prevIndex);
        if (prevIndex >= videosList.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    } else if (direction === "DOWN") {
      setSwipeDirection("DOWN");
      setCurrentVideoIndex((prevIndex) => {
        if (prevIndex == 0) {
          return videosList.length - 1;
        }
        return prevIndex - 1;
      });
    }
    setIsPlaying(true);
  };
  const handleonswipe = (data: SwipeEventData) => {
    console.log(data);
  };

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe("UP"),
    onSwipedDown: () => handleSwipe("DOWN"),
    trackMouse: true,
    onSwiping: (data) => handleonswipe(data),
  });
  const scrollToCurrent = () => {
    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleVideoClick = () => {
    setIsPlaying((prev) => !prev);
  };
  const onVideoReady=()=>{
    console.log("onVideoReady");
  }
  const handleStartBuffering=()=>{
    setIsBuffering(true);
    console.log("video is buffering");
  }
  const handleEndBuffering=()=>{
    setIsBuffering(false);
    console.log("video buffering is end");
  }


  // Scroll to the current video when the index changes
  useEffect(() => {
    scrollToCurrent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideoIndex]);

  return (
    <div
      {...handlers}
      className="reels-container flex justify-center items-center relative h-[88vh] overflow-y-hidden "
    >
      <AnimatePresence initial={false} custom={currentVideoIndex}>
        <motion.div
          key={videosList[currentVideoIndex]._id}
          //   initial={{ opacity: 0, y: 100 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   exit={{ opacity: 0, y: -100 }}
          //   transition={{ duration: 0.5 }}
          {...getAnimationProps()}
          onClick={handleVideoClick}
          className="reel-video-wrapper bg-black w-full h-full absolute top-0 left-0 flex justify-center items-center"
        >
          <ReactPlayer
            url={videosList[currentVideoIndex].url}
            playing={isPlaying}
            controls={false}
            width="100%"
            height="100%"
            loop
            className="object-cover"
            onReady={()=>onVideoReady()}
            onBuffer={handleStartBuffering}
            onBufferEnd={handleEndBuffering}
            fallback={<div className="flex justify-center items-start h-full text-stone-50">Video is loading</div>}
          />
          {!isPlaying && (
            <div className="absolute top-1/2 left-1/2 text-7xl -translate-x-1/2 -translate-y-1/2 text-stone-50">
              <FaCirclePlay />
            </div>
          )}
          {isBuffering && <div className="absolute top-1/2 left-1/2 text-5xl -translate-x-1/2 -translate-y-1/2 text-stone-50">
              <ImSpinner2 className="animate-spin"/>
            </div>}
          {
            <div className="absolute bottom-10 right-0  text-3xl pr-3 text-stone-50 space-y-2">
              <div className="w-full">
                <div onClick={(e) => handleLike(e, videosList[currentVideoIndex]._id)}>
                  {videosList[currentVideoIndex].likes.includes(userId) ? (
                    <FaHeart className="text-pink-700" />
                  ) : (
                    <FaRegHeart />
                  )}
                </div>
                <p className="text-sm text-center">
                  {videosList[currentVideoIndex].likes.length}
                </p>
              </div>
              <div className="w-full">
                <TbMessageCircle />
                <p className="text-sm text-center">
                  {videosList[currentVideoIndex].comments.length}
                </p>
              </div>
              <div className="w-full">
                <BsFillSendFill />
              </div>
            </div>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VideoPlayer;
