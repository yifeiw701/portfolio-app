"use client"; // this is a client component
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "Jupyter Notebooks" },
  { skill: "C" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "R" },
  { skill: "SQL" },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-3xl mb-15">
          My Skills
        </h1>
        <h1 className="space-y-5 md:space-y-10 px-0 md:px-12 text-2xl font-bold mb-6 mt-12 text-neutral-900 dark:text-neutral-200">
          Some Tools & Technologies I&#39;ve Worked With
        </h1>
        <div className="grid grid-cols-4 gap-4 md:gap-5 pl-4 pr-4 md:pl-10 md:pr-10">
          {skills.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
                }}
              >
                <p className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-5 py-3 mr-2 mt-2 text-white rounded font-semibold ">
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
