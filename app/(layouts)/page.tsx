import React from "react";
import Navbar_1 from "../components/navbar/Navbar_1";
import { items } from "./components/items";
import Footer_1 from "../components/footers/Footer_1";
import { Card_1 } from "../components/cards/Card_1";

export default function page() {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar_1 />
      </header>
      <main>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product) => (
                <Card_1 key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer_1 />
      </footer>
    </div>
  );
}
