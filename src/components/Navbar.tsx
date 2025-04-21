
import { useState } from "react";
import { Logo } from "./navigation/Logo";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white py-3 px-4 sm:px-8 flex items-center justify-between shadow-sm relative">
      <Logo />
      <DesktopNav />

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
