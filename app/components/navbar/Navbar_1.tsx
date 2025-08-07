"use client";
import React, { useState } from "react";
import { Menu, X, Phone, ShoppingCart, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { currencyOptions, navigationItems } from "./utils/navbar_1_data";
import { Button } from "@/components/ui/button";

export default function Navbar_1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit = () => {
    console.log("Search query:", searchQuery);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <div className={`w-full`}>
      {/* Top Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 text-sm border-b border-green-500/30">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>Select Currency:</span>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-yellow-300 focus:outline-none">
                    <span className="font-semibold">{selectedCurrency}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                    {currencyOptions.map((currency) => (
                      <DropdownMenuItem
                        key={currency.code}
                        onClick={() => setSelectedCurrency(currency.code)}
                        className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                      >
                        <span className="font-medium">{currency.code}</span>
                        <span className="ml-2 text-gray-600">
                          {currency.label}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300">
                <span>Compare</span>
                <div className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </div>
              </div>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Gift Certificates
              </a>
            </div>
            <div className="hidden md:block">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Login or Register
              </a>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-3xl font-bold tracking-tight">
                  <span className="text-white">TR</span>
                  <span className="relative">
                    <span className="text-white">O</span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                  </span>
                  <span className="text-white">NICS</span>
                </div>
                <div className="ml-2 bg-yellow-400 text-green-800 px-2 py-1 text-xs font-bold rounded">
                  ONLINE STORE
                </div>
              </div>
            </div>

            {/* Contact & Search */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">CALL : 1234 567 890</span>
              </div>

              {/* Search Bar */}
              <div className="flex max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search the store"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 ring-1 ring-amber-300
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                />
                <Button
                  onClick={handleSearchSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 rounded-none text-green-800"
                >
                  SEARCH
                </Button>
              </div>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <div className="flex items-center space-x-2 bg-white text-green-700 md:p-2 cursor-pointer rounded hover:bg-gray-100 transition-colors">
                <ShoppingCart />
                <span className="font-semibold">{cartItems} ITEMS</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={handleMobileMenuToggle}
                  className="text-white hover:text-yellow-300 p-2"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-green-500/30 bg-green-600 pb-4">
              <div className="py-4 space-y-4">
                {/* Mobile Search */}
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search the store"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 ring-1 ring-amber-300
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                  <button
                    onClick={handleSearchSubmit}
                    className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-4 py-2 font-bold"
                  >
                    SEARCH
                  </button>
                </div>

                {/* Mobile Contact */}
                <div className="flex items-center space-x-2 text-white px-4">
                  <Phone className="w-5 h-5" />
                  <span>CALL : 1234 567 890</span>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.href}>
                        {item.hasDropdown && item.dropdownItems ? (
                          <div>
                            <button
                              onClick={() => toggleMobileDropdown(item.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-green-500 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <IconComponent className="w-5 h-5" />
                                <span>{item.label}</span>
                              </div>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  mobileDropdownOpen === item.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            {mobileDropdownOpen === item.label && (
                              <div className="bg-green-500/30 ml-8 space-y-1">
                                {item.dropdownItems.map((dropdownItem) => (
                                  <a
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    className="block px-4 py-2 text-white hover:bg-green-400/50 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-green-500 transition-colors"
                          >
                            <IconComponent className="w-5 h-5" />
                            <span>{item.label}</span>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Yellow Navigation Bar */}
      <nav className="relative shadow-lg">
        {/* Background layer */}
        <div className="bg-green-800 h-16"></div>

        {/* Main Navigation Bar with Angled Corners */}
        <div
          className="absolute inset-0  bg-yellow-400 mx-4"
          style={{
            clipPath:
              "polygon(30px 0%, calc(100% - 30px) 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Navigation Content */}
          <div className="container mx-auto px-8 h-full">
            <div className="hidden md:flex items-center justify-center h-full">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;

                if (item.hasDropdown && item.dropdownItems) {
                  return (
                    <DropdownMenu key={item.href}>
                      <DropdownMenuTrigger className="group flex items-center space-x-2 px-6 py-4 text-gray-800 font-semibold hover:bg-yellow-300/50 transition-all duration-300 relative focus:outline-none">
                        <IconComponent className="w-5 h-5 text-gray-700 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-300" />
                        <span className="group-hover:text-gray-900">
                          {item.label}
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-yellow-300/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100 -z-10"></div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-48">
                        {item.dropdownItems.map((dropdownItem) => (
                          <DropdownMenuItem
                            key={dropdownItem.href}
                            className="cursor-pointer hover:bg-gray-100"
                          >
                            <a
                              href={dropdownItem.href}
                              className="w-full px-3 py-2 text-gray-700 hover:text-gray-900"
                            >
                              {dropdownItem.label}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center space-x-2 px-6 py-4 text-gray-800 font-semibold hover:bg-yellow-300/50 transition-all duration-300 relative"
                  >
                    <IconComponent className="w-5 h-5 text-gray-700 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-300" />
                    <span className="group-hover:text-gray-900">
                      {item.label}
                    </span>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-yellow-300/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100 -z-10"></div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
