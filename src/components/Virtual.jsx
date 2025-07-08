import React from "react";
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import premium from '../Images/premium.avif';

export default function VirtualTryOn() {
  return (
    <div className="bg-[#E2F9F9] rounded-3xl p-6 md:p-12 max-w-7xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Try on styles <br className="hidden md:block" />
            anytime, anywhere!
          </h2>
          <p className="text-gray-600 max-w-md">
            Find your perfect frames – or contact lenses – from anywhere!
            Try on styles from the comfort of home, with our virtual try-on!
          </p>
        </div>

     
        <div className="relative flex-1 max-w-sm w-full">
          <img
            src={premium}
            alt="Try on app demo"
            className="w-full h-auto rounded-2xl object-cover"
          />

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 border border-white rounded-xl px-6 py-4 backdrop-blur-md text-white text-center">
            <div className="text-lg font-semibold">Spectus</div>
            <div className="text-sm">OLIVE</div>
            <div className="text-sm mt-1">AED 499</div>
          </div>

          <button className="absolute left-[-2rem] top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full">
            <FaArrowLeft className="text-gray-600" />
          </button>

          <button className="absolute right-[-2rem] top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full">
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>

        <div className="flex-1 text-center md:text-right">
          <button className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Virtual Fit Catalog <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
