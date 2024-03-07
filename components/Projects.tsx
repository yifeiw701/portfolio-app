"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import { BookOpenIcon } from "@heroicons/react/24/solid";

interface CardProps {
  name: string;
  description: string;
  github: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ name, description, github, link }) => {
  return (
    <div className="bg-slate-300 dark:bg-slate-700 shadow-md shadow-[#F7AB0A] h-[200px] w-[300px] sm:h-[260px] sm:w-[460px] md:h-[340px] md:w-[600px] lgxl:h-[300px] lgxl:w-[510px] xl:h-[330px] xl:w-[560px] rounded-xl flex flex-col justify-center items-center px-4 pl-6 pr-3 relative">
      <div className="absolute bottom-0 right-0 p-4">
        <BookOpenIcon className="text-[#F7AB0A] h-5 w-5 sm:h-9 sm:w-9 animate-pulse" />
      </div>
      <div>
        <h1 className="text-[15px] sm:text-xl md:text-3xl lgxl:text-[27px] font-bold mb-2 sm:mb-6 text-neutral-900 dark:text-neutral-200">
          {name}
        </h1>
        <p className="text-xs sm:text-md md:text-xl sm:leading-7 mb-2 sm:mb-4 lgxl:text-base text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
        <div className="flex flex-row align-bottom space-x-4 text-neutral-900 dark:text-neutral-200">
          <Link href={github} target="_blank">
            <BsGithub className="h-5 w-5 sm:h-8 sm:w-8 hover:-translate-y-1 transition-transform cursor-pointer" />
          </Link>
          <Link href={link} target="_blank">
            <BsArrowUpRightSquare className="h-5 w-5 sm:h-8 sm:w-8 hover:-translate-y-1 transition-transform cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

interface Project {
  name: string;
  description: string;
  image: string;
  gif: string;
  github: string;
  link: string;
}

const projects = [
  {
    name: "AskMyFile",
    description:
      "This is a user-friendly chatbot application, enabling efficient data analysis and information extraction from various file types, including CSV, PDF, and Word documents. I integrated AI functionalities using LangChain, ChatGPT API, and Pinecone, enhancing the chatbot's ability to accurately process and retrieve information from large-scale datasets.",
    image: "/AskMyFile.png",
    gif: "/askmyfile.gif",
    github: "https://github.com/yifeiw701/AskMyFile",
    link: "https://askmyfiles.streamlit.app/",
  },
  {
    name: "Motivio",
    description:
      "Motivio is a Little Prince themed motivational quote generator which fetches data from Quotable API and allows users to copy their favourite quotes.",
    image: "/Motivio.png",
    gif: "/MotivioDemo.gif",
    github: "https://github.com/yifeiw701/quote-generator",
    link: "https://quote-generator-chi-amber.vercel.app/",
  },
  {
    name: "Yifei's Portfolio",
    description:
      "Yep, I built this fully responsive personal portfolio with an emphasis on UX design. I also and implemented user-friendly features, such as smooth animations and interactive navigation, to enhance the user experience.",
    image: "/portfolio.png",
    gif: "yifei_portfolio.gif",
    github: "https://github.com/yifeiw701/portfolio-app",
    link: "https://yifei-portfolio.vercel.app/",
  },
  {
    name: "Recipe App",
    description:
      "Recipe Recommendation App is a website that I built in Streamlit which used BeautifulSoup to do web scraping to suggest recipes based on ingredients a user has.",
    image: "/Recipe.png",
    gif: "/RecipeDemo.gif",
    github: "https://github.com/yifeiw701/Recipe-Recommendation",
    link: "https://recipe-recommendation-sv06.onrender.com/",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageOnTop, setIsImageOnTop] = useState(true);

  const toggleLayer = () => setIsImageOnTop(!isImageOnTop);

  return (
    <div className="relative group">
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-200">
          {project.name}
        </div>
        <div className="flex justify-center items-center w-full mb-12">
          <div className="flex justify-center items-center relative">
            <motion.div
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              className={`relative ${isImageOnTop ? "z-20" : "z-10"}`}
              onClick={() => !isImageOnTop && toggleLayer()}
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <img
                src={isHovered ? project.gif : project.image}
                alt=""
                className="h-[200px] w-[300px] sm:h-[260px] sm:w-[460px] md:h-[340px] md:w-[600px] lgxl:h-[300px] lgxl:w-[510px] xl:h-[330px] xl:w-[560px] shadow-2xl rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isImageOnTop ? 0.7 : 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`absolute -bottom-8 -right-3 sm:-bottom-14 sm:-right-10 lgxl:-bottom-12 lgxl:-right-6 ${
                isImageOnTop ? "z-10" : "z-20"
              }`}
              onClick={toggleLayer}
            >
              <Card
                name={project.name}
                description={project.description}
                github={project.github}
                link={project.link}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="mt-32 md:mt-64 mb-12 md:mb-20 text-center uppercase tracking-[20px] text-gray-600 dark:text-gray-300 text-2xl md:text-3xl lg:text-4xl">
        Projects
      </h1>

      <div className="grid grid-cols-1 w-full lgxl:grid-cols-2 gap-x-4 gap-y-16 sm:gap-y-24">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
