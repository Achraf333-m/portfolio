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

import htb1 from "@/public/htb1.png";
import htb2 from "@/public/htb2.png";
import htb3 from "@/public/htb3.png";

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
      <div className="w-full  h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
        <img src="/background.jpg" className="bgImage" />
        <div className="w-full  px-2 md:px-4 ">
          <Header />
          <section className="max-w-6xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
            <h1
              className="mt-16 mb-20 text-3xl font-semibold"
              data-aos="fade-in"
            >
              Certificates
            </h1>
            <div className="flex flex-col space-y-4 opacity-60">
              <div>
                <h3 className="text-2xl font-bold">CompTIA Security+</h3>
                <h4 className="text-lg font-semibold">CompTIA</h4>
                <a className="animate-pulse hover:text-pink-200" aria-disabled>
                  In progess
                </a>
              </div>
              <p className="">
                I am currently preparing for this certificate, I have gained
                sufficient knowledge from Google's cybersecurity certificate to
                have a good grasp of the material I need to study to pass its
                exam.
              </p>
              <h3 className="opacity-70">● ● ●</h3>
            </div>

            <Cert
              image1={sql}
              image2={ticket}
              image3={Leastpriv}
              title="Cybersecurity Certificate"
              subtitle="Google"
              link="https://coursera.org/share/13a59f2c5dc2bced1a58fab029a80c6b"
              desc="This
              certificate taught me the basics of cybersecurity, from the protocols
              that govern the virtual world and the laws behind keeping data safe to
              technologies like Splunk, Google Chronicle, Python and SQL."
            />
            <Cert
              image1={py1}
              image2={py2}
              image3={py3}
              title="Python for everybody"
              subtitle="Michigan University"
              link="https://www.coursera.org/account/accomplishments/verify/KFR5WMKUR2Q9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              desc="This course taught me the basics of Python in addition to obtaining data from the web through XML and JSON parsing as shown here in some of my projects."
            />
            <Cert
              image1={la1}
              image2={la2}
              image3={la3}
              title="Mathematics for Machine Learning - linear algebra"
              subtitle="University of London"
              link="https://www.coursera.org/account/accomplishments/verify/JMUENDFG2S64?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              desc="Here, I was introduced to linear algebra and how it can be used in some algorithms such as PageRank. Parts of the assignments were done using Python as shown below"
            />
            <div className="flex flex-col md:flex-row text-center space-y-2 space-x-2 justify-center items-center w-full">
              <div className="flex flex-col justify-center md:w-[50%] items-center">
                <h1 className="text-xl font-bold">Front-end Development</h1>
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
                  development. Through this program, I learned JavaScript, HTML
                  and CSS as well as React. I have improved my skills since then
                  and used other crowd-sourced resources and technologies.
                </p>
              </div>
              <div className="flex flex-col justify-center md:w-[50%] items-center">
                <h1 className="text-xl font-bold">Backend Development</h1>
                <h3 className="font-semibold ">Meta</h3>
                <a
                  className="animate-pulse mb-2 hover:text-pink-200"
                  target="_blank"
                  href="https://coursera.org/share/ac7f3de06ad6ec2e9bd9d0f7976995f2"
                >
                  See progression here
                </a>
                <p className="text-lg font-light text-center">
                  Through this program, I am currently learning more about
                  Python and its procedural, functional and object-oriented
                  programming; The course will then move towards servers,
                  databases and technologies like Linux and MySQL.{" "}
                </p>
              </div>
            </div>
            <Cert
              image1={htb1}
              image2={htb2}
              image3={htb3}
              title="Hack The Box"
              subtitle="Academy"
              link="https://1drv.ms/b/s!AuUrkB1ZqcWGtJgFyzFN_Z3LbwA69Q?e=7Zvp9h"
              desc="I am taking the course as a way to expand my knowledge in cybersecurity and learn what penetration testers need to know in the real world"
            />
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
