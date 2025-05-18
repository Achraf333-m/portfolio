import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/Header";
import ChatBox from "@/components/chatbox";
import { Footer } from "@/components/Footer";

import "@/styles/globals.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Ashbot | Achraf Daimallah</title>
      </Head>

      <div className="w-full px-2 md:px-4 darkMode lightMode">
        <Header />

        <section className="section">
          <header>
            <h1 className="mt-16 text-center mb-20 text-3xl font-extrabold">Ashbot</h1>
          </header>

          <main className="main">
            <ChatBox />
          </main>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default About;
