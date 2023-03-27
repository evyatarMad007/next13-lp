import EventList from "@/components/events/EventList/EventList";
import EventsSearch from "@/components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "@/data/data";
import { useRouter } from "next/router";


import React from "react";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };


  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
