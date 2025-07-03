import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  express,
  mongodb,
  mysql,
  firebase,
  cybersecurity,
  git,
  github,
  figma,
  docker,
  vscode,
  postman,
  threejs,
  cpp,
  python,
  book,
  brain,
  bulb,
  project,
  rocket,
  carrent,
  jobit,
  tripguide,
} from "../assets";
import { FaGithub } from "react-icons/fa";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "AI / ML Enthusiast",
    icon: python,
  },
  {
    title: "Cybersecurity Learner",
    icon: cybersecurity,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Foundation in Programming & Web Concepts",
    company_name: "Self-Guided Learning",
    icon: book,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Began foundational studies in programming, focusing on problem-solving and logic building.",
      "Explored basic web technologies and development workflows.",
      "Completed beginner-level courses and built first static web pages.",
      "Developed a consistent self-study routine and technical curiosity.",
    ],
  },
  {
    title: "Hands-on Web Development & Collaborative Learning",
    company_name: "Independent Projects",
    icon: brain,
    iconBg: "#E6DEDD",
    date: "January 2024 - June 2024",
    points: [
      "Built dynamic web applications and explored full-stack fundamentals.",
      "Collaborated with peers to review code, share feedback, and tackle challenges.",
      "Studied version control, deployment, and open-source contribution basics.",
      "Started maintaining a personal GitHub portfolio with mini-projects.",
    ],
  },
  {
    title: "Specialisation in Intelligent Systems & Backend Technologies",
    company_name: "Focused Study Modules",
    icon: bulb,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    points: [
      "Studied core concepts in AI/ML, backend development, and APIs.",
      "Practiced model training using structured datasets and basic neural networks.",
      "Created backend services and connected them with frontend clients.",
      "Learned about secure coding, encryption, and authentication flows.",
    ],
  },
  {
    title: "Capstone Projects & Real-World Simulation",
    company_name: "Academic Labs & Peer Collaborations",
    icon: project,
    iconBg: "#E6DEDD",
    date: "January 2025 - June 2025",
    points: [
      "Undertook major projects simulating real-world software architecture.",
      "Practiced debugging, testing, and project documentation.",
      "Emphasised clean code principles, modular design, and maintainability.",
      "Actively explored internship opportunities and professional mentorship.",
    ],
  },
  {
    title: "Portfolio Enhancement & Career Readiness",
    company_name: "Ongoing Development",
    icon: rocket,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Polishing personal portfolio with technically diverse and impactful projects.",
      "Refining skills in specific domains such as intelligent systems and secure web architecture.",
      "Engaging with the tech community through forums, events, and code contributions.",
      "Preparing for career opportunities through mock interviews and skill-based certifications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project-1",
    description: "Coming Soon!",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "Project-2",
    description: "Coming Soon",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "Project-3",
    description: "Coming Soon",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
