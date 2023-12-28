import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import Logo from "@/public/Gold Luxury Business Logo.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, [sent]);
  const form = useRef();

  function contact(event) {
    setLoading(true);
    event.preventDefault();

    emailjs
      .sendForm(
        "service_nbeylcx",
        "template_wfj84kv",
        form.current,
        "y_XhrmXYGGx_cmSld"
      )
      .then(() => {
        event.target.reset();
        setLoading(false);
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 1000);
      })
      .catch(() => {
        alert(
          "oops! our emailing system might be down, please message us at achrafdaimallah2003@gmail.com"
        );
      });
  }

  return (
    <div className="w-full h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
      <Head>
        <title>Contact</title>
      </Head>
      <img src="/background.jpg" className="bgImage" />
      <div className="w-full ">

      <Header />
      <section
        data-aos="fade-in"
        className="flex flex-col max-w-6xl mx-auto py-40 px-10 overflow-hidden"
      >
        <h1 className="mt-16 mb-20 text-3xl font-semibold" data-aos="fade-in">
          Contact me
        </h1>
    
        <form
          ref={form}
          onSubmit={contact}
          className="space-y-8 w-full py-10 mx-auto"
        >
          <div data-aos="fade-right" className="flex flex-col space-y-4">
            <label>Your name</label>
            <input
              required
              type="text"
              name="user-name"
              placeholder="your name"
              className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="flex flex-col space-y-4"
          >
            <label>Where I can contact you</label>
            <input
              required
              type="email"
              name="user-email"
              placeholder="your email"
              className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="flex flex-col space-y-4"
          >
            <label>Your message</label>
            <textarea
              required
              type="text"
              name="message"
              rows={5}
              placeholder="I think I'd enjoy working with you, let me know when you're available for an interview!"
              className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1 resize-none cursor-auto scrollbar-thin scrollbar-thumb-yellow-800 scrollbar-thumb-rounded-3xl  scrollbar-track-transparent"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <button
              disabled={loading}
              data-aos="fade-left"
              data-aos-delay="800"
              type="submit"
              className={`btn ${loading && "brightness-50"}`}
            >
              {sent ? "Sent!" : `${loading ? "Sending..." : "Send it my way!"}`}
            </button>
          </div>
        </form>
      </section>

      </div>
    </div>
  );
}

export default Contact;
