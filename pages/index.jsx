import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { GrLinkedinOption } from "react-icons/gr";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [title, setTitle] = useState();
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTitle(true);
    setTimeout(() => {
      setTitle(false);
    }, 1000);
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
      <Header />
      <div className="darkMode lightMode">
        <main className="relative h-screen flex flex-col pt-20 px-10 max-w-5xl mx-auto dark:text-white">
          <h1
            data-aos="fade-up"
            className="dark:text-blue-50 text-[30px] sm:text-[50px] pb-2"
          >
            {title ? "HEY THERE!" : "I'M ACHRAF DAIMALLAH"}
          </h1>
          <h4 className="text-sm pb-8" data-aos="fade-up" data-aos-delay="500">
            FRONTEND DEVELOPER
          </h4>
          <p className="pb-6 text-xl" data-aos="fade-up" data-aos-delay="600">
            I love building simple, eye-pleasing yet highly performant websites
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="700"
            href="/about"
            className="flex space-x-4 max-w-xs items-center my-10"
          >
            <h3>Learn a bit more about me</h3>
            <FaArrowRight className="animate-ping text-xs" />
          </Link>
          <div className="flex space-x-4">
            <a data-aos="fade-up" data-aos-delay="800" href="">
              <GrLinkedinOption />
            </a>
            <a data-aos="fade-up" data-aos-delay="900" href="">
              <FaGithub />
            </a>
            <a data-aos="fade-up" data-aos-delay="1000" href="">
              <AiOutlineFile />
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
