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

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <Head>
        <title>My projects</title>
      </Head>

      <div className=" w-full px-2 md:px-4">
        <Header />
        <section className="flex flex-col max-w-6xl mx-auto py-40 px-10 overflow-hidden">
          <h1
            className="mt-16 mb-5  text-[#1e0c2c] dark:text-purple-100 text-3xl font-semibold"
            data-aos="fade-in"
          >
            My Projects
          </h1>
          <h2
            className="mb-20  text-[#1e0c2c] dark:text-purple-100 text-xl font-light"
            data-aos="fade-in"
          >
            By the way, you can <span className="md:hidden">swipe and </span>
            click on the images to see better!
          </h2>

          <div className="pb-24 flex flex-col space-y-4">
            <h1 className="text-2xl font-extralight italic">
              Electrical Engineering projects
            </h1>
            <Project
              Git="https://github.com/Achraf333-m/TheveninEquivalentTool/releases/tag/v.1.0.0"
              Web={""}
              description="The Thevenin Equivalence Theorem stood out to me
               during my circuits course, so I built this CLI tool as a capstone 
               to reinforce my understanding and support other students. The tool guides 
               users step-by-step through simplifying a circuit into its Thevenin equivalent, 
               explaining each part of the process. It calculates and displays the equivalent voltage and
                resistance, evaluates whether the load absorbs maximum power, and logs the entire session to a file for review."
              image1={Thev1}
              image2={Thev2}
              image3={Thev3}
              name="TheveninEquivalent"
              technologies="C++, Object-Oriented Programming, Circuit Analysis, Operator Overloading, Exception Handling, File Handling"
            />
            <Project
              Git="https://github.com/Achraf333-m/PhasorHelper/releases/tag/v.1.0.0"
              Web={""}
              description="While studying Basic Circuit Analysis, I realized how time-consuming and error-prone AC circuit calculations 
              can be; especially when working with complex number conversions and solving systems using Cramer's Rule. To streamline the process and reduce mistakes, 
              I used the skills I gained in Programming Methodology I & II to build this CLI tool. It helps convert between rectangular, polar, and sinusoidal forms 
              and performs complex arithmetic. 
              Although I could have used smart pointers, 
              I chose to manage memory manually as an exercise in understanding lower-level C++ memory handling."
              image1={phasor1}
              image2={phasor2}
              image3={phasor3}
              name="PhasorHelper"
              technologies="C++, Object-Oriented Programming (OOP), Circuit Analysis, 
              Operator Overloading, Exception Handling, Modular Design, Raw Pointers, Abstract Classes, Polymorphism, Dynamic Binding, Manual Memory Management"
            />
          </div>
          <div>
            <h3 className="italic font-extralight text-lg pb-24">
              Other fun projects
            </h3>
          </div>

          <div className="pb-44 flex flex-col space-y-4">
            <h1 className="text-2xl font-extralight italic">
              Front-end projects
            </h1>
            <Project
              Git="https://github.com/Achraf333-m/mov-flix"
              Web="https://mov-flix-rho.vercel.app/signUp"
              description="MovieFlix is built with Next.js and uses Firebase for user authentication. 
              Users can log in, browse movies fetched from The Movie Database and YouTube, and watch trailers through a Material UI modal.
               Authenticated users can also add favorites to their 'Liked List',  which persists across sessions. 
               The app includes a mock subscription system integrated with Stripe’s test portal - real cards won’t work. 
               
               To try it out:
               - Sign up with any email format and a six digit password => Choose a subsription => Use the TEST CARD ** 4111 1111 1111 1111 **, any future expiration date, and any 3-digit CVC => browse through movies and shows"
              image1={movflixSubscription}
              image2={movflixStripe}
              image3={movflixhome}
              name="MovieFlix"
              technologies="NextJS, TypeScript, TailwindCSS, MUI, Firebase DB/Auth, Stripe payments, TMDB, RecoilJs"
            />

            <Project
              Git="https://github.com/Achraf333-m/portfolio"
              Web="https://achrafdaimallah.com"
              description="Another fun project I worked on is this portfolio that contains all of my projects, I build it from scratch using nextjs, tailwindcss, modular design and vercel hosting as well as a private domain. I also integrated Ashbot into it using a flask backend and heroku hosting (see below)"
              image1={portfolio1}
              image2={portfolio2}
              image3={portfolio3}
              name="E-portfolio"
              technologies="NextJS, TailwindCSS, MUI"
            />

            <h1 className="text-xl pt-10 font-extralight italic">
              Projects I didn't develop from scratch but I added to
            </h1>

            <Project
              Git="https://github.com/Achraf333-m/chatbot_flask"
              Web="https://www.achrafdaimallah.com/about"
              description="This project was originally from a Medium article. 
              After completing a Linear Algebra course that sparked my interest in Machine Learning, I decided to follow along and implement it.
               While I didn't develop the model myself, 
              I gained a basic understanding of key concepts like tokenization, lemmatization, and how matrices are used in Natural Language Processing (NLP)."
              image1={Ashbot}
              image2={Ashbotq1}
              image3={Ashbotq2}
              name="AshBot"
              technologies="The model was built using Python, NLTK, TensorFlow, NumPy, and flask - 
              I implemented the backend integration, styled the UI with Tailwind CSS, handled async requests, and deployed it on Heroku."
            />
          </div>

          <div className="space-y-4 md:space-y-0 flex flex-col md:space-x-4 items-center justify-center py-10 mb-20">
            <p className="mb-4 md:text-lg text-center text-gray-900 dark:text-purple-200/90">
              Curious to learn more about me? I'd love to hear from you - get in
              touch here!
            </p>
            <Link href="/contact">
              <button className="btn">Contact me</button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
