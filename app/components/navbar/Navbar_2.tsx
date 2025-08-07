"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Home as HomeIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import logo from "../../../public/assets/logo/logo1.png";
import { cn } from "@/lib/utils";
import { megaMenuData } from "./utils/navbar_2_data";
import TopBar_2 from "../top-bar/TopBar_2";

export default function Navbar_2() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosingMenu, setIsClosingMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<number | false>(
    false
  );

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 100);
  };

  const handleOpenMobileMenu = () => {
    setIsClosingMenu(false);
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMobileMenu = () => {
    setIsClosingMenu(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosingMenu(false);
      document.body.style.overflow = "auto";
    }, 400);
  };

  useEffect(() => {
    setIsMounted(true);
    setIsScrolled(window.scrollY > 0);
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative">
      <header
        className={cn(
          "sticky top-0 z-50",
          "bg-[#93DA97]",
          "transition-shadow duration-300 ease-in-out",
          isMounted && isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        {/* TopBar would be another component you'd need to convert */}
        <TopBar_2 />

        <div
          className={cn(
            "transition-all duration-300 ease-in-out",
            isMounted && isScrolled ? "py-2" : "py-4"
          )}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div
              onClick={() => setActiveMenu(null)}
              className="w-20 h-12 flex items-center"
            >
              <Link href="/">
                {/* <Image
                  src={logo}
                  alt="Company Logo"
                  width={isMounted && isScrolled ? 60 : 80}
                  height={isMounted && isScrolled ? 40 : 50}
                  className="transition-all duration-300 ease-in-out object-contain"
                  priority
                /> */}
                <h1>Logo</h1>
              </Link>
            </div>

            <nav className="hidden lg:flex gap-4 items-center">
              <div>
                <Link href="/">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <HomeIcon className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              {megaMenuData.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveMenu(null)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <Link href={item.link}>
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 font-medium",
                        "transition-colors duration-200",
                        "hover:text-orange-500 hover:bg-transparent"
                      )}
                    >
                      {item.MainCategoryName}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200 ml-1",
                          activeMenu === idx ? "rotate-180" : "rotate-0"
                        )}
                      />
                    </button>
                  </Link>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <User size={20} />
                </button>
              </Link>

              <Link href="/wishlist">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <Heart size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
              </Link>

              <Link href="/cart">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </Link>

              <button
                onClick={handleOpenMobileMenu}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {activeMenu !== null && (
          <nav
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "absolute top-full left-0 w-screen bg-white shadow-lg z-40 border-t border-gray-200",
              "hidden lg:block"
            )}
          >
            <div className="container mx-auto px-4 py-6 max-w-7xl flex gap-4">
              <div className="w-3/4 flex flex-wrap">
                {megaMenuData[activeMenu].Category.map((cat, i) => (
                  <div
                    onClick={() => setActiveMenu(null)}
                    key={i}
                    className={cn("w-full sm:w-1/2 md:w-1/3 pr-2 mb-4")}
                  >
                    <Link href={cat.link}>
                      <h3
                        className={cn(
                          "text-orange-500 font-semibold mb-3",
                          "hover:text-orange-600 inline-block cursor-pointer"
                        )}
                      >
                        {cat.categoryName}
                      </h3>
                    </Link>
                    <ul className="pl-2 mt-0 list-none">
                      {cat.subCategory.map((sub, j) => (
                        <li
                          onClick={() => setActiveMenu(null)}
                          key={j}
                          className="mb-1"
                        >
                          <Link href={sub.link}>
                            <span className="hover:text-orange-500 inline-block cursor-pointer">
                              {sub.subCategoryName}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="w-1/4">
                {megaMenuData[activeMenu]?.featured && (
                  <div
                    className={cn(
                      "rounded-lg p-4 text-center border border-gray-200",
                      "bg-gradient-to-r from-slate-50 to-slate-100"
                    )}
                  >
                    <div className="w-3/5 mx-auto">
                      <div className="relative aspect-[3/4] w-full mb-2">
                        {/* Featured image would go here */}
                        <div className="absolute inset-0 bg-gray-200"></div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      {megaMenuData[activeMenu].featured.title}
                    </h4>
                    <p className="text-gray-600 mb-4 max-w-[280px] mx-auto text-sm">
                      {megaMenuData[activeMenu].featured.description}
                    </p>
                    <div onClick={() => setActiveMenu(null)}>
                      <Link href={megaMenuData[activeMenu].featured.buttonLink}>
                        <button
                          className={cn(
                            "bg-green-500 hover:bg-green-600 text-white",
                            "px-4 py-2 rounded-md transition-colors duration-200"
                          )}
                        >
                          {megaMenuData[activeMenu].featured.buttonText}
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        )}
      </header>

      {(isMobileMenuOpen || isClosingMenu) && (
        <>
          <div
            onClick={handleCloseMobileMenu}
            className={cn(
              "fixed inset-0 bg-black bg-opacity-50 z-40",
              "transition-opacity duration-300 ease-in-out",
              isClosingMenu ? "opacity-0" : "opacity-100"
            )}
          />

          <div
            className={cn(
              "fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-2xl p-4",
              "overflow-y-auto flex flex-col",
              "transition-transform duration-400 ease-in-out",
              isClosingMenu ? "translate-x-full" : "translate-x-0"
            )}
          >
            <div className="flex justify-between items-center mb-4">
              {/* <Image src={logo} alt="Logo" width={60} height={40} /> */}
              <h1>Logo</h1>
              <button
                onClick={handleCloseMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="border-t border-gray-200 my-2"></div>

            <div className="mt-4">
              {megaMenuData.map((mainCat, idx) => (
                <div key={idx} className="mb-2 border-b border-gray-100">
                  <button
                    onClick={() =>
                      setExpandedAccordion((prev) =>
                        prev === idx ? false : idx
                      )
                    }
                    className="w-full flex justify-between items-center p-2 hover:bg-gray-50"
                  >
                    <Link href={mainCat.link} onClick={handleCloseMobileMenu}>
                      <span className="font-medium">
                        {mainCat.MainCategoryName}
                      </span>
                    </Link>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        expandedAccordion === idx ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>

                  {expandedAccordion === idx && (
                    <div className="pl-4 py-2">
                      {mainCat.Category?.map((cat, i) => (
                        <div key={i} className="mb-4">
                          <Link href={cat.link} onClick={handleCloseMobileMenu}>
                            <h4 className="font-semibold text-sm mb-2">
                              {cat.categoryName}
                            </h4>
                          </Link>
                          <ul className="pl-2 mt-0 list-none">
                            {cat.subCategory?.map((sub, j) => (
                              <li key={j} className="mb-1">
                                <Link
                                  href={sub.link}
                                  onClick={handleCloseMobileMenu}
                                >
                                  <span className="text-sm hover:text-orange-500">
                                    {sub.subCategoryName}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
