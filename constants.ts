
import { Experience, SkillGroup, Achievement, PortfolioItem } from './types';

export const INITIAL_DATA = {
  personal: {
    name: "Md. Ruhul Amin",
    title: "Software Engineer",
    location: "Dhaka, Bangladesh",
    email: "ruhul.amin.tnt@gmail.com",
    phone: "+880 1752 474111",
    github: "github.com/ru1n00",
    codeforces: "codeforces.com/ru1n00",
    summary: "Motivated and versatile Software Engineer with expertise in full-stack development. Skilled in building scalable and efficient applications using Django, Vue.js, and modern DevOps practices. Strong problem-solving abilities, with proven experience delivering secure, performant, and user-friendly systems."
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "PHP", "SQL", "JavaScript", "HTML", "CSS", "C++"]
    },
    {
      category: "Frameworks & Tech",
      items: ["Django", "Flask", "Laravel", "Vue.js", "Vuetify", "Tailwind", "MySQL", "PostgreSQL", "Docker", "Git", "CI/CD"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Team Collaboration", "Leadership", "Adaptability", "Communication", "Time Management"]
    }
  ] as SkillGroup[],
  experiences: [
    {
      company: "MatrimonyAssist",
      role: "Software Engineer",
      period: "Oct/24 – Present",
      bullets: [
        "Led the end-to-end development of scalable web applications using Django (REST APIs) and Vue.js.",
        "Designed and deployed a secure Two-Factor Authentication (2FA) system, reducing unauthorized access by 40%.",
        "Implemented a real-time chat module with WebSockets supporting 1k+ active users.",
        "Optimized PostgreSQL database schemas, reducing query execution times by up to 35%.",
        "Automated CI/CD pipelines with GitHub Actions, cutting release cycles from hours to minutes.",
        "Mentored junior engineers via code reviews, pair programming, and knowledge-sharing sessions."
      ]
    },
    {
      company: "MatrimonyAssist",
      role: "Associate Software Engineer",
      period: "Oct/23 – Sep/24",
      bullets: [
        "Contributed to system architecture design and introduced best practices for modular, scalable codebases.",
        "Troubleshot and resolved production issues across both frontend and backend.",
        "Conducted peer code reviews, enforced clean coding practices, and reduced technical debt.",
        "Enhanced UI/UX by integrating Vuetify and TailwindCSS, increasing adoption rates."
      ]
    },
    {
      company: "MatrimonyAssist",
      role: "Junior Software Engineer",
      period: "Oct/22 – Sep/23",
      bullets: [
        "Developed responsive user-facing features using HTML, CSS, and JavaScript.",
        "Built and integrated RESTful APIs in Django for dynamic frontend components.",
        "Assisted in optimizing application performance with caching and query optimization.",
        "Collaborated in daily standups, gaining exposure to Agile and Git workflows."
      ]
    }
  ] as Experience[],
  achievements: [
    {
      title: "1000+ Problems Solved",
      description: "Solved over 1000 competitive programming problems across various platforms including Codeforces."
    },
    {
      title: "ULAB CSE Fest 2025 Hackathon",
      description: "Crowned Champion in the university-wide hackathon competition."
    },
    {
      title: "ULAB CSE Fest 2025 Programming Contest",
      description: "Won first place in the programming contest among top university participants."
    },
    {
      title: "ULAB Annual Programming Contest 2024",
      description: "Achieved Champion status for consistent performance in competitive coding."
    }
  ] as Achievement[],
  education: [
    {
      degree: "B.Sc in CSE (Ongoing)",
      institution: "University of Liberal Arts Bangladesh",
      score: "CGPA: 3.92"
    },
    {
      degree: "HSC",
      institution: "New Govt. Degree College, Rajshahi",
      score: "GPA: 5.00"
    }
  ],
  portfolio: [
    {
      id: "1",
      title: "MatrimonyAssist Platform",
      description: "A comprehensive matrimonial platform with real-time chat, 2FA authentication, and advanced matching algorithms. Built with Django REST APIs and Vue.js frontend.",
      image: "/api/placeholder/400/300",
      technologies: ["Django", "Vue.js", "PostgreSQL", "WebSockets", "Docker"],
      githubUrl: "https://github.com/ru1n00/matrimonyassist",
      liveUrl: "https://matrimonyassist.com",
      featured: true
    },
    {
      id: "2",
      title: "Competitive Programming Tracker",
      description: "A personal dashboard for tracking competitive programming progress across multiple platforms. Features include problem categorization, difficulty analysis, and performance metrics.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/ru1n00/cp-tracker",
      featured: true
    },
    {
      id: "3",
      title: "E-commerce Microservices",
      description: "A scalable e-commerce backend built with microservices architecture. Includes user management, product catalog, order processing, and payment integration.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "Redis"],
      githubUrl: "https://github.com/ru1n00/ecommerce-microservices",
      featured: false
    }
  ] as PortfolioItem[]
};

// Explicitly export PERSONAL_INFO to support direct imports in contact components
export const PERSONAL_INFO = INITIAL_DATA.personal;
