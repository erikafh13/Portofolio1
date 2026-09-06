export type Lang = "id" | "en";

export type Localized = {
  id: string;
  en: string;
};

export type SkillItem = {
  name: string;
  category: "hard" | "soft";
};

export type EducationItem = {
  institution: string;
  location: string;
  degree: Localized;
  period: string;
  scoreLabel: Localized;
  scoreValue: string;
  coursework?: Localized[];
};

export type ExperienceItem = {
  id: string;
  company: string;
  position: Localized;
  location: string;
  period: string;
  summary: Localized;
  responsibilities: Localized[];
  skills?: string[];
  images?: string[];
  certificate?: string;
};

export type OrganizationRole = {
  id: string;
  title: Localized;
  period: string;
  startYear: number;
  points: Localized[];
};

export type OrganizationItem = {
  id: string;
  name: string;
  roles: OrganizationRole[];
  images?: string[];
  certificate?: string;
};

export type EventItem = {
  id: string;
  name: Localized;
  location: string;
  role: Localized;
  period: string;
  details: Localized[];
};

export type ProjectCategory = "Business" | "Design" | "Digital Marketing" | "Other";

export type ProjectItem = {
  id: string;
  title: Localized;
  description: Localized;
  category: ProjectCategory;
  year: string;
  image: string;
  skills: string[];
  link?: string;
  github?: string;
  caseStudy?: string;
  gallery?: string[];
};

export type AwardItem = {
  id: string;
  title: Localized;
  issuer: string;
  period: string;
  certificate?: string;
};

export type CertificationItem = {
  id: string;
  name: Localized;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
};

export type PublicationType = "Journal" | "Article" | "Scientific Paper" | "Other";

export type PublicationItem = {
  id: string;
  title: Localized;
  type: PublicationType;
  date: string;
  description: Localized;
  authors: string[];
  publisher: string;
  link?: string;
  image?: string;
};
