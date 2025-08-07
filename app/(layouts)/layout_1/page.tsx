import Card_2 from "@/app/components/cards/Card_2";
import Footer_2 from "@/app/components/footers/Footer_2";
import Navbar_2 from "@/app/components/navbar/Navbar_2";
import { items } from "../components/items";

export default function page() {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar_2 />
      </header>
      <main>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product) => (
                <Card_2 key={product.id} item={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer_2 />
      </footer>
    </div>
  );
}
