import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { FaSearch, FaUserAlt, FaShoppingBag, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const menuItems = [
    { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Group 67.png' },
    { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/Group 68.png' },
    { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/unsplash_-lHZUkiWM74.png' },
    { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Group 68.png' },
    { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/product_img.png' },
    { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/product_img (2).png' },
    { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/unsplash_CLMpC9UhyTo (1).png' },
    { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/unsplash_fdlZBWIP0aM.png' },
  ];

  return (
    <>
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
            <Link href="/Pages" className="text-white hover:text-yellow-400 transition">Pages</Link>
            <Link href="/About" className="text-white hover:text-yellow-400 transition">About</Link>
            <Link href="/Shop" className="text-white hover:text-yellow-400 transition">Shop</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition">Contact</Link>
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
        className="bg-cover bg-center h-[90px] sm:h-[130px] p-[26px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-xl sm:text-2xl font-extrabold">Our Menu</h1>
        <p className="mt-2 text-xs sm:text-sm">Explore our delicious menu options.</p>
        <div className="absolute bottom-4 text-xs sm:text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2"> &gt; </span>
          <span>Menu</span>
        </div>
      </div>

      {/* Menu Section */}
      <section className="bg-gray-100 px-8 sm:px-16 lg:px-[135px] text-black py-12">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Choose & Pick</h2>
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">From Our Menu</h1>

          {/* Categories */}
          <div className="flex justify-center mb-8">
            <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
              <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
              <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
              <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
              <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
              <li className="cursor-pointer hover:text-yellow-500">Drink</li>
              <li className="cursor-pointer hover:text-yellow-500">Snack</li>
              <li className="cursor-pointer hover:text-yellow-500">Soups</li>
            </ul>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="flex rounded-lg overflow-hidden shadow-lg">
                <div className="w-1/3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-sm sm:text-lg font-semibold">{item.name}</h1>
                  <p className="text-[10px] sm:text-xs text-gray-400 mb-2">{item.description}</p>
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
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

    </>
  );
};

export default Navbar;
