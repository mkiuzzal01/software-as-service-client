import { Headphones, Home } from "lucide-react";

export const navigationItems = [
  { href: "/", label: "Home_1", icon: Home },
  {
    href: "/accessories",
    label: "Accessories",
    icon: Headphones,
    hasDropdown: true,
    dropdownItems: [
      { href: "/accessories/headphones", label: "Headphones" },
      { href: "/accessories/speakers", label: "Speakers" },
      { href: "/accessories/cables", label: "Cables & Adapters" },
      { href: "/accessories/cases", label: "Cases & Covers" },
      { href: "/accessories/chargers", label: "Chargers" },
    ],
  },
  { href: "/layout_1", label: "Home_2", icon: Home },
  { href: "/layout_2", label: "Home_3", icon: Home },
  { href: "/layout_3", label: "Home_4", icon: Home },
  { href: "/layout_4", label: "Home_5", icon: Home },
];

export const currencyOptions = [
  { code: "USD", label: "US Dollar" },
  { code: "EUR", label: "Euro" },
  { code: "GBP", label: "British Pound" },
  { code: "JPY", label: "Japanese Yen" },
];
