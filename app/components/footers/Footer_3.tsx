import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer_3() {
  return (
    <footer className="bg-[#3C6255] text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              We provide high quality services with modern solutions. Your satisfaction is our
              priority.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2 bg-[#A6BB8D] rounded-full hover:bg-white/30 transition"
                >
                  <Icon className="w-4 h-4 text-[#3C6255]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="hover:text-[#A6BB8D] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>App Development</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                25/B Milford Road, New York
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@example.com
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +2 123 654 7898
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-300">
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#A6BB8D]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#A6BB8D]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
