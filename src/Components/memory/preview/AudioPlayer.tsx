import { useEffect, useRef, useState } from "react";
import { FaPauseCircle, FaPlay } from "react-icons/fa";

interface IProps {
    audioUrl: string;
}
const AudioPlayer = ({ audioUrl }: IProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
    const [audioCurrentTime, setAudioCurrentTime] = useState(0);
    const [progress, setProgress] = useState<number>(0)

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        return formattedTime;
    }
    const handleLoadingFinish = () => {
        setAudioDuration(audioRef.current?.duration || 0);
    }


    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause()
            setIsPlaying(false);
        } else {
            audioRef.current?.play()
            setIsPlaying(true);
        }
    }

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current?.currentTime || 0
        setAudioCurrentTime(currentTime);
        if (audioRef.current?.duration) {
            setProgress((currentTime / audioRef.current.duration) * 100)
        }
    }

    const handleAudioEnded = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
        setProgress(0);
        setAudioCurrentTime(0);
    }

    useEffect(() => {
        const audioTag = audioRef.current
        if (audioTag) {
            setAudioDuration(audioTag.duration);
            audioTag.addEventListener("canplaythrough", handleLoadingFinish);
            audioTag.addEventListener("timeupdate", handleTimeUpdate);
            audioTag.addEventListener("ended",handleAudioEnded);
        }
        return () => {
            audioTag?.removeEventListener('canplaythrough', handleLoadingFinish);
            audioTag?.removeEventListener("timeupdate", handleTimeUpdate);
            audioTag?.removeEventListener("ended", handleAudioEnded);
        }
    }, []);
    
    return (
        <div className="w-[98%] mt-20 bg-stone-50 bg-opacity-25 rounded-md p-4 ">
            <div className="">
                <div className={`${isPlaying?'animate-spin-slow':'animate-none'} w-40 h-40 bg-stone-50 bg-opacity-50  rounded-full mx-auto border-[1px] border-slate-400 relative flex justify-center items-center`}>
                    <div className="h-9 w-9 bg-stone-50 rounded-full border border-slate-400">
                    </div>
                    <span className="absolute top-10 left-10 h-2 w-2 bg-slate-900 bg-opacity-15 rounded-full"></span>
                </div>
            </div>
            <div className="text-stone-50 mt-6 flex justify-between items-center gap-2">
                <div onClick={handlePlayPause} className="cursor-pointer w-fit">{isPlaying ? <FaPauseCircle /> : <FaPlay />}</div>
                <div className="flex items-center gap-2 w-full">
                    <p>{formatTime(audioCurrentTime)}</p>
                    <div className="w-[80%] bg-stone-50 bg-opacity-70 h-3 rounded-lg flex items-center border border-slate-500">
                        <div style={{ width: `${progress}%`}} className="h-full rounded-full bg-pinkishPurple"></div>
                    </div>
                    <p>{formatTime(audioDuration)}</p>
                </div>
                <div>

                </div>
            </div>

            <audio ref={audioRef} src={audioUrl} />
        </div>
    )
}

export default AudioPlayer