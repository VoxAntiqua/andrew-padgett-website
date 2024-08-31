import React from "react";
import { Event, TimeLocation } from "@/app/lib/definitions";

interface EventsListProps {
    events: Event[],
    onSelectEvent: (event: Event) => void
}

const EventsList: React.FC<EventsListProps> = ({events, onSelectEvent}) => {
      // Function to format date range or single date
    const formatDate = (times:{time:string}[]) => {
        const dates = times.map((t) => new Date(t.time))
        const uniqueDates = Array.from(new Set(dates.map((date) => date.toDateString()))).sort();
        if (uniqueDates.length === 1) {
            return dates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        } else {
            return `${dates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${
                dates[dates.length - 1].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
              }`;
        }
    }

    return (
        <ul className="w-1/2 space-y-4">
          {events.map((event) => (
            <li key={event.id} className="cursor-pointer" onClick={() => onSelectEvent(event)}>
              <h3 className="font-semibold">
                {formatDate(event.timesLocations)} - {event.title}
              </h3>
              <p className="text-gray-600">{event.ensemble.name}</p>
            </li>
          ))}
        </ul>
      );
}

export default EventsList