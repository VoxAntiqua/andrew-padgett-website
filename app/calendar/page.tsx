'use client'

import React, { useState } from "react";
import { events } from "../lib/calendarData";
import { Event } from "../lib/definitions";
import EventsList from "../ui/calendar/EventsList";
import EventDetails from "../ui/calendar/EventDetails";

export default function Calendar() {
  // Separate and sort upcoming and past events
  const currentDate = new Date();

  const upcomingEvents = events
    .filter(event => {
      const lastDate = new Date(event.timesLocations[event.timesLocations.length - 1].time);
      return lastDate >= currentDate;
    })
    .sort((a, b) => {
      const firstDateA = new Date(a.timesLocations[0].time);
      const firstDateB = new Date(b.timesLocations[0].time);
      return firstDateA.getTime() - firstDateB.getTime();
    });

  const pastEvents = events
    .filter(event => {
      const lastDate = new Date(event.timesLocations[event.timesLocations.length - 1].time);
      return lastDate < currentDate;
    })
    .sort((a, b) => {
      const lastDateA = new Date(a.timesLocations[a.timesLocations.length - 1].time);
      const lastDateB = new Date(b.timesLocations[b.timesLocations.length - 1].time);
      return lastDateB.getTime() - lastDateA.getTime(); // Most recent past events first
    });

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(
    upcomingEvents[0] || pastEvents[0] || null
  );

  return (
    <section className="p-8 lg:px-16">
      <div className="container">
        <div className="flex justify-center items-start">
          {/* Left Side: Events List */}
          <EventsList
            events={upcomingEvents}
            pastEvents={pastEvents}
            onSelectEvent={setSelectedEvent}
            selectedEvent={selectedEvent}
          />

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
