"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { OrganizationItem } from "@/lib/types";
import PhotoSlider from "./PhotoSlider";

export default function OrganizationCard({ item, index }: { item: OrganizationItem; index: number }) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const sortedRoles = [...item.roles].sort((a, b) => b.startYear - a.startYear);
  const latest = sortedRoles[0];
  const years = item.roles.map((r) => r.startYear);
  const periodRange =
    years.length > 1 ? `${Math.min(...years)} \u2013 ${Math.max(...years)}` : latest.period;

  return (
    <div className="relative pl-14 sm:pl-16">
      <span className="absolute left-0 top-5 flex h-9 w-9 flex-none items-center justify-center rounded-full border-2 border-accent bg-white font-display text-xs font-bold text-navy shadow-soft dark:border-accent-dark dark:bg-card-dark dark:text-white">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-soft-lg dark:border-border-dark dark:bg-card-dark">
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
        >
          <div className="min-w-0">
            <p className="font-display text-base font-semibold text-text-primary dark:text-text-dark-primary">
              {item.name}
            </p>
            <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">{t(latest.title)}</p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-secondary dark:text-text-dark-secondary">
              <span>{periodRange}</span>
              {item.roles.length > 1 && (
                <>
                  <span className="text-border dark:text-border-dark">|</span>
                  <span>
                    {item.roles.length} {lang === "id" ? "peran" : "roles"}
                  </span>
                </>
              )}
            </div>
          </div>
          <ChevronDown
            className={`mt-1 h-4 w-4 flex-none text-text-secondary transition-transform dark:text-text-dark-secondary ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-5 border-t border-border px-5 pb-6 pt-4 sm:px-6 dark:border-border-dark">
                {sortedRoles.map((role) => (
                  <div key={role.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-sm font-semibold text-text-primary dark:text-text-dark-primary">
                        {t(role.title)}
                      </p>
                      <span className="text-xs text-text-secondary dark:text-text-dark-secondary">
                        {role.period}
                      </span>
                    </div>
                    {role.points.length > 0 && (
                      <ul className="mt-2 space-y-2">
                        {role.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm text-text-secondary dark:text-text-dark-secondary"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-dark" />
                            {t(point)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <PhotoSlider images={item.images} alt={item.name} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}