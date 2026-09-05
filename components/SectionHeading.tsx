"use client";

import type { Localized } from "@/lib/types";
import { useLanguage } from "@/lib/language-context";

export default function SectionHeading({
  heading,
  description
}: {
  heading: Localized;
  description?: Localized;
}) {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl dark:text-text-dark-primary">
        {t(heading)}
      </h2>
      <div className="accent-bar mt-3" aria-hidden="true" />
      {description && (
        <p className="mt-4 text-text-secondary dark:text-text-dark-secondary">{t(description)}</p>
      )}
    </div>
  );
}
