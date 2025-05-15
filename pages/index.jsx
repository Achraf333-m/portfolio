import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { GrLinkedinOption } from "react-icons/gr";
import { FaArrowRight, FaGithub, FaRegCircle } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(true);
    setTimeout(() => {
      setTitle(false);
    }, 1200);
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="w-full h-full">
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
      <img src="/background_8.png" className="bgImage" />
      <Header />
      <div className="py-40 relative">
        <main className="relative flex flex-col pt-20 px-10 max-w-6xl mx-auto">
          <h1
            data-aos="fade-up"
            className=" text-[30px] text-[#14091f] dark:text-[#c3c3fb] sm:text-[55px] pb-2"
          >
            {title ? (
              <span className="">Hey there!</span>
            ) : (
              <span>I'm Achraf Daimallah</span>
            )}
          </h1>
          <h4
            className="text-md pb-8 text-[#14091f]/70 dark:text-[#afafff] font-light"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Electrical Engineering Student | Exploring Low-Level Software &
            Hardware Systems
          </h4>
          <div
            className="pb-4 space-y-2 text-[#1e102c] dark:text-[#efefff] transition-colors duration-300 ease-in-out text-xl"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <p>
              I love learning about systems that are efficient, logical, and
              close to the hardware.
            </p>
            <p>
              I built this site from scratch to showcase my skills as I continue
              to grow through my Electrical Engineering degree.
            </p>
            <p>
              I’m especially interested in digital logic, low-level programming,
              and anything hardware-related.
            </p>
            <p>
              While I’ve explored web development independently, my current
              focus is on understanding how hardware components interact to
              create the complex systems that power the world.
            </p>
          </div>

          <div className="flex items-center text-[#14091f] dark:text-[#afafff] transition-colors duration-300 ease-in-out text-xl space-x-4">
            <a
              data-aos="fade-in"
              data-aos-delay="900"
              href="https://www.linkedin.com/in/achraf-daimallah/"
              target="_blank"
            >
              <GrLinkedinOption className="hover:scale-[0.95] transition-transform" />
            </a>
            <a
              data-aos="fade-in"
              data-aos-delay="1000"
              href="https://github.com/Achraf333-m"
              target="_blank"
            >
              <FaGithub className="hover:scale-[0.95]  transition-transform" />
            </a>
            <a
              data-aos="fade-in"
              data-aos-delay="1100"
              href="https://drive.google.com/file/d/1CgMhevVhIr2Uue6pLrKju__pfQ91FIUP/view?usp=sharing"
              target="_blank"
            >
              <AiOutlineFile className="hover:scale-[0.95]  transition-transform" />
            </a>
          </div>
          <Link
            data-aos="fade-in"
            data-aos-delay="1200"
            href="/projects"
            className="flex space-x-4 max-w-[180px] items-center my-5"
          >
            <h3 className="hover:scale-[102%] transition-all text-[#14091f] dark:text-[#afafff] duration-300 text-xl">
              See my projects!
            </h3>
            <FaRegCircle className="animate-pulse-fast text-[#000000] dark:text-[#ffffff] text-sm" />
          </Link>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
