"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { EventItem } from "@/lib/types";
import PhotoSlider from "./PhotoSlider";
import CertificateButton from "./CertificateButton";

export default function EventCard({ event }: { event: EventItem }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-soft-lg dark:border-border-dark dark:bg-card-dark">
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-start justify-between gap-4 p-5 text-left"
      >
        <div className="min-w-0">
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
        </div>
        <div className="flex flex-none items-center gap-2">
          <CertificateButton src={event.certificate} title={t(event.name)} />
          <ChevronDown
            className={`h-4 w-4 flex-none text-text-secondary transition-transform dark:text-text-dark-secondary ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <ul className="space-y-2 border-t border-border pt-4 dark:border-border-dark">
                {event.details.map((detail, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-dark" />
                    {t(detail)}
                  </li>
                ))}
              </ul>

              <PhotoSlider images={event.images} alt={t(event.name)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
