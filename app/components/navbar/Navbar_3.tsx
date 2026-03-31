import React from 'react';
import Link from 'next/link';
import TopBar_3 from '../top-bar/TopBar_3';

export default function Navbar_3() {
  return (
    <div className="w-full sticky top-0 z-50">
      <TopBar_3 />

      {/* Main Navbar */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-[#3C6255] tracking-wide">
            <Link href="/">
              <span className="hover:text-[#A6BB8D] transition duration-300">Logo</span>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-[#3C6255] transition">{item}</span>

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3C6255] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login */}
            <Link href="/login">
              <button className="text-[#3C6255] font-medium hover:text-[#A6BB8D] transition">
                Login
              </button>
            </Link>

            {/* CTA Button */}
            <Link href="/appointment">
              <button className="bg-gradient-to-r from-[#3C6255] to-[#A6BB8D] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
                Get Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl text-[#3C6255]">☰</button>
          </div>
        </div>
      </div>
    </div>
  );
}
