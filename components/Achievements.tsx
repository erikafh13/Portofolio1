"use client";

import { Trophy } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { awards } from "@/data/achievements";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionGlow from "./SectionGlow";
import Certifications from "./Certifications";
import Publications from "./Publications";
import CertificateButton from "./CertificateButton";

const heading = { id: "Pencapaian", en: "Achievements" };
const description = {
  id: "Penghargaan, sertifikasi, dan publikasi yang telah diraih.",
  en: "Awards, certifications, and publications earned along the way."
};

export default function Achievements() {
  const { t, lang } = useLanguage();

  return (
    <section id="achievements" className="section-padding scroll-mt-20 relative overflow-hidden bg-bg-soft dark:bg-bg-dark-soft">
      <SectionGlow variant="bottom-left" tint="accent" />
      <div className="container-content">
        <Reveal>
          <SectionHeading heading={heading} description={description} />
        </Reveal>

        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Penghargaan & Kompetisi" : "Awards & Competitions"}
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {awards.map((award, index) => (
              <Reveal key={award.id} delay={Math.min(index * 0.05, 0.2)}>
                <div className="flex gap-4 rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark/40">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-light text-navy dark:bg-accent-dark/10 dark:text-accent-dark">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-display text-sm font-semibold text-text-primary dark:text-text-dark-primary">
                        {t(award.title)}
                      </p>
                      <CertificateButton src={award.certificate} title={t(award.title)} />
                    </div>
                    <p className="mt-1 text-sm text-text-secondary dark:text-text-dark-secondary">
                      {award.issuer}
                    </p>
                    <p className="mt-2 text-xs text-text-secondary dark:text-text-dark-secondary">
                      {award.period}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Sertifikasi" : "Certifications"}
          </h3>
          <div className="mt-5">
            <Reveal>
              <Certifications />
            </Reveal>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
            {lang === "id" ? "Publikasi" : "Publications"}
          </h3>
          <div className="mt-5">
            <Reveal>
              <Publications />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
