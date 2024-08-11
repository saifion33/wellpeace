import { ImSpinner2 } from "react-icons/im";
import { TbFileSad } from "react-icons/tb";
import EventCard from "./EventCard";
import { events } from "../../helpers";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [eventsList, setEventsList] = useState<IEvent[]|null>(null);
  const navigate=useNavigate();
  const {channelId} =useParams();

  const getEvents = async () => {
    if (!channelId) {
      navigate('/');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const list = events[channelId];
      if (!list) {
        setEventsList(null);
        setLoading(false);
        return;
      }
      setLoading(false);
      setEventsList(list);
    }, 1000);
  };

  useEffect(()=>{
    getEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[channelId])

  return (
    <main className="p-3 h-[80vh] max-h-[80vh] overflow-y-auto no-scrollbar">
      {loading && (
        <div className="flex justify-center items-center h-[80vh] w-full">
          <ImSpinner2 className="text-5xl text-stone-50 animate-spin" />
        </div>
      )}
      {!loading && !events && (
        <section className="flex justify-center items-center h-[70vh] w-full">
          <div className="flex justify-center items-center text-stone-50">
            <TbFileSad className="text-5xl" />
            No Events in This Community.
          </div>
        </section>
      )}
      <div className="mx-auto space-y-6 pl-8">
        {!loading &&
          eventsList &&
          eventsList.map((event) => <EventCard key={event._id} event={event} />)}
      </div>
    </main>
  );
};

export default EventsContainer;
