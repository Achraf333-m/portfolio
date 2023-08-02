import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function AboutPara({ title, para, Newimage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex justify-between py-4 space-y-4 flex-col md:flex-row md:space-y-0 md:space-x-4">
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="md:w-[500px] text-xl"
        >
          {para}
        </p>
        <Image
          data-aos="fade-right"
          src={Newimage}
          alt="section-image"
          priority
          className="rounded-lg h-60 w-full md:w-[50%]"
        />
      </div>
    </div>
  );
}

export default AboutPara;
