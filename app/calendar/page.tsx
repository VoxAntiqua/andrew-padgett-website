'use client'

import React, { useState } from "react";
import { events } from "../lib/calendarData";
import { Event } from "../lib/definitions";
import EventsList from "../ui/calendar/EventsList";
import EventDetails from "../ui/calendar/EventDetails";

export default function Calendar() {
  // Sort the events array by the first date in ascending order
  const sortedEvents = [...events].sort((a, b) => {
    const firstDateA = new Date(a.timesLocations[0].time);
    const firstDateB = new Date(b.timesLocations[0].time);
    return firstDateA.getTime() - firstDateB.getTime();
  });

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(sortedEvents[0]);

  return (
    <section className="p-8 lg:px-16">
      <div className="container">
        <div className="flex justify-center items-start ">
          {/* Left Side: Events List */}
          <EventsList events={sortedEvents} onSelectEvent={setSelectedEvent} selectedEvent={selectedEvent} />

          {/* Vertical Divider */}
          <div className="border-l border-slate-400 mx-8 h-auto self-stretch"></div>

          {/* Right Side: Event Details with fade-in effect */}
          {selectedEvent && (
            <EventDetails event={selectedEvent} key={selectedEvent.id} />
          )}
        </div>
      </div>
    </section>
  );
}
