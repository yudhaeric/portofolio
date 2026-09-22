export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description: string;
}

export interface CourseItem {
  id: number;
  title: string;
  provider: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const bioData = {
  headline: "A journey of learning, building, and evolving through every project, challenge, and experience along the way.",
  paragraphs: [
    "Hello! I'm Yudha Eric Pamungkas, a detail-oriented Frontend Engineer based in Tangerang, Indonesia. Over the past 4 years, I have specialized in turning complex ideas, architectural blueprints, and UI/UX designs into seamless, high-performance web applications that users love.",
    "My engineering journey centers around modern web standards, component scalability, and accessibility. Whether developing robust enterprise applications with Next.js, building interactive brand showcases with GSAP animations, or establishing structured design systems in Figma, I focus on writing clean, maintainable code with strict attention to detail.",
    "Beyond frontend development, I have hands-on experience orchestrating CI/CD deployment pipelines using Docker Compose and Jenkins, configuring Google Cloud Platform (GCP) services, and instrumenting data-driven analytics with Google Tag Manager and GA4."
  ],
  stats: [
    { label: "Experience", value: "4+ Years" },
    { label: "Core Stack", value: "React / Next.js" },
    { label: "Focus", value: "Web Performance & UI/UX" },
    { label: "Location", value: "Jakarta, Indonesia" }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Front-End Engineer",
    company: "Motor Sights International",
    type: "Full-Time",
    period: "Oct 2025 – Present",
    description: [
      "Responsible for implementing frontend features based on Technical Specification Documents (TSD) in collaboration with System Analysts and QA teams.",
      "Designed and maintained a UI/UX Design System using Figma as the single source of truth for component libraries and interface development.",
      "Managed version control workflows via Bitbucket with structured Git Flow (branching, committing, merging, and pull request reviews).",
      "Served as Person In Charge (PIC) for application deployment utilizing Docker Compose and CI/CD pipelines through Jenkins.",
      "Emphasized code quality, strict adherence to agreed development standards, and seamless cross-team communication."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Docker Compose",
      "Jenkins",
      "Bitbucket"
    ]
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "AITINDO",
    type: "Full-Time",
    period: "Oct 2023 – Oct 2025",
    description: [
      "Translated high-fidelity UI/UX designs into responsive, pixel-perfect HTML, CSS, and modern JavaScript/TypeScript code.",
      "Optimized website loading performance, Core Web Vitals, and SEO for various devices while ensuring strict cross-browser compatibility.",
      "Collaborated with designers and backend teams to integrate server-side functionality, writing modular code in Blade templates and Razor files.",
      "Utilized modern frameworks such as React and Next.js for client project development, performing continuous testing and debugging on production systems.",
      "Coordinated team collaboration and version control workflows using Git and agile sprint routines."
    ],
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Laravel Blade",
      "ASP.NET Razor",
      "Umbraco CMS",
      "Git"
    ]
  },
  {
    id: 3,
    role: "Front-End Developer",
    company: "AITINDO",
    type: "Intern",
    period: "Oct 2022 – Oct 2023",
    description: [
      "Developed responsive web applications using modern frameworks to meet client specifications with engaging, intuitive user interfaces.",
      "Created analytics click events and custom triggers using Google Tag Manager (GTM) for data collection and user behavior tracking.",
      "Integrated Next.js frontend interfaces with backend RESTful APIs, handling data fetching, caching, and state management.",
      "Communicated and collaborated effectively with backend teams, UI/UX designers, and copywriters to align technical implementation with project vision."
    ],
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Google Tag Manager",
      "RESTful APIs",
      "Git"
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: 1,
    institution: "Mercu Buana University",
    degree: "Bachelor Degree in Informatics Engineering",
    period: "Aug 2019 – Feb 2023",
    gpa: "3.72 / 4.00",
    description: "Comprehensive computer science curriculum with strong focus on software engineering fundamentals: algorithms, databases, web and mobile programming, data science, operating systems, and object-oriented programming (OOP)."
  },
  {
    id: 2,
    institution: "Bangkit Academy by Google, GoTo, Traveloka",
    degree: "Cloud Computing Learning Path",
    period: "Feb 2022 – Jul 2022",
    description: "Selected participant for Kampus Merdeka's prestigious independent study program. Deepened expertise in Google Cloud Platform (GCP) architecture, cloud deployment, and infrastructure configuration, alongside critical soft skills like time management and analytical problem solving."
  }
];

export const courseList: CourseItem[] = [
  {
    id: 1,
    title: "Web Programming Basics",
    provider: "Dicoding",
    year: "2022"
  },
  {
    id: 2,
    title: "JavaScript Programming Basics",
    provider: "Dicoding",
    year: "2022"
  },
  {
    id: 3,
    title: "Git Basics with GitHub",
    provider: "Dicoding",
    year: "2022"
  },
  {
    id: 4,
    title: "FASILKOM UMB Bootcamp (HTML & CSS)",
    provider: "Progate",
    year: "2021"
  },
  {
    id: 5,
    title: "JavaScript Course",
    provider: "Progate",
    year: "2021"
  },
  {
    id: 6,
    title: "Sass Course",
    provider: "Progate",
    year: "2021"
  },
  {
    id: 7,
    title: "React Course",
    provider: "Progate",
    year: "2021"
  },
  {
    id: 8,
    title: "Command Line Course",
    provider: "Progate",
    year: "2021"
  },
  {
    id: 9,
    title: "Git Course",
    provider: "Progate",
    year: "2021"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "PHP", "SQL"]
  },
  {
    category: "Frameworks & CMS",
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Laravel Blade",
      "ASP.NET Razor",
      "Umbraco CMS",
      "WordPress",
      "CodeIgniter"
    ]
  },
  {
    category: "Cloud Platform & DevOps",
    skills: [
      "Google Cloud Platform (GCP)",
      "Cloud SQL",
      "Cloud Storage",
      "App Engine",
      "Cloud Run",
      "Compute Engine",
      "Docker Compose",
      "Jenkins CI/CD"
    ]
  },
  {
    category: "Applications & Tools",
    skills: [
      "Figma",
      "Git",
      "GitHub",
      "Bitbucket",
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "RESTful API",
      "Postman"
    ]
  },
  {
    category: "Languages",
    skills: ["Indonesian (Native)", "English (Professional Working Proficiency)"]
  }
];
