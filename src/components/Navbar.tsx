
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const TIENDA_CATEGORIAS = [
  { name: "Vegetales", path: "/tienda/vegetales" },
  { name: "Frutas", path: "/tienda/frutas" },
  { name: "Hierbas", path: "/tienda/hierbas" },
  { name: "Huevos y Lácteos", path: "/tienda/huevos-y-lacteos" },
  { name: "Despensa y Abarrotes", path: "/tienda/despensa-y-abarrotes" },
  { name: "Bebidas", path: "/tienda/bebidas" },
];

const CONOCENOS_SECCIONES = [
  { name: "Nuestra Finca", path: "/conocenos/nuestra-finca" },
  { name: "Nuestro Compromiso", path: "/conocenos/nuestro-compromiso" },
  { name: "Cómo Hacer un Pedido", path: "/conocenos/como-hacer-un-pedido" },
];

const BLOG_SECCIONES = [
  { name: "Recetas", path: "/blog/recetas" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Para saber si un grupo de paths (por módulo) está activo
  const isPathActive = (paths: string[]) => {
    return paths.some((p) => location.pathname.startsWith(p));
  };

  return (
    <nav className="w-full border-b bg-white py-3 px-4 sm:px-8 flex items-center justify-between shadow-sm relative">
      {/* Logo y nombre */}
      <Link to="/" className="flex items-center space-x-2 z-50">
        <img
          // Actualizamos la ruta del logo a la imagen subida
          src="/lovable-uploads/7ef70d47-84b6-4535-8d05-2d6d174e8616.png"
          alt="La Granja De Heidy"
          className="h-9 w-auto"
        />
        <span className="font-montserrat font-bold text-2xl text-organic-green">
          La Granja De Heidy
        </span>
      </Link>

      {/* Menú de navegación para desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            {/* 🛒 Tienda */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  isPathActive(TIENDA_CATEGORIAS.map(c => c.path))
                    ? "text-organic-green font-semibold"
                    : "text-gray-700"
                }
              >
                🛒 Tienda
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 bg-white shadow-md rounded-md min-w-[180px]">
                <div className="flex flex-col space-y-1">
                  {TIENDA_CATEGORIAS.map((cat) => (
                    <NavigationMenuLink
                      asChild
                      key={cat.name}
                    >
                      <Link
                        to={cat.path}
                        className={`block px-3 py-2 rounded transition-colors font-montserrat hover:bg-organic-green/10 ${
                          location.pathname.startsWith(cat.path)
                            ? "text-organic-green font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {cat.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* 🌿 Conócenos */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  isPathActive(CONOCENOS_SECCIONES.map(c => c.path))
                    ? "text-organic-green font-semibold"
                    : "text-gray-700"
                }
              >
                🌿 Conócenos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 bg-white shadow-md rounded-md min-w-[220px]">
                <div className="flex flex-col space-y-1">
                  {CONOCENOS_SECCIONES.map((sec) => (
                    <NavigationMenuLink
                      asChild
                      key={sec.name}
                    >
                      <Link
                        to={sec.path}
                        className={`block px-3 py-2 rounded transition-colors font-montserrat hover:bg-organic-green/10 ${
                          location.pathname.startsWith(sec.path)
                            ? "text-organic-green font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {sec.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* 📝 Blog */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  isPathActive(["/blog", ...BLOG_SECCIONES.map(c => c.path)])
                    ? "text-organic-green font-semibold"
                    : "text-gray-700"
                }
              >
                📝 Blog
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 bg-white shadow-md rounded-md min-w-[170px]">
                <div className="flex flex-col space-y-1">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog"
                      className={`block px-3 py-2 rounded transition-colors font-montserrat hover:bg-organic-green/10 ${
                        location.pathname.startsWith("/blog") &&
                        location.pathname === "/blog"
                          ? "text-organic-green font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Todas las entradas
                    </Link>
                  </NavigationMenuLink>
                  {BLOG_SECCIONES.map((sec) => (
                    <NavigationMenuLink asChild key={sec.name}>
                      <Link
                        to={sec.path}
                        className={`block px-3 py-2 rounded transition-colors font-montserrat hover:bg-organic-green/10 ${
                          location.pathname.startsWith(sec.path)
                            ? "text-organic-green font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {sec.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setMobileOpen(false)}>
          {/* Fondo negro para cerrar el menú al clickear fuera */}
        </div>
      )}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo en menú móvil */}
        <Link to="/" className="flex items-center space-x-2 mb-8" onClick={() => setMobileOpen(false)}>
          <img
            // Actualizamos la ruta del logo a la imagen subida
            src="/lovable-uploads/7ef70d47-84b6-4535-8d05-2d6d174e8616.png"
            alt="La Granja De Heidy"
            className="h-9 w-auto"
          />
          <span className="font-montserrat font-bold text-2xl text-organic-green">
            La Granja De Heidy
          </span>
        </Link>
        {/* Módulos y subcategorías mobile */}
        <div className="flex flex-col space-y-6">
          <div>
            <span className="font-montserrat font-semibold text-organic-green flex items-center mb-1">
              🛒 Tienda
            </span>
            <div className="flex flex-col pl-2">
              {TIENDA_CATEGORIAS.map((cat) => (
                <Link
                  to={cat.path}
                  key={cat.name}
                  className={`py-2 block font-montserrat text-base ${
                    location.pathname.startsWith(cat.path)
                      ? "text-organic-green font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="font-montserrat font-semibold text-organic-green flex items-center mb-1">
              🌿 Conócenos
            </span>
            <div className="flex flex-col pl-2">
              {CONOCENOS_SECCIONES.map((sec) => (
                <Link
                  to={sec.path}
                  key={sec.name}
                  className={`py-2 block font-montserrat text-base ${
                    location.pathname.startsWith(sec.path)
                      ? "text-organic-green font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {sec.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="font-montserrat font-semibold text-organic-green flex items-center mb-1">
              📝 Blog
            </span>
            <div className="flex flex-col pl-2">
              <Link
                to="/blog"
                className={`py-2 block font-montserrat text-base ${
                  location.pathname.startsWith("/blog") && location.pathname === "/blog"
                    ? "text-organic-green font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Todas las entradas
              </Link>
              {BLOG_SECCIONES.map((sec) => (
                <Link
                  to={sec.path}
                  key={sec.name}
                  className={`py-2 block font-montserrat text-base ${
                    location.pathname.startsWith(sec.path)
                      ? "text-organic-green font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {sec.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

