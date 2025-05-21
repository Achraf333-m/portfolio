"use client";

import { useEffect, useState } from "react";
import Links from "./UI/Links";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

function Project({
  name,
  technologies,
  Web,
  Git,
  image1,
  image2,
  image3,
  description,
  delay,
}) {
  const [modal, setModal] = useState(null);
  const [caroImg, setCaroImg] = useState(image1);
  const [images, setImages] = useState(false);
  const [count, setCount] = useState(1);
  const totalCount = 3;
  const openModal = (imgSrc) => {
    setModal(imgSrc);
  };

  const closeModal = () => {
    setModal(null);
  };

  const goToNext = () => {
    if (modal == image1) {
      setCaroImg(image2);
      setModal(image2);
      setCount(2);
    }
    if (modal == image2) {
      setCaroImg(image3);
      setModal(image3);
      setCount(3);
    }
    if (modal == image3) {
      setCaroImg(image1);
      setModal(image1);
      setCount(1);
    }
  };

  const goToPrevious = () => {
    if (modal == image3) {
      setCaroImg(image2);
      setModal(image2);
      setCount(2);
    }
    if (modal == image2) {
      setCaroImg(image1);
      setModal(image1);
      setCount(1);
    }
    if (modal == image1) {
      setCaroImg(image3);
      setModal(image3);
      setCount(3);
    }
  };

  return (
    <div className="max-w-sm w-full h-full md:cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 transition hover:shadow-xl">
      <Image
        alt="section-image"
        className="w-full animate-fadeIn rounded cursor-pointer h-48 object-cover"
        src={caroImg}
        onClick={() => openModal(caroImg)}
      />

      <div className="p-4 flex flex-col flex-grow ">
        <h3 className="text-xl text-center font-semibold text-neutral-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-sm truncate overflow-ellipsis text-neutral-600 dark:text-neutral-300 mb-4">
          {description}
        </p>

        <ul className="flex h-full flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="px-3 py-1 truncate overflow-ellipsis text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 pb-2 flex h-full justify-between items-center">
          <a
            href={Web}
            target="_blank"
            className={`text-blue-600 ${
              Web == "" ? "hidden" : "block"
            } dark:text-blue-400 text-sm font-medium hover:underline`}
          >
            Go to site
          </a>
          <a
            href={Git}
            target="_blank"
            className={`text-sm text-neutral-500 ${
              Git == "" ? "hidden" : "block"
            } dark:text-neutral-400 hover:underline`}
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* modal */}
      {modal && (
        <div
          className="inset-2 fixed md:inset-8 z-20 flex items-center justify-center rounded-xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            className="absolute top-5 select-none outline-none active:scale-95 !active:outline-none right-5  font-semibold dark:text-white text-black cursor-pointer  !focus:outline-none  rounded-lg"
            onClick={() => {
              setModal(null);
              setImages(false);
              setCaroImg(image1);
            }}
          >
            <FaTimes
              className="z-20 brightness-90 hover:brightness-200 text-md outline-none"
              tabIndex={0}
              aria-label="Close modal"
            />
          </button>

          {/* Modal Content */}

          <div className="w-full p-4 flex flex-col justify-center items-center space-y-4 max-w-5xl">
            <h3 className="text-black text-center dark:text-white animate-fadeIn text-3xl font-semibold">
              {name}
            </h3>

            <div className="w-full flex flex-col md:flex-row gap-4">
              {images ? (
                <>
                  <div className="relative w-full max-w-3xl aspect-[16/9]">
                    <Image
                      key={caroImg}
                      src={caroImg}
                      alt="Zoomed project image"
                      className="absolute top-0 left-0 w-full h-full object-cover animate-fadeIn duration-1000 rounded-xl shadow-2xl select-none"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>

                  {/* Controls Section */}
                  <div className="flex flex-col items-center justify-between space-y-4 w-full md:w-1/3">
                    <div className="flex items-center justify-center gap-6">
                      <button
                        onClick={goToPrevious}
                        className="p-2 rounded-full bg-gray-300 hover:bg-black/70 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition"
                        aria-label="Previous image"
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-gray-300 hover:bg-black/70 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition"
                        aria-label="Next image"
                      >
                        <FaArrowRight />
                      </button>
                    </div>

                    <p className="text-black/60 dark:text-white/60 font-light">
                      {count} / {totalCount}
                    </p>

                    <button
                      className="group bg-gray-600/40 rounded-lg flex max-w-md px-4 py-1 justify-center items-center gap-2 text-black/60 dark:text-white/60 focus:outline-none"
                      onClick={() => setImages(false)}
                    >
                      <FaArrowLeft className="dark:group-hover:text-gray-200 group-hover:text-gray-900 text-xs transition-transform duration-300 group-hover:-translate-x-1 font-extralight" />
                      <span className="dark:group-hover:text-gray-200 group-hover:text-gray-900 transition-transform duration-300 group-hover:translate-x-[1px]">Back to description</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="animate-fadeIn flex flex-col space-y-6 items-center justify-center w-full">
                  <p className="text-center break-words p-2">{description}</p>

                  <div className="flex items-center justify-center flex-wrap gap-2">
                    {technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <button
                    className="group bg-gray-600/40 rounded-lg flex max-w-md px-4 py-1 justify-center items-center gap-2 text-black/60 dark:text-white/60 focus:outline-none"
                    onClick={() => setImages(true)}
                    aria-label="See images"
                  >
                    <span className="dark:group-hover:text-gray-200 group-hover:text-gray-900 transition-all duration-300 group-hover:-translate-x-[1px]">
                      See images
                    </span>
                    <FaArrowRight className="dark:group-hover:text-gray-200 group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-1 text-sm font-extralight" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
