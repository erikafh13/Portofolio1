import type { CertificationItem } from "@/lib/types";

/**
 * Add new certifications by appending an object to this array.
 * Fields left empty (credentialId, credentialUrl, image) can be
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
    image: ""
  }
];
