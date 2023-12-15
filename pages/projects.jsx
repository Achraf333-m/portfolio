import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import movflixSubscription from "@/public/movflix-Sub.png";
import movflixStripe from "@/public/movflix-stripe.png";
import movflixhome from "@/public/movflix-home.png";
import bookSpace from "@/public/bookSpace.png";
import spaceHome from "@/public/spaceHome.png";
import spacePlanets from "@/public/spacePlanets.png";
import Ashbot from "@/public/AshBot.png";
import Ashbotq1 from "@/public/ashbotQuestion1.png";
import Ashbotq2 from "@/public/ashbtq2.png";
import chatapp1 from "@/public/chatapp1.png";
import chatapp2 from "@/public/chatapp2.png";
import chatapp3 from "@/public/chatapp3.png";
import draw from "@/public/draw.png";
import Xwin from "@/public/Xwin.png";
import Owin from "@/public/Owin.png";

import libraryApp from "@/public/Library-Landing.png";
import libraryCart from "@/public/library-cart.png";
import loading from "@/public/Skeleton-loading.png";
import marketplace from "@/public/internship-landing.png";
import marketplaceExplore from "@/public/intern-explore.png";
import marketplaceFollow from "@/public/marketplaceFollow.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Project from "@/components/Project";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className="w-full h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
      <Head>
        <title>My projects</title>
      </Head>
      <img
        src="/background.jpg"
        className="fixed -z-20 opacity-60 w-full h-full object-cover"
      />
      <div className="darkMode lightMode">
        <Header />
        <section className="  flex flex-col max-w-6xl mx-auto py-40 px-10 overflow-hidden">
          <h1 className="mt-16 mb-20 text-3xl font-semibold" data-aos="fade-in">
            My Projects
          </h1>
          <div className="pb-44 flex flex-col space-y-4">
            <Project
              Git="https://github.com/Achraf333-m/mov-flix"
              Web="https://mov-flix-rho.vercel.app/"
              description="I made MovieFlix using NextJs, then linked it to my Firebase account
                            to allow users to authenticate themselves. The website also has a 'liked list'
                            where users can ad their favorite movies, and the list will not vanish when they log out of the app. The moviesa are fetched from The Movie Database and youtube, along with their names and their trailers, and displayed using a Material UI modal.
                            Note that the subscription goes through the Stripe portal; so, real cards are not admissible. Feel
                            free to try it with any test cards you have or you can use '4111 1111
                            1111 1111', any future date and any three digits."
              image1={movflixSubscription}
              image2={movflixStripe}
              image3={movflixhome}
              name="MovieFlix"
              technologies="NextJS, TypeScript, TailwindCSS, MUI, Firebase DB/Auth, Stripe payments,TMDB, RecoilJs"
            />
            <Project
              Git="https://github.com/Achraf333-m/chatbot_flask"
              Web="https://www.achrafdaimallah.com/about"
              description="Ashbot is a project I started after finishing a course on Linear algebra for machine learning, given the comlexity of ML, I couldn't create a model straight out of my mind, so I took it upon myself to look for resources on Medium and Youtube, from where I took the model and studied it then rewrote it and trained it with my data. As of yet, Ashbot is still as young as my knowledge of ML, but I plan on expanding my knowledge and improving it as I go."
              image1={Ashbot}
              image2={Ashbotq1}
              image3={Ashbotq2}
              name="AshBot"
              technologies="Python, NLTK, TensorFlow, Numpy Flask"
            />
            <Project
              Git="https://github.com/Achraf333-m/Achraf-internship"
              Web="https://achraf-internship.vercel.app/"
              description="When I finished my Frontend bootcamp, I was tasked with making a starter-repository on github fully dynamic as a final assignment/virtual internship that taught me version control, branching and pull requests which prepared me to work with other developers in the future. On top of adding logic and animation to this website, I learned how to fork a repository, create pull requests and new branches, and make comments for other developpers to understand my code."
              image1={marketplace}
              image2={marketplaceExplore}
              image3={marketplaceFollow}
              name="E-currency Marketplace"
              technologies="GIT, React, JavaScript, BootstrapCSS"
            />
            <Project
              Git="https://github.com/Achraf333-m/space-project"
              Web="https://space-project-pi.vercel.app/"
              description="A space exploration website, it shows users different planets and moons along with interesting facts about them, then the users get to meet the crew and the technologies used to get to the destination planet. The ticket page is not listed in the navigation bar, but when  users get to it, they'll get to book a ticket then get a confirmation email a few moments after"
              image1={bookSpace}
              image2={spaceHome}
              image3={spacePlanets}
              name="Space Travel Ticket"
              technologies="NextJs, Material UI, NodeMailer"
            />
            <Project
              Git="https://github.com/Achraf333-m/Chat-app"
              Web="https://chat-app-ten-rouge.vercel.app/"
              description="This chat app uses firebase database in a different way, instead of storing lists or prices, it stores the messages sent back and forth between users and then accesses this database and displays its contents."
              image1={chatapp1}
              image2={chatapp2}
              image3={chatapp3}
              name="Awesome Chat"
              technologies="NextJs, Firebase, SCSS"
            />
            <Project
              Git="https://github.com/Achraf333-m/tictatoe"
              Web="https://achraf333-m.github.io/tictatoe/"
              description="A simple game I like playing, I also added a counter to keep track of wins and losses"
              image1={draw}
              image2={Owin}
              image3={Xwin}
              name="Tic Tac Toe"
              technologies="Vanilla Javascript"
            />
            <Project
              Git="https://github.com/Achraf333-m/tictatoe"
              Web="https://achraf333-m.github.io/tictatoe/"
              description="A library app I developed during my frontend bootcamp, it has a collection of books and its users can add books to their cart and see the price they have to pay. There are also filters to simplify finding the right book"
              image1={libraryApp}
              image2={libraryCart}
              image3={loading}
              name="Canada Library"
              technologies="React, JavaScript, CSS"
            />
          </div>

          <div className="space-y-4 md:space-y-0 flex flex-col md:space-x-4 items-center justify-center py-10 mb-20">
            <p className="mb-4 text-pink-50">
              You have a project for me or want me to work with you? You can
              easily contact me here!
            </p>
            <Link href="/contact">
              <button className="btn">Contact me</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
