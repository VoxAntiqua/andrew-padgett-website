'use client'

import React, { useState } from "react";
import { events } from "../lib/calendarData";
import { Event } from "../lib/definitions";
import EventsList from "../ui/calendar/EventsList";
import EventDetails from "../ui/calendar/EventDetails";

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(events[0]);

  return (
    <section className="p-8 lg:px-16">
      <div className="container">
        <div className="flex justify-center items-start p-8">
          {/* Left Side: Events List */}
          <EventsList events={events} onSelectEvent={setSelectedEvent} selectedEvent={selectedEvent} />

          {/* Vertical Divider */}
          <div className="border-l border-gray-300 mx-8 h-auto self-stretch"></div>

          {/* Right Side: Event Details with fade-in effect */}
          {selectedEvent && (
            <EventDetails event={selectedEvent} key={selectedEvent.id} />
          )}
        </div>
      </div>
    </section>
  );
}
