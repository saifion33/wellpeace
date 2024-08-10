import { useEffect, useState } from "react";
import Chatcard from "./Chatcard";
import { useAppSelector } from "../../../redux-hooks";
import { toast } from "react-toastify";
import { chatsList } from "../../../helpers";
import { ImSpinner2 } from "react-icons/im";
import { TbFileSad } from "react-icons/tb";

const Chatroom = () => {
  const [chats, setChats] = useState<IChat[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const getChats = () => {
    if (!user) {
      return toast.warning("Login Please to access this page.");
    }
    setIsLoading(true);
    setTimeout(() => {
      setChats(chatsList);
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="px-3">
      <main className="flex flex-wrap gap-5 p-3 h-[86vh] max-h-[86vh] overflow-y-auto no-scrollbar bg-stone-50 bg-opacity-20 rounded-md ">
        {isLoading && (
          <div className="flex justify-center items-center h-[80vh] w-full">
            <ImSpinner2 className="text-5xl text-stone-50 animate-spin" />
          </div>
        )}
        {!isLoading && !chats && (
          <section className="flex justify-center items-center h-[70vh] w-full">
            <div className="flex justify-center items-center text-stone-50">
              <TbFileSad className="text-5xl" />
              No Chats in This ChatRoom.
            </div>
          </section>
        )}
        {!isLoading &&
          chats &&
          chats.map((chat) => <Chatcard chat={chat} key={chat._id} />)}
      </main>
    </div>
  );
};

export default Chatroom;
