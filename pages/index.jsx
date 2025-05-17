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
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
      <Header />

      <div className="py-36">
        <main className="flex flex-col pt-20 px-6 md:px-10 max-w-4xl md:max-w-6xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-[28px] sm:text-[52px] font-bold tracking-tight text-[#14091f] dark:text-[#c3c3fb] pb-2"
          >
            {title ? (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1500)
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
            ) : (
              <span>Achraf Daimallah</span>
            )}
          </h1>

          <h4
            className="text-base sm:text-lg pb-8 text-[#14091f]/70 dark:text-[#afafff] font-light"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Electrical Engineering Student | Exploring Low-Level Software & Hardware Systems
          </h4>

          <div
            className="pb-4 space-y-4 text-[#1e102c] dark:text-[#efefff] transition-colors duration-300 text-[17px] leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <p>
              I love learning about systems that are efficient, logical, and close to the hardware.
            </p>
            <p>
              I built this site from scratch to showcase my skills as I continue to grow through my Electrical Engineering degree.
            </p>
            <p>
              I’m especially interested in digital logic, low-level programming, and anything hardware-related.
            </p>
            <p>
              While I’ve explored web development independently, my current focus is on understanding how hardware components interact to create the complex systems that power the world.
            </p>
          </div>

          <div className="flex items-center pt-6 text-[#14091f] dark:text-[#afafff] text-2xl md:text-3xl space-x-5">
            <a
              data-aos="fade-in"
              data-aos-delay="1200"
              href="https://www.linkedin.com/in/achraf-daimallah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <GrLinkedinOption className="hover:scale-95 transition-transform duration-200" />
            </a>
            <a
              data-aos="fade-in"
              data-aos-delay="1200"
              href="https://github.com/Achraf333-m"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:scale-95 transition-transform duration-200" />
            </a>
          </div>

          <Link
            data-aos="fade-in"
            data-aos-delay="1100"
            href="/projects"
            className="mt-8 w-fit"
          >
            <button className="group flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-white transition-all duration-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              <span className="text-base font-medium">See my projects!</span>
              <FaArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </main>
      </div>

      {/* Preload ChatBox */}
      <div className="absolute hidden">
        <ChatBox />
      </div>

      <Footer />
    </>
  );
}
