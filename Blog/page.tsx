import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaUserAlt, FaShoppingBag, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    { title: 'Delicious Food Trends', excerpt: 'Explore the latest trends in the food industry.', image: '/Group 67.png' },
    { title: 'Healthy Eating Tips', excerpt: 'Learn how to maintain a healthy and balanced diet.', image: '/Group 68.png' },
    { title: 'Best Restaurants in Town', excerpt: 'Discover the top-rated restaurants near you.', image: '/unsplash_IGfIGP5ONV0.png' },
    { title: 'Food Tuck Menu Updates', excerpt: 'Get the latest updates on our menu items and specials.', image: '/unsplash_lP5MCM6nZ5A.png' },
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <header className="bg-black shadow-md">
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
            <Link href="/About" className="text-white hover:text-yellow-400 transition">About</Link>
            <Link href="/Shop" className="text-white hover:text-yellow-400 transition">Shop</Link>
            <Link href="/Contact" className="text-white hover:text-yellow-400 transition">Contact</Link>
            

          </nav>

          {/* Icons */}
          <div className="flex gap-2">
            <FaSearch className="text-xl cursor-pointer text-white hover:text-yellow-400" />
            <FaShoppingBag className="text-xl cursor-pointer text-white hover:text-yellow-400" />
            <FaUserAlt className="text-xl cursor-pointer text-white hover:text-yellow-400" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[80px] sm:h-[120px] p-[20px] flex flex-col justify-center items-center text-white relative"
        style={{ backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")' }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold">Our Blog</h1>
        <p className="mt-2 text-sm sm:text-base">Stay updated with the latest news and trends.</p>
        <div className="absolute bottom-4 text-xs sm:text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2"> &gt; </span>
          <span>Blog</span>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="bg-black px-4 sm:px-8 py-12">
        <div className="container mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-center mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col items-center bg-white text-black rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-48 relative">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                  <Link href="/BlogPost" className="text-yellow-400 text-sm mt-4 inline-block hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-between gap-8">
            {/* FoodTuck Section */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-2xl font-semibold mb-4">FOOD TUCK</h3>
              <p className="text-sm">
                Explore the world of delicious meals and gourmet dishes. Enjoy the finest food delivered right to your door.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link href="/Menu" className="hover:text-yellow-400">Menu</Link></li>
                <li><Link href="/Blog" className="hover:text-yellow-400">Blog</Link></li>
                <li><Link href="/Shop" className="hover:text-yellow-400">Shop</Link></li>
                <li><Link href="/Contact" className="hover:text-yellow-400">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 mb-4">
                <FaPhoneAlt className="text-yellow-400 text-xl" />
                <p className="text-sm">+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <FaEnvelope className="text-yellow-400 text-xl" />
                <p className="text-sm">info@foodtuck.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                <p className="text-sm">123 Food Street, City, Country</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} FOOD TUCK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
