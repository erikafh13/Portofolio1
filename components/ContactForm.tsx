"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { contact } from "@/data/contact";

export default function ContactForm() {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === "id" ? `Pesan dari ${name} melalui Portofolio` : `Message from ${name} via Portfolio`
    );
    const body = encodeURIComponent(`${message}\n\n${lang === "id" ? "Dari" : "From"}: ${name} (${email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const labelClass = "text-sm font-medium text-text-primary dark:text-text-dark-primary";
  const inputClass =
    "mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/60 focus:border-accent dark:border-border-dark dark:bg-bg-dark-soft dark:text-text-dark-primary dark:focus:border-accent-dark";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          {lang === "id" ? "Nama" : "Name"}
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder={lang === "id" ? "Nama lengkap Anda" : "Your full name"}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          {lang === "id" ? "Pesan" : "Message"}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder={lang === "id" ? "Tulis pesan Anda di sini..." : "Write your message here..."}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent dark:bg-accent-dark dark:hover:bg-accent"
      >
        <Send className="h-4 w-4" />
        {lang === "id" ? "Kirim Pesan" : "Send Message"}
      </button>
      <p className="text-xs text-text-secondary dark:text-text-dark-secondary">
        {lang === "id"
          ? "Tombol ini akan membuka aplikasi email Anda dengan pesan yang sudah terisi."
          : "This button opens your email app with the message pre-filled."}
      </p>
    </form>
  );
}
