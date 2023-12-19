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
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, [sent]);
  const form = useRef();

  function contact(event) {
    setLoading(true)
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
        setLoading(false)
        setSent(true)
        setTimeout(() => {
          setSent(false)
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
      <img
        src="/background.jpg"
        className="bgImage"
      />
      <Header />
      <section
        data-aos="fade-in"
        className="w-full overflow-x-hidden h-screen pt-40 px-10 md:px-14"
      >
        <div
          className="flex flex-col justify-center items-center mb-10"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <p className="opacity-50 text-sm md:text-md text-center">
            You can use the form under or email me at{" "}
            <span className="text-yellow-100 dark:text-yellow-200">
              ash@achrafdaimallah.com
            </span>{" "}
            <br /> You can also call me at{" "}
            <span className="text-yellow-100 dark:text-yellow-200">
              +1 (438) 725-5776
            </span>
          </p>
        </div>
        <form
          ref={form}
          onSubmit={contact}
          className="flex flex-col justify-center space-y-8 max-w-4xl mx-auto"
        >
          <div data-aos="fade-right" className="flex flex-col space-y-4">
            <label>Name</label>
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
            <label>Email</label>
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
            <label>Message</label>
            <textarea
              required
              type="text"
              name="message"
              rows={5}
              placeholder="I think I'd enjoy working with you, let me know when you're available for an interview!"
              className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1 resize-none"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <button
              disabled={loading}
              data-aos="fade-in"
              data-aos-delay="800"
              type="submit"
              className={`btn ${loading && 'brightness-50'}`}
            >
              {sent? 'Sent!' : `${loading ? 'Sending...' : 'Send it my way!'}`}

            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
