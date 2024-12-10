import React from 'react';

const Hero5 = () => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      {/* Header */}
      <h5 className="text-green-600 font-serif text-sm sm:text-base mb-2">
        <i>Healthy & Juicy Food</i>
      </h5>
      
      <h1 className="font-extrabold text-lg sm:text-xl text-gray-800 leading-tight mb-4">
        Our Food Menu
      </h1>

      <h6 className="text-[10px] sm:text-xs font-thin text-gray-800 mt-2 italic mb-6">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      </h6>

      {/* Menu Categories (Breakfast, Lunch, Dinner) */}
      <div className="flex justify-around w-full mb-6">
        <button className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-transparent hover:border-green-800 transition duration-300">
          Breakfast
        </button>
        <button className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-transparent hover:border-green-800 transition duration-300">
          Lunch
        </button>
        <button className="text-lg sm:text-xl font-semibold text-green-800 border-b-2 border-transparent hover:border-green-800 transition duration-300">
          Dinner
        </button>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
        {/* Breakfast Items */}
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Grilled Salmon</button>
          <span className="text-sm text-green-800 mt-2">$32</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>BBQ Chicken Breast</button>
          <span className="text-sm text-green-800 mt-2">$28</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Fried Shrimp</button>
          <span className="text-sm text-green-800 mt-2">$24</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Vegetable Stir-fry</button>
          <span className="text-sm text-green-800 mt-2">$18</span>
        </div>

        {/* Lunch Items */}
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Steak</button>
          <span className="text-sm text-green-800 mt-2">$45</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Chicken Wings</button>
          <span className="text-sm text-green-800 mt-2">$22</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Caesar Salad</button>
          <span className="text-sm text-green-800 mt-2">$15</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Grilled Chicken</button>
          <span className="text-sm text-green-800 mt-2">$30</span>
        </div>

        {/* Dinner Items */}
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Roasted Lamb</button>
          <span className="text-sm text-green-800 mt-2">$50</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Beef Stew</button>
          <span className="text-sm text-green-800 mt-2">$38</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Salmon Fillet</button>
          <span className="text-sm text-green-800 mt-2">$42</span>
        </div>
        <div className="flex flex-col items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600">
          <button>Pasta Primavera</button>
          <span className="text-sm text-green-800 mt-2">$36</span>
        </div>
      </div>

      {/* Thin Black Line Under Menu */}
      <div className="w-full border-t-2 border-black mb-6"></div>

      {/* View More Button */}
      <button className="px-4 py-2 bg-white border-2 border-green-800 text-green-800 text-xs font-semibold rounded-md hover:bg-green-100 transition duration-300">
        View More
      </button>
    </div>
  );
};

export default Hero5;
