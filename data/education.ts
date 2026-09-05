import type { EducationItem } from "@/lib/types";

export const education: EducationItem[] = [
  {
    institution: "UPN \u201CVeteran\u201D Jawa Timur",
    location: "Surabaya",
    degree: { id: "S1 Administrasi Bisnis", en: "S1 Business Administration" },
    period: "Aug 2022 \u2013 Jul 2026",
    scoreLabel: { id: "IPK", en: "GPA" },
    scoreValue: "3.86 / 4.00",
    coursework: [
      { id: "Manajemen Operasional", en: "Operations Management" },
      { id: "Riset Pemasaran", en: "Marketing Research" },
      { id: "Kewirausahaan", en: "Entrepreneurship" },
      { id: "Manajemen Sumber Daya Manusia", en: "Human Resource Management" },
      { id: "Perilaku Organisasi", en: "Organizational Behavior" }
    ]
  },
  {
    institution: "SMK Negeri 10 Surabaya",
    location: "Surabaya",
    degree: { id: "Bisnis Daring dan Pemasaran", en: "Online Business and Marketing" },
    period: "Jul 2019 \u2013 Jun 2022",
    scoreLabel: { id: "Nilai", en: "Score" },
    scoreValue: "87 / 100",
    coursework: [
      { id: "Digital Marketing", en: "Digital Marketing" },
      { id: "Salesmanship", en: "Salesmanship" },
      { id: "Administrasi Perkantoran", en: "Office Administration" },
      { id: "Kewirausahaan Digital", en: "Digital Entrepreneurship" }
    ]
  }
];