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

      function preLoadBot() {
    fetch(`https://flask-server-chatbot-e326926789d0.herokuapp.com/chatbot`, {
      method: "POST",
      body: JSON.stringify({ message: "Preload request to warm up" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        console.log("Ashbot preloaded successfully");
      })
      .catch((error) => {
        console.error("Error preloading ashbot");
      });
  }

    if (typeof window !== "undefined") {
      preLoadBot();
    }

    return () => {};
  }, []);

  
  return (
    <div className="w-full h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
      <Head>
        <title>Ashbot</title>
      </Head>
      <img src="/background_8.png" className="bgImage" />
      <div className="w-full px-2 md:px-4 darkMode lightMode ">
        <Header />
        <section className="max-w-6xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
          <ChatBox />
        </section>
      </div>
    </div>
  );
}

export default About;
