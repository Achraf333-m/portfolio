import React, { useEffect } from "react";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBox from "@/components/chatbox";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="w-full h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
      <Head>
        <title>About me</title>
      </Head>
      <img
        src="/background.jpg"
        className="fixed -z-20 opacity-60 w-full h-full object-cover"
      />
      <div className="w-full px-2 md:px-4 darkMode lightMode ">
        <Header />
        <section className="max-w-5xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
          <ChatBox />
        </section>
      </div>
    </div>
  );
}

export default About;
