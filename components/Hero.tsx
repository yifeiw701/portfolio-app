"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const nameLetters = ["Y", "I", "F", "E", "I", "&lsquo;", "W", "A", "N", "G"];

const TitleLetter = (props: { name: string; index: number }) => {
  const { name, index } = props;
  const [animating, setAnimating] = useState<boolean>(false);

  return (
    <motion.li
      key={name}
      className={`cursor-pointer ${animating ? "animate-rotate" : ""} mr-3`}
      initial={{ rotateY: 0, color: "#999999" }}
      onMouseEnter={() => setAnimating(true)}
      onAnimationEnd={() => setAnimating(false)}
      style={{ fontSize: "7vw", animationFillMode: "forwards" }}
    >
      {index === 5 ? String.fromCharCode(160) : name}
    </motion.li>
  );
};

const Hero = () => {
  return (
    <section id="home">
      <hr className="absolute w-[9px] lg:h-[45%] mt-16 ml-12 bg-[#d8a367] dark:bg-orange-300 border-0 invisible lg:visible"></hr>
      <hr className="absolute w-[65%] h-[9px] mt-28 ml-2 bg-[#d8a367] dark:bg-orange-300 border-0 invisible lg:visible"></hr>
      <div className="flex flex-col relative md:flex-row text-center items-center justify-center animate-fadeIn mt-12 py-16 sm:py-32 md:py-48 md:pl-10 md:space-x-4 lg:space-x-4 md:text-left">
        <motion.div
          className="md:mt-2  shadow-img animate-profile__animate"
          style={{ borderRadius: "50%", overflow: "hidden" }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70%/60% 30% 70% 40%",
              "30% 60% 70% 40%/50% 60% 30% 60%",
              "60% 40% 30% 70%/60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            delay: 1,
          }}
        >
          <Image src="/headshot.png" alt="" width={325} height={325} />
        </motion.div>

        <div className="mt-2">
          <div className="text-4xl mt-6 md:mt-0 md:text-6xl">
            <motion.ul
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {nameLetters.map((value, index) => (
                <TitleLetter key={index} name={value} index={index} />
              ))}
            </motion.ul>
          </div>
          <h2 className="text-center italic font-serif text-xl px-2 md:text-1xl lg:text-2xl xl:text-4xl mt-6 text-gray-500 dark:text-gray-400">
            Software developer | Photographer | Student
          </h2>
        </div>

        <div className="ml-9.25rem">
          <div className="wheel animate-scroll" />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
