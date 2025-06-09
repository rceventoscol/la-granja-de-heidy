
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Logo } from "./navigation/Logo";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white py-3 px-4 sm:px-8 flex items-center justify-between shadow-sm relative">
      <Logo />
      
      <div className="hidden md:flex items-center space-x-4">
        <a 
          href="https://wa.me/573113925325?text=¡Hola! Me gustaría hacer un pedido de productos orgánicos frescos." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-organic-green hover:bg-organic-green/90 text-black font-montserrat font-semibold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <ShoppingCart className="h-4 w-4" />
          Pide aquí
        </a>
        <DesktopNav />
      </div>

      {/* Botón menú móvil */}
      <button
        className="md:hidden flex flex-col space-y-1 group z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menú"
      >
        <span className="bg-organic-green block w-7 h-1 rounded transition-transform"></span>
        <span className="bg-organic-green block w-7 h-1 rounded"></span>
        <span className="bg-organic-green block w-7 h-1 rounded"></span>
      </button>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
};

export default Navbar;
