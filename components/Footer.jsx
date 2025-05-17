import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-[150px]  bg-black text-white px-4">
      <div className="flex h-full border-t-[1px] border-white flex-col md:flex-row justify-between items-center p-4 max-w-6xl mx-auto">
        
        <div className="flex items-center justify-center h-full space-x-6 mt-2 md:mt-0">
          <a
            href="https://github.com/Achraf333-m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/achraf-daimallah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ash@achrafdaimallah.com"
            className="hover:text-indigo-400 transition"
          >
            Email
          </a>
        </div>
        <h1 className="text-[#ffffff] dark:text-[#afafff] text-center md:text-left">
          All Rights Reserved -{" "}
          <span className="font-semibold">Achraf Daimallah</span> &copy; {year}
        </h1>
      </div>
    </footer>
  );
};
