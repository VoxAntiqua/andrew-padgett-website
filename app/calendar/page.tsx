'use client'

import React, { useState } from "react";
import { events } from "../lib/calendarData";
import { Event } from "../lib/definitions";
import EventsList from "../ui/calendar/EventsList";
import EventDetails from "../ui/calendar/EventDetails";
import Modal from "../ui/Modal"; // Import the Modal component

export default function Calendar() {
  const currentDate = new Date();

  const upcomingEvents = events
    .filter(event => new Date(event.timesLocations[event.timesLocations.length - 1].time) >= currentDate)
    .sort((a, b) => new Date(a.timesLocations[0].time).getTime() - new Date(b.timesLocations[0].time).getTime());

  const pastEvents = events
    .filter(event => new Date(event.timesLocations[event.timesLocations.length - 1].time) < currentDate)
    .sort((a, b) => new Date(b.timesLocations[b.timesLocations.length - 1].time).getTime() - new Date(a.timesLocations[a.timesLocations.length - 1].time).getTime());

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(
    upcomingEvents[0] || pastEvents[0] || null
  );

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="p-8 lg:px-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Container for Events List */}
          <div className="w-full lg:w-1/2">
            <EventsList
              events={upcomingEvents}
              pastEvents={pastEvents}
              onSelectEvent={handleSelectEvent}
              selectedEvent={selectedEvent}
            />
          </div>

          {/* Vertical Divider (hidden on small screens) */}
          <div className="border-t lg:border-l border-slate-400 mx-8 h-auto self-stretch hidden lg:block"></div>

          {/* Right Side: Container for Event Details */}
          <div className="hidden lg:block lg:w-1/2">
            {selectedEvent && (
              <EventDetails event={selectedEvent} key={selectedEvent.id} />
            )}
          </div>
        </div>
      </div>

      {/* Modal for Event Details (visible on mobile) */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedEvent && <EventDetails event={selectedEvent} key={selectedEvent.id} />}
      </Modal>
    </section>
  );
}
