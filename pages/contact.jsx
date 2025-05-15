import "@/styles/globals.css";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSpinner } from "react-icons/fa";
import { Footer } from "@/components/Footer";

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
          "oops! My emailing service might be down, please message me at ash@achrafdaimallah.com"
        );
      });
  }

  return (
    <div className="w-full h-full bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
      <Head>
        <title>Contact</title>
      </Head>
      <img src="/background_8.png" className="bgImage" />
      <div className="w-full relative">

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
          <div data-aos="fade-in" className="flex flex-col space-y-4">
            <label>Your name</label>
            <input
              required
              type="text"
              name="user-name"
              placeholder="your name"
              className="placeholder"
            />
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="500"
            className="flex flex-col space-y-4"
          >
            <label>Your e-mail</label>
            <input
              required
              type="email"
              name="user-email"
              placeholder="Type in your email"
              className="placeholder"
            />
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="1000"
            className="flex flex-col space-y-4"
          >
            <label>Your message</label>
            <textarea
              required
              type="text"
              name="message"
              rows={5}
              placeholder="Hey, I saw your portfolio. Let me know when you're available for a call!"
              className="placeholder resize-none cursor-auto scrollbar-thin scrollbar-thumb-yellow-800 scrollbar-thumb-rounded-3xl  scrollbar-track-transparent"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <button
              disabled={loading}
              type="submit"
              className={`btn ${loading && "brightness-50"}`}
            >
            
              {sent ? "Sent!" : `${loading ? <FaSpinner className="w-full h-full animate-spin" /> : "Send it my way!"}`}
            </button>
          </div>
        </form>
      </section>

      </div>
      <Footer />
    </div>
  );
}

export default Contact;
