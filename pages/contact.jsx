import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import Logo from "@/public/Gold Luxury Business Logo.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  const form = useRef();

  function contact(event) {
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
      })
      .catch(() => {
        alert(
          "oops! our emailing system might be down, please message us at achrafdaimallah2003@gmail.com"
        );
      });
  }

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <section
        data-aos="fade-in"
        className="darkMode w-full overflow-x-hidden lightMode h-screen pt-12 md:pt-40 px-10 md:px-14"
      >
        <div className="flex flex-col justify-center items-center mb-10" data-aos="fade-left"
            data-aos-delay="1000" >
          <p className="opacity-50 text-sm md:text-md text-center">
            You can use the form under or email me at{" "}
            <span className="text-yellow-800 dark:text-yellow-200">
              achrafdaimallah2003@gmail.com
            </span>{" "}
            <br /> You can also call me at{" "}
            <span className="text-yellow-800 dark:text-yellow-200">+1 (438) 725-5776</span>
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
              placeholder="I think i'd enjoy working with you, let me know when you're available for an interview!"
              className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1 resize-none"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <button
              data-aos="fade-right"
              data-aos-delay="500"
              type="submit"
              className="btn"
            >
              Send it my way!
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
