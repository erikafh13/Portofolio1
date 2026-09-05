"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold dark:border-border-dark"
    >
      <button
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "id"
            ? "bg-navy text-white dark:bg-accent-dark"
            : "text-text-secondary hover:text-navy dark:text-text-dark-secondary dark:hover:text-white"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "en"
            ? "bg-navy text-white dark:bg-accent-dark"
            : "text-text-secondary hover:text-navy dark:text-text-dark-secondary dark:hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
