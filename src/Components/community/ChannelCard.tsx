import { MdKeyboardArrowRight } from "react-icons/md";

interface Iprops {
  channel: IChannel;
}
const ChannelCard = ({ channel }: Iprops) => {
  return (
    <article className="">
      <div className="flex gap-2 items-center">
        <figure className="w-20 h-20 rounded-full overflow-hidden  flex justify-center items-center">
          <div className="w-12 h-12 overflow-hidden flex justify-center items-center rounded-full">
            <img
              src={channel.imageUrl}
              className="min-w-[70px]"
              alt={channel.name}
            />
          </div>
        </figure>
        <p className="font-poppins text-xs font-bold">{channel.name}</p>
        <MdKeyboardArrowRight className="ml-auto size-7" />
      </div>
    </article>
  );
};

export default ChannelCard;
