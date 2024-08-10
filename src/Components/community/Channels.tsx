import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/icons/wellpeace logo.svg";
import BottomNavigation from "../common/BottomNavigation";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import ChannelCard from "./ChannelCard";
import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { TbFileSad } from "react-icons/tb";
import { getAllChannels } from "../../redux/actions/channels";
function Channels() {
  const { channels, loading } = useAppSelector((state) => state.channnels);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  const filterFunction = (channel: IChannel) => {
    const reg = new RegExp(searchQuery, "gi");
    if (searchQuery.length <= 0) {
      return channel.name;
    }
    return channel.name.match(reg);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleGetAllChannels = () => {
   
    dispatch(getAllChannels());
  };

  useEffect(() => {
    handleGetAllChannels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-custom-background-gradient py-3 px-5 max-w-xl mx-auto min-h-screen">
      <div>
        <div className="px-2">
          <FaChevronLeft className="text-stone-50 cursor-pointer size-5 " />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img src={logo} alt="logo" />
          <p className="font-poppins text-white  text-sm">
            Connect,Learn, and Thrive
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 rounded-full py-1 px-3 bg-transparent border border-900 text-sm text-stone-50  ">
        <input
          className="placeholder:text-center  placeholder:text-stone-50 bg-transparent focus:outline-none w-full p-2"
          type="text"
          onChange={handleSearch}
          placeholder="Find your tribe"
        />
        <FaSearch className="text-xl" />
      </div>

      <header className="flex justify-between items-center mt-9">
        <div className="">
          <p className="font-poppins font-bold text-white">Channels</p>
        </div>
        <IoIosArrowDown className="text-white" />
      </header>
      {!loading && channels && (
        <main className="text-stone-50 no-scrollbar bg-stone-50 bg-opacity-15 rounded-md mt-2 flex flex-col gap-4 min-h-[45vh] max-h-[45vh] overflow-y-auto py-2 ">
          {channels
            .filter((channel) => filterFunction(channel))
            .map((channel) => (
              <ChannelCard key={channel._id} channel={channel} />
            ))}
        </main>
      )}
      {loading && (
        <div className="flex justify-center items-center h-[45vh]">
          <ImSpinner2 className="text-5xl text-stone-50 animate-spin" />
        </div>
      )}
      {!loading && !channels && (
        <section className="flex justify-center items-center h-[45vh]">
          <div className="flex justify-center items-center text-stone-50">
            <TbFileSad className="text-5xl" />
            No channels found
          </div>
        </section>
      )}

      <div className=" flex justify-center mt-5 ">
        <Link
          to={"create"}
          type="submit"
          className="  tracking-wide w-full font-ubuntu font-bold flex justify-center rounded-full bg-[#82A1FD] px-3 py-2 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 "
        >
          Create Your Own Intrest Channel
        </Link>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Channels;
