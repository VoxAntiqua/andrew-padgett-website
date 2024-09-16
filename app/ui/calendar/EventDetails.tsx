import React from "react";
import { Event } from "@/app/lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";
import { ibarra } from "../fonts";
import TimeLocationBlock from "./TimeLocationBlock";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  // Determine if the event is in the past
  const currentDate = new Date();
  const lastEventDate = new Date(event.timesLocations[event.timesLocations.length - 1].time);
  const isPastEvent = lastEventDate < currentDate;

  return (
    <motion.div
      className="w-full max-h-[calc(100vh-15rem)] overflow-y-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Event Image with title and ensemble name overlay */}
      {event.image && (
        <div className="relative w-full mb-4 lg:shadow-lg">
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src={event.image.path}
              alt={event.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Title overlay */}
          <div className="hidden lg:block absolute top-0 left-0 text-white py-2 px-4 my-4 bg-opacity-70 bg-slate-900">
            <h2 className={`text-3xl font-semibold hover:underline ${ibarra.className}`}>
              <a href={event.url} target="_blank" rel="noopener noreferrer">{event.title}</a>
            </h2>
          </div>
          {/* Ensemble name overlay */}
          <div className={`hidden lg:block absolute bottom-0 right-0 text-white py-2 px-4 my-4 bg-opacity-70 bg-slate-900 ${ibarra.className}`}>
            with <a href={event.ensemble.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {event.ensemble.name}
            </a><br />
            directed by {event.director}
          </div>
          {/* Mobile title */}
          <div className="mt-4 lg:hidden"><a className="text-2xl font-semibold hover:underline" href={event.url} target="_blank" rel="noopener noreferrer">{event.title}</a></div>
          {/* Mobile ensemble name */}
          <div className="mt-1 lg:hidden text-slate-700 text-sm">with <a href={event.ensemble.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {event.ensemble.name}
            </a><br />
            directed by {event.director}</div>
        </div>
      )}

      {/* Rest of the component remains unchanged */}
      {isPastEvent && (
        <div className="mt-4 p-2 bg-red-100 text-red-600">
          This event has already occurred.
        </div>
      )}

      <p className="mt-4">{event.description}</p>
      <p className="mt-4">
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-blue-700 hover:underline">
          Click here for more information and tickets
        </a>
      </p>
      <ul className="mt-6 space-y-4">
        {event.timesLocations.map((tl, index) => (
          <TimeLocationBlock key={index} time={tl.time} location={tl.location} />
        ))}
      </ul>
    </motion.div>
  );
};

export default EventDetails;