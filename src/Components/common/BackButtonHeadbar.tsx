import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButtonHeadbar = () => {
  const navigate = useNavigate();
  const handleBackIconClick = () => {
    navigate(-1);
  };
  return (
    <header className="w-full bg-stone-50  p-4 bg-opacity-30 backdrop-blur-md">
      <FaChevronLeft
        onClick={handleBackIconClick}
        className="text-stone-50 cursor-pointer"
      />
    </header>
  );
};

export default BackButtonHeadbar;
