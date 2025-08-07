import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const socialIcons = [
  {
    icon: <Facebook className="w-4 h-4" />,
    link: "https://www.facebook.com",
  },
  {
    icon: <Instagram className="w-4 h-4" />,
    link: "https://www.instagram.com",
  },
  {
    icon: <Youtube className="w-4 h-4" />,
    link: "https://www.youtube.com",
  },
];

const address = [
  {
    icon: <Map className="w-4 h-4" />,
    text: "25/B Milford Road, New York",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    text: "info@example.com",
  },
  {
    icon: <Phone className="w-4 h-4" />,
    text: "+2 123 654 7898",
  },
];

export default function TopBar_3() {
  return (
    <div className="text-sm text-white bg-[#3C6255] relative">
      <div className="flex justify-end container mx-auto">
        {/* Right Part – Address Info */}
        <div className="w-3/4 px-4 py-2 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link href={"www.linkedin.com"}>
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

      <div className="bg-[#A6BB8D] absolute  left-0 top-0 w-1/4 px-4 py-2 flex items-center justify-end gap-3">
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
    </div>
  );
}
