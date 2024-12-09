import React from 'react';
import Link from 'next/link';
import { FaSearch, FaUserAlt, FaShoppingBag } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
        {/* Logo */}
        <div className="text-xs font-bold">
          <Link href="/" className="flex items-center">
            <span className="text-green-600">FOOD</span>
            <span className="text-black">TUCK</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-1 text-xs font-medium justify-center items-center">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
          <Link href="/Menu" className="text-gray-700 hover:text-green-600 transition">Menu</Link>
          <Link href="/Blog" className="text-gray-700 hover:text-green-600 transition">Blog</Link>
          <Link href="/Pages" className="text-gray-700 hover:text-green-600 transition">Pages</Link>
          <Link href="/About" className="text-gray-700 hover:text-green-600 transition">About</Link>
          <Link href="/Signup" className="text-gray-700 hover:text-green-600 transition">Signup</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <div className="flex sm:hidden">
          <button className="text-gray-700 hover:text-green-600 text-xl">
            &#9776; {/* Hamburger menu for mobile */}
          </button>
        </div>

        {/* Icons for Search, User, and Cart */}
        <div className="flex gap-2">
          <FaSearch className="text-sm cursor-pointer text-gray-700 hover:text-green-600" />
          <FaShoppingBag className="text-sm cursor-pointer text-gray-700 hover:text-green-600" />
          <FaUserAlt className="text-sm cursor-pointer text-gray-700 hover:text-green-600" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
