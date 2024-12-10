'use client';
import React from 'react';

const Hero = () => {
  const handleShowMoreClick = () => {
    alert('Show More button clicked!');
  };

  const handlePlaceOrderClick = () => {
    alert('Place Order button clicked!');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-8">
      {/* Text Section */}
      <div className="flex flex-col items-start text-left max-w-sm">
        {/* Title */}
        <h5 className="text-green-600 font-serif text-sm sm:text-base">
          <i>Healthy & Juicy Food</i>
        </h5>
        <h1 className="font-extrabold text-lg sm:text-xl text-gray-800 leading-tight">
          Enjoy Healthy Life
          <br />
          & Tasty Food
        </h1>

        {/* Subtitle */}
        <h6 className="text-xs sm:text-sm font-thin text-gray-800 mt-2 italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          <br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </h6>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {/* Show More Button */}
          <button
            onClick={handleShowMoreClick}
            className="px-3 py-1 bg-green-800 text-white text-xs sm:text-sm rounded-md hover:bg-green-600 transition duration-300"
          >
            Show More
          </button>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrderClick}
            className="px-3 py-1 border border-green-800 text-green-500 text-xs sm:text-sm rounded-md hover:bg-green-100 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-8 w-full sm:w-1/2">
        <img
          src="/Vector.png"
          alt="Delicious Food"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
