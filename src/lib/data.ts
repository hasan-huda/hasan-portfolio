import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fiscalFitImg from "@/public/fiscalfit.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamp: Software Development",
    location: "Coding Dojo - New York City, NY",
    description: "I graduated after 6 months of study, at the rigorous program I completed alongside my degree, intensively familiarizing myself here with languages like Python, Java, Mongo, Express, React, and others while developing, debugging, and deploying 10s of web applications",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Graduated College: Applied Maths & Statistics Degree",
    location: "Stony Brook University - Stony Brook, NY",
    description: "Acquired Bachelor's of Science in Applied Mathematics and Statistics, while taking a great number of Computer Science courses, at the #1 ranked public University in NY. I was also the university's MSA Vice President, a club organization that served thousands of members within the University community",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2024",
  },
  {
    title: "Internship: API Software Developer",
    location: "PSEG - Newark, NJ",
    description: "For nearly a year, worked on debugging 100s of API endpoints, as well as developing Java/Mulesoft code solutions to 3 major projects. Separately worked with HTML, CSS, and JS to create an engaging website with a team that highlighted the company internship experience across multiple departments.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "FiscalFit",
    description:
      "Frontend display promoting a financial tracker, with a modern design, complete with interactive features, highlighting stats and testimonials. I was a front-end developer.",
    tags: ["React", "Tailwind", "HTML + CSS"],
    imageUrl: fiscalFitImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Flask",
  "Java",
  "Framer Motion",
  "Spring Boot",
] as const;