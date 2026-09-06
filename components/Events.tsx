"use client";

import { events } from "@/data/events";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
