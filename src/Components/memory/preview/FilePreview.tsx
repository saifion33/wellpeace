import ReactPlayer from "react-player"

interface IProps {
  fileType: FilePreviewType,
  fileUrl: string
}

const FilePreview = ({ fileType, fileUrl }: IProps) => {
  return (
    <div>
      {fileType === "image" && <img src={fileUrl} alt="file" />}
      {fileType === "audio" && <audio src={fileUrl} controls />}
      {fileType === "video" && <div className="w-full h-[88vh] relative flex justify-center ">
        <ReactPlayer url={fileUrl} pip={false} controls width={"100%"} height={"100%"} />
      </div>}
    </div>
  )
}

export default FilePreview