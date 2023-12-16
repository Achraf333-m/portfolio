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

import la1 from "@/public/la1.png";
import la2 from "@/public/la2.png";
import la3 from "@/public/la3.png";
import Link from "next/link";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <div className="w-full h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
        <img
          src="/background.jpg"
          className="bgImage"
        />
        <div className="w-full px-2 md:px-4 darkMode lightMode ">
          <Header />
          <section className="max-w-5xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
            <h1
              className="mt-16 mb-20 text-3xl font-semibold"
              data-aos="fade-in"
            >
              Certificates
            </h1>
            <Cert
              image1={sql}
              image2={ticket}
              image3={Leastpriv}
              title="Cybersecurity Certificate"
              subtitle="Google"
              link="https://coursera.org/share/bd707781011118048d4ca07ce07614fe"
              desc=" I am currently on the final course of the certificate. This
              certificate taught me the basics of cybersecurity, from the protocols
              that govern the virtual world and the laws behind keeping data safe to
              technologies like Splunk, Google Chronicle and SQL."
            />
            <Cert
              image1={py1}
              image2={py2}
              image3={py3}
              title="Python for everybody"
              subtitle="Michigan University"
              link="https://www.coursera.org/account/accomplishments/verify/KFR5WMKUR2Q9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              desc="This course taught me the basics of python, but also getting data from the web through XML and JSON parsing as shown here in some of my projects."
            />
            <Cert
              image1={la1}
              image2={la2}
              image3={la3}
              title="Mathematics for Machine learning - linear algebra"
              subtitle="University of London"
              link="https://www.coursera.org/account/accomplishments/verify/JMUENDFG2S64?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              desc="Here I was introduced to linear algebra and how it can be used in some algorithms like Page rank. Parts of the assignments were done using Python as shown below"
            />
            <div className="flex flex-col md:flex-row text-center space-y-2 space-x-2 justify-center items-center w-full">
              <div className="flex flex-col justify-center md:w-[50%] items-center">
                <h1 className="text-xl font-bold">Frontend Development</h1>
                <h3 className="font-semibold  ">Frontend Simplified</h3>
                <a
                  className="animate-pulse mb-2 hover:text-pink-200"
                  target="_blank"
                  href="https://drive.google.com/file/d/1hl392zFFWATnzu8HPyBSDyEjss4zmqF1/view"
                >
                  See certificate here
                </a>
                <p className="text-lg font-light text-center">
                  I took this course as a way to start my journey into web
                  development, In it, it taught me JavaScript, HTML and CSS and
                  introduced me to React. I have improved my skills since then
                  and used other resources to and technologies.
                </p>
              </div>
              <div className="flex flex-col justify-center md:w-[50%] items-center">
                <h1 className="text-xl font-bold">Backend Development</h1>
                <h3 className="font-semibold ">Meta</h3>
                <a
                  className="animate-pulse mb-2 hover:text-pink-200"
                  target="_blank"
                  href="https://coursera.org/share/e9b3114fc90c3e220f513639196e8483"
                >
                  See progression here
                </a>
                <p className="text-lg font-light text-center">
                  I have started this course and I am currently learning more
                  about python and its procedural, functional and
                  object-oriented programming; The course will then move towards
                  servers, databases and technologies like Linux and MySQL.{" "}
                </p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row md:space-x-4 items-center justify-center py-10 mb-20">
            
            <Link href="/projects">
              <button className="btn">See my projects</button>
            </Link>
          </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Education;
