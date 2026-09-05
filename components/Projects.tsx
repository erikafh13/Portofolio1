"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { projects } from "@/data/projects";
import type { ProjectCategory, ProjectItem } from "@/lib/types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionGlow from "./SectionGlow";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const heading = { id: "Proyek", en: "Projects" };
const description = {
  id: "Kumpulan proyek dan kontribusi yang telah dikerjakan.",
  en: "A collection of projects and contributions."
};

const allCategories: ProjectCategory[] = ["Business", "Digital Marketing", "Design", "Other"];

export default function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const availableCategories = useMemo(
    () => allCategories.filter((cat) => projects.some((p) => p.category === cat)),
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-padding scroll-mt-20 relative overflow-hidden">
      <SectionGlow variant="top-right" tint="accent" />
      <div className="container-content">
        <Reveal>
          <SectionHeading heading={heading} description={description} />
        </Reveal>

        {projects.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-bg-soft px-6 py-20 text-center dark:border-border-dark dark:bg-bg-dark-soft">
              <FolderKanban className="h-8 w-8 text-text-secondary dark:text-text-dark-secondary" />
              <p className="mt-4 font-display text-lg font-semibold text-text-primary dark:text-text-dark-primary">
                {lang === "id" ? "Proyek akan segera ditambahkan." : "Projects will be added soon."}
              </p>
            </div>
          </Reveal>
        ) : (
          <>
            {availableCategories.length > 1 && (
              <Reveal delay={0.05}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {(["All", ...availableCategories] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                        filter === cat
                          ? "border-navy bg-navy text-white dark:border-accent-dark dark:bg-accent-dark"
                          : "border-border text-text-secondary hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Reveal>
            )}

            <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
