import EventList from '@/components/events/EventList/EventList';
import { getFeaturedEvents } from '@/helpers/api-util';
import React from 'react'

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
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();


  return {
    props: {
      events: featuredEvents
    },
  }
}

export default HomePage


