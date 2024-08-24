import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";

const VideoPlayer = () => {
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"UP" | "DOWN" | null>(
    null
  );
  const userId = "dljfid";
  const [videosList, setvideosList] = useState([
    {
      id: 1,
      url: "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/wellpeace-anime-night_xbdtuj",
      likes: ["kdfj"],
      comments: [{ _id: "1", content: "", user: { _id: "2" } }],
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/wellpeace-waterfall-moon_jdma5o",
      likes: ["dljfid", "dkjfifej"],
      comments: [{ _id: "1", content: "", user: { _id: "2" } }],
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dwhwlxysm/video/upload/f_auto:video,q_auto/wellpeace-sunrise_h8p8ea",
      likes: ["dljfid", "dkjfifej", "kdjf"],
      comments: [{ _id: "1", content: "", user: { _id: "2" } }],
    },
  ]);

  const handleLike = (videoId: number) => {
    const vid = videosList.find((v) => v.id == videoId);
    if (vid?.likes.includes(userId)) {
      vid.likes = vid.likes.filter((id) => id != userId);
    } else {
      vid?.likes.push(userId);
    }
    vid && setvideosList((prev) => [...prev, vid]);
  };
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const getAnimationProps = () => {
    if (swipeDirection === "UP") {
      return {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
        transition:{ duration: 0.5 }
      };
    } else if (swipeDirection === "DOWN") {
      return {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
        transition:{ duration: 0.5 }
      };
    }
    return {}; // Default case (shouldn't really be needed)
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
          return videosList.length-1;
        }
        return prevIndex - 1;
      });
    }
    setIsPlaying(true);
  };

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe("UP"),
    onSwipedDown: () => handleSwipe("DOWN"),
    trackMouse: true,
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
          key={videosList[currentVideoIndex].id}
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
            className="object-cover"
          />
          {!isPlaying && (
            <div className="absolute top-1/2 left-1/2 text-7xl -translate-x-1/2 -translate-y-1/2 text-stone-50">
              <FaCirclePlay />
            </div>
          )}
          {
            <div className="absolute bottom-10 right-0  text-3xl pr-3 text-stone-50 space-y-2">
              <div className="w-full">
                <div onClick={() => handleLike(currentVideoIndex + 1)}>
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
