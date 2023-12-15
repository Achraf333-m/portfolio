import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { GrLinkedinOption } from "react-icons/gr";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(true);
    setTimeout(() => {
      setTitle(false);
    }, 1000);
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="w-full h-screen">
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
      <img
        src="/background.jpg"
        className="fixed -z-20 opacity-60 w-full h-full object-cover"
      />
      <Header />
      <div className="lightMode darkMode py-40">
        <main className="relative h-full flex flex-col pt-20 px-10 max-w-6xl mx-auto">
          <h1
            data-aos="fade-up"
            className=" text-pink-50 font-light text-[30px] sm:text-[55px] pb-2"
          >
            {title ? "Hey there!" : "I'm Achraf Daimallah"}
          </h1>
          <h4
            className="text-sm text-pink-50 pb-8 font-extralight"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            FRONTEND DEVELOPER
          </h4>
          <p
            className="pb-2 text-xl font-extralight text-pink-50"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            I love building simple, user-friendly, and high-performance websites{" "}
            <br />I know a couple frameworks but NextJS is my favorite
            currently, along with Tailwind CSS or SCSS for seamless styling.{" "}
            <br />
            I'm currently learning python and SQL with the goal of broadening my
            knowledge into the cybersecurity field.
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="700"
            href="/about"
            className="flex space-x-4 max-w-xs items-center my-10"
          >
            <h3 className="hover:scale-[102%] transition-all duration-300 text-xl text-pink-50 font-extralight">
              Learn a bit more about me
            </h3>
            <FaArrowRight className="animate-ping text-xs" />
          </Link>
          <div className="flex space-x-4 text-pink-50">
            <a
              data-aos="fade-up"
              data-aos-delay="800"
              href="https://www.linkedin.com/in/achraf-daimallah/"
              target="_blank"
            >
              <GrLinkedinOption className="hover:scale-125 transition-all" />
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="900"
              href="https://github.com/Achraf333-m"
              target="_blank"
            >
              <FaGithub className="hover:scale-125 transition-all" />
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="1000"
              href="https://drive.google.com/file/d/1IDzk5z3P6jxtfHDMHZvwP5f5Dp8tZ7xG/view?usp=sharing"
              target="_blank"
            >
              <AiOutlineFile className="hover:scale-125 transition-all" />
            </a>
            
          </div>
        </main>
      </div>
    </div>
  );
}
