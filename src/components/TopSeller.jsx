import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import glass from '../Images/glass.jpg'
const products = [
  {
    id: 1,
    title: "Color Contact Lenses - 2 lenses",
    price: "149",
    brand: "Layala",
    image:glass,
    colors: ["#3B82F6", "#166534", "#6EE7B7", "#D1FAE5"],
  },
  {
    id: 2,
    title: "Gemstone Collection - 2 lenses",
    price: "149",
    brand: "Layala",
    image:glass,
    colors: ["#0F766E", "#78350F"],
  },
  {
    id: 3,
    title: "2024 Collection - 2 lenses",
    price: "149",
    brand: "Layala",
    image:glass,
    colors: ["#854D0E", "#38BDF8"],
  },
  {
    id: 4,
    title: "2022 Collection - 2 lenses",
    price: "149",
    brand: "Layala",
    image:glass,
    colors: ["#60A5FA", "#93C5FD", "#22D3EE", "#047857", "#A855F7"],
  },
];

export default function TopSeller() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-6">Top Sellers</h2>

      <button
        onClick={() => scroll("left")}
        className="absolute top-[55%] left-0 z-10 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] bg-white rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="text-gray-700 mb-1">{product.brand}</div>
              <div className="font-semibold text-gray-800 mb-3">฿{product.price}</div>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute top-[55%] right-0 z-10 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
