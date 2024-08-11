import { IoClose, IoSend } from "react-icons/io5";
import { useAppSelector } from "../../../redux-hooks";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import {
  push,
  ref as firebaseRef,
  serverTimestamp,
  set,
} from "firebase/database";
import { database } from "../../../firebase";

interface Iprops {
  channelId: string;
  usersName: ReplyTo[] | null;
}

const ChatInput = ({ channelId, usersName }: Iprops) => {
  const user = useAppSelector((state) => state.auth.user);
  const [input, setInput] = useState("");
  const [isUsersListHidden, setIsUsersListHidden] = useState(true);
  const [replyingTo, setReplyingTo] = useState<ReplyTo | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async () => {
    if (!user) {
      return toast.warning("Login to send message.", { autoClose: 1500 });
    }
    if (input.trim().length <= 0) {
      return;
    }

    try {
      const messagesRef = firebaseRef(database, "messages");
      const res = await push(messagesRef);
      const _id = res.key;
      if (!_id) {
        return toast.warning("something went wrong.");
      }

      const message: IChat = {
        _id,
        channelId,
        author: {
          _id: user._id,
          imageUrl: user.imageUrl || null,
          name: user.name,
        },
        message: input,
        replyTo:replyingTo,
        createdAt: serverTimestamp(),
      };
      console.log(message);
      const messageRef = firebaseRef(database, `messages/${_id}`);
      await set(messageRef, message);
      setInput("");
      setReplyingTo(null);
    } catch (error) {
      console.log(error);
      const errMsg = error as { message: string };
      toast.error(errMsg.message, { autoClose: 1500 });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(() => {
      if (e.target.value.trim().slice(0, 1) === "@") {
        setIsUsersListHidden(false);
      } else {
        setIsUsersListHidden(true);
      }
      return e.target.value;
    });
  };

  const handleReplyUser = (user: ReplyTo) => {
    setInput("");
    setReplyingTo(user);
    setIsUsersListHidden(true);
    textAreaRef.current?.focus();
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-pinkishPurple p-2 pt-3 flex justify-between items-center gap-2">
      <div className="relative w-full">
        {replyingTo ? (
          <div className="flex items-center justify-between py-1 text-slate-800">
            <p>Replying to @{replyingTo.name}</p>
            <IoClose onClick={()=>setReplyingTo(null)} />
          </div>
        ) : null}
        <textarea
          onChange={handleChange}
          className="w-full bg-stone-50 bg-opacity-25 placeholder:text-stone-50 p-1 focus:outline-none"
          name="chat-input"
          id="chat-input"
          ref={textAreaRef}
          placeholder="Enter your message."
          value={input}
        ></textarea>
        {!isUsersListHidden && (
          <div className="absolute -top-32 left-0 w-1/2 rounded-md h-28 bg-stone-50 bg-opacity-20 backdrop-blur-md text-center text-slate-900">
            {usersName?.map((replyingToUser) => (
              <p onClick={() => handleReplyUser(replyingToUser)}>
                {replyingToUser.name === user?.name ? null : replyingToUser.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <IoSend
        onClick={sendMessage}
        className="text-stone-50 opacity-80 text-5xl"
      />
    </footer>
  );
};

export default ChatInput;
