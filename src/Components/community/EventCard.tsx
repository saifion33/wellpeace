interface Iprops {
  url: string | null;
}
const EventCard = ({ url }: Iprops) => {
  return <div>{url && <img src={url} alt="event" />}</div>;
};

export default EventCard;
