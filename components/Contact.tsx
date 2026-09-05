"use client";

import { Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { contact } from "@/data/contact";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import DownloadCVButton from "./DownloadCVButton";
import SectionGlow from "./SectionGlow";

const heading = { id: "Mari Terhubung", en: "Let's Connect" };
const description = {
  id: "Jika ingin berdiskusi mengenai peluang kerja, kolaborasi, atau sekadar terhubung, silakan hubungi Wijaya.",
  en: "Interested in working together, discussing opportunities, or simply connecting? Feel free to reach out."
};

export default function Contact() {
  const { t, lang } = useLanguage();

  const links = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsapp,
      href: contact.whatsappLink,
      external: true
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/wijayaagussetiawan",
      href: contact.linkedin,
      external: true
    },
    {
      icon: MapPin,
      label: lang === "id" ? "Lokasi" : "Location",
      value: t(contact.location),
      href: undefined,
      external: false
    }
  ];

  return (
    <section id="contact" className="section-padding scroll-mt-20 relative overflow-hidden">
      <SectionGlow variant="top-right" tint="navy" />
      <div className="container-content">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl dark:text-text-dark-primary">
            {t(heading)}
          </h2>
          <p className="mt-3 max-w-xl text-text-secondary dark:text-text-dark-secondary">{t(description)}</p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 transition hover:border-accent dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-light text-navy dark:bg-accent-dark/10 dark:text-accent-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-secondary dark:text-text-dark-secondary">{link.label}</p>
                      <p className="truncate text-sm font-medium text-text-primary dark:text-text-dark-primary">
                        {link.value}
                      </p>
                    </div>
                  </div>
                );

                if (!link.href) {
                  return <div key={link.label}>{content}</div>;
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              })}
              <div className="pt-2">
                <DownloadCVButton />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-white p-6 dark:border-border-dark dark:bg-card-dark">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}