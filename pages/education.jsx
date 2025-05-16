import Cert from "@/components/Cert";
import Header from "@/components/Header";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import sql from "@/public/SQL.png";
import ticket from "@/public/ticket.png";
import Leastpriv from "@/public/Leastpriv.png";

import py1 from "@/public/py1.png";
import py2 from "@/public/py2.png";
import py3 from "@/public/py3.png";

import Link from "next/link";
import { Footer } from "@/components/Footer";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <Head>
        <title>Education & Certificates</title>
      </Head>
      <div className="w-full px-2 md:px-4 ">
        <Header />
        <section className="max-w-6xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
          <h1
            className="mt-16 mb-20 text-3xl text-purple-950 dark:text-purple-200 font-semibold"
            data-aos="fade-in"
          >
            Education
          </h1>

          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Engineering (B.Eng.) Student{" "}
                <span className="text-xl font-light">(2024 - 2028)</span>
              </h3>
              <h4 className="text-lg font-semibold">Electrical Engineering</h4>
              <h5 className="text-md font-semibold">Concordia University</h5>
            </div>
            <p className="">
              I'm currently pursuing my Bachelor of Engineering, where I get to
              explore real-world problem solving through lab experiements and
              design assignments. I've always been curious about how things work
              at a low level - whether that's code running close to the metal or
              the flow of electricity through a power grid. Lately, I've been
              especially drawn to power systems and the growing role of
              automation and electrification in our world. I'm still exploring
              exactly where I want to specialize, but I know I love building
              things that are both practical and impactful.
            </p>
          </div>

          <h1
            className="mt-16 mb-5 text-3xl text-purple-950 dark:text-purple-200 font-semibold"
            data-aos="fade-in"
          >
            Certificates
          </h1>
          <h2
            className="mb-20  text-[#1e0c2c] dark:text-purple-100 text-xl font-light"
            data-aos="fade-in"
          >
            By the way, you can <span className="md:hidden">swipe and </span>
            click on the images to see better!
          </h2>

          <Cert
            image1={sql}
            image2={ticket}
            image3={Leastpriv}
            title="Cybersecurity Certificate"
            subtitle="Google (via Coursera)"
            link="https://coursera.org/share/13a59f2c5dc2bced1a58fab029a80c6b"
            desc="This certificate introduced me to the fundamentals of cybersecurity — from 
              
              the protocols that govern the digital world and the legal frameworks that protect data, to hands-on experience 
              with tools and technologies like Splunk, Google Chronicle, Python, and SQL."
          />
          <Cert
            image1={py1}
            image2={py2}
            image3={py3}
            title="Python for everybody"
            subtitle="Michigan University (via Coursera)"
            link="https://www.coursera.org/account/accomplishments/verify/KFR5WMKUR2Q9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
            desc="This course taught me the fundamentals of Python, along with how to retrieve data from the web 
              using XML and JSON parsing."
          />
          <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row md:space-x-4 items-center justify-center py-10 mb-20">
            <Link href="/projects">
              <button className="btn">See my projects</button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Education;
