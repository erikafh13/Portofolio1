"use client";

import { Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { profile } from "@/data/profile";

export default function DownloadCVButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  const { lang } = useLanguage();

  const base =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition";
  const styles =
    variant === "solid"
      ? "bg-navy text-white hover:bg-accent dark:bg-accent-dark dark:hover:bg-accent"
      : "border border-border text-text-primary hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-primary dark:hover:border-accent-dark dark:hover:text-accent-dark";

  return (
    <a href={profile.cvPath} download className={`${base} ${styles}`}>
      <Download className="h-4 w-4" />
      {lang === "id" ? "Unduh CV" : "Download CV"}
    </a>
  );
}
