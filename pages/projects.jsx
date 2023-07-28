import Header from "@/components/Header";
import Project from "@/components/Project";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import NetflixSubscription from "@/public/Netflix-subscription.png"
import NetflixStripe from "@/public/Netflix-Stripe.png"
import NetflixAccount from "@/public/Netflix-account.png"
import SpotifyLogin from "@/public/spotify-login.png"
import SpotifyDashboard from "@/public/spotify-dashboard.png"
import libraryApp from "@/public/Library-Landing.png"
import libraryCart from "@/public/Library-cart.png"
import loading from "@/public/Skeleton-loading.png"
import marketplace from "@/public/internship-landing.png"
import marketplaceExplore from "@/public/intern-explore.png"
import moviePalace from "@/public/Screenshot 2023-07-28 012453.png"
import TicTacToe from "@/public/TicTacToe.png"
import Image from "next/image";

function Projects() {
  return (
    <>
      <Head>
        <title>My projects</title>
      </Head>
      <Header />
      <section className="flex flex-col max-w-6xl pt-10 mx-auto px-10">
        <h1 className="pb-44 text-3xl font-semibold">My Projects</h1>
        <div className="pb-44 flex flex-col space-y-4">
          <h3 className="font-light text-2xl">some of my clones:</h3>
          <br />
          <p className="text-xl">
            carousel here Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit voluptatem architecto, excepturi repudiandae accusantium
            aspernatur, vel tempora commodi repellat nihil nisi libero facilis
            laudantium obcaecati fugiat et nulla quaerat. Esse!
          </p>
          <div className="space-y-10">
            <div>
              <h1>Netflix</h1>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <Image src={NetflixSubscription} height={400} width={400} />
                <Image src={NetflixStripe} height={400} width={400} />
                <Image src={NetflixAccount} height={400} width={400} />
              </div>
            </div>
            <div>
              <h1>Spotify</h1>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <Image src={SpotifyLogin} width={400} height={400} />
                <Image src={SpotifyDashboard} width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-44 flex flex-col space-y-4">
          <h1 className="font-light text-2xl">more here, just style it now</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est
            eveniet veritatis hic dolorum, maxime eius dolor voluptas
            perferendis qui ipsa temporibus facilis officiis nulla beatae
            consequatur doloremque exercitationem iure.
          </p>
          <div className="space-y-10">
            <div>
              <h1>Library app</h1>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <Image src={libraryApp} height={400} width={400} />
                <Image src={libraryCart} height={400} width={400} />
                <Image src={loading} height={400} width={400} />
              </div>
            </div>
            <div>
              <h1>E-currency Marketplace</h1>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <Image src={marketplace} width={400} height={400} />
                <Image src={marketplaceExplore} width={400} height={400} />
              </div>
            </div>
          </div>
          <h3>More smaller projects</h3>
          <div>
          <div className="space-y-10">
            <div>
              <h1>Movie Palace</h1>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <Image src={moviePalace} height={400} width={400} />
              </div>
            </div>
            <div>
              <h1>TicTacToe</h1>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <Image src={TicTacToe} width={400} height={400} />
              </div>
            </div>
          </div>
          </div>
        </div>
        <Link href="/contact" className="border-2 w-40 px-2 py-2 text-center my-40">contact me</Link>
      </section>
    </>
  );
}

export default Projects;
