import Footer_3 from "@/app/components/footers/Footer_3";
import Navbar_3 from "@/app/components/navbar/Navbar_3";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar_3 />
      </header>
      <main className="flex-grow"></main>
      <footer>
        <Footer_3 />
      </footer>
    </div>
  );
}
