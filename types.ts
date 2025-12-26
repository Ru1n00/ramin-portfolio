
export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
