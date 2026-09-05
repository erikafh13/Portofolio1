"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function CertificateModal({
  src,
  title,
  onClose
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  const isPdf = src.toLowerCase().endsWith(".pdf");

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-card-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3 dark:border-border-dark">
          <p className="truncate pr-4 text-sm font-medium text-text-primary dark:text-text-dark-primary">
            {title}
          </p>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-text-secondary transition hover:bg-bg-soft dark:text-text-dark-secondary dark:hover:bg-bg-dark-soft"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-bg-soft dark:bg-bg-dark-soft">
          {isPdf ? (
            <iframe src={src} title={title} className="h-full w-full" />
          ) : (
            <div className="flex min-h-full items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={title} className="max-h-full w-auto max-w-full object-contain" />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
