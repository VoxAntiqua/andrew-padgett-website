import React from "react";
import { Event } from "@/app/lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";  // Import Image from Next.js
import { ibarra } from "../fonts";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <motion.div
      className="w-1/2 max-h-[calc(100vh-17rem)] overflow-y-auto p-4 scrollbar-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Event Image with title and ensemble name overlay */}
      {event.image && (
  <div className="relative w-full mb-4">
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
      <h2 className={`${ibarra.className} text-3xl font-semibold`}>{event.title}</h2>
    </div>
    {/* Ensemble name overlay */}
    <div className="absolute bottom-0 right-0 bg-slate-900 bg-opacity-60 text-white p-2 m-2">
      <a href={event.ensemble.url} className={`${ibarra.className} text-lg`}>
        with {event.ensemble.name}
      </a>
    </div>
  </div>
)}



      {/* Other event details below the image */}
      {event.role && (
        <p>
          <strong>Role:</strong> {event.role}
        </p>
      )}
      <p>
        <strong>Director:</strong> {event.director}
      </p>
      <p className="mt-4">{event.description}</p>
      <p className="mt-4">
        <a href={event.url} className="text-blue-500 underline">
          More Info
        </a>
      </p>
      <h3 className="text-lg font-semibold mt-6">Times & Locations:</h3>
      <ul className="list-disc pl-6">
        {event.timesLocations.map((tl, index) => (
          <li key={index}>
            <strong>{new Date(tl.time).toLocaleString()}</strong> at {tl.location.join(", ")}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EventDetails;
