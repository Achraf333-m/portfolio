import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/Header";
import ChatBox from "@/components/chatbox";
import { Footer } from "@/components/Footer";

import "@/styles/globals.css";

function About() {

  return (
    <>
      <Head>
        <title>Ashbot | Achraf Daimallah</title>
      </Head>

      <Header />

      <section className="section_style">

        <main className="main_style">
        <h1 className="mt-16 text-center mb-20 text-3xl font-extrabold">
            Ashbot
          </h1>
          <ChatBox />
        </main>
      </section>

      <Footer />
    </>
  );
}

export default About;
