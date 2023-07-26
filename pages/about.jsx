import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import "@/styles/globals.css";

function About() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <section className="max-w-5xl mx-auto space-y-20 mt-10">
          <div>
            <h1>INFO ABOUT ME</h1>
            <p className="max-w-[300px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, quos! Sunt blanditiis soluta natus nobis aliquid
              animi, maiores id. A?
            </p>
          </div>

          <div className="flex flex-col items-end">
            <h1>MORE INFO</h1>
            <p className="max-w-[300px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, quos! Sunt blanditiis soluta natus nobis aliquid
              animi, maiores id. A?
            </p>
          </div>

          <div>
            <h1>SOMETHING HERE TOO</h1>
            <p className="max-w-[300px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, quos! Sunt blanditiis soluta natus nobis aliquid
              animi, maiores id. A?
            </p>
          </div>

            <div className="text-center">

          <Link href="/projects" className="font-bold">See my projects</Link>
            </div>
        </section>
      </div>
    </>
  );
}

export default About;
