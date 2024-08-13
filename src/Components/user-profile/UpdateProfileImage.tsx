import { ChangeEvent, useState, useRef } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import editPic from "/src/assets/icons/edit icon.svg";
import { getImageBlob } from "../../helpers/index.ts";
import AvatarEditor from "react-avatar-editor";
import { toast } from "react-toastify";
import { auth } from "../../firebase/index.ts";
import { updateUserImageApi } from "../../API/index.ts";
import { LuLoader2 } from "react-icons/lu";
import { useAppDispatch } from "../../redux-hooks.ts";
import { setUser } from "../../redux/slices/auth.ts";

interface Iprops {
  imageUrl: string;
}

const MAX_FILE_SIZE = 1024 * 1024 * 2; //Max file size 2MB
const UpdateProfileImage = ({ imageUrl }: Iprops) => {
  const editorRef = useRef(null);
  const [selectedProfileImage, setSelectedProfileImage] = useState<
    File | string | null
  >(imageUrl);
  const [imageToRender, setImageToRender] = useState<null | string>(null);
  const [isUploading, setIsUploading] = useState(false);
  const dispatch=useAppDispatch();

  const handleImageChange = async () => {
    if (selectedProfileImage !== imageUrl) {
      try {
        const image = await getImageBlob(editorRef);
        return image;
      } catch (error) {
        console.log(error);
        toast.error("Image not processed.", { autoClose: 1500 });
      }
      return null;
    } else {
      return null;
    }
  };
  const uploadImage = async () => {
    setIsUploading(true);
    const blob = await handleImageChange();
    if (!blob) {
      setIsUploading(false);
      return;
    }
    const token = await auth.currentUser?.getIdToken();
    if (!token) {
      setIsUploading(false);
      return toast.error("user not logged in.");
    }
    const fd=new FormData();
    fd.append('updatedUserImage',blob)
    fd.append('token',token);
    const res = await updateUserImageApi(fd);
    const response: { message: string; user: IUser } = res.data;
    console.log(response.user);
    dispatch(setUser(response.user));
    setIsUploading(false);
    handleResetProfileImage();
  };

  const handleSelectProfileImage = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0] || null;
    setSelectedProfileImage(selectedImage);
    if (selectedImage && selectedImage.size > MAX_FILE_SIZE) {
      setSelectedProfileImage(null);
      console.log("Please select a file less than 2MB.");
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        if (img.width < 128 || img.height < 128) {
          alert("please select image that have minimum width and height 128px");
        }
      };
      const result = reader.result;
      if (typeof result === "string") {
        img.src = result;
        setImageToRender(result);
      }
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };
  const handleResetProfileImage = () => {
    setImageToRender(null);
    setSelectedProfileImage(imageUrl);
  };

  return (
    <div className="image-container  relative ">
      <div className="rounded-full overflow-hidden">
        {selectedProfileImage && (
          <AvatarEditor
            borderRadius={100}
            ref={editorRef}
            image={selectedProfileImage}
            width={140}
            border={0}
            height={140}
            scale={1.2}
          />
        )}
      </div>

      <label htmlFor="profile-image">
        <img
          className="absolute  -right-1 bottom-0 w-10"
          src={editPic}
          alt="edit-icon"
        />
      </label>

      <input
        onChange={handleSelectProfileImage}
        className="hidden"
        type="file"
        name="profile-image"
        id="profile-image"
      />
      {imageToRender && (
        <AiOutlineClose
          onClick={handleResetProfileImage}
          role="button"
          className="text-3xl text-red-500 border-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-50  bg-opacity-80 rounded-full p-[2px]"
        />
      )}
      {imageToRender && (
        <AiOutlineCheck
          onClick={() => uploadImage()}
          className="absolute  -right-1 bottom-0 text-[40px] bg-green-500 rounded-full p-1 text-stone-50"
        />
      )}
      {isUploading && <LuLoader2 className="text-stone-50 animate-spin" />}
    </div>
  );
};
export default UpdateProfileImage;
