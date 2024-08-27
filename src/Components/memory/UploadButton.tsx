import { IoAddCircle } from "react-icons/io5";
import { toast } from "react-toastify";

interface IProps {
  fileToUpload: File | null;
  setFileToUpload: (file: File) => void;
  setFileType: (fileType: FilePreviewType) => void;
  setPreview: (preview: string) => void;

}
const maxSizeInMB = 10;
const UploadButton = ({ fileToUpload,setFileToUpload, setFileType, setPreview }: IProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > (maxSizeInMB * 1024 * 1024)) {
        return toast.warning(`File size can't be larger than ${maxSizeInMB} MB`, { autoClose: 2000 })
      }
      const fileType = file.type;
      if (fileType.startsWith("image/")) {
        setFileType("image");
      } else if (fileType.startsWith("video/")) {
        setFileType("video");
      } else if (fileType.startsWith("audio/")) {
        setFileType("audio");
      } else {
        toast.warning("Only Video Audio and Image are allowed.");
      }
      const reader = new FileReader();
      reader.onloadend = () => {

        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFileToUpload(file);
    }
  };

  return (
    <div>
      <label className="bg-stone-50 bg-opacity-20 w-fit mx-auto backdrop-blur-md py-2 px-4 text-xl text-stone-50 cursor-pointer font-semibold rounded-md flex items-center  gap-2 " htmlFor="memory-input">
        {fileToUpload ? "Select Another" : "Upload"} <IoAddCircle className="text-3xl" />
      </label>
      <input
        type="file"
        accept="image/*,video/*,audio/*"
        onChange={handleFileChange}
        className="hidden"
        id="memory-input"
      />
    </div>
  );
};

export default UploadButton;
