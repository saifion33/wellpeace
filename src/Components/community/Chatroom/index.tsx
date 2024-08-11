import { useEffect, useState } from "react";
import Chatcard from "./Chatcard";
import { useAppSelector } from "../../../redux-hooks";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import { TbFileSad } from "react-icons/tb";
import ChatInput from "./ChatInput";
import { equalTo, orderByChild, query, ref, onValue } from "firebase/database";
import { database } from "../../../firebase";

interface IProps {
  channelId: string;
}

const Chatroom = ({ channelId }: IProps) => {
  const [chats, setChats] = useState<IChat[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [usersName, setUsersName] = useState<ReplyTo[] | null>(null);
  const user = useAppSelector((state) => state.auth.user);
  const channelRef = ref(database, "messages");
  const channelQuery = query(
    channelRef,
    orderByChild("channelId"),
    equalTo(channelId)
  );

  const getChats = () => {
    if (!user) {
      toast.warning("Login Please to access this page.");
      return;
    }
    setIsLoading(true);
    const unsubscribe = onValue(channelQuery, (snapshot) => {
      if (snapshot.exists()) {
        const list: IChat[] = Object.values(snapshot.val());
        setChats(list);
        const unfilteredList = list.map((chat) => {
          return { _id: chat.author._id, name: chat.author.name };
        });
        const ids: string[] = [];
        const listOfUsers: ReplyTo[] = [];
        unfilteredList.forEach((userObj) => {
          const id = userObj._id;
          if (!ids.includes(id)) {
            ids.push(id);
            listOfUsers.push(userObj);
          }
        });
        setUsersName(listOfUsers);
      } else {
        setChats(null);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  };
  useEffect(() => {
    const unsub = getChats();
    if (unsub) {
      return () => {
        unsub();
      };
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);
  return (
    <div className="px-3">
      <main className=" space-y-3 p-3  no-scrollbar overflow-y-auto  max-h-[73vh]">
        {isLoading && (
          <div className="flex justify-center h-[60vh] items-center w-full">
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
      <ChatInput usersName={usersName} channelId={channelId} />
    </div>
  );
};

export default Chatroom;
