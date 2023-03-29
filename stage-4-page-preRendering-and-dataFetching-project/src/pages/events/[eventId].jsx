import React from "react";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import EventSummary from "@/components/events/EventDetail/EventSummary/EventSummary";
import EventLogistics from "@/components/events/EventDetail/EventLogistics/EventLogistics";
import EventContent from "@/components/events/EventDetail/EventContent/EventContent";
import ErrorAlert from "@/components/events/ErrorAlert/ErrorAlert";
import Button from "@/components/ui/button/Button";

// @ page info.
// Access Page: Public
// SEO friendly: Yes, priority 1
// Page Type: Dynamic Page

// @ page pre-rendering
// Goal: we want to pre-render the page at build time
// Rendering type: SSG (Static Site Generation) + Dynamic Routing.
// technique: getStaticProps (function) + getStaticPaths (function) + fallback (true) - because we don't know the number of events.
const EventDetailPage = (props) => {
  const event = props.selectedEvent;
  
 
  if (!event) {
    return (
        <div className="center">
          <p>Loading...</p>
        </div>
    );
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  console.log("🚀 ~ file: [eventId].jsx:50 ~ getStaticProps ~ event:", event)
  
  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    // fallback: false, // false: if the path is not found in the paths array, it will return 404 page.
    fallback: true, // true: if the path is not found in the paths array, it will return the fallback page. But it will not wait until the page is generated.
    // fallback: "blocking", // blocking: if the path is not found in the paths array, it will return the fallback page. But it will wait until the page is generated.
  };
}

export default EventDetailPage;
