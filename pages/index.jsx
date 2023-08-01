import Image from "next/image";
import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { GrLinkedinOption } from "react-icons/gr";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(true);
    setTimeout(() => {
      setTitle(false);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Achraf Daimallah</title>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
      </Head>
      <div className="h-screen">
        <Header />
        <main className="flex flex-col pt-20 px-10 max-w-5xl mx-auto">
          <h1 className="text-yellow-600 text-[30px] sm:text-[50px] pb-2">
            {title ? "HEY THERE!" : "I'M ACHRAF DAIMALLAH"}
          </h1>
          <h4 className="text-sm pb-8">FRONTEND DEVELOPER</h4>
          <p className="pb-6 text-xl">
            I love building simple, eye-pleasing yet highly performant websites
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi vitae
            perferendis asperiores omnis accusantium ab quod minus quidem
            voluptate saepe deleniti, eum et nesciunt accusamus, quas totam
            ducimus unde eveniet?
          </p>
          <Link href="/about" className="flex space-x-4 items-center my-10">
            <h3>Learn a bit more about me</h3>
            <FaArrowRight className="animate-ping text-xs" />
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
