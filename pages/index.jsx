import Image from "next/image";
import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import {GrLinkedinOption} from 'react-icons/gr'
import {FaArrowRight, FaGithub} from "react-icons/fa"
import {AiOutlineFile} from "react-icons/ai"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Achraf Daimallah</title>
      </Head>
    <div className="h-screen">
      <Header />
      <main className="flex flex-col pt-20 max-w-5xl mx-auto">
        <h1 className="text-blue-500 text-[50px] pb-2">HEY! <br /> I'M ACHRAF DAIMALLAH</h1>
        <h4 className="text-sm pb-8">FRONTEND DEVELOPER</h4>
        <p className="pb-6 text-xl">
          I love building simple, eye-pleasing yet highly
          performant websites
        </p>
        <Link href="/about" className="flex space-x-4 items-center my-10"> 
        <h3>Learn a bit more about me</h3>
          <FaArrowRight />
        </Link>
        <div className="flex space-x-4">
          <a href="">
          <GrLinkedinOption />
          </a>
          <a href="">
          <FaGithub />
          </a>
          <a href="">
          <AiOutlineFile />
          </a>
        </div>
      </main>
    </div>
    </>
  );
}
