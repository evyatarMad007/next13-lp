import React from "react";
import EventItem from "../EventItem/EventItem";
import classes from './EventList.module.css'

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          key={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
