export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
}

export interface SocialPlatformLink {
  platform: "github" | "linkedin" | "email" | "phone" | "website" | "whatsapp";
  url: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  roleDescription: string;
  bio: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  resumeUrl: string;
  yearsOfExperience: number | string;
  socials: SocialLinks;
  socialLinks: SocialPlatformLink[];
  stats: StatItem[];
}

export interface TechItem {
  name: string;
  iconName: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: "Expert" | "Advanced" | "Proficient" | string;
  description?: string;
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  items: TechItem[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  mockupType?: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface SkillExpertise {
  id: string;
  title: string;
  level: number;
  category: string;
  description: string;
  tools: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
