import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import montreal from "@/public/montreal2.jpg";
import Image from "next/image";
import AboutPara from "@/components/UI/AboutPara";
import frontend from "@/public/frontend.png"
import simplicity from "@/public/simplicity.png"

function About() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className="h-screen px-4 md:px-10">
        <Header />
        <section className="max-w-5xl mx-auto py-4 px-4 space-y-20 mt-10">
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
              <p className="md:w-[500px] text-xl ml-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptatem asperiores suscipit pariatur, quidem vitae sit
                deserunt excepturi iste odio! Beatae modi culpa nisi delectus
                labore iste tenetur, natus quos?
              </p>
              <Image
                src={frontend}
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


          <div className="text-center py-6 px-10 ">
            <Link href="/projects" className="font-bold">
              See my projects
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
