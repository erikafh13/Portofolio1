"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { organization } from "@/data/organization";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionGlow from "./SectionGlow";
import Skills from "./Skills";
import Education from "./Education";

export default function About() {
  const { lang } = useLanguage();

  const stats = [
    {
      value: String(experience.length),
      label: { id: "Pengalaman Magang & Kerja", en: "Internships & Work Experience" },
      href: "#pengalaman-kerja"
    },
    {
      value: String(organization.length),
      label: { id: "Organisasi Diikuti", en: "Organizations Involved" },
      href: "#organisasi"
    }
  ];

  return (
    <section id="about" className="pb-12 pt-6 sm:pb-16 sm:pt-10 scroll-mt-20 relative overflow-hidden">
      <SectionGlow variant="top-right" tint="accent" />
      <div className="container-content">
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading heading={profile.aboutHeading} />
            <p className="mt-6 text-base leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              {lang === "id" ? profile.aboutText.id : profile.aboutText.en}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <a
                  key={stat.label.en}
                  href={stat.href}
                  className="group flex flex-col rounded-xl border border-border bg-gradient-to-br from-accent-light to-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-accent dark:border-border-dark dark:from-card-dark dark:to-bg-dark-soft"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-display text-3xl font-bold text-navy dark:text-white">
                      {stat.value}
                      <span className="text-accent dark:text-accent-dark">+</span>
                    </p>
                    <ArrowUpRight className="h-4 w-4 flex-none text-accent opacity-0 transition group-hover:opacity-100 dark:text-accent-dark" />
                  </div>
                  <p className="mt-1 text-xs text-text-secondary dark:text-text-dark-secondary">
                    {lang === "id" ? stat.label.id : stat.label.en}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-3xl font-bold text-text-primary dark:text-text-dark-primary">
              {lang === "id" ? "Keahlian" : "Skills"}
            </h3>
            <div className="accent-bar mt-3 mb-6" aria-hidden="true" />
            <Skills />
          </Reveal>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Pendidikan" : "Education"}
          </h3>
          <div className="mt-5">
            <Reveal>
              <Education />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
