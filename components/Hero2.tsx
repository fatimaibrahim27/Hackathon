'use client';
import React from 'react';

const Hero = () => {
  const handleShowMoreClick = () => {
    alert('Show More button clicked!');
  };

  const handleWatchVideosClick = () => {
    alert('Watch Videos button clicked!');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-8">
      {/* Image Section */}
      <div className="flex flex-col items-center sm:w-1/2 gap-2 sm:gap-4">
        <div className="w-28 h-28 sm:w-32 sm:h-32">
          <img
            src="/unsplash_lP5MCM6nZ5A.png"
            alt="Delicious Food Top"
            className="w-full h-full object-cover rounded-md"
            width={200}
            height={100}
          />
        </div>
        <div className="flex gap-2 sm:gap-4 w-full justify-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28">
            <img
              src="\unsplash_CLMpC9UhyTo.png"
              alt="Delicious Food Left"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28">
            <img
              src="\unsplash_ZuIDLSz3XLg.png"
              alt="Delicious Food Right"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-start text-left max-w-sm w-full sm:w-1/2 mt-4 sm:mt-0 sm:ml-8">
        {/* Title */}
        <h5 className="text-green-600 font-serif text-[10px] sm:text-xs">
          <i>About us</i>
        </h5>
        <h1 className="font-extrabold text-sm sm:text-lg text-gray-800 leading-tight">
          Food is an important
          <br />
          part of a balanced diet
        </h1>

        {/* Subtitle */}
        <h6 className="text-xs sm:text-sm font-thin text-gray-800 mt-2 italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
        </h6>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          {/* Show More Button */}
          <button
            onClick={handleShowMoreClick}
            className="px-2 py-1 bg-green-800 text-white text-xs rounded-md hover:bg-green-600 transition duration-300"
          >
            Show More
          </button>

          {/* Watch Videos Button */}
          <button
            onClick={handleWatchVideosClick}
            className="px-2 py-1 border border-green-800 text-green-500 text-xs rounded-md hover:bg-green-100 transition duration-300"
          >
            Watch Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
