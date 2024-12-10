'use client';
import React from 'react';

const Hero = () => {
  const handleFreshFoodClick = () => {
    alert('Fresh Food button clicked!');
  };

  const handleServiceClick = () => {
    alert('24/7 Service button clicked!');
  };

  const handleQualityClick = () => {
    alert('Quality Maintain button clicked!');
  };

  const handleFreeDeliveryClick = () => {
    alert('Free Delivery button clicked!');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
      {/* Image Section */}
      <div className="flex flex-col items-center sm:w-1/2 gap-0 sm:gap-0">
        {/* First Image */}
        <div className="w-36 h-36 sm:w-40 sm:h-40">
          <img
            src="/Group 67.png"
            alt="Fresh Food"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Second Image, Positioned with No Gap */}
        <div className="mt-0 w-36 h-36 sm:w-40 sm:h-40">
          <img
            src="/Group 68.png"
            alt="Free Delivery"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-start text-left max-w-sm w-full sm:w-1/2 mt-4 sm:mt-0 sm:ml-6">
        {/* Title */}
        <h5 className="text-green-600 font-serif text-[10px] sm:text-xs italic">
          <i>Why Choose Us</i>
        </h5>
        <h1 className="font-extrabold text-sm sm:text-lg text-gray-800 leading-tight italic">
          Why We Are the Best?
        </h1>

        {/* Subtitle */}
        <h6 className="text-xs sm:text-sm font-thin text-gray-800 mt-2 italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
        </h6>

        {/* New Buttons with White Box */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-white p-2 rounded-md shadow-md text-center">
            <button
              onClick={handleFreshFoodClick}
              className="w-full py-1 text-xs font-semibold text-green-800 hover:bg-green-100 transition duration-300"
            >
              Fresh Food
            </button>
          </div>

          <div className="bg-white p-2 rounded-md shadow-md text-center">
            <button
              onClick={handleServiceClick}
              className="w-full py-1 text-xs font-semibold text-green-800 hover:bg-green-100 transition duration-300"
            >
              24/7 Service
            </button>
          </div>

          <div className="bg-white p-2 rounded-md shadow-md text-center">
            <button
              onClick={handleQualityClick}
              className="w-full py-1 text-xs font-semibold text-green-800 hover:bg-green-100 transition duration-300"
            >
              Quality Maintain
            </button>
          </div>

          <div className="bg-white p-2 rounded-md shadow-md text-center">
            <button
              onClick={handleFreeDeliveryClick}
              className="w-full py-1 text-xs font-semibold text-green-800 hover:bg-green-100 transition duration-300"
            >
              Free Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
