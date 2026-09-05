"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function PhotoSlider({ images, alt }: { images?: string[]; alt: string }) {
  const { lang } = useLanguage();

  if (!images || images.length === 0) {
    return (
      <div className="mt-4 flex h-24 items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-bg-soft text-xs text-text-secondary dark:border-border-dark dark:bg-bg-dark-soft dark:text-text-dark-secondary">
        <Camera className="h-4 w-4" />
        {lang === "id" ? "Foto akan segera ditambahkan" : "Photos will be added soon"}
      </div>
    );
  }

  const track = [...images, ...images];

  return (
    <div className="relative mt-4 h-28 overflow-hidden rounded-xl border border-border dark:border-border-dark">
      <div className="animate-marquee flex h-full w-max gap-2">
        {track.map((src, i) => (
          <div key={`${src}-${i}`} className="relative h-full w-40 flex-none overflow-hidden rounded-lg bg-bg-soft dark:bg-bg-dark-soft">
            <Image src={src} alt={alt} fill sizes="160px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}