export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  points: string[];
  technologies: string[];
}

export interface ProjectItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  detail?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
}