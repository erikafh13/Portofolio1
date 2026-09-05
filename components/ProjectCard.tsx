"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { ProjectItem } from "@/lib/types";

export default function ProjectCard({
  project,
  onOpen
}: {
  project: ProjectItem;
  onOpen: (project: ProjectItem) => void;
}) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.button
      layout
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white text-left shadow-soft transition hover:border-accent hover:shadow-soft-lg dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark"
    >
      <div className="h-1 w-full bg-gradient-to-r from-navy to-accent dark:from-accent-dark dark:to-accent" aria-hidden="true" />
      <div className="relative aspect-[4/3] w-full bg-bg-soft dark:bg-bg-dark-soft">
        {!imgError && project.image ? (
          <Image
            src={project.image}
            alt={t(project.title)}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-text-secondary dark:text-text-dark-secondary">
            {project.category}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium text-accent dark:text-accent-dark">
          {project.category} &middot; {project.year}
        </span>
        <h4 className="mt-1.5 font-display text-base font-semibold text-text-primary dark:text-text-dark-primary">
          {t(project.title)}
        </h4>
        <p className="mt-2 line-clamp-2 text-sm text-text-secondary dark:text-text-dark-secondary">
          {t(project.description)}
        </p>
      </div>
    </motion.button>
  );
}
