import { BsArrowReturnLeft } from "react-icons/bs";
import avatar from "/src/assets/images/avatar.png";

interface IProps{
    chat:IChat
}
const Chatcard = ({chat}:IProps) => {

  
  return (
    <div>
      <section className="flex items-center text-slate-600">
        <div className="w-16 flex justify-center">
          {chat.replyTo?.name ? (
            <BsArrowReturnLeft className="rotate-180  text-3xl ml-[14px] " />
          ) : null}

        </div>
        {chat.replyTo?<p className="">@{chat.replyTo.name}</p>:null}
      </section>
      <section className="flex items-center gap-3 ">
        <figure className="min-w-16 w-16 ">
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
        <main className="">
          <div className="flex items-center gap-2">
            <h1 className="text-[#f381c2] font-bold">{chat.author.name}</h1>
            <p className="text-slate-400 text-sm">
              {chat.createdAt.toLocaleString("en-IN")}
            </p>
          </div>
          <p className="text-xs">{chat.message}</p>
        </main>
      </section>
    </div>
  );
};

export default Chatcard;
