"use client";

import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-white dark:border-border-dark dark:bg-bg-dark">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent dark:via-accent-dark"
        aria-hidden="true"
      />
      <div className="container-content flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-navy dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-text-secondary dark:text-text-dark-secondary">{t(profile.tagline)}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary dark:hover:text-accent-dark"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary dark:hover:text-accent-dark"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary dark:hover:text-accent-dark"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 dark:border-border-dark">
        <p className="container-content text-center text-xs text-text-secondary dark:text-text-dark-secondary">
          &copy; 2026 Wijaya Agus Setiawan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
