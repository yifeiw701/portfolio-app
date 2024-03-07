"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col lg:mx-4">
        <h3 className="mt-32 md:mb-[80px] text-center uppercase tracking-[20px] text-gray-600 dark:text-gray-300 text-2xl md:text-3xl lg:text-4xl">
          About Me
        </h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-6 sm:px-10 justify-evenly mx-auto items-center"
        >
          <div className="py-12 px-0 md:px-12">
            <h4 className="text-xl md:text-3xl font-semibold invisible md:visible text-neutral-900 dark:text-neutral-200">
              Get to know me!
            </h4>
            <p className="text-sm md:text-lg lg:text-lg text-justify text-neutral-900 dark:text-neutral-200">
              Hey 👋🏼 My name is Yifei. I&#39;m a final-year undergraduate
              student at McGill University studying Computer Science and
              Statistics. I am passionate about full-stack web development, data
              analysis, machine learning, and I have experience in TypeScript,
              JavaScript, Next.js, React, SQL, Node.js, Python, Java, among
              others. I am always seeking new experiences and love to keep
              myself engaged and learning new things. When I&#39;m not coding, I
              love Pilates, street photography, exploring new places, and
              watching movies!
            </p>
          </div>
          <motion.img
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className=" my-1 md:mb-0 flex-shrink-0 w-60 h-62 rounded-full object-cover md:rounded-lg md:w-72 md:h-95 xl:w-[500px] xl:h-[600px]"
            src="/aboutyf.png"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default About;
