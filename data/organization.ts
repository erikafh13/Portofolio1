import type { OrganizationItem } from "@/lib/types";

export const organization: OrganizationItem[] = [
  {
    id: "ukki-upnvjt",
    name: "UKKI UPNVJT",
    images: [],
    roles: [
      {
        id: "ukki-ketua-umum",
        title: { id: "Ketua Umum", en: "General Chairperson" },
        period: "2025",
        startYear: 2025,
        points: [
          { id: "Memimpin dan mengoordinasikan 7 departemen.", en: "Led and coordinated 7 departments." },
          { id: "Mengoordinasikan 70+ pengurus.", en: "Coordinated 70+ board members." },
          { id: "Bekerja sama dengan pemangku kepentingan kampus.", en: "Worked with campus stakeholders." },
          { id: "Mengarahkan kebijakan organisasi.", en: "Directed organizational policies." },
          { id: "Melakukan evaluasi organisasi.", en: "Conducted organizational evaluation." }
        ]
      },
      {
        id: "ukki-kepala-departemen-kaderisasi",
        title: { id: "Kepala Departemen Kaderisasi", en: "Head of Cadre Development Department" },
        period: "2024",
        startYear: 2024,
        points: [
          { id: "Memimpin 9 anggota departemen.", en: "Led 9 department members." },
          { id: "Mengelola kegiatan pengembangan kaderisasi.", en: "Managed cadre development activities." }
        ]
      },
      {
        id: "ukki-anggota",
        title: { id: "Anggota", en: "Member" },
        period: "2023",
        startYear: 2023,
        points: []
      }
    ]
  },
  {
    id: "ipnu-ranting-bulak",
    name: "IPNU Ranting Bulak",
    images: [],
    roles: [
      {
        id: "ipnu-sekretaris-umum",
        title: { id: "Sekretaris Umum", en: "General Secretary" },
        period: "Mar 2022 \u2013 Feb 2024",
        startYear: 2022,
        points: [
          { id: "Administrasi organisasi.", en: "Organizational administration." },
          { id: "Koordinasi program.", en: "Program coordination." },
          { id: "Komunikasi.", en: "Communication." }
        ]
      }
    ]
  }
];