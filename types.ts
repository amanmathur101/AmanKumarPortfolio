export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'Internship' | 'Freelance' | 'Training';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}