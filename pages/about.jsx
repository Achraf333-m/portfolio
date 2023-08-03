import React, { useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import montreal from "@/public/montreal2.jpg";
import Image from "next/image";
import AboutPara from "@/components/UI/AboutPara";
import frontend from "@/public/frontend.png";
import simplicity from "@/public/simplicity.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Header />

      <div className="w-screen px-4 md:px-10 darkMode lightMode overflow-x-hidden">
        <section className="max-w-5xl mx-auto py-20 px-4 space-y-20">
          <AboutPara
            title="Where I'm from"
            para="Originally from Casablanca, Morocco, currently living in
            Montreal, Canada and have been for 8 years. It's a beautiful
            city, full of good people and amazing oppurtunities."
            Newimage={montreal}
          />

          <div className="">
            <h1 className="text-xl font-semibold">Frontend Development</h1>
            <div className="flex justify-center items-center md:justify-between py-4 space-y-4 flex-col md:flex-row-reverse md:space-y-0">
              <p
                data-aos="fade-left"
                data-aos-delay="500"
                className="md:w-[500px] text-xl ml-4"
              >
                I love frontend Development because it's what everyone sees at
                first, all of that code, the hours spent looking for a library,
                debugging a problem only to realize hours later that it was a
                typo lying somewhere undetected, coming together to form a
                beautiful expression that we call websites
              </p>
              <Image
                data-aos="fade-left"
                src={frontend}
                alt="section-image"
                className="rounded-lg h-60 w-full md:w-[50%] "
              />
            </div>
          </div>

          <AboutPara
            title="Simplicity"
            para="The thing I love most about solving problems is how simpler you can make them once you understand how they work, solving a problem becomes just another step that leads to the real goal which is optimisation."
            Newimage={simplicity}
          />

          <div className="flex justify-center items-center py-10">
            <button className="py-2 px-10 text-yellow-500 dark:text-black bg-black dark:bg-yellow-500 max-w-lg rounded-lg  ">
              <Link href="/projects" className="font-bold">
                See my projects
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
