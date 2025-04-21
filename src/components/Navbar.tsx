
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const CATEGORIES = [
  { name: "Vegetales", path: "/tienda/vegetales" },
  { name: "Frutas", path: "/tienda/frutas" },
  { name: "Hierbas", path: "/tienda/hierbas" },
  { name: "Huevos y lácteos", path: "/tienda/huevos-y-lacteos" },
  { name: "Despensa y abarrotes", path: "/tienda/despensa-y-abarrotes" },
  { name: "Carnes", path: "/tienda/carnes" },
  { name: "Abono orgánico", path: "/tienda/abono-organico" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full border-b bg-white py-3 px-4 sm:px-8 flex items-center justify-between shadow-sm">
      {/* Logo y nombre */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo-la-granja-de-heidy.png"
          alt="La Granja De Heidy"
          className="h-9 w-auto"
        />
        <span className="font-montserrat font-bold text-2xl text-organic-green">
          La Granja De Heidy
        </span>
      </Link>

      {/* Categorías de navegación (desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        {CATEGORIES.map((cat) => (
          <NavLink
            to={cat.path}
            key={cat.name}
            className={({ isActive }) =>
              `font-montserrat text-base transition-colors duration-200 hover:text-organic-green ${
                isActive ||
                location.pathname.toLowerCase().includes(cat.path.replace("/tienda/", ""))
                  ? "text-organic-green font-semibold"
                  : "text-gray-700"
              }`
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>

      {/* Botón menú móvil */}
      <button
        className="md:hidden flex flex-col space-y-1 group"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menú"
      >
        <span className="bg-organic-green block w-7 h-1 rounded transition-transform"></span>
        <span className="bg-organic-green block w-7 h-1 rounded"></span>
        <span className="bg-organic-green block w-7 h-1 rounded"></span>
      </button>
      {/* Menú móvil */}
      {mobileOpen && (
        <div className="absolute left-0 top-16 w-full bg-white shadow-md z-50 flex flex-col px-6 py-4 space-y-2">
          {CATEGORIES.map((cat) => (
            <NavLink
              to={cat.path}
              key={cat.name}
              className={({ isActive }) =>
                `py-2 block font-montserrat text-base ${
                  isActive ||
                  location.pathname.toLowerCase().includes(cat.path.replace("/tienda/", ""))
                    ? "text-organic-green font-semibold"
                    : "text-gray-700"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
