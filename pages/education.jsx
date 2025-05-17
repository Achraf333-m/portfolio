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
import Project from "@/components/Project";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Education & Certificates | Achraf Daimallah</title>
      </Head>

      <div className="w-full px-4 md:px-6">
        <Header />

        <section className="max-w-6xl mx-auto py-36 space-y-24 overflow-x-hidden">
          <h1
            className="mt-16 mb-12 text-3xl md:text-4xl text-center text-purple-950 dark:text-purple-200 font-extrabold tracking-tight"
            data-aos="fade-in"
          >
            Education
          </h1>

          <div className="flex flex-col space-y-6 max-w-3xl text-[#2c1f4c] dark:text-[#d4ccf9]">
            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Engineering (B.Eng.) Student{" "}
                <span className="text-lg font-light">(2024 - 2028)</span>
              </h3>
              <h4 className="text-lg font-semibold mt-1">Electrical Engineering</h4>
              <h5 className="text-md font-semibold mt-0.5">Concordia University</h5>
            </div>
            <p className="leading-relaxed text-base md:text-lg font-light max-w-[650px]">
              I'm currently pursuing my Bachelor of Engineering, where I get to explore real-world problem solving through lab
              experiments and design assignments. I've always been curious about how things work at a low level - whether that's code
              running close to the metal or the flow of electricity through a power grid. Lately, I've been especially drawn to power
              systems and the growing role of automation and electrification in our world. I'm still exploring exactly where I want
              to specialize, but I know I love building things that are both practical and impactful.
            </p>
          </div>

          <h1
            className="mt-16 mb-12 text-3xl md:text-4xl text-center text-purple-950 dark:text-purple-200 font-extrabold tracking-tight"
            data-aos="fade-in"
          >
            Certificates
          </h1>

          <h2
            className="mb-20 text-[#2c1f4c] dark:text-purple-100 text-lg md:text-xl font-light max-w-xl"
            data-aos="fade-in"
          >
            By the way, you can <span className="md:hidden">swipe and </span>click on the images to see better!
          </h2>

          <div className="flex flex-col md:flex-row md:justify-start md:gap-6 space-y-16 md:space-y-0 items-center">
            <Project
              Git=""
              delay={200}
              Web="https://coursera.org/share/13a59f2c5dc2bced1a58fab029a80c6b"
              description="This certificate provided a comprehensive introduction to the fundamentals of cybersecurity.
                It covered essential topics such as the core protocols that underpin digital communications,
                the legal and regulatory frameworks designed to safeguard sensitive data, and practical,
                hands-on experience with industry-standard tools and technologies. Throughout the course,
                I gained introductory experience using platforms like Splunk and Google Chronicle for security monitoring and analysis,
                as well as programming and querying with Python and SQL to automate tasks and investigate security incidents effectively."
              image1={sql}
              image2={ticket}
              image3={Leastpriv}
              name="Google's Cybersecurity Certificate (via Coursera)"
              technologies={["SQL", "Python", "Splunk", "Google Chronicle", "OSI model", "TCP model"]}
            />

            <Project
              Git=""
              delay={300}
              Web="https://www.coursera.org/account/accomplishments/verify/KFR5WMKUR2Q9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              description="This course provided a thorough introduction to the
                fundamentals of Python programming, designed specifically for beginners.
                I learned core programming concepts such as variables, data types, control structures (including loops and conditionals),
                functions, and error handling. The course also introduced me to working with external data by teaching how to retrieve and
                parse data from the web using common data formats like XML and JSON. Through hands-on exercises,
                I gained experience writing Python scripts that interact with web APIs, extract meaningful information,
                and process it efficiently. This foundational
                knowledge has equipped me with essential
                skills to continue exploring the programming field."
              image1={py1}
              image2={py2}
              image3={py3}
              name="Python for everybody (via Coursera)"
              technologies={["XML parsing", "JSON parsing", "Web access"]}
            />
          </div>

          <div className="flex justify-center py-12">
            <Link href="/projects">
              <button className="btn px-8 py-3 text-lg rounded-xl transition-colors duration-300 hover:bg-neutral-800 dark:hover:bg-gray-700">
                See my projects
              </button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Education;
