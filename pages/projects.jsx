import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

import movflixSubscription from "@/public/movflix-Sub.png";
import movflixStripe from "@/public/movflix-stripe.png";
import movflixhome from "@/public/movflix-home.png";

import Thev1 from "@/public/thevequiv1.png";
import Thev2 from "@/public/thevequiv2.png";
import Thev3 from "@/public/thevequiv3.png";

import phasor1 from "@/public/phasorTool1.png";
import phasor2 from "@/public/phasorTool2.png";
import phasor3 from "@/public/phasorTool3.png";

import portfolio1 from "@/public/portfolio1.png";
import portfolio2 from "@/public/portfolio2.png";
import portfolio3 from "@/public/portfolio3.png";

import Ashbot from "@/public/Ashbot.png";
import Ashbotq1 from "@/public/ashbotQuestion1.png";
import Ashbotq2 from "@/public/ashbtq2.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Project from "@/components/Project";
import { Footer } from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";

function Projects() {


  return (
    <>
      <Head>
        <title>My Projects | Achraf Daimallah</title>
      </Head>

      <Header />

      <section className="section_style animate-fadeIn duration-500">
        <div className="main_style">
          <div className="text-center mb-16 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              My Projects
            </h1>
            <p className="mt-4 text-lg font-light">
              You can click on each project to see more details!
            </p>
          </div>

          {/* Electrical Engineering */}
          <section className="mb-24 px-4">
            <h2 className="subtitle">Electrical Engineering projects</h2>

            <div className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:gap-x-6">
              <Project
                Git="https://github.com/Achraf333-m/PhasorHelper/releases/tag/v.1.0.0"
                Web=""
                description="While studying Basic Circuit Analysis, I realized how time-consuming and error-prone AC circuit calculations can be. I used what I learned in Programming Methodology I & II to build a CLI tool that streamlines conversions between rectangular, polar, and sinusoidal forms—plus complex arithmetic using Cramer's Rule. I managed memory manually to strengthen my understanding of low-level C++."
                image1={phasor1}
                image2={phasor2}
                image3={phasor3}
                delay={300}
                name="PhasorHelper"
                technologies={[
                  "C++",
                  "Object-Oriented Programming",
                  "Manual Memory Management",
                  "Circuit Analysis",
                  "Operator Overloading",
                  "Exception Handling",
                  "Modular Design",
                ]}
              />
              <Project
                Git="https://github.com/Achraf333-m/TheveninEquivalentTool/releases/tag/v.1.0.0"
                Web=""
                description="Built as a capstone for my circuits class, this CLI tool helps simplify a linear circuit into its Thevenin equivalent. It guides the user through step-by-step simplification, checks for max power transfer, and logs the session to a file. Built in C++ with a focus on clear structure and exception handling."
                image1={Thev1}
                image2={Thev2}
                image3={Thev3}
                delay={200}
                name="TheveninEquivalent"
                technologies={[
                  "C++",
                  "OOP",
                  "Circuit Analysis",
                  "Exception Handling",
                  "File Handling",
                ]}
              />
            </div>
          </section>

          {/* Front-end Projects */}
          <section className="mb-24 px-4">
            <h2 className="subtitle">Front-end projects</h2>

            <div className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:gap-x-6">
              <Project
                Git="https://github.com/Achraf333-m/mov-flix"
                Web="https://mov-flix-rho.vercel.app/signUp"
                description="MovieFlix is a full-stack movie app built with Next.js. It uses Firebase for auth and Stripe test payments for subscription access. Users can sign up, browse movies from TMDB, watch trailers, and save favorites. It also features protected routing and Material UI for a polished UI."
                image1={movflixSubscription}
                image2={movflixStripe}
                image3={movflixhome}
                delay={300}
                name="MovieFlix"
                technologies={[
                  "NextJS",
                  "TypeScript",
                  "TailwindCSS",
                  "MUI",
                  "Firebase Auth",
                  "Stripe",
                  "TMDB",
                  "RecoilJs",
                ]}
              />
              <Project
                Git="https://github.com/Achraf333-m/portfolio"
                Web="https://achrafdaimallah.com"
                description="This portfolio itself is a project! I built it from scratch using Next.js, TailwindCSS, modular components, and deployed it with Vercel. It showcases all of my work in one place and even includes my chatbot integration (AshBot) via a Flask backend and Heroku hosting."
                image1={portfolio1}
                image2={portfolio2}
                image3={portfolio3}
                delay={200}
                name="E-portfolio"
                technologies={["NextJS", "TailwindCSS", "MUI"]}
              />
            </div>
          </section>

          {/* Integrated + Customized */}
          <section className="mb-24 px-4">
            <h2 className="subtitle">Projects I integrated and customized</h2>

            <div className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:gap-x-6">
              <Project
                Git="https://github.com/Achraf333-m/chatbot_flask"
                Web="https://www.achrafdaimallah.com/ashbot"
                description="AshBot was built from a Medium article tutorial. I followed along and integrated it into my portfolio using Flask + Heroku. It helped me learn about NLP concepts like tokenization, lemmatization, and how matrices power simple chatbot models. My main focus was backend integration and UI polishing."
                image1={Ashbot}
                image2={Ashbotq1}
                image3={Ashbotq2}
                name="AshBot"
                technologies={[
                  "Python",
                  "NLTK",
                  "TensorFlow",
                  "NumPy",
                  "Flask",
                  "TailwindCSS",
                  "Async Requests",
                  "Heroku",
                ]}
              />
            </div>
          </section>

          {/* CTA */}
          <div className="flex bg-white/40 dark:bg-black/20 rounded-lg flex-col items-center justify-center space-y-6 px-4 break-words py-12">
            <p className="text-lg text-center">
              Curious to learn more about me? I’d love to hear from you.
            </p>
            <Link href="/contact">
              <button className="btn group flex items-center gap-2">
                <span> Contact me
                  </span>
              <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;
