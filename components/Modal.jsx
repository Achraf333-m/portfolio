import React from "react";

export const Modal = ({ title, desc, tech, img,  }) => {

  return (
    <div
      className="fixed inset-2 md:inset-10 z-50 flex items-center justify-center rounded-xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <FaTimes
        className="absolute top-5 right-5 text-xl font-semibold text-white cursor-pointer z-50"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div className="w-full h-full p-4 flex flex-col justify-center items-center space-y-4 max-w-5xl">
        <h3 className="text-white text-3xl font-semibold">{title}</h3>

        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Image Section */}
          <div className="relative w-full max-w-3xl aspect-[16/9]">
            <Image
              key={caroImg}
              src={caroImg}
              alt="Zoomed project image"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Controls Section */}
          <div className="flex flex-col items-center justify-between space-y-4 w-full md:w-1/3">
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-gray-300 hover:bg-black/70 text-black dark:text-white focus:outline-none transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-300 hover:bg-black/70 text-black dark:text-white focus:outline-none transition"
              >
                <FaArrowRight />
              </button>
            </div>

            <p className="text-white font-light">
              {count} / {totalCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
