import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bottom1 from '../Images/bottom1.webp';
import bottom2 from '../Images/bottom2.webp';
import bottom3 from '../Images/bottom3.webp';

const images = [bottom1, bottom2, bottom3];

export default function TryOneSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-[#DFF7F5] rounded-3xl overflow-hidden w-full max-w-7xl mx-auto mt-10">
      <div className="w-full h-[300px] md:h-[500px]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
