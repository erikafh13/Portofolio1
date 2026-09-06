"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { education } from "@/data/education";
import CertificateButton from "./CertificateButton";

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {education.map((item) => (
        <div
          key={item.institution}
          className="flex gap-4 rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark/40"
        >
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-light text-navy dark:bg-accent-dark/10 dark:text-accent-dark">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <p className="font-display text-sm font-semibold text-text-primary dark:text-text-dark-primary">
                {item.institution}
              </p>
              <CertificateButton src={item.certificate} title={item.institution} />
            </div>
            <p className="mt-0.5 text-sm text-text-secondary dark:text-text-dark-secondary">
              {t(item.degree)} &middot; {item.location}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-secondary dark:text-text-dark-secondary">
              <span>{item.period}</span>
              <span className="text-border dark:text-border-dark">|</span>
              <span className="font-medium text-navy dark:text-accent-dark">
                {t(item.scoreLabel)}: {item.scoreValue}
              </span>
            </div>

            {item.coursework && item.coursework.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-text-secondary dark:text-text-dark-secondary">
                  {lang === "id" ? "Mata kuliah relevan" : "Relevant coursework"}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {item.coursework.map((c) => (
                    <span
                      key={c.en}
                      className="rounded-full bg-bg-soft px-2.5 py-1 text-xs font-medium text-text-primary dark:bg-bg-dark-soft dark:text-text-dark-primary"
                    >
                      {t(c)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
