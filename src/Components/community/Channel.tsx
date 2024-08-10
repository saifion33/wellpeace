import { FaChevronLeft } from "react-icons/fa";
// import EventCard from "./EventCard";
import chatRoomIcon from "../../assets/icons/chatroom icon.svg";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux-hooks";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";
import { ImSpinner2 } from "react-icons/im";
import { TbFileSad } from "react-icons/tb";
import { events } from "../../helpers";
import EventsContainer from "./EventsContainer";

const Channel = () => {
  const { channelId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isEventsLoading, setIsEventsLoading] = useState(false);
  const [eventsList, setEventsList] = useState<IEvent[] | null>(null);
  const [channel, setChannel] = useState<IChannel | null>(null);
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const channelRef = ref(database, `/channels/${channelId}`);

  const getEvents = async (channelId: string) => {
    setIsEventsLoading(true);
    setTimeout(() => {
      const list = events[channelId];
      if (!list) {
        setEventsList(null);
        setIsEventsLoading(false);
        return;
      }
      setIsEventsLoading(false);
      setEventsList(list);
    }, 1000);
  };

  const getChannel = async () => {
    try {
      setIsLoading(true);
      const channel = await get(channelRef);
      setIsLoading(false);
      if (channel.exists()) {
        const data: IChannel = channel.val();
        setChannel(data);
        if (!channelId) {
          toast.error("Invalid channel ID.");
          return;
        }
        getEvents(channelId);
      }
    } catch (error) {
      const errMsg = error as { message: string };
      toast.error(errMsg.message, { autoClose: 1500 });
      console.log(error);
    }
  };
  useEffect(() => {
    if (!user) {
      toast.info("Login Please to access this feature.");
      navigate("/login");
      return;
    }

    getChannel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative bg-custom-background-gradient min-h-screen text-stone-50 py-4">
      {isLoading && (
        <div className="flex justify-center items-center h-[90vh]">
          <ImSpinner2 className="text-5xl text-stone-50 animate-spin" />
        </div>
      )}
      {!isLoading && !channel && (
        <section className="flex justify-center items-center h-[45vh]">
          <div className="flex justify-center items-center text-stone-50">
            <TbFileSad className="text-5xl" />
            Channel Not Found !
          </div>
        </section>
      )}
      {!isLoading && channel && (
        <div>
          <header className="flex items-center px-2">
            <FaChevronLeft onClick={() => navigate(-1)} />
            <div className="flex items-center justify-center ml-[16%]">
              <figure className="w-20 h-20 rounded-full overflow-hidden  flex justify-center items-center">
                <div className="w-12 h-12 overflow-hidden flex justify-center items-center rounded-full">
                  <img
                    src={channel.imageUrl}
                    className="min-w-[70px]"
                    alt="Trekking"
                  />
                </div>
              </figure>
              <p>{channel.name}</p>
            </div>
          </header>
          <EventsContainer events={eventsList} loading={isEventsLoading} />
          <footer className="fixed bottom-0 left-0 w-full">
            <div className="sticky bottom-0 left-0 w-full  ">
              <button className="flex justify-center bg-[#82a1fd] w-full  p-2 items-center text-stone-50 gap-2">
                <img src={chatRoomIcon} alt="chat room" />
                <p>Chatroom</p>
              </button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Channel;
