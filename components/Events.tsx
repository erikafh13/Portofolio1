"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { events } from "@/data/events";

export default function Events() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {events.map((event) => (
        <div
          key={event.id}
          className="rounded-2xl border border-border bg-white p-5 dark:border-border-dark dark:bg-card-dark"
        >
          <h4 className="font-display text-sm font-semibold text-text-primary dark:text-text-dark-primary">
            {t(event.name)}
          </h4>
          <p className="mt-1 text-sm text-accent dark:text-accent-dark">{t(event.role)}</p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-secondary dark:text-text-dark-secondary">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {event.period}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {event.location}
            </span>
          </div>
          <ul className="mt-3 space-y-1.5">
            {event.details.map((detail, i) => (
              <li key={i} className="flex gap-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-dark" />
                {t(detail)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
