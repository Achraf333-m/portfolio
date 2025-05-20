"use client";

import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { GrLinkedinOption } from "react-icons/gr";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "@/components/Footer";
import ChatBox from "@/components/chatbox";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [title, setTitle] = useState(true);

  
  useEffect(() => {
   setTitle(true);
  }, []);

  return (
    <>
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
      <Header />

      <section className="section_style">
        <main className="main_style !space-y-0">
          <h1
            className="text-[28px] sm:text-[52px] font-bold tracking-tight text-[#14091f] dark:text-[#efefff] pb-2"
          >
            <span className={title ? "sr-only" : ""}>Achraf Daimallah</span>
            {title && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(300)
                    .typeString("Hello There!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I'm Achraf Daimallah :D")
                    .pauseFor(1000)
                    .deleteAll()
                    .callFunction(() => {
                      setTitle(false);
                    })
                    .start();
                }}
              />
            )}
          </h1>

          <h4
            className="text-base sm:text-lg pb-8 text-[#14091f]/70 dark:text-[#efefff] font-light"
          
          >
            Electrical Engineering Student | Exploring Low-Level Software &
            Hardware Systems
          </h4>

          <section
            className="pb-4 animate-fadeIn space-y-4 text-[#1e102c] dark:text-[#efefff] text-[17px] leading-relaxed"
           
            aria-label="Introductory description"
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
          </section>

          <div className="flex justify-between animate-fadeIn items-center pt-6 text-[#14091f] dark:text-[#efefff] text-2xl md:text-3xl space-x-5">
            <div className=" flex space-x-5 items-center">
              <a
                href="https://www.linkedin.com/in/achraf-daimallah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                // data-aos="fade-in"
                // data-aos-delay="1000"
              >
                <GrLinkedinOption className="hover:scale-95 transition-transform duration-200" />
              </a>
              <a
                href="https://github.com/Achraf333-m"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
               
              >
                <FaGithub className="hover:scale-95 transition-transform duration-200" />
              </a>
            </div>
            <Link
              href="/projects"
              id="button"
              className="w-fit"
             
            >
              {/*  rounded-2xl bg-black px-3 py-2 md:px-6 md:py-3 text-white transition-all duration-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black */}
              <button className="btn group flex items-center gap-2">
                <span className="text-base font-medium">See my projects!</span>
                <FaArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </main>
      </section>

      {/* Preload ChatBox */}
      <div className="absolute hidden">
        <ChatBox />
      </div>

      <Footer />
    </>
  );
}
