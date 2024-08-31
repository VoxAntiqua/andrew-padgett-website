import React from "react";
import { Event, TimeLocation } from "@/app/lib/definitions";

interface EventDetailsProps {
    event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
    return (
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
        <p>
          <strong>Ensemble:</strong> <a href={event.ensemble.url}>{event.ensemble.name}</a>
        </p>
        {event.role && <p><strong>Role:</strong> {event.role}</p>}
        <p>
          <strong>Director:</strong> {event.director}
        </p>
        <p className="mt-4">{event.description}</p>
        <p className="mt-4">
          <a href={event.url} className="text-blue-500 underline">More Info</a>
        </p>
        <h3 className="text-lg font-semibold mt-6">Times & Locations:</h3>
        <ul className="list-disc pl-6">
          {event.timesLocations.map((tl, index) => (
            <li key={index}>
              <strong>{new Date(tl.time).toLocaleString()}</strong> at {tl.location.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EventDetails;