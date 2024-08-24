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
  const userId = "dljfid";
  const [likes, setLikes] = useState<string[]>([]);
  
  const videosList = [
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
  ];
  const handleLike = () => {
    if (likes.includes(userId)) {
      setLikes(prev=>prev.filter(id=>id!==userId))
      return;
    }
   setLikes(prev=>[...prev,userId])
  };
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleSwipe = (direction: "UP" | "DOWN") => {
    if (direction === "UP" && currentVideoIndex < videosList.length - 1) {
      setCurrentVideoIndex((prevIndex) => {
        setLikes(videosList[prevIndex + 1].likes);
        return prevIndex + 1;
      });
    } else if (direction === "DOWN" && currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => {
        setLikes(videosList[prevIndex - 1].likes);
        return prevIndex - 1;
      });
    }
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

  // Scroll to the current video when the index changes
  useEffect(() => {
    scrollToCurrent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideoIndex]);
  useEffect(() => {
    setLikes(videosList[0].likes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div {...handlers} className="reels-container">
      <AnimatePresence initial={false} custom={currentVideoIndex}>
        <motion.div
          key={videosList[currentVideoIndex].id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="reel-video-wrapper"
        >
          <ReactPlayer
            url={videosList[currentVideoIndex].url}
            playing
            controls={false}
            width="100%"
            height="100%"
          />
          {
            <div className="absolute top-1/2 left-1/2 text-7xl -translate-x-1/2 -translate-y-1/2 text-stone-50">
              <FaCirclePlay />
            </div>
          }
          {
            <div className="absolute bottom-10 right-0  text-3xl pr-3 text-stone-50 space-y-2">
              <div className="w-full">
                <div onClick={() => handleLike()}>
                  {likes.includes(userId) ? (
                    <FaHeart className="text-pink-700" />
                  ) : (
                    <FaRegHeart />
                  )}
                </div>
                <p className="text-sm text-center">{likes.length}</p>
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
