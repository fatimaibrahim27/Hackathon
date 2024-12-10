'use client';
import React, { useRef } from 'react';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Scroll left by 200px
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Scroll right by 200px
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center mt-10">
      <div className="w-[90%] max-w-screen-lg relative">
        {/* Heading */}
        <div className="text-center mb-2">
          <span className="text-red-500 font-extralight text-[10px] sm:text-xs">
            This month
          </span>
          <h2 className="font-semibold text-lg sm:text-xl">Food Category</h2>
          <p className="text-xs sm:text-sm font-thin text-gray-800 mt-2 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          </p>
        </div>

        {/* Products (Horizontal Scrolling Layout) */}
        <div className="flex space-x-0 overflow-x-auto scrollbar-hide scroll-smooth py-3" ref={scrollRef}>
          {/* Product 1 */}
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="/Grand Italiano.png"
              className="w-full h-full object-contain"
              alt="Product 1"
            />
          </div>
          {/* Product 2 */}
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="/Grand Italiano.png"
              className="w-full h-full object-contain"
              alt="Product 2"
            />
          </div>
          {/* Product 3 */}
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="/Grand Italiano.png"
              className="w-full h-full object-contain"
              alt="Product 3"
            />
          </div>
          {/* Product 4 */}
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="/Grand Italiano.png"
              className="w-full h-full object-contain"
              alt="Product 4"
            />
          </div>
          {/* Product 5 */}
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="/Grand Italiano.png"
              className="w-full h-full object-contain"
              alt="Product 5"
            />
          </div>
        </div>

        {/* Scroll Arrows */}
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer z-10"
          onClick={scrollLeft}
        >
          <span className="text-2xl text-gray-800 hover:text-green-600">&#8592;</span>
        </div>
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer z-10"
          onClick={scrollRight}
        >
          <span className="text-2xl text-gray-800 hover:text-green-600">&#8594;</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
