"use client"; // this is a client component
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <h3 className="text-center mt-20 uppercase tracking-[20px] text-gray-500 text-2xl md:text-3xl">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className=" -mb-24 md:mb-0 flex-shrink-0 w-60 h-62 rounded-full object-cover md:rounded-lg md:w-72 md:h-95 xl:w-[500px] xl:h-[600px]"
          src="/aboutyf.png"
        />
        <div className=" space-y-16 md:space-y-10 px-0 md:px-12">
          <h4 className="text-xl md:text-3xl font-semibold invisible md:visible lg:visible xl:visible text-neutral-900 dark:text-neutral-200">
            Get to know me!
          </h4>
          <p className="text-sm md:text-lg lg:text-lg text-justify text-neutral-900 dark:text-neutral-200">
            Hey 👋🏼 My name is Yifei. I&#39;m a final-year undergraduate student
            at McGill University studying Computer Science and Statistics. I am
            passionate about full-stack web development, Data Analysis, ML and I
            am experienced in Typescript, Java, Python, C and many other
            programming languages. I am always seeking new experiences and love
            to keep myself engaged and learning new things. When I&#39;m not
            coding, I love street photography, exploring new places, and
            watching movies!
          </p>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
