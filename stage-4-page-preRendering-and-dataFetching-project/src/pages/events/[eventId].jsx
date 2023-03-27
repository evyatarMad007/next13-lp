import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/data/data";
import EventSummary from "@/components/events/EventDetail/EventSummary/EventSummary";
import EventLogistics from "@/components/events/EventDetail/EventLogistics/EventLogistics";
import EventContent from "@/components/events/EventDetail/EventContent/EventContent";
import ErrorAlert from "@/components/events/ErrorAlert/ErrorAlert";
import Button from "@/components/ui/button/Button";

const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

  if (!event) {
    return <>
    <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
    </>;
  }
  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics 
      date={event.date}
      address={event.location}
      image={event.image}
      imageAlt={event.title}
      
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};

export default EventDetailPage;
