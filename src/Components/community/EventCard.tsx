interface Iprops {
  event:IEvent;
}
const EventCard = ({ event}: Iprops) => {
  return <a className="my-3 block " href={event.redirectUrl?event.redirectUrl:'#'}>{event.imageUrl && <img src={event.imageUrl} alt="event" />}</a>;
};

export default EventCard;
