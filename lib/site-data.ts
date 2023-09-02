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
      "Aenean tincidunt lacinia enim. Sed vitae tristique justo, vitae aliquam ante. Morbi tempus ac mi in sodales. Fusce sit amet porttitor metus. Fusce id mauris tempus, dapibus est nec, egestas quam. Vestibulum urna erat, aliquam in semper nec, eleifend nec ipsum. Nulla in laoreet est. Nulla justo lacus, tristique sed orci et, luctus tempor nisi. Quisque lobortis, massa et dignissim facilisis, lectus justo tristique ex, eu ornare augue quam id orci. Pellentesque lacinia leo ornare, maximus lorem nec, efficitur nibh. Cras lacinia nec metus at mollis. Nullam ac ante eu tellus fringilla tincidunt vitae hendrerit mi. Nunc pulvinar nulla in nunc pulvinar, quis cursus lectus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, tellus ac consectetur mollis, lectus nisl commodo velit, et sagittis metus risus et ipsum.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023",
  },
  {
    title: "Technical Writer, CX",
    location: "Toronto",
    description:
      "Phasellus suscipit magna ut dui feugiat, eu vehicula urna dictum. Proin auctor sapien id aliquam lobortis. Praesent fringilla ipsum ac pellentesque congue. Nulla sollicitudin velit quis metus pellentesque, et placerat magna vehicula. Aenean quis mi condimentum mi mollis gravida quis ut nisl. In ultricies, lectus vel blandit interdum, risus mi hendrerit libero, vitae facilisis dolor sem nec augue. Fusce rutrum mauris id sem varius fermentum.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Copywriter, SEO",
    location: "Mississauga, ON",
    description:
      "Nam mattis mauris at nisi dictum tempus. Phasellus nec facilisis nibh, a ultrices odio. Ut blandit id erat quis euismod. Nullam sollicitudin, nibh sed pharetra tincidunt, urna ex ultrices nisi, id maximus augue sapien non purus. Sed sed orci tristique, dictum mi et, condimentum justo. Phasellus vehicula nunc nisi, non volutpat felis maximus aliquet. Aenean cursus magna quis justo dapibus, vel posuere ante imperdiet. Nunc lobortis sagittis purus, vitae placerat est scelerisque luctus.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Received B.A. in English Studies",
    location: "Toronto, ON",
    description:
      "Morbi non leo enim. Duis laoreet sem ut erat pulvinar, vitae gravida justo ullamcorper. Cras orci urna, consectetur et molestie ac, accumsan et elit. Donec et laoreet odio. Pellentesque convallis turpis sed vestibulum vulputate. Vestibulum consequat pellentesque quam vitae ultricies. Vivamus tincidunt felis non nulla lobortis, ut dictum nulla laoreet.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
] as const;

export const projects = [
  {
    title: "Mensu",
    description:
      "Cras diam ex, convallis non ultricies a, venenatis non arcu. Etiam accumsan magna ac velit tincidunt, et gravida arcu posuere. In hac habitasse platea dictumst. Donec lacinia quam in mauris bibendum iaculis. Nam et egestas tortor. Etiam ultricies commodo metus vitae auctor. Vestibulum tincidunt dui nisl, vel blandit tellus aliquam nec. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
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
    title: "DSA Visualizer",
    description:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit ultricies massa, vel luctus lectus rhoncus vitae. Duis at arcu nibh. Nulla tellus erat, imperdiet ac odio at, sagittis congue dolor. Nam posuere ante ac sapien cursus, at imperdiet ligula laoreet. Sed et justo ac urna pellentesque pretium a egestas eros. Nulla a odio velit.",
    tags: ["WIP", "D3.js", "TypeScript", "Next.js 13", "TailwindCSS"],
    imageUrl: profile,
  },
  {
    title: "Portfolio",
    description:
      "Pellentesque varius massa eget dolor accumsan dapibus at quis lectus. Maecenas vel laoreet urna, et vulputate justo. Donec consectetur magna in est pulvinar mollis. Duis vitae eros vitae nibh blandit aliquam non quis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam cursus dictum rutrum. Sed turpis mauris, convallis non purus sed, lacinia aliquet lacus.",
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
