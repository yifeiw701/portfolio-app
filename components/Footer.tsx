import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 ">
          © 2023 Yifei Wang<a href="/" className="hover:underline"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
