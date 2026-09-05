import type { PublicationItem } from "@/lib/types";

/**
 * No publications have been added yet. Add objects to this array
 * to populate the Publications subsection \u2014 the UI will automatically
 * render them once available.
 *
 * Example:
 * {
 *   id: "publication-01",
 *   title: { id: "Judul publikasi", en: "Publication title" },
 *   type: "Journal",
 *   date: "2024",
 *   description: { id: "Deskripsi singkat publikasi.", en: "Short publication description." },
 *   authors: ["Wijaya Agus Setiawan"],
 *   publisher: "Nama jurnal/penerbit",
 *   link: "",
 *   image: "/images/publications/publication-01.jpg"
 * }
 */
export const publications: PublicationItem[] = [];
