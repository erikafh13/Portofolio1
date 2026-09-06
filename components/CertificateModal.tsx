"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ImageOff } from "lucide-react";

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
  const [imgError, setImgError] = useState(false);

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
        className="relative flex max-h-[92vh] w-auto max-w-[94vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-card-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 dark:border-border-dark">
          <p className="min-w-0 truncate text-sm font-medium text-text-primary dark:text-text-dark-primary">
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
        <div className="overflow-auto bg-bg-soft dark:bg-bg-dark-soft">
          {isPdf ? (
            <iframe
              src={src}
              title={title}
              className="block"
              style={{
                width: "min(85vw, 900px)",
                height: "min(78vh, 640px)",
                border: "none"
              }}
            />
          ) : imgError ? (
            <div className="flex h-[50vh] w-[70vw] max-w-md flex-col items-center justify-center gap-3 p-6 text-center sm:w-[420px]">
              <ImageOff className="h-8 w-8 text-text-secondary dark:text-text-dark-secondary" />
              <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                Gambar tidak ditemukan. Pastikan file dan path-nya sudah benar.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={title}
                className="block h-auto w-auto object-contain"
                style={{ maxHeight: "80vh", maxWidth: "88vw" }}
                onError={() => setImgError(true)}
              />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
