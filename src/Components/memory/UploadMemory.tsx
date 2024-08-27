import { useState } from "react";
import BottomNavigation from "../common/BottomNavigation";
import Header from "./Header";
import UploadButton from "./UploadButton";
import FilePreview from "./preview/FilePreview";
import ImageSlider from "./preview/ImageSlider";
import { IoCloseCircle } from "react-icons/io5";

const UploadMemory = () => {
  const [fileType, setFileType] = useState<FilePreviewType | null>(null);
  const [preview, setPreview] = useState<null | string>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  console.log(fileToUpload);

  const handleReset = () => {
    setFileType(null);
    setPreview(null);
    setFileToUpload(null);
  }

  return (
    <div className="bg-custom-background-gradient h-screen max-h-screen flex justify-center">
      <div className="max-w-md w-full">
        <Header />
        <main className={` h-[88vh] overflow-y-scroll no-scrollbar relative flex justify-center`}>
          {fileToUpload && <IoCloseCircle onClick={handleReset} title="Cancel" className="text-4xl text-red-500 absolute top-4 right-4 cursor-pointer border-2 border-stone-50 rounded-full" />}
          <section>
            {preview && fileType && (
              <FilePreview fileType={fileType} fileUrl={preview} />
            )}
          </section>
          <div className={!preview ? "my-auto" : "fixed bottom-14 flex justify-center w-full"}>
            {
              !preview && <div>
                <ImageSlider />
                <p className="p-3 text-center text-slate-700">
                  Every moment is a story waiting to be cherished. Capture your
                  favorite memory in sound, sight, or motion, and let it live
                  forever.
                </p>
              </div>
            }
            <UploadButton
              fileToUpload={fileToUpload}
              setFileToUpload={setFileToUpload}
              setPreview={setPreview}
              setFileType={setFileType}
            />
          </div>
        </main>
        <footer className="flex justify-center fixed w-full bottom-0 mx-auto max-w-md ">
          <BottomNavigation />
        </footer>
      </div>
    </div>
  );
};

export default UploadMemory;
