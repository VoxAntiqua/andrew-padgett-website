import React from "react";
import { Event } from "@/app/lib/definitions";

interface EventsListProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
  selectedEvent: Event | null;
}

const EventsList: React.FC<EventsListProps> = ({ events, onSelectEvent, selectedEvent }) => {
  // Function to format a single date
  const formatDate = (time: string) => {
    const date = new Date(time);
    return {
      month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      day: date.getDate(),
    };
  };

  return (
    <ul className="w-1/2 space-y-4 max-h-[calc(100vh-17rem)] overflow-y-auto pr-4"> {/* Set max height and add scrolling */}
      {events.map((event) => {
        const dates = event.timesLocations.map((tl) => formatDate(tl.time));
        const firstDate = dates[0];
        const lastDate = dates[dates.length - 1];

        return (
          <li
            key={event.id}
            className={`cursor-pointer flex items-center p-2  ${
              selectedEvent?.id === event.id ? "bg-gray-100 " : "hover:bg-gray-50"
            }`}
            onClick={() => onSelectEvent(event)}
          >
            {/* Date Section */}
            <div className="relative flex space-x-0">
              {dates.length > 1 ? (
                // Multiple dates
                <div className="flex items-center w-32 h-16 border-4 border-gray-400">
                  <div className="flex flex-col items-center w-1/2 border-r-4 border-transparent">
                    <span className="text-sm font-bold">{firstDate.month}</span>
                    <span className="text-xl font-bold">{firstDate.day}</span>
                  </div>
                  <div className="flex flex-col items-center w-1/2 border-l-4 border-transparent">
                    <span className="text-sm font-bold">{lastDate.month}</span>
                    <span className="text-xl font-bold">{lastDate.day}</span>
                  </div>
                  {/* ">" character */}
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-400">
                    &gt;
                  </span>
                </div>
              ) : (
                // Single date
                <div className="flex flex-col items-center justify-center w-16 h-16 border-4 border-gray-400">
                  <span className="text-sm font-bold">{firstDate.month}</span>
                  <span className="text-xl font-bold">{firstDate.day}</span>
                </div>
              )}
            </div>

            {/* Event Details Section */}
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-gray-600">{event.ensemble.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
