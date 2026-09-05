"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { ProjectItem } from "@/lib/types";

export default function ProjectModal({
  project,
  onClose
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm dark:bg-black/60"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-white dark:border-border-dark dark:bg-card-dark"
          >
            <div className="relative aspect-video w-full bg-bg-soft dark:bg-bg-dark-soft">
              {!imgError && project.image ? (
                <Image
                  src={project.image}
                  alt={t(project.title)}
                  fill
                  sizes="672px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-text-secondary dark:text-text-dark-secondary">
                  {project.category}
                </div>
              )}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow dark:bg-card-dark/90 dark:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs font-medium text-accent dark:text-accent-dark">
                {project.category} &middot; {project.year}
              </span>
              <h3 className="mt-1.5 font-display text-xl font-bold text-text-primary dark:text-text-dark-primary">
                {t(project.title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary dark:text-text-dark-secondary">
                {t(project.description)}
              </p>

              {project.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-navy dark:bg-bg-dark-soft dark:text-accent-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent dark:bg-accent-dark dark:hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-primary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
