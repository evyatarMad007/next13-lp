import EventList from "@/components/events/EventList/EventList";
import EventsSearch from "@/components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
