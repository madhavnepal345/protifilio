export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
  technologies: string[];
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'languages' | 'tools';
  level: number;
  color: string;
}

export interface Profile {
  id: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  github_url: string;
  linkedin_url: string;
  avatar_url: string;
  cv_url: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string | null;
  description: string;
  achievements: string[];
  color: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  author: string;
  created_at: string;
  updated_at: string;
  read_time: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}