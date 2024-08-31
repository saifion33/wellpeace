import ReactPlayer from "react-player"
import AudioPlayer from "./AudioPlayer"
interface IProps {
  fileType: FilePreviewType,
  fileUrl: string
}

const FilePreview = ({ fileType, fileUrl }: IProps) => {
  return (
    <div className=" w-full flex justify-center">
      {fileType === "image" && <img src={fileUrl} alt="file" />}
      {fileType === "audio" && <AudioPlayer audioUrl={fileUrl} />}
      {fileType === "video" && <div className="w-full h-[88vh] relative flex justify-center ">
        <ReactPlayer url={fileUrl} pip={false} controls width={"100%"}  />
      </div>}
    </div>
  )
}

export default FilePreview