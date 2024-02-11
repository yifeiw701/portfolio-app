import React from "react";

const Footer = () => {
  return (
    <footer className="mt-14 md:mt-32 mb-2 text-center">
      <div className="mx-auto max-w-6xl">
        <div className=" text-gray-500 md:mb-0">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-500"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-500"
          >
            Tailwind CSS
          </a>
          ,{" "}
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-500"
          >
            Framer Motion
          </a>{" "}
          and{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-500"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
