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
    AOS.init({ duration: 2000 });
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
              title="INFO ABOUT ME"
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, quos! Sunt blanditiis soluta natus nobis aliquid
                animi, maiores id. A?"
              Newimage={montreal}
            />

            <div className="">
              <h1>MORE INFO</h1>
              <div className="flex justify-between py-4 space-y-4 flex-col md:flex-row-reverse md:space-y-0">
                <p
                  data-aos="fade-left"
                  data-aos-delay="500"
                  className="md:w-[500px] text-xl ml-4"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae voluptatem asperiores suscipit pariatur, quidem vitae
                  sit deserunt excepturi iste odio! Beatae modi culpa nisi
                  delectus labore iste tenetur, natus quos?
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
              title="MORE INFO"
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, quos! Sunt blanditiis soluta natus nobis aliquid
                animi, maiores id. A?"
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
