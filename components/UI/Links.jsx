import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Links({ Glink, Wlink }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex space-x-4 mt-5 mb-10 text-lg md:text-xl">
      <a
        data-aos="fade-right"
        data-aos-delay="200"
        className="hover:scale-125 transition duration-300"
        href={Glink}
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        data-aos="fade-right"
        
        className={(Wlink == "") ? "hidden" : "hover:scale-125 transition duration-300"}
        href={Wlink}
        target="_blank"
      >
        <BiLink />
      </a>
    </div>
  );
}

export default Links;
