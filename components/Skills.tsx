"use client";

import { useLanguage } from "@/lib/language-context";
import { skills } from "@/data/skills";

export default function Skills() {
  const { lang } = useLanguage();
  const hard = skills.filter((s) => s.category === "hard");
  const soft = skills.filter((s) => s.category === "soft");

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-white p-5 dark:border-border-dark dark:bg-card-dark">
        <h4 className="font-display text-base font-semibold text-text-primary dark:text-text-dark-primary">
          {lang === "id" ? "Hard Skills" : "Hard Skills"}
        </h4>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hard.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full border border-border bg-bg-soft px-2.5 py-1 text-xs font-medium text-text-primary dark:border-border-dark dark:bg-bg-dark-soft dark:text-text-dark-primary"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-white p-5 dark:border-border-dark dark:bg-card-dark">
        <h4 className="font-display text-base font-semibold text-text-primary dark:text-text-dark-primary">
          {lang === "id" ? "Soft Skills" : "Soft Skills"}
        </h4>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {soft.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full border border-border bg-bg-soft px-2.5 py-1 text-xs font-medium text-text-primary dark:border-border-dark dark:bg-bg-dark-soft dark:text-text-dark-primary"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
