import React from "react";
import { TbBriefcase, TbSchool } from "react-icons/tb";
import profile from "@/public/profile.jpg";
import portfolioSc from "@/public/portfolio-sc.png";
import visualizerSc from "@/public/visualizer-sc.png";
// Add images to public

export const links = [
  {
    name: "intro",
    hash: "#intro",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const experiences = [
  {
    title: "Graduated coding bootcamp",
    location: "Toronto, ON",
    description:
      "I successfully completed a coding bootcamp program offered by University of Toronto School of Continuing Studies. Through this intensive program, I gained a solid understanding of the fundamentals of web development, which encompassed essential web technologies, popular front-end and back-end frameworks, testing, and fundamental computer science principles. Through multiple group projects, I had the opportunity to collaborate within a team of developers under the Agile methodology, gaining practical experience in project management and teamwork.",
    icon: React.createElement(TbSchool),
    date: "2023",
  },
  {
    title: "Technical Writer, CX",
    location: "Toronto; Mississauga",
    description:
      "My roles as a technical writer at a fintech company and at a transit technology company allowed me to excel in simplifying technical concepts into user-friendly documentation. I closely collaborated with development and product teams to grasp the nuances of the products and systems, ensuring that end-users could effectively utilize the technology. This experience deepened my understanding of both the technical and communicative aspects of the industry.",
    icon: React.createElement(TbBriefcase),
    date: "2021 - 2023",
  },
  {
    title: "Copywriter, SEO",
    location: "Mississauga, ON",
    description:
      "As a copywriter specializing in SEO, I was responsible for crafting content that not only engaged readers but also adhered to search engine optimization best practices. This role provided valuable insights into web technologies and modern digital marketing, enhancing my understanding of the digital landscape.",
    icon: React.createElement(TbBriefcase),
    date: "2020 - 2021",
  },
  {
    title: "Received B.A. in English Studies",
    location: "Toronto, ON",
    description:
      "I graduated with a bachelor of arts in English with French bilingual distinction from York University—Glendon Campus. This program equipped me with language, literature, and critical thinking skills, strengthening my communication and analytical abilities.",
    icon: React.createElement(TbSchool),
    date: "2018",
  },
] as const;

export const projects = [
  {
    title: "Algorithm Visualizer",
    description:
      "A DSA visualizer with instructive animations to demonstrate common patterns.",
    tags: ["Next.js 13", "React", "TailwindCSS", "PWA", "TypeScript", "Vercel"],
    imageUrl: visualizerSc,
  },
  {
    title: "Word Weaver",
    description: "A GPT-powered crossword generator.",
    tags: [
      "WIP",
      "PWA",
      "React",
      "Next.js 13",
      "MongoDB",
      "Prisma",
      "TailwindCSS",
      "Typescript",
    ],
    imageUrl: profile,
  },
  {
    title: "Portfolio",
    description: "You're looking at it.",
    tags: [
      "Next.js 13",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Typescript",
      "Vercel",
    ],
    imageUrl: portfolioSc,
  },
  {
    title: "Featured Documentation",
    description: "You're looking at it.",
    tags: ["Docs-as-code", "DITA XML"],
    imageUrl: profile,
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Prisma",
  "GraphQL",
  "Apollo",
  "D3.js",
  "TailwindCSS",
  "Material UI",
  "Git",
  "PWAs",
  "JWT Auth",
  "Framer Motion",
  "DITA XML",
] as const;
