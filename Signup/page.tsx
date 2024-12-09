import React from "react";
import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa"; // Icon imports for social sign-up

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white text-sm sm:text-base">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <h1 className="text-lg font-bold text-yellow-500">FoodTuck</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Menu">Menu</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className="bg-cover bg-center h-[90px] sm:h-[130px] p-[26px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold">Signup Page</h1>
        <p className="mt-2 text-sm sm:text-base">signup here</p>
    </div>
      {/* Signup Form */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto max-w-sm bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-500 mb-2">or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded flex items-center justify-center mt-2">
              <FaGoogle className="mr-2" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded flex items-center justify-center mt-2">
              <FaApple className="mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-6 text-xs">
          {/* About Section */}
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p>
              Corporate clients and leisure travelers rely on FoodTuck for dependable service.
            </p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold mb-2">Useful Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h4 className="font-bold mb-2">Help</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/support-policy">Support Policy</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div>
            <h4 className="font-bold mb-2">Recent Posts</h4>
            <ul>
              <li>Is fast food good for your body?</li>
              <li>Change your food habit</li>
              <li>Do you like fast food?</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6 text-xs">© 2024 FoodTuck. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
