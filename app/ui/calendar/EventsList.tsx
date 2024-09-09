import React from "react";
import { Event } from "@/app/lib/definitions";
import { formatEventLocations } from "@/app/lib/utils";

interface EventsListProps {
  events: Event[];
  pastEvents: Event[];
  onSelectEvent: (event: Event) => void;
  selectedEvent: Event | null;
}

const EventsList: React.FC<EventsListProps> = ({ events, pastEvents, onSelectEvent, selectedEvent }) => {
  // Function to format a single date
  const formatDate = (time: string) => {
    const date = new Date(time);
    return {
      month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      day: date.getDate(),
    };
  };

  // Function to render event items
  const renderEventItem = (event: Event) => {
    const dates = event.timesLocations.map((tl) => formatDate(tl.time));
    const firstDate = dates[0];
    const lastDate = dates[dates.length - 1];

    return (
      <li
        key={event.id}
        className={`cursor-pointer flex items-center p-2 ${
          selectedEvent?.id === event.id ? "lg:bg-slate-100 lg:shadow-sm" : "lg:hover:bg-slate-50"
        }`}
        onClick={() => onSelectEvent(event)}
      >
        {/* Date Section */}
        <div className="relative flex space-x-0">
          {dates.length > 1 ? (
            // Multiple dates
            <div className="flex items-center w-32 h-16 border-4 border-slate-400">
              <div className="flex flex-col items-center w-1/2 border-r-4 border-transparent">
                <span className="text-sm font-bold">{firstDate.month}</span>
                <span className="text-xl font-bold">{firstDate.day}</span>
              </div>
              <div className="flex flex-col items-center w-1/2 border-l-4 border-transparent">
                <span className="text-sm font-bold">{lastDate.month}</span>
                <span className="text-xl font-bold">{lastDate.day}</span>
              </div>
              {/* ">" character */}
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-400">
                &gt;
              </span>
            </div>
          ) : (
            // Single date
            <div className="flex flex-col items-center justify-center w-16 h-16 border-4 border-slate-400">
              <span className="text-sm font-bold">{firstDate.month}</span>
              <span className="text-xl font-bold">{firstDate.day}</span>
            </div>
          )}
        </div>

        {/* Event Details Section */}
        <div className="ml-4 flex flex-col justify-center">
          <h3 className="font-bold text-lg line-clamp-1">{event.title}</h3>
          <p className="text-slate-600 line-clamp-1">{event.ensemble.name}</p>
          <p className="text-slate-600 line-clamp-1">{formatEventLocations(event)}</p>
        </div>
      </li>
    );
  };

  return (
    <ul className="w-full space-y-4 lg:max-h-[calc(100vh-15rem)] overflow-y-auto">
      {/* Upcoming Events */}
      {events.map(renderEventItem)}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <>
          <h3 className="text-lg font-bold mt-8">Past Events</h3>
          {pastEvents.map(renderEventItem)}
        </>
      )}
    </ul>
  );
};

export default EventsList;
