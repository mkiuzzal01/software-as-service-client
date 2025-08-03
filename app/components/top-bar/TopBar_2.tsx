import { Truck, Headphones, Store, Contact } from "lucide-react";
import Link from "next/link";

export default function TopBar_2() {
  return (
    <div className="bg-[#E8FFD7] hidden lg:block">
      <div className="container mx-auto p-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Truck size={16} className="text-emerald-500" />
            <span>First delivery with your trusted partner</span>
          </div>
          <div className="flex items-center gap-1">
            <Headphones size={16} className="text-blue-500" />
            <span>24/7 You can buy product</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/track-order">
            <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer text-sm">
              <Truck size={16} />
              <span className="hover:text-blue-500">Track Order</span>
            </div>
          </Link>
          <Link href="/about">
            <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer text-sm">
              <Store size={16} />
              <span>About us</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer text-sm">
              <Contact size={16} />
              <span>Contact us</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
