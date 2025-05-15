import React, { useEffect } from "react";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBox from "@/components/chatbox";
import { Footer } from "@/components/Footer";

function About() {
  
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    
    return () => {};
}, []);

  
  return (
    <div className="w-full h-full bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
      <Head>
        <title>Ashbot</title>
      </Head>
      <img src="/background_8.png" className="bgImage" />
      <div className="w-full relative px-2 md:px-4 darkMode lightMode ">
        <Header />
        <section className="max-w-6xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
          <ChatBox />
        </section>
      </div>
    </div>
  );
}

export default About;
