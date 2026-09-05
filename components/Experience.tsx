"use client";

import { useLanguage } from "@/lib/language-context";
import { experience } from "@/data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionGlow from "./SectionGlow";
import ExperienceCard from "./ExperienceCard";
import Organization from "./Organization";
import Events from "./Events";

const heading = { id: "Pengalaman", en: "Experience" };
const description = {
  id: "Perjalanan profesional Wijaya di bidang administrasi, operasional, dan pengembangan bisnis.",
  en: "Wijaya's professional journey across administration, operations, and business development."
};

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="section-padding scroll-mt-20 relative overflow-hidden bg-bg-soft dark:bg-bg-dark-soft">
      <SectionGlow variant="bottom-left" tint="navy" />
      <div className="container-content">
        <Reveal>
          <SectionHeading heading={heading} description={description} />
        </Reveal>

        <div className="mt-10 scroll-mt-24" id="pengalaman-kerja">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Pengalaman Kerja" : "Work Experience"}
          </h3>
          <div className="relative mt-5 space-y-5">
            <div
              className="absolute bottom-6 left-[17px] top-6 w-px bg-gradient-to-b from-accent via-border to-transparent dark:from-accent-dark dark:via-border-dark sm:left-[19px]"
              aria-hidden="true"
            />
            {experience.map((item, index) => (
              <Reveal key={item.id} delay={Math.min(index * 0.05, 0.2)}>
                <ExperienceCard item={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 scroll-mt-24" id="organisasi">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Organisasi & Kepemimpinan" : "Organization & Leadership"}
          </h3>
          <div className="mt-5">
            <Reveal>
              <Organization />
            </Reveal>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Kepanitiaan & Acara" : "Events & Committee Experience"}
          </h3>
          <div className="mt-5">
            <Reveal>
              <Events />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}