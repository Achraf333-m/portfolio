import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import Logo from "@/public/Gold Luxury Business Logo.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import { useRef } from "react";

function Contact() {

  const form = useRef()

  function contact(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_nbeylcx",
        "template_wfj84kv",
        form.current,
        "y_XhrmXYGGx_cmSld",
      ).then(() => {
          event.target.reset()
        }).catch(() => {
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
        <Header/>
      <section className="h-screen mt-6 md:mt-20 px-6 md:px-10">
        
        <form ref={form} onSubmit={contact} className="flex flex-col justify-center space-y-8 max-w-4xl mx-auto">
          <div className="flex flex-col space-y-4">
            <label>Name</label>
            <input type="text" name="user-name" placeholder="your name" className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1" />
          </div>
          <div className="flex flex-col space-y-4">
            <label>Email</label>
            <input type="text" name="user-email" placeholder="your email" className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1" />
          </div>
          <div className="flex flex-col space-y-4">
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              rows={5}
              placeholder="I think i'd enjoy working with you, let me know when you're available for an interview!" className="bg-transparent outline-none px-2 md:px-4 rounded-lg py-1 resize-none"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">

          <button type="submit" className="py-2 px-10 text-yellow-500 dark:text-black bg-black dark:bg-yellow-500 max-w-lg rounded-lg">Send it my way!</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
