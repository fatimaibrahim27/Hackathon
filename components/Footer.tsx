import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';  // Importing icons

const Footer = () => {
  return (
    <div className="bg-green-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
          
          {/* Foodstocks Section */}
          <div>
            <h3 className="font-semibold text-sm">Foodstocks</h3>
            <p className="mt-2">Fresh, sustainable, and quality food direct from farm to plate.</p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-sm">Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/" className="hover:text-gray-200 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-200 transition duration-300">About Us</a></li>
              <li><a href="/menu" className="hover:text-gray-200 transition duration-300">Menu</a></li>
              <li><a href="/contact" className="hover:text-gray-200 transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-sm">Contact Us</h3>
            <div className="mt-2 text-xs flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <span>contact@foodstocks.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg" />
                <span>1234 Food Street, New York, USA</span>
              </div>
            </div>
          </div>

          {/* Instagram Gallery Section */}
          <div>
            <h3 className="font-semibold text-sm">Instagram Gallery</h3>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <img src="/Group 26.png" alt="Insta 1" className="w-32 h-24 object-cover rounded-md"/>
              <img src="/Group 26.png" alt="Insta 2" className="w-32 h-24 object-cover rounded-md"/>
              <img src="/Group 26.png" alt="Insta 3" className="w-32 h-24 object-cover rounded-md"/>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center mt-2 text-xs sm:text-sm">
          <p>&copy; 2020 Foodstocks. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
