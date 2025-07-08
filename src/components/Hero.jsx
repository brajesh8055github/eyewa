import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import hero1 from '../Images/hero1.webp';
import hero2 from '../Images/hero2.webp';
import hero3 from '../Images/hero3.webp';

const slides = [
  { id: 1, image: hero1 },
  { id: 2, image: hero2 },
  { id: 3, image: hero3 },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200">
        <FaArrowLeft />
      </button>
      <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200">
        <FaArrowRight />
      </button>
    </div>
  );
}
