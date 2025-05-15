import { useEffect, useState } from "react";
import Links from "./UI/Links";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

function Project({
  name,
  technologies,
  Web,
  Git,
  image1,
  image2,
  image3,
  description,
}) {
  const [modal, setModal] = useState(null);

  const openModal = (imgSrc) => {
    setModal(imgSrc);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div data-aos="fade-in" className="my-4 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl text-purple-950 dark:text-purple-200" data-aos="fade-in" data-aos-delay="300">
          {name}
        </h1>
        <p className=" text-md text-gray-900 dark:text-purple-200/90">{technologies}</p>
        <Links Wlink={Web} Glink={Git} />
        <div className="project-style">
          <Image
            alt="section-image"
            className="hover-transition"
            data-aos={modal || "fade-right"}
            src={image1}
            onClick={() => openModal(image1)}
          />
          <Image
            alt="section-image"
            className="hover-transition"
            data-aos={modal || "fade-right"}
            data-aos-delay="200"
            src={image2}
            onClick={() => openModal(image2)}
          />
          <Image
            alt="section-image"
            className="hover-transition"
            data-aos={modal || "fade-right"}
            data-aos-delay="400"
            src={image3}
            onClick={() => openModal(image3)}
          />
        </div>
        <p className="font-light p-2 text-xl break-words">{description}</p>
      </div>
      {modal && (
        <div
          className="fixed animate-fadeIn inset-2 md:inset-8 rounded-xl shadow-lg dark:bg-purple-400/10 bg-black/40 backdrop-blur-lg z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <FaTimes className="absolute  z-51 cursor-pointer top-5 right-5 text-xl font-semibold text-white" onClick={closeModal} />
          <Image
            src={modal}
            alt="Zoomed project image"
            className="relative max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Project;
