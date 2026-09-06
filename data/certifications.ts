import type { CertificationItem } from "@/lib/types";

/**
 * Add new certifications by appending an object to this array.
 * Fields left empty (credentialId, credentialUrl, certificate) can be
 * filled in later without changing any component code.
 */
export const certifications: CertificationItem[] = [
  {
    id: "klaster-pramuniaga-kasir",
    name: { id: "Klaster Pramuniaga dan Kasir", en: "Sales Assistant and Cashier Cluster" },
    issuer: "Business Retail in Supermarket/Minimarket",
    date: "",
    credentialId: "",
    credentialUrl: "",
    certificate: ""
  },
  {
    id: "pelatihan-adaptability",
    name: { id: "Pelatihan Adaptability", en: "Adaptability Training" },
    issuer: "",
    date: "",
    credentialId: "",
    credentialUrl: "",
    certificate: "/certifications/Pelatihan-Adaptability.pdf"
  },
  {
    id: "pelatihan-self-efficacy",
    name: { id: "Pelatihan Self-Efficacy", en: "Self-Efficacy Training" },
    issuer: "",
    date: "",
    credentialId: "",
    credentialUrl: "",
    certificate: "/certifications/Sertifikat-Pelatihan-Self-Efficacy.pdf"
  },
  {
    id: "basic-excel",
    name: { id: "Basic Excel", en: "Basic Excel" },
    issuer: "",
    date: "",
    credentialId: "",
    credentialUrl: "",
    certificate: "/certifications/Wijaya-Agus-Setiawan_Basic-Excel.png"
  },
  {
    id: "excel-2",
    name: { id: "Excel 2", en: "Excel 2" },
    issuer: "",
    date: "",
    credentialId: "",
    credentialUrl: "",
    certificate: "/certifications/Wijaya-Agus-Setiawan_Excel-2.png"
  }
];
