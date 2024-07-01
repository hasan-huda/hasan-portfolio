"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a recent graduate from Stony Brook University with a Bachelor’s degree in <span className="font-medium">Applied Mathematics and Statistics</span>. During my studies, I took extensive computer science courses, completing a majority of the Computer Science Engineering curriculum at my University and balanced my education with work at Chipotle and White Castle.
      </p>
      <p className="mb-3">
      My interest in software development from these computer science courses led me to complete a coding bootcamp, which I attended while still in school. This decision led to an invaluable internship opportunity at PSEG, a prominent utility company in the Northeastern United States, where <span className="font-medium">I worked as a developer for nearly a year.</span>
      </p>
      <p>I found myself loving the satisfaction of finally figuring out a solution to a problem, prefering to do so with technologies like <span className="font-medium">React, Next.js, MongoDB, and TypeScript.</span> I have also developed a strong affinity for working with Prisma, and I am always learning new technologies, on top of also Java Python and Javascript that I was introduced to in university and bootcamp. I am now seeking a full-time position in software development to continue growing and contributing to impactful projects.</p>
    </motion.section>
  );
}