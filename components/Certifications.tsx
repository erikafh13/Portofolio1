"use client";

import { Award } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const { t, lang } = useLanguage();

  if (certifications.length === 0) {
    return (
      <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
        {lang === "id" ? "Sertifikasi akan segera ditambahkan." : "Certifications will be added soon."}
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="flex gap-4 rounded-2xl border border-border bg-white p-5 dark:border-border-dark dark:bg-card-dark"
        >
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-light text-navy dark:bg-accent-dark/10 dark:text-accent-dark">
            <Award className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-text-primary dark:text-text-dark-primary">
              {t(cert.name)}
            </p>
            <p className="mt-1 text-sm text-text-secondary dark:text-text-dark-secondary">{cert.issuer}</p>
            {(cert.date || cert.credentialId) && (
              <div className="mt-2 flex flex-wrap gap-x-3 text-xs text-text-secondary dark:text-text-dark-secondary">
                {cert.date && <span>{cert.date}</span>}
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
              </div>
            )}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-medium text-accent hover:underline dark:text-accent-dark"
              >
                {lang === "id" ? "Lihat kredensial" : "View credential"}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
