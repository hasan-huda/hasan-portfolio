import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kangaImg from "@/public/KangaImg.png";
import macGuardianImg from "@/public/macguardianImg.png";
import alfAjrImg from "@/public/AlfAjr.png"

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
        name: "Experience",
        hash: "#experience",
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
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Headstarter AI - Software Engineer Fellow",
        location: "New York City, New York",
        description:
            "As a fellow, I am to build 5 AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI. I am to develop projects from design to deployment, leading 3 other engineering fellows using MVC design patterns. I am coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git and microservice patterns.",
        icon: React.createElement(FaReact),
        date: "2024 - Present",
    },
    {
        title: "PSEG Software Developer",
        location: "PSEG - Newark, NJ",
        description:
            "For nearly a year, as an intern, worked on debugging 100s of API endpoints, as well as developing Java/Mulesoft code solutions to 3 major projects. Separately worked with HTML, CSS, and JS to create an engaging website with a team that highlighted the company internship experience across multiple departments.",
        icon: React.createElement(FaReact),
        date: "2023 - 2024",
    },
    {
        title: "Graduated College: Applied Maths & Statistics Degree",
        location: "Stony Brook University - Stony Brook, NY",
        description:
            "Acquired Bachelor's of Science in Applied Mathematics and Statistics, while taking a great number of Computer Science courses, at the #1 ranked public University in NY. I was also the university's MSA Vice President, a club organization that served thousands of members within the University community",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2024",
    },
    {
        title: "Graduated Bootcamp: Software Development",
        location: "Coding Dojo - New York City, NY",
        description:
            "I graduated after 4 months of study, at the rigorous program I completed alongside my degree, intensively familiarizing myself here with languages like Python, Java, Mongo, Express, React, and others while developing, debugging, and deploying dozens of web applications",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "AlfAjr (50+ Users)",
        description:
            "Habit Builder for spirituality with Friend and Leaderboard functionality.",
        tags: [
            "NextJS",
            "TypeScript",
            "PostgreSQL",
            "React",
            "Tailwind",
            "Firebase",
            "Prisma",
        ],
        imageUrl: alfAjrImg,
        link: "https://www.alf-ajr.com",
        githubLink: "https://github.com/omar-t-ahmed/AlfAjr",
    },
    {
        title: "MacGuardians",
        description:
            "E-commerce site for custom macbook cases, with your personal images. Complete with firebase, stripe, and an admin dashboard.",
        tags: [
            "NextJS",
            "TypeScript",
            "PostgreSQL",
            "React",
            "Tailwind",
            "Firebase",
            "Stripe",
            "Prisma",
        ],
        imageUrl: macGuardianImg,
        link: "https://macguardians.vercel.app",
        githubLink: "https://github.com/hasan-huda/macguardians",
    },
    {
        title: "KangaCook",
        description: "Web app for Asian recipes. Under maintenance",
        tags: [
            "Django",
            "Python",
            "Typescript",
            "NextJS",
            "AWS (S3 & EC2)",
            "Tailwind",
            "Firebase",
        ],
        imageUrl: kangaImg,
        link: "http://kangabucket-hh.s3-website.us-east-2.amazonaws.com",
        githubLink: "https://github.com/hasan-huda/kangacook-backend",
    },
    // {
    //     title: "BugTracker",
    //     description:
    //         "Web app to monitor software bugs across projects. Completed with userAuth and management, and admin capabilities.",
    //     tags: ["React", "MongoDB", "Express", "MaterialUI"],
    //     imageUrl: bugTrackerImg,
    //     link: "https://hasan-fiscalfit.onrender.com",
    //     githubLink: "https://github.com/hasan-huda/bugtracker-backend",
    // },

    // {
    //   title: "Word Analytics",
    //   description:
    //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //   imageUrl: wordanalyticsImg,
    //   link: "https://macguardians.vercel.app"
    // },
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
