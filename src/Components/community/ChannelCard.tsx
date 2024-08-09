import { MdKeyboardArrowRight } from "react-icons/md";

interface Iprops {
  channel: IChannel;
}
const ChannelCard = ({ channel }: Iprops) => {
  return (
    <article className="">
      <div className="flex gap-2 items-center">
        <img src={channel.imageUrl} className={`${channel.name=='Charitable Act'?'w-14 h-14 ml-3':'w-20 h-20'}`} alt={channel.name} />
        <p className="font-poppins text-xs font-bold">{channel.name}</p>
        <MdKeyboardArrowRight className="ml-auto size-7" />
      </div>
    </article>
  );
};

export default ChannelCard;
