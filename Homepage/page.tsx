'use client';
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="shadow-md">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
          {/* Logo */}
          <div className="text-sm font-bold">
            <Link href="/" className="flex items-center">
              <span className="text-white">FOOD</span>
              <span className="text-yellow-400">TUCK</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-4 text-xs sm:text-sm font-medium justify-center items-center">
            <Link href="/" className="text-white hover:text-yellow-400 transition">Home</Link>
            <Link href="/Menu" className="text-white hover:text-yellow-400 transition">Menu</Link>
            <Link href="/Blog" className="text-white hover:text-yellow-400 transition">Blog</Link>
            <Link href="/Pages" className="text-white hover:text-yellow-400 transition">Pages</Link>
            <Link href="/About" className="text-white hover:text-yellow-400 transition">About</Link>
            <Link href="/Shop" className="text-white hover:text-yellow-400 transition">Shop</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-wrap sm:flex-nowrap items-center justify-between py-10 px-4 sm:px-6">
        {/* Left Content */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-yellow-500 font-sans">It's Quick & Amusing</h3>
          <h1 className="text-white font-bold sm:text-3xl lg:text-5xl mt-2">
            <span className="text-yellow-400">The</span> Art of Speed
          </h1>
          <h2 className="text-white font-bold sm:text-3xl lg:text-5xl mt-4">Food Quality</h2>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere voluptatum tempore massa conque.
          </p>
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full mt-6 hover:bg-yellow-400 transition">
            See Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/Group 68.png"
            alt="Plate of Food"
            width={400}
            height={400}
            className="w-auto h-auto shadow-lg"
          />
        </div>
      </main>

      {/* Bottom Section */}
      <section className="flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-6 py-12">
        {/* Left Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/unsplash_fdlZBWIP0aM.png"
            alt="Delicious Food"
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full sm:w-1/2 text-right">
          <h5 className="text-green-500 italic">Healthy & Juicy Food</h5>
          <h1 className="text-lg sm:text-xl font-bold text-white mt-4">
            We create the best quality food products
          </h1>
          <p className="text-gray-300 mt-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <button className="bg-green-800 text-white font-bold py-2 px-6 rounded mt-6 hover:bg-green-600 transition">
            Show More
          </button>
        </div>
      </section>

      {/* Food Category Section */}
      <div className="w-full h-auto flex flex-col items-center mt-10">
        <div className="w-[90%] max-w-screen-lg">
          {/* Heading */}
          <div className="text-center mb-4">
            <span className="text-yellow-500 font-semibold text-sm sm:text-base">
              Food Category
            </span>
          </div>

          {/* Products (Horizontal Layout) */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {/* Product 1 */}
            <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
              <img
                src="/unsplash_-lHZUkiWM74.png"
                className="w-full h-full object-contain"
                alt="Product 1"
              />
            </div>
            {/* Product 2 */}
            <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
              <img
                src="/unsplash_dphM2U1xq0U.png"
                className="w-full h-full object-contain"
                alt="Product 2"
              />
            </div>
            {/* Product 3 */}
            <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
              <img
                src="/unsplash_fdlZBWIP0aM.png"
                className="w-full h-full object-contain"
                alt="Product 3"
              />
            </div>
            {/* Product 4 */}
            <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
              <img
                src="/unsplash_dphM2U1xq0U.png"
                className="w-full h-full object-contain"
                alt="Product 4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
