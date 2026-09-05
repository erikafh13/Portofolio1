"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useActiveSection } from "@/lib/use-active-section";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import DownloadCVButton from "./DownloadCVButton";

const sections = [
  { id: "home", label: { id: "Beranda", en: "Home" } },
  { id: "about", label: { id: "Tentang", en: "About" } },
  { id: "experience", label: { id: "Pengalaman", en: "Experience" } },
  { id: "achievements", label: { id: "Pencapaian", en: "Achievements" } },
  { id: "contact", label: { id: "Kontak", en: "Contact" } }
];

function BrandMark() {
  const [imgError, setImgError] = useState(false);

  return (
    <span className="relative flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#0E2A5E_0%,#2F6FED_100%)] font-display text-xs font-bold text-white">
      {!imgError ? (
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          sizes="36px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        "WA"
      )}
    </span>
  );
}

export default function Navbar() {
  const { lang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md transition-shadow duration-300 dark:border-border-dark/70 dark:bg-bg-dark/85 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          aria-label={profile.name}
          className="flex items-center whitespace-nowrap"
        >
          <BrandMark />
        </button>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleNavClick(section.id)}
                className={`relative whitespace-nowrap px-3 py-2 text-sm font-medium transition ${
                  activeId === section.id
                    ? "text-accent dark:text-accent-dark"
                    : "text-text-secondary hover:text-navy dark:text-text-dark-secondary dark:hover:text-white"
                }`}
              >
                {t(section.label)}
                {activeId === section.id && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-accent dark:bg-accent-dark"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 xl:flex">
          <DownloadCVButton variant="outline" />
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => handleNavClick("contact")}
            className="whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent dark:bg-accent-dark dark:hover:bg-accent"
          >
            {lang === "id" ? "Mari Terhubung" : "Let's Connect"}
          </button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy dark:border-border-dark dark:text-white"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-white xl:hidden dark:border-border-dark dark:bg-bg-dark"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                      activeId === section.id
                        ? "bg-accent-light text-accent dark:bg-accent-dark/10 dark:text-accent-dark"
                        : "text-text-secondary dark:text-text-dark-secondary"
                    }`}
                  >
                    {t(section.label)}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <DownloadCVButton />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}