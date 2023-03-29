import EventList from "@/components/events/EventList/EventList";
import { getFeaturedEvents } from "@/helpers/api-util";
import React from "react";
import Head from "next/head";

// @ page info.
// Access Page: Public
// SEO friendly: Yes, priority 2
// Page Type: Static Page

// @ page pre-rendering
// Goal: we want to pre-render the page at build time
// Rendering type: SSG (Static Site Generation)
// technique: getStaticProps (function)
const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
