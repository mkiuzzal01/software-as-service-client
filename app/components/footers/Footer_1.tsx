"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  CreditCard,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

const footerSections = {
  customerService: {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "Track Your Order", href: "/track-order" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "Shipping Information", href: "/shipping" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  aboutUs: {
    title: "About TRONICS",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press Releases", href: "/press" },
      { label: "Corporate Responsibility", href: "/corporate" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Bulk Orders", href: "/bulk" },
    ],
  },
  categories: {
    title: "Product Categories",
    links: [
      { label: "Smartphones", href: "/smartphones" },
      { label: "Laptops & Computers", href: "/laptops" },
      { label: "Audio & Headphones", href: "/audio" },
      { label: "Gaming", href: "/gaming" },
      { label: "Smart Home", href: "/smart-home" },
      { label: "Accessories", href: "/accessories" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Warranty", href: "/warranty" },
      { label: "Security", href: "/security" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/tronics", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/tronics", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/tronics",
    label: "Instagram",
  },
  { icon: Youtube, href: "https://youtube.com/tronics", label: "YouTube" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/tronics",
    label: "LinkedIn",
  },
];

const paymentMethods = [
  "Visa",
  "Mastercard",
  "American Express",
  "PayPal",
  "Apple Pay",
  "Google Pay",
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "SSL encrypted checkout",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Expert customer service",
  },
];

export default function Footer_1() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 text-white"
                >
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-gray-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-green-100 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center mb-4">
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your trusted destination for cutting-edge electronics and
                  technology. We offer premium quality products with exceptional
                  customer service and competitive prices.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">1234 567 890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">info@tronics.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">
                    123 Electronics Street
                    <br />
                    Tech City, TC 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Mon - Fri: 9AM - 6PM</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white hover:text-yellow-300 transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to get special offers, new product announcements and
                deals
              </p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Payment */}
      <div className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-yellow-400 text-white hover:text-gray-800 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">We Accept:</span>
              <div className="flex items-center space-x-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded px-3 py-1 text-xs font-semibold text-gray-800"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              © {currentYear} TRONICS Online Store. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span>Designed with ❤️ for tech enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
