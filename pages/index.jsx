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
    <>
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
      <Header />
      <div className="lightMode darkMode">
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
            <h3 className="hover:scale-110">Learn a bit more about me</h3>
            <FaArrowRight className="animate-ping text-xs" />
          </Link>
          <div className="flex space-x-4">
            <a  data-aos="fade-up" data-aos-delay="800" href="https://www.linkedin.com/in/achraf-daimallah/" target="_blank">
              <GrLinkedinOption className="hover:scale-125 transition-all" />
            </a>
            <a  data-aos="fade-up" data-aos-delay="900" href="https://github.com/Achraf333-m" target="_blank">
              <FaGithub className="hover:scale-125 transition-all" />
            </a>
            <a  data-aos="fade-up" data-aos-delay="1000" href="https://drive.google.com/file/d/1EesymsR7l8CuZr9tBzg7a2r-u7ZHqaIC/view?usp=sharing" target="_blank">
              <AiOutlineFile className="hover:scale-125 transition-all" />
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
