import EventList from '@/components/events/EventList/EventList';
import { getFeaturedEvents } from '@/data/data';
import React from 'react'

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage


