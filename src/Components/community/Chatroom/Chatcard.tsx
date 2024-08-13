import { BsArrowReturnLeft } from "react-icons/bs";
import avatar from "/src/assets/images/avatar.png";
import { getUserInfoApi } from "../../../API";
import { useEffect, useState } from "react";

interface IProps {
  chat: IChat;
}

interface IUserInfo{
  _id: string;
  name: string;
  imageUrl: string |null;
}
const Chatcard = ({ chat }: IProps) => {
  const [user, setUser] = useState<IUserInfo>(chat.author);
  const getUserInfo = async (_id:string) => {
    const user = await getUserInfoApi(_id);
    setUser(user.data.user);
  };
  useEffect(() => {
    getUserInfo(chat.author._id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const createdAt = new Date(Number(String(chat.createdAt))).toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  return (
    <div>
      <section className="flex items-center text-slate-600">
        <div className="w-16 flex justify-center">
          {chat.replyTo?.name ? (
            <BsArrowReturnLeft className="rotate-180  text-3xl ml-[14px] " />
          ) : null}
        </div>
        {chat.replyTo ? <p className="">@{chat.replyTo.name}</p> : null}
      </section>
      <section className="flex items-center gap-3 ">
        <figure className="min-w-12 w-12 ">
          {user.imageUrl ? (
            <img
              className="max-w-full"
              src={user.imageUrl}
              alt={user.name}
            />
          ) : (
            <img className="max-w-full" src={avatar} alt="avatar" />
          )}
        </figure>
        <main className="w-full">
          <div className="flex items-center gap-2 w-full">
            <h1 className="text-[#f381c2] font-bold">{user.name}</h1>
            <p className="text-slate-500 text-xs">{createdAt}</p>
          </div>
          <p className="text-sm">{chat.message}</p>
        </main>
      </section>
    </div>
  );
};

export default Chatcard;
