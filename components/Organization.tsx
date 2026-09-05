"use client";

import { organization } from "@/data/organization";
import Reveal from "./Reveal";
import OrganizationCard from "./OrganizationCard";

export default function Organization() {
  const sorted = [...organization].sort((a, b) => {
    const aMax = Math.max(...a.roles.map((r) => r.startYear));
    const bMax = Math.max(...b.roles.map((r) => r.startYear));
    return bMax - aMax;
  });

  return (
    <div className="relative space-y-5">
      <div
        className="absolute bottom-6 left-[17px] top-6 w-px bg-gradient-to-b from-accent via-border to-transparent dark:from-accent-dark dark:via-border-dark sm:left-[19px]"
        aria-hidden="true"
      />
      {sorted.map((item, index) => (
        <Reveal key={item.id} delay={Math.min(index * 0.05, 0.2)}>
          <OrganizationCard item={item} index={index} />
        </Reveal>
      ))}
    </div>
  );
}