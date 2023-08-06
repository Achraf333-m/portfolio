import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import NetflixSubscription from "@/public/Netflix-subscription.png";
import NetflixStripe from "@/public/Netflix-Stripe.png";
import NetflixAccount from "@/public/Netflix-account.png";
import SpotifyLogin from "@/public/spotify-login.png";
import SpotifyDashboard from "@/public/spotify-dashboard.png";
import libraryApp from "@/public/Library-Landing.png";
import libraryCart from "@/public/library-cart.png";
import loading from "@/public/Skeleton-loading.png";
import marketplace from "@/public/internship-landing.png";
import marketplaceExplore from "@/public/intern-explore.png";
import moviePalace from "@/public/Screenshot 2023-07-28 012453.png";
import TicTacToe from "@/public/TicTacToe.png";
import portfolio from "@/public/portfolio.png";
import portfolioMessage from "@/public/portfolio-message.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Links from "@/components/UI/Links";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    AOS.init({ duration:1500, once: true });
  }, []);
  return (
    <>
      <Head>
        <title>My projects</title>
      </Head>
      <div className="darkMode lightMode">
      <Header />
        <section className="  flex flex-col max-w-6xl mx-auto px-10 overflow-hidden">
          <h1 className="mt-16 mb-20 text-3xl font-semibold" data-aos="fade-in">My Projects</h1>
          <div className="pb-44 flex flex-col space-y-4">
            <h3 className="font-light text-4xl" data-aos="fade-in" data-aos-delay="300">some of my clones:</h3>
            <br />
            <p className="text-xl" data-aos="fade-in" data-aos-delay="500">
              These projects were made using various APIs, CD/CI, libraries, frameworks and some backend as well.
            </p>
            <div data-aos="fade-in" className="space-y-10">
              <div className="">
                <h1 className="text-3xl" data-aos="fade-in" data-aos-delay="300">Netflix</h1> 
                <p>NextJS, TypeScript, TailwindCSS, MUI, Firebase</p>
                <Links
                  Wlink="https://netflix-cloned-one.vercel.app/"
                  Glink="https://github.com/Achraf333-m/Netflix-cloned"
                />
                <div className="project-style">
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-right"
                    src={NetflixSubscription}
                  />
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    src={NetflixStripe}
                  />
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-right"
                    data-aos-delay="400"
                    src={NetflixAccount}
                  />
                </div>
              </div>
              <div data-aos="fade-in">
                <h1 className="text-3xl">Spotify</h1>
                <p>React, JavaScript, TailwindCSS, Firebase</p>
                <Links
                  Wlink="https://spotify-clone-achraf333-m.vercel.app/"
                  Glink="https://github.com/Achraf333-m/spotify-clone"
                />
                <div className="project-style">
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-left"
                    src={SpotifyLogin}
                  />
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    src={SpotifyDashboard}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pb-20 flex flex-col space-y-4">
            <h1 className="font-light text-2xl">
              More Projects
            </h1>
            <div className="space-y-10">
              <div data-aos="fade-in">
                <h1 className="text-3xl">Library app</h1>
                <p>React, JavaScript, CSS</p>
                <Links
                  Wlink="https://library-app-r.herokuapp.com/"
                  Glink="https://github.com/Achraf333-m/react-app"
                />
                <div className="project-style">
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-right"
                    src={libraryApp}
                  />
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    src={libraryCart}
                  />
                  <Image
                    alt="section-image"
                    className="hover-transition"
                    data-aos="fade-right"
                    data-aos-delay="400"
                    src={loading}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl">E-currency Marketplace</h1>
                <h6 className="text-xs">A forked branch that I worked on during my internship using branches off main that were merged afterwards</h6>
                <p>GIT, React, JavaScript, BootstrapCSS </p>
                <Links
                  Wlink="https://achraf-internship.vercel.app/"
                  Glink="https://github.com/Achraf333-m/Achraf-internship"
                />
                <div className="project-style">
                  <Image
                    alt="section-image"
                    data-aos="fade-left"
                    className="hover-transition"
                    src={marketplace}
                  />
                  <Image
                    alt="section-image"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="hover-transition"
                    src={marketplaceExplore}
                  />
                </div>
              </div>
            </div>
            <h3>More smaller projects</h3>
            <div>
              <div className="space-y-10">
                <div data-aos="fade-in">
                  <h1 className="text-3xl">Movie Palace</h1>
                  <Links
                    Wlink="https://achraf333-m.github.io/MovieDA/"
                    Glink="https://github.com/Achraf333-m/MovieDA"
                  />
                  <div className="project-style">
                    <Image
                      alt="section-image"
                      className="hover-transition"
                      data-aos="fade-right"
                      src={moviePalace}
                    />
                  </div>
                </div>
                <div data-aos="fade-in">
                  <h1 className="text-3xl">TicTacToe</h1>
                  <Links
                    Wlink="https://achraf333-m.github.io/tictatoe/"
                    Glink="https://github.com/Achraf333-m/tictatoe"
                  />
                  <div className="project-style">
                    <Image
                      alt="section-image"
                      className="hover-transition"
                      data-aos="fade-left"
                      src={TicTacToe}
                    />
                  </div>
                </div>
                <div data-aos="fade-in">
                  <h1 className="text-3xl">Portfolio Template</h1>
                  <Links
                    Wlink="https://achraf333-m.github.io/WWW/"
                    Glink="https://github.com/Achraf333-m/WWW"
                  />
                  <div className="project-style">
                    <Image
                      alt="section-image"
                      className="hover-transition"
                      data-aos="fade-right"
                      src={portfolio}
                    />
                    <Image
                      alt="section-image"
                      className="hover-transition"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      src={portfolioMessage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row md:space-x-4 items-center justify-center py-10 mb-20">
            <p>
              You have a project for me or want me to work with you? You can easily contact me here!
            </p>
            <Link href="/contact">
              <button className="btn">
                Contact me
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
