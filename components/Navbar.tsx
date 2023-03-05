"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="container flex items-center space-x-2">
              <h2 className="text-2xl font-bold">Yifei Wang</h2>
              <div className="flex space-x-2 mb-1">
                <a
                  href="https://github.com/yifeiw701"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineGithub
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                    size={30}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/yifei-wang01/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineLinkedin
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                    size={30}
                  />
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <motion.button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                whileHover={{
                  scale: 1.1,
                  borderRadius: "50px",
                  transition: { duration: 0.2, ease: "easeInOut" },
                  backgroundImage: "linear-gradient(45deg, #0077ff, #00ffcc)",
                  boxShadow:
                    "0px 3px 3px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(0, 0, 0, 0.2) inset",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </motion.button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <motion.button
                    key={idx}
                    className="block lg:inline-block p-2 text-neutral-900 rounded-md outline-none focus:border-gray-400 focus:border"
                    whileHover={{
                      scale: 1.05,
                      borderRadius: "10px",
                      transition: { duration: 0.2, ease: "easeInOut" },
                      backgroundColor: "#70c1a9",
                      color: "#fff",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Link
                      to={item.page}
                      className="hover:text-neutral-100"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {item.label}
                    </Link>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
