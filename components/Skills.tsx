"use client"; // this is a client component
import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: number | string;
  y: number | string;
}

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-transparent sm:bg-[#feb47b] text-black dark:text-gray-300 sm:p-2 md:py-3 md:px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="px-4">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-[86px] md:text-6xl w-full text-center text-gray-500 dark:text-neutral-200 mt-32 md:mt-64">
          Skills
        </h1>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm md:bg-circularLight dark:md:bg-circularDark">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-[#feb47b] text-slate-800 dark:text-neutral-200 p-2 sm:p-4 md:p-8 shadow-dark cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill name="SQL" x="-20vw" y="2vw" />
          <Skill name="React" x="-5vw" y="-10vw" />
          <Skill name="Javascript" x="19vw" y="5vw" />
          <Skill name="Typescript" x="0vw" y="12vw" />
          <Skill name="CSS" x="-20vw" y="-14vw" />
          <Skill name="NextJS" x="15vw" y="-12vw" />
          <Skill name="NodeJS" x="32vw" y="-5vw" />
          <Skill name="HTML" x="0vw" y="-19vw" />
          <Skill name="Git" x="-25vw" y="16vw" />
          <Skill name="Python" x="22vw" y="18vw" />
          <Skill name="GraphQL" x="-34vw" y="-4vw" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
