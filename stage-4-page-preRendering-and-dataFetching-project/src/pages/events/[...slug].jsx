import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventList from "@/components/events/EventList/EventList";
import { getFilteredEvents } from "@/helpers/api-util";
import ResultsTitle from "@/components/events/EventDetail/ResultsTitle/ResultsTitle";
import ErrorAlert from "@/components/events/ErrorAlert/ErrorAlert";
import Button from "@/components/ui/button/Button";

// @ page info.
// Access Page: Public
// SEO friendly: No
// Page Type: Dynamic Page

// @ page pre-rendering
// Goal: we don't need here any pre-rendering because no SEO is needed.
// Rendering type: CSR (Client Side Rendering) + Dynamic Routing.
// technique: UseSWR (function) + useRouter (function) + useEffect (function) - because we don't know the number of events.

const FilterEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();
  const filterData = router.query.slug;
  const { data, error } = useSWR('https://nextjs-course-15a8a-default-rtdb.firebaseio.com/events.json',
  (url) => fetch(url).then(res => res.json()));

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
          events.push({
              id: key,
              ...data[key]
          });
      }

      setLoadedEvents(events);
    }
  }, [data])
  

  if (!loadedEvents) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 || 
    error
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });


  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};


// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug; // [2021, 12]
//   const filteredYear = filterData[0]; // 2021
//   const filteredMonth = filterData[1]; // 12
//   // +variable say to convert the string to number
//   const numYear = +filteredYear; 
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       }
//     },
//   };
// }

export default FilterEventsPage;
