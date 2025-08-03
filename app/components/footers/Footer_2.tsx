"use client";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { megaMenuData } from "../navbar/utils/navbar_2_data";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#5E936C] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {/* Brand & Social */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <div className="mb-4">
                {/* <Image
                  src={logo}
                  alt="YourShop Logo"
                  width={140}
                  height={40}
                  priority
                  className="object-contain"
                /> */}
                <h1>Logo</h1>
              </div>
            </Link>
          </div>

          {/* Quick Navigation */}
          {megaMenuData?.map((main, index) => (
            <div className="col-span-1" key={index}>
              <h3 className="text-lg font-semibold mb-4">
                {main.MainCategoryName}
              </h3>
              <div className="space-y-2">
                {main.Category.map((cat, idx) => (
                  <div key={idx} className="mb-1">
                    <Link
                      href={cat.link}
                      className="text-[#E8FFD7] hover:text-white transition-colors"
                    >
                      {cat.categoryName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-[#E8FFD7] text-sm mb-1">
              Email: support@yourshop.com
            </p>
            <p className="text-[#E8FFD7] text-sm mb-1">
              Phone: +880-1234-567890
            </p>
            <p className="text-[#E8FFD7] text-sm">Address: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <div className="flex justify-center items-center space-x-4 mb-4">
            {[
              { icon: Facebook, name: "Facebook" },
              { icon: Twitter, name: "Twitter" },
              { icon: Instagram, name: "Instagram" },
              { icon: Youtube, name: "YouTube" },
            ].map(({ icon: Icon, name }, idx) => (
              <Link
                key={idx}
                href="#"
                aria-label={name}
                className="p-2 text-[#E8FFD7] hover:text-white transition-colors bg-[#3E5F44]"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          <p className="text-[#E8FFD7] text-xs">
            &copy; {year} YourShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
