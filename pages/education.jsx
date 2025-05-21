import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import Project from "@/components/Project";

import sql from "@/public/SQL.png";
import ticket from "@/public/ticket.png";
import Leastpriv from "@/public/Leastpriv.png";
import py1 from "@/public/py1.png";
import py2 from "@/public/py2.png";
import py3 from "@/public/py3.png";

import { FaArrowRight } from "react-icons/fa";

export default function Education() {


  return (
    <>
      <Head>
        <title>Education & Certificates | Achraf Daimallah</title>
      </Head>

      <Header />

      {/* Main Content Wrapper */}
      <section className="section_style animate-fadeIn duration-500">
        <div className="main_style">
          {/* Education Section */}
          <article className="space-y-12 overflow-x-hidden">
            <h1
              className="text-3xl md:text-4xl font-extrabold tracking-tight "
    
            >
              Education
            </h1>

            <section
              className="space-y-6 max-w-3xl"
            >
              <div className="">
                <h2 className="text-2xl font-bold">
                  Bachelor of Engineering (B.Eng.) Student{" "}
                  <span className="text-lg font-light">(2024 - 2028)</span>
                </h2>
                <h3 className="text-lg font-semibold mt-1">
                  Electrical Engineering
                </h3>
                <a href="https://www.concordia.ca/" target="_blank" className="text-md font-semibold mt-0.5">
                  Concordia University
                </a>
              </div>
              <p className=" leading-relaxed text-base md:text-lg font-light">
                I'm currently pursuing a Bachelor of Engineering in Electrical
                Engineering, where I explore real-world problem-solving through
                lab experiments and hands-on design projects. I've always been
                curious about how things work at a low level—whether it's code
                running close to the hardware or the flow of electricity through
                a power grid. Recently, I've found myself especially interested
                in power systems and the growing impact of automation and
                electrification on our world. While I'm still exploring where I
                want to specialize, I know I’m passionate about building things
                that are both practical and meaningful.
              </p>
            </section>
          </article>

          {/* Certificates Section */}
          <article className="mt-24 overflow-x-hidden">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Certificates
            </h1>

            <div className="mt-12 flex flex-wrap gap-12 justify-center">
              <Project
                Git=""
                Web="https://coursera.org/share/13a59f2c5dc2bced1a58fab029a80c6b"
                delay={200}
                name="Google's Cybersecurity Certificate (via Coursera)"
                description="This certificate provided a comprehensive introduction to the fundamentals of cybersecurity.
                  It covered essential topics such as the core protocols that underpin digital communications,
                  the legal and regulatory frameworks designed to safeguard sensitive data, and practical,
                  hands-on experience with industry-standard tools and technologies. Throughout the course,
                  I gained introductory experience using platforms like Splunk and Google Chronicle for security monitoring and analysis,
                  as well as programming and querying with Python and SQL to automate tasks and investigate security incidents effectively."
                technologies={[
                  "SQL",
                  "Python",
                  "Splunk",
                  "Google Chronicle",
                  "OSI model",
                  "TCP model",
                ]}
                image1={sql}
                image2={ticket}
                image3={Leastpriv}
              />

              <Project
                Git=""
                Web="https://www.coursera.org/account/accomplishments/verify/KFR5WMKUR2Q9"
                delay={300}
                name="Python for Everybody (via Coursera)"
                description="This course provided a thorough introduction to the
                  fundamentals of Python programming, designed specifically for beginners.
                  I learned core programming concepts such as variables, data types, control structures (including loops and conditionals),
                  functions, and error handling. The course also introduced me to working with external data by teaching how to retrieve and
                  parse data from the web using common data formats like XML and JSON. Through hands-on exercises,
                  I gained experience writing Python scripts that interact with web APIs, extract meaningful information,
                  and process it efficiently. This foundational knowledge has equipped me with essential
                  skills to continue exploring the programming field."
                technologies={["XML parsing", "JSON parsing", "Web access"]}
                image1={py1}
                image2={py2}
                image3={py3}
              />
            </div>
          </article>

          {/* Call to Action */}
          <div
            className="flex bg-white/40 dark:bg-black/20 rounded-lg flex-col items-center justify-center space-y-6 py-12"
  
          >
            <Link href="/projects">
              <button className="btn group flex items-center gap-2">
                <span>See my projects</span>
                <FaArrowRight className="h-4 w-6 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer  />
    </>
  );
}
