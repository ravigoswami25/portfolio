export const personal = {
  name: "Ravi Goswami",
  title: "Full Stack Engineer",
  tagline:
    "Building end-to-end products with Node.js, NestJS, React, and Angular — from polished interfaces to scalable microservices.",
  phone: "8958408661",
  email: "ravigoswami776889@gmail.com",
  linkedin: "https://linkedin.com/in/goswamiravi",
  github: "https://github.com/ravigoswami25",
  location: "Noida, India",
  avatar: "/avatar.jpg",
};

export const heroStats = [
  { value: "6+", label: "Years Experience" },
  { value: "100x", label: "API Latency Reduction" },
  { value: "14", label: "Engineer Team Led" },
];

export const summary = `Results-driven Full Stack Engineer with 6+ years of experience architecting and delivering high-performance, scalable backend systems using Node.js, NestJS, and microservices. Collaborated across a cross-functional team of 14 engineers on 3 concurrent product deliveries, contributing to ~95% on-time sprint completion.

Delivered a 100x API response time improvement at Supplynote — reducing P99 latency from ~8s to under 80ms — through targeted query optimization and schema redesign. Leverages AI-powered tools including Claude and Cursor to accelerate development workflows, improve code quality, and ship features faster.

Deep hands-on expertise across AWS, GCP, and Azure with end-to-end DevOps ownership of CI/CD pipelines, Kubernetes deployments, and production observability. Shipped enterprise-grade solutions for international clients across diverse domains while coordinating directly with US-based stakeholders.`;

export const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "C", "C++"],
  "Backend Frameworks": ["Node.js", "NestJS", "Express.js"],
  Frontend: ["Angular", "React"],
  Databases: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda)",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD",
    "Heroku",
    "Firebase",
  ],
  Architecture: [
    "Microservices",
    "Event-Driven (EventHub, EventBus)",
    "REST APIs",
    "Over-the-Air Updates (OTA) via CodePush",
  ],
  "AI & Productivity": [
    "Claude (Anthropic)",
    "Cursor AI",
  ],
  "Monitoring & Quality": [
    "SonarQube",
    "Datadog",
    "Sentry",
    "Application Performance Monitoring (APM)",
  ],
  Tools: ["Git", "JIRA", "Bitbucket", "Swagger", "Metabase", "Salesforce", "Razorpay"],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    role: "Associate Tech Lead",
    company: "Appinventiv Technologies Private Limited",
    location: "Noida, India",
    period: "Mar 2025 – Present",
    highlights: [
      "Coordinating with a 14-member engineering team across 3 concurrent projects, contributing 50% hands-on development alongside technical planning.",
      "Developing a NestJS-based microservices platform covering CRM, payment processing, and 6+ business-critical modules — reducing mean time to deploy by ~40%.",
      "Designing event-driven architecture using EventHub and internal EventBus across 10+ services, eliminating ~30% of synchronous bottlenecks.",
      "Building a custom CodePush OTA update server, reducing app release turnaround from 3–5 days to under 4 hours.",
      "Optimizing CI/CD pipelines (Jenkins + Docker + Kubernetes), cutting deployment time by 50% and reducing production incidents by ~35%.",
      "Enforcing code quality via SonarQube — reducing critical code smells by 60% — and integrating Datadog APM with sub-5-minute alert SLA.",
      "Designing dual-database schemas (PostgreSQL + MongoDB) supporting 500K+ records with sub-200ms query performance.",
      "Using Claude and Cursor AI daily to accelerate code generation, debugging, and PR reviews — reducing boilerplate effort by ~30%.",
      "Collaborating directly with US-based clients on technical reviews and sprint demos, achieving 9/10 NPS across 4 active engagements.",
    ],
    technologies: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "EventHub",
      "Kubernetes",
      "Jenkins",
      "Datadog",
      "SonarQube",
      "CodePush",
    ],
  },
  {
    role: "Node.js Developer",
    company: "TLC Digitech Pvt. Ltd.",
    location: "Delhi, India",
    period: "Jul 2024 – Mar 2025",
    highlights: [
      "Developed RESTful APIs for room booking, table reservations, and food ordering — serving 50K+ monthly active users.",
      "Implemented Google Wallet integration for digital pass generation, reducing manual hospitality check-in time by ~25%.",
      "Integrated Razorpay payment gateway processing Rs.5Cr+ in monthly transaction volume with 99.9% uptime.",
      "Delivered Salesforce CRM to PostgreSQL data-sync pipeline, eliminating ~8 hours/week of manual reconciliation.",
      "Deployed production-grade solutions for global clients including The Leela, Club Marriott, and Radisson across 5 countries.",
    ],
    technologies: [
      "Node.js",
      "Angular",
      "React",
      "PostgreSQL",
      "Razorpay",
      "Salesforce",
      "Google Wallet",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Supplynote (Adcount Technologies Pvt. Ltd.)",
    location: "Noida, India",
    period: "Nov 2021 – Jul 2024",
    highlights: [
      "Achieved 100x reduction in API response times (from ~8s to under 80ms P99) via schema restructuring and compound indexing.",
      "Designed MongoDB sharding strategy supporting 10x data growth (500K to 5M+ records) with no performance degradation.",
      "Built full-stack features (Node.js + Angular) across 3 major product releases adopted by 1,000+ restaurant businesses.",
      "Configured Kubernetes auto-scaling to handle 3x traffic spikes on AWS EC2 and S3.",
      "Integrated Redis caching layer, reducing database read load by ~45% and improving API response time by ~60%.",
    ],
    technologies: [
      "Node.js",
      "Angular",
      "MongoDB",
      "Redis",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "KNNX Corp (DLT Labs Technologies)",
    location: "Hyderabad, India",
    period: "Oct 2020 – Oct 2021",
    highlights: [
      "Built RESTful APIs using Node.js and Express.js powering interactive dashboards for logistics and supply chain clients.",
      "Developed reusable UI components contributing to a shared component library adopted across 3 product teams.",
      "Established CI pipelines via Jenkins and Docker, reducing manual deployment steps by ~70%.",
    ],
    technologies: ["Node.js", "Express.js", "JavaScript", "Jenkins", "Docker"],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech) — Information Technology",
  institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
};

export const certifications = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    credentialId: "qha9inzt9m5q",
    issued: "Apr 2026",
  },
  {
    name: "Cutshort Certified JavaScript - Advanced",
    issuer: "Cutshort",
    credentialId: "71921",
    issued: "Sep 2022",
  },
  {
    name: "Cutshort Certified Algorithms - Basic",
    issuer: "Cutshort",
    credentialId: "69577",
    issued: "Jul 2022",
  },
  {
    name: "Cutshort Certified Angular (2+) - Basic",
    issuer: "Cutshort",
    credentialId: "69193",
    issued: "Jul 2022",
  },
];

export const languages = [
  { name: "English", level: "Professional Proficiency" },
  { name: "Hindi", level: "Native" },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export const pageLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];
