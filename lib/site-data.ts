import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import profile from "@/public/profile.jpg";
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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023",
  },
  {
    title: "Technical Writer, CX",
    location: "Toronto",
    description:
      "I held two positions as a technical writer. worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Copywriter, SEO",
    location: "Mississauga, ON",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Received B.A. in English Studies",
    location: "Toronto, ON",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
] as const;

export const projects = [
  {
    title: "Mensu",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      "WIP",
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
    title: "DSA Visualizer",
    description:
      "A web app that visualizes common data structures and algoriths in an easy to digest format.",
    tags: ["WIP", "D3.js", "TypeScript", "Next.js 13", "TailwindCSS"],
    imageUrl: profile,
  },
  {
    title: "Portfolio",
    description:
      "My portfolio website features animations using Framer Motion.",
    tags: ["React", "Next.js 13", "TailwindCSS", "Framer Motion", "Typescript"],
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
  "TailwindCSS",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Prisma",
  "GraphQL",
  "Apollo",
  "Git",
  "PWAs",
  "JWT",
  "Framer Motion",
  "D3.js",
  "DITA XML",
] as const;
