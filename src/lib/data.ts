import { Icons } from "@/components/icons";
import { FileIcon, HomeIcon } from "lucide-react";

export const PRIMARY_COLOR = "#dc2626";

export const BLUR_FADE_DELAY = 0.04;

export interface Project {
  readonly title: string;
  readonly href: string;
  readonly links: readonly {
    readonly type: string;
    readonly href: string;
  }[];
  readonly description: string;
  readonly technologies: readonly string[];
  readonly video: string;
  readonly image: string;
}

export const DATA = {
  name: "Justin Variara",
  initials: "JV",
  description:
    "I'm a Software Developer with a passion for web development with amazing client & user experiences with the use of modern technologies like React, Tailwind CSS and Next.js",
  url: "https://www.justinvariara.com/",
  summary:
    "I'm a 22 year old from New York with a passion for web development and data analytics. I graduated from the University At Buffalo with a BS in Computer Science and work on difficult engineering problems and learn from talented teams and fellow students.",
  skills: {
    Languages: [
      "HTML5/CSS3",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "MongoDB",
    ],
    "Frameworks / Libraries": [
      "React",
      "React Native",
      "Next.js",
      "Pandas",
      "Matplotlib",
      "Node.js",
      "Flask",
      "Tailwind CSS",
      "Prisma",
      "Redux",
    ],
    Tools: [
      "Git/GitHub",
      "AWS",
      "Docker",
      "VSCode",
      "Postman",
      "Trello",
      "Figma",
      "Android Studio",
      "Agile Methodology",
    ],
    Concepts: [
      "Software Engineering",
      "Human-Computer Interaction",
      "UI/UX Design",
      "Frontend Web Development",
      "Mobile App Development",
      "Data Structures & Algorithms",
      "Artifical Intelligence",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", newPage: false },
    { href: "/Resume.pdf", icon: FileIcon, label: "Resume", newPage: true },
  ],
  contact: {
    email: "jvariara@gmail.com",
    tel: "(845) 531-9573",
    socials: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jvariara",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/justinvariara/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jvariara@gmail",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [],
  education: [
    {
      school: "University At Buffalo",
      href: "https://www.buffalo.edu/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/ub.png",
      date: "August 2021 - December 2023",
      start: "2021",
      end: "2023",
    },
    {
      school: "Dutchess Community College",
      href: "https://www.sunydutchess.edu/",
      degree: "Associate of Science in Computer Science",
      logoUrl: "/dcc.png",
      date: "August 2020 - May 2021",
      start: "2020",
      end: "2021",
    },
  ],
  projects: {
    "Web Applications": [
      {
        title: "Snippy",
        href: "https://snippy-orpin.vercel.app/",
        links: [
          {
            type: "Website",
            href: "https://snippy-orpin.vercel.app/",
          },
          {
            type: "GitHub",
            href: "https://github.com/jvariara/snippy",
          },
        ],
        description:
          "A code snippet application where users can upload and share their frequently used code snippets",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Prisma",
          "tRPC",
        ],
        video: "/projects/snippy.mp4",
        image: "",
      },
      {
        title: "UB Evaluation Tool",
        href: "",
        links: [],
        description:
          "Refactored and modernized UB CSE's current evaluation tool web application with usability in mind. Used for professors to create surveys/rubrics for students to evaluate their teammates for group assignments/project.\n\nPlaced top 10 out of 70 groups at a computer science conference.",
        technologies: [
          "React.js",
          "HTML",
          "CSS",
          "JavaScript",
          "Figma",
          "Trello",
          "GitHub",
          "MySQL",
          "PHP",
        ],
        video: "",
        image: "/projects/ETool/EToolHome.png",
      },
      {
        title: "Transcribot",
        href: "https://transcribot.vercel.app/",
        links: [
          {
            type: "Website",
            href: "https://transcribot.vercel.app/",
          },
          {
            type: "GitHub",
            href: "https://github.com/jvariara/transcribot",
          },
        ],
        description:
          "Transcribot is a modern SaaS platform which integrates OpenAI to allow users to chat with audio files easily and effectively.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "OpenAI",
          "Prisma",
          "tRPC",
        ],
        video: "/projects/transcribot.mp4",
        image: "",
      },
    ],
    "Mobile Applications": [],
    "Data Analysis": [],
  } as const,
} as const;
