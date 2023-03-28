import EventList from '@/components/events/EventList/EventList';
import { getFeaturedEvents } from '@/helpers/api-util';
import React from 'react'

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


