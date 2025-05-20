import React from "react";
import "aos/dist/aos.css";


export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-200 px-4 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-evenly h-[150px] max-w-6xl mx-auto px-4">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            
            
            href="https://github.com/Achraf333-m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-md  transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            
            href="https://linkedin.com/in/achraf-daimallah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-md  transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
          
            href="mailto:ash@achrafdaimallah.com"
            className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-md  transition-colors duration-200"
          >
            Email
          </a>
        </div>

        <p  className="text-sm md:text-base text-center md:text-left text-gray-400">
          &copy; {year}{" "}
          <span className="text-white font-medium">Achraf Daimallah</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
