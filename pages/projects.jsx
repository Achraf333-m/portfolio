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
import libraryCart from "@/public/Library-cart.png";
import loading from "@/public/Skeleton-loading.png";
import marketplace from "@/public/internship-landing.png";
import marketplaceExplore from "@/public/intern-explore.png";
import moviePalace from "@/public/Screenshot 2023-07-28 012453.png";
import TicTacToe from "@/public/TicTacToe.png";
import portfolio from "@/public/portfolio.png"
import portfolioMessage from "@/public/portfolio-message.png"
import Image from "next/image";

import Links from "@/components/UI/Links";

function Projects() {
  return (
    <>
      <Head>
        <title>My projects</title>
      </Head>
      <Header />
      <section className="flex flex-col max-w-6xl pt-10 mx-auto px-10 overflow-hidden">
        <h1 className="mt-32 mb-20 text-3xl font-semibold">My Projects</h1>
        <div className="pb-44 flex flex-col space-y-4">
          <h3 className="font-light text-4xl">some of my clones:</h3>
          <br />
          <p className="text-xl">
            carousel here Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit voluptatem architecto, excepturi repudiandae accusantium
            aspernatur, vel tempora commodi repellat nihil nisi libero facilis
            laudantium obcaecati fugiat et nulla quaerat. Esse!
          </p>
          <div className="space-y-10">
            <div className="">
              <h1 className="text-3xl">Netflix</h1>
              <Links
                Wlink="https://netflix-cloned-one.vercel.app/"
                Glink="https://github.com/Achraf333-m/Netflix-cloned"
              />
              <div className="project-style">
                <Image className="hover-transition" src={NetflixSubscription} />
                <Image className="hover-transition" src={NetflixStripe} />
                <Image className="hover-transition" src={NetflixAccount} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl">Spotify</h1>
              <Links
                Wlink="https://spotify-clone-achraf333-m.vercel.app/"
                Glink="https://github.com/Achraf333-m/spotify-clone"
              />
              <div className="project-style">
                <Image className="hover-transition" src={SpotifyLogin} />
                <Image className="hover-transition" src={SpotifyDashboard} />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20 flex flex-col space-y-4">
          <h1 className="font-light text-2xl">more here, just style it now</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est
            eveniet veritatis hic dolorum, maxime eius dolor voluptas
            perferendis qui ipsa temporibus facilis officiis nulla beatae
            consequatur doloremque exercitationem iure.
          </p>
          <div className="space-y-10">
            <div>
              <h1 className="text-3xl">Library app</h1>
              <Links
                Wlink="https://library-app-r.herokuapp.com/"
                Glink="https://github.com/Achraf333-m/react-app"
              />
              <div className="project-style">
                <Image className="hover-transition" src={libraryApp} />
                <Image className="hover-transition" src={libraryCart} />
                <Image className="hover-transition" src={loading} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl">E-currency Marketplace</h1>
              <Links
                Wlink="https://achraf-internship.vercel.app/"
                Glink="https://github.com/Achraf333-m/Achraf-internship"
              />
              <div className="project-style">
                <Image className="hover-transition" src={marketplace} />
                <Image className="hover-transition" src={marketplaceExplore} />
              </div>
            </div>
          </div>
          <h3>More smaller projects</h3>
          <div>
            <div className="space-y-10">
              <div>
                <h1 className="text-3xl">Movie Palace</h1>
                <Links
                  Wlink="https://achraf333-m.github.io/MovieDA/"
                  Glink="https://github.com/Achraf333-m/MovieDA"
                />
                <div className="project-style">
                  <Image className="hover-transition" src={moviePalace} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl">TicTacToe</h1>
                <Links
                  Wlink="https://achraf333-m.github.io/tictatoe/"
                  Glink="https://github.com/Achraf333-m/tictatoe"
                />
                <div className="project-style">
                  <Image className="hover-transition" src={TicTacToe} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl">Portfolio Template</h1>
                <Links
                  Wlink="https://achraf333-m.github.io/WWW/"
                  Glink="https://github.com/Achraf333-m/WWW"
                />
                <div className="project-style">
                  <Image className="hover-transition" src={portfolio} />
                  <Image className="hover-transition" src={portfolioMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row md:space-x-4 items-center justify-center py-10 mb-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            animi.
          </p>
          <Link href="/contact">
            <button className="border-2 w-40 px-2 py-2 rounded-lg bg-green-400 text-center">
              contact me
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Projects;
