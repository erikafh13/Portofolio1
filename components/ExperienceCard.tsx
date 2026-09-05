"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { ExperienceItem } from "@/lib/types";
import PhotoSlider from "./PhotoSlider";
import CertificateButton from "./CertificateButton";

export default function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="relative pl-14 sm:pl-16">
      <span className="absolute left-0 top-5 flex h-9 w-9 flex-none items-center justify-center rounded-full border-2 border-accent bg-white font-display text-xs font-bold text-navy shadow-soft dark:border-accent-dark dark:bg-card-dark dark:text-white">
        {String(index + 1).padStart(2, "0")}
      </span>

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
          className="flex w-full cursor-pointer items-start justify-between gap-4 p-5 text-left sm:p-6"
        >
          <div className="min-w-0">
            <p className="font-display text-base font-semibold text-text-primary dark:text-text-dark-primary">
              {t(item.position)}
            </p>
            <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">{item.company}</p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-secondary dark:text-text-dark-secondary">
              <span>{item.period}</span>
              <span className="text-border dark:text-border-dark">|</span>
              <span>{item.location}</span>
            </div>
            {!open && (
              <p className="mt-3 text-sm text-text-secondary dark:text-text-dark-secondary">
                {t(item.summary)}
              </p>
            )}
          </div>
          <div className="flex flex-none items-center gap-2">
            <CertificateButton src={item.certificate} title={t(item.position)} />
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
              <div className="px-5 pb-6 sm:px-6">
                <ul className="space-y-2.5 border-t border-border pt-4 dark:border-border-dark">
                  {item.responsibilities.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm text-text-secondary dark:text-text-dark-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-dark" />
                      {t(point)}
                    </li>
                  ))}
                </ul>
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-navy dark:bg-bg-dark-soft dark:text-accent-dark"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <PhotoSlider images={item.images} alt={t(item.position)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
