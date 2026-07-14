import type { IconType } from "react-icons";

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "AI & Machine Learning"
  | "DevOps & Tools";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: IconType;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  details?: string[];
}
