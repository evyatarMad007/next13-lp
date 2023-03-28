

export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-15a8a-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    console.log('allEvents', allEvents);
    return allEvents.filter((event) => event.isFeatured);
  }