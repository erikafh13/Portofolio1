"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ImageOff } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

function SliderTile({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full w-28 flex-none items-center justify-center rounded-lg bg-bg-soft text-text-secondary dark:bg-bg-dark-soft dark:text-text-dark-secondary sm:w-40">
        <ImageOff className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-28 flex-none overflow-hidden rounded-lg bg-bg-soft dark:bg-bg-dark-soft sm:w-40">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 112px, 160px"
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function PhotoSlider({ images, alt }: { images?: string[]; alt: string }) {
  const { lang } = useLanguage();

  if (!images || images.length === 0) {
    return (
      <div className="mt-4 flex h-24 items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-bg-soft px-3 text-center text-xs text-text-secondary dark:border-border-dark dark:bg-bg-dark-soft dark:text-text-dark-secondary">
        <Camera className="h-4 w-4 flex-none" />
        {lang === "id" ? "Foto akan segera ditambahkan" : "Photos will be added soon"}
      </div>
    );
  }

  const track = [...images, ...images];

  return (
    <div className="relative mt-4 h-20 overflow-hidden rounded-xl border border-border dark:border-border-dark sm:h-28">
      <div className="animate-marquee flex h-full w-max gap-2">
        {track.map((src, i) => (
          <SliderTile key={`${src}-${i}`} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}
