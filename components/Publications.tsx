"use client";

import { BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { publications } from "@/data/publications";

export default function Publications() {
  const { t, lang } = useLanguage();

  if (publications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-bg-soft px-6 py-12 text-center dark:border-border-dark dark:bg-bg-dark-soft">
        <BookOpen className="h-7 w-7 text-text-secondary dark:text-text-dark-secondary" />
        <p className="mt-3 text-sm font-medium text-text-primary dark:text-text-dark-primary">
          {lang === "id" ? "Publikasi akan segera ditambahkan." : "Publications will be added soon."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {publications.map((pub) => (
        <a
          key={pub.id}
          href={pub.link || undefined}
          target={pub.link ? "_blank" : undefined}
          rel={pub.link ? "noopener noreferrer" : undefined}
          className="block rounded-2xl border border-border bg-white p-5 transition hover:border-accent dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark"
        >
          <span className="text-xs font-medium text-accent dark:text-accent-dark">
            {pub.type} &middot; {pub.date}
          </span>
          <h4 className="mt-1.5 font-display text-sm font-semibold text-text-primary dark:text-text-dark-primary">
            {t(pub.title)}
          </h4>
          <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
            {t(pub.description)}
          </p>
          <p className="mt-3 text-xs text-text-secondary dark:text-text-dark-secondary">
            {pub.authors.join(", ")} &middot; {pub.publisher}
          </p>
        </a>
      ))}
    </div>
  );
}
