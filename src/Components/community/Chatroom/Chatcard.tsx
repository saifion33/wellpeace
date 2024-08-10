import { BsArrowReturnLeft } from "react-icons/bs";
import avatar from "/src/assets/images/avatar.png";

interface IProps {
  chat: IChat;
}
const Chatcard = ({ chat }: IProps) => {
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
          {chat.author.imageUrl ? (
            <img
              className="max-w-full"
              src={chat.author.imageUrl}
              alt={chat.author.name}
            />
          ) : (
            <img className="max-w-full" src={avatar} alt="avatar" />
          )}
        </figure>
        <main className="w-full">
          <div className="flex items-center gap-2 w-full">
            <h1 className="text-[#f381c2] font-bold">{chat.author.name}</h1>
            <p className="text-slate-500 text-sm">{createdAt}</p>
           
          </div>
          <p className="text-sm">{chat.message}</p>
        </main>
      </section>
    </div>
  );
};

export default Chatcard;
