"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col-reverse md:flex-row text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
            Hi there, I&#39;m Yifei!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a third year Computer Science and Statistics student at
            McGill University.
          </p>
        </div>

        <div className="md:mt-2 md:w-1/3">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
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
