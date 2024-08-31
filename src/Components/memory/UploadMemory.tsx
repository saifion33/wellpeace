import { useState } from "react";
import BottomNavigation from "../common/BottomNavigation";
import Header from "./Header";
import UploadButton from "./UploadButton";
import FilePreview from "./preview/FilePreview";
import ImageSlider from "./preview/ImageSlider";
import { IoCloseCircle } from "react-icons/io5";
import { toast } from "react-toastify";
import MemoryForm from "./MemoryForm";

const UploadMemory = () => {
  const [fileType, setFileType] = useState<FilePreviewType | null>(null);
  const [preview, setPreview] = useState<null | string>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [isFileUploading, setIsFileUploading] = useState(false);
  console.log(fileToUpload);

  const handleReset = () => {
    setFileType(null);
    setPreview(null);
    setFileToUpload(null);
  }
  const handleSubmit = async (values:IMemoryForm) => {
    if (!fileToUpload && !fileType) {
      return toast.error("File not found.");
    }
    setIsFileUploading(true);
    console.log("Uploading file...");
    console.log(values);
    setTimeout(() => {
      setIsFileUploading(false);
    }, 2000);
  }
  
  const handleCancel=()=>{
    setFileToUpload(null);
    setPreview(null);
    setFileType(null);
  }

  return (
    <div className="bg-custom-background-gradient min-h-screen  flex justify-center">
      <div className="max-w-md w-full">
        <Header />
        <main className={` min-h-[88vh] overflow-y-scroll no-scrollbar relative flex justify-center`}>
          {fileToUpload && <IoCloseCircle onClick={handleReset} title="Cancel" className="text-4xl text-red-500 absolute top-4 right-4 cursor-pointer border-2 border-stone-50 rounded-full" />}
          {preview && fileType && (<section className="w-full flex flex-col  bg-stone-50 bg-opacity-20 m-2 rounded p-3 pt-0">
            <FilePreview fileType={fileType} fileUrl={preview} />
            <MemoryForm onSubmit={handleSubmit} handleCancel={handleCancel} fileToUpload={fileToUpload} isFileUploading={isFileUploading} />
          </section>
          )}
          <div className={!preview ? "my-auto" : "fixed bottom-14 flex justify-center w-full"}>
            {
              !preview && <div className="">
                <ImageSlider />
                <p className="p-3 text-center text-slate-700">
                  Every moment is a story waiting to be cherished. Capture your
                  favorite memory in sound, sight, or motion, and let it live
                  forever.
                </p>
              </div>
            }
            <UploadButton
              isFileUploading={isFileUploading}
              fileToUpload={fileToUpload}
              setFileToUpload={setFileToUpload}
              setPreview={setPreview}
              setFileType={setFileType}
            />
          </div>
        </main>
        <footer className="flex justify-center sticky w-full bottom-0 mx-auto max-w-md ">
          <BottomNavigation />
        </footer>
      </div>
    </div>
  );
};

export default UploadMemory;
