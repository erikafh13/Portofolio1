"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={lang === "id" ? "Kembali ke atas" : "Back to top"}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:bg-card-dark dark:text-text-dark-primary dark:hover:text-accent-dark"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
