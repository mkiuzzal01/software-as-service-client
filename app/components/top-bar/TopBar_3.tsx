import { Facebook, Instagram, Linkedin, Mail, Map, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';

const socialIcons = [
  {
    icon: <Facebook className="w-4 h-4" />,
    link: 'https://www.facebook.com',
  },
  {
    icon: <Instagram className="w-4 h-4" />,
    link: 'https://www.instagram.com',
  },
  {
    icon: <Youtube className="w-4 h-4" />,
    link: 'https://www.youtube.com',
  },
];

const address = [
  {
    icon: <Map className="w-4 h-4" />,
    text: '25/B Milford Road, New York',
  },
  {
    icon: <Mail className="w-4 h-4" />,
    text: 'info@example.com',
  },
  {
    icon: <Phone className="w-4 h-4" />,
    text: '+2 123 654 7898',
  },
];

export default function TopBar_3() {
  return (
    <div className="text-xs sm:text-sm text-white bg-[#3C6255] relative">
      {/* Desktop Layout (UNCHANGED) */}
      <div className="hidden md:flex justify-end container mx-auto">
        <div className="w-4/5 py-2 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link href="https://www.linkedin.com" target="_blank">
              <button className="bg-[#A6BB8D] p-2 rounded-full">
                <Linkedin className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-6">
            {address.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex bg-[#A6BB8D] absolute left-0 top-0 w-1/4 px-4 py-2 items-center justify-end gap-3">
        <span className="font-medium">Follow Us:</span>
        <div className="flex gap-2">
          {socialIcons.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#3C6255] hover:bg-white/40 rounded-full transition"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile / Tablet Layout */}
      <div className="md:hidden px-4 py-2 flex flex-col gap-2">
        {/* Row 1: Contact Quick Info */}
        <div className="flex items-center justify-between text-[11px]">
          {/* Phone */}
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>+2 123 654 7898</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <span className="hidden xs:inline">info@example.com</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Row 2: Social + Location */}
        <div className="flex items-center justify-between">
          {/* Location (short) */}
          <div className="flex items-center gap-1 text-[11px]">
            <Map className="w-3 h-3" />
            <span className="truncate max-w-[140px]">25/B Milford Road</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="p-1.5 bg-[#A6BB8D] rounded-full hover:bg-white/30 transition"
              >
                {item.icon}
              </Link>
            ))}

            <Link href="https://www.linkedin.com" target="_blank">
              <span className="p-1.5 bg-[#A6BB8D] rounded-full hover:bg-white/30 transition">
                <Linkedin className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
