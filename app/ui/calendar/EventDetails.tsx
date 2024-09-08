import React from "react";
import { Event } from "@/app/lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";  // Import Image from Next.js
import { ibarra } from "../fonts";
import TimeLocationBlock from "./TimeLocationBlock";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <motion.div
      className="w-1/2 max-h-[calc(100vh-19rem)] overflow-y-auto p-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Event Image with title and ensemble name overlay */}
      {event.image && (
  <div className="relative w-full mb-4 shadow-lg">
    <Image
      src={event.image.path}
      alt={event.image.alt}
      layout="responsive"
      width={16}  // Width for 16:9 aspect ratio
      height={9}  // Height for 16:9 aspect ratio
      objectFit="cover"  // Crop image to fill the area
    />
    {/* Title overlay */}
    <div className="absolute top-0 left-0 bg-slate-900 bg-opacity-60 text-white p-2 m-2">
      <h2 className={`${ibarra.className} text-3xl font-semibold hover:underline`}><a href={event.url} target="_blank">{event.title}</a></h2>
    </div>
    {/* Ensemble name overlay */}
    <div className={`${ibarra.className} text-lg absolute bottom-0 right-0 bg-slate-900 bg-opacity-60 text-white p-2 m-2`}>
    with <a href={event.ensemble.url} target="_blank" className="hover:underline">
        {event.ensemble.name}
      </a><br />directed by {event.director}
    </div>
  </div>
)}



      {/* Other event details below the image */}
      
      <p className="mt-4">{event.description}</p>
      <p className="mt-4">
        <a href={event.url} target="_blank" className="cursor-pointer text-blue-700 hover:underline">
          Learn more
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
