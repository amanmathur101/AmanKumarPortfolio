import { Project, Experience, Education, SkillCategory } from './types';
import { 
  Code, 
  Layout, 
  Database, 
  Server, 
  Wrench, 
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import React from 'react';

export const PERSONAL_DETAILS = {
  name: "Aman Kumar",
  role: "Frontend & Full Stack Developer",
  tagline: "Transforming ideas into scalable, high-performance web solutions.",
  email: "amankkr38@gmail.com",
  phone: "+91 9155412326",
  location: "Bangalore, Karnataka",
  linkedin: "https://linkedin.com/in/amanmathur101",
  about: `I am a recent B.Tech graduate in Electronics & Communication Engineering with a strong passion for software development. 
  
  With a solid foundation in Java, Data Structures, and Object-Oriented Programming, I have transitioned into full-stack development. I am a fast learner with hands-on experience in agile teams, eager to apply my skills in React, AI, and backend technologies to solve real-world problems.`
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["ReactJS", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    category: "Backend",
    skills: ["Java","SpringBoot","Servlet"]
  },
  {
    category: "Database",
    skills: ["Hibernate", "JDBC", "MySQL", "Oracle"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VSCode", "Canva", "ChatGPT","Cursor","Gemini","Copilot"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Java Full Stack Trainee",
    company: "JSpiders",
    period: "May 2025 – Nov 2025",
    type: "Training",
    description: [
      "Intensive training in Java Full Stack technologies.",
      "Deep dive into Advanced Java, Spring Boot, and React integration.",
      "Building scalable web applications and mastering DSA concepts."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "NIELIT",
    period: "Jan 2024 – Mar 2024",
    type: "Internship",
    description: [
      "Worked collaboratively to build and improve responsive platforms.",
      "Developed front-end components using HTML, CSS, JavaScript, and Tailwind.",
      "Integrated APIs and optimized database queries for better performance."
    ]
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    period: "2023 – 2024",
    type: "Freelance",
    description: [
      "Created visual assets using Canva and Adobe tools.",
      "Delivered branding materials and social media content for various clients.",
      "Managed client communication and project timelines effectively."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
  title: "Banking Management System",
  description: "A secure full-stack banking application supporting account creation, deposits, withdrawals, and peer-to-peer fund transfers with real-time transaction validation. Implements ACID-compliant transactional operations to ensure data consistency and integrity. Features JWT-based authentication using HttpOnly cookies and role-based access control (USER/ADMIN).",
  technologies: [
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "Spring Data JPA",
    "JWT Authentication",
    "HttpOnly Cookies",
    "ReactJS",
    "Tailwind CSS",
    "Axios",
    "React Router",
    "Vite",
    "Maven",
    "Render",
    "Vercel"
  ],
  image: "/assets/skills/project1.png"
},
  {
    title: "AI-Powered Job Portal with Resume Matching System",
    description: "A full-stack AI-powered job portal that enables recruiters to post jobs and automatically match candidates based on resume analysis. Features secure JWT authentication, role-based access (User/Recruiter/Admin), job applications, and resume upload with intelligent candidate filtering. Built with a responsive UI and deployed on cloud platforms.",
   technologies: [
  "ReactJS",
  "Tailwind CSS",
  "JavaScript",
  "Spring Boot",
  "Spring Security",
  "JWT Authentication",
  "REST APIs",
  "PostgreSQL",
  "Render",
  "Vercel"
],
    image: "/assets/skills/project2.png"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills and projects. Built with modern web technologies to demonstrate frontend proficiency.",
    technologies: ["React", "Framer Motion", "Tailwind"],
    image: "/assets/skills/PortfolioImage.png"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Electronics & Communication",
    institution: "Saharsa College Of Engineering (BEU)",
    year: "2021 - 2025",
    score: "CGPA: 7.30"
  },
  {
    degree: "Intermediate",
    institution: "DR S P M Inter College Sindri (JAC Board)",
    year: "2019 - 2020"
  },
  {
    degree: "High School",
    institution: "+2 High School Nagarnausa (Bihar Board)",
    year: "2017 - 2018"
  }
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
