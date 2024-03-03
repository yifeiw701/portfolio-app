"use client"; 
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

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
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  const currentTheme = theme;

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 bg-gray-50 dark:bg-gray-900">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="container flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">
                Yifei Wang
              </h2>
              <div className="flex space-x-2 mb-1">
                <a
                  href="https://github.com/yifeiw701"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineGithub
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-300"
                    size={30}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/yifei-wang01/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineLinkedin
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-300"
                    size={30}
                  />
                </a>
              </div>
            </div>

            <div className="md:hidden ">
              <motion.button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                whileHover={{
                  scale: 1.1,
                  borderRadius: "50px",
                  transition: { duration: 0.2, ease: "easeInOut" },
                  backgroundImage: "linear-gradient(45deg, #ff7e5f, #feb47b)",
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
                    className="block lg:inline-block p-2 text-neutral-900 dark:text-neutral-200 rounded-md outline-none"
                    whileHover={{
                      scale: 1.05,
                      borderRadius: "10px",
                      transition: { duration: 0.2, ease: "easeInOut" },
                      backgroundColor: "#feb47b",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.page}
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
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-200 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-200 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
