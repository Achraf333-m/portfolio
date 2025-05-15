import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Cert({ image1, image2, image3, title, subtitle, link, desc }) {
  const [modal, setModal] = useState(null);

  const openModal = (imgSrc) => {
    setModal(imgSrc);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-lg font-semibold">{subtitle}</h4>
        <a
          className="animate-pulse hover:text-pink-200"
          target="_blank"
          href={link}
        >
          See my progression
        </a>
      </div>
      <p className="">{desc}</p>
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
          src={image2}
          onClick={() => openModal(image2)}
        />
        <Image
          alt="section-image"
          className="hover-transition"
          data-aos={modal || "fade-right"}
          src={image3}
          onClick={() => openModal(image3)}
        />
      </div>
      {modal && (
        <div
          className="fixed animate-fadeIn inset-2 md:inset-8 rounded-xl shadow-lg dark:bg-purple-400/10 bg-black/40 backdrop-blur-lg z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <FaTimes
            className="absolute  z-51 cursor-pointer top-5 right-5 text-xl font-semibold text-white"
            onClick={closeModal}
          />
          <Image
            src={modal}
            alt="Zoomed project image"
            className="relative max-w-[90%] max-h-[90%] rounded-xl p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Cert;
