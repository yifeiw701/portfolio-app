"use client"; // this is a client component
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { skill: "Next.js" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Tailwind CSS" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "GraphQL" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "Jupyter Notebooks" },
  { skill: "Git" },
  { skill: "R" },
  { skill: "SQL" },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="mt-20 mb-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center uppercase tracking-[20px] text-gray-500 text-xl md:text-3xl mb-15">
          My Skills
        </h1>
        <h1 className="space-y-5 md:space-y-10 px-0 md:px-12 text-xl sm:text-2xl font-bold mb-6 mt-12 text-neutral-900 dark:text-neutral-200">
          Some Tools & Technologies I&#39;ve Worked With
        </h1>
        <div className="grid grid-cols-3 gap-1 px-2 sm:grid-cols-4 sm:gap-4 sm:px-4 md:gap-5  md:px-10">
          {skills.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
                }}
              >
                <p className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-2 py-2 text-xs sm:text-base sm:px-5 sm:py-3 mr-2 mt-2 text-white rounded font-semibold ">
                  {item.skill}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
