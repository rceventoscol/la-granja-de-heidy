
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CONOCENOS_SECCIONES, BLOG_SECCIONES } from "@/config/navigation";
import { useNavActive } from "@/hooks/use-nav-active";
import { Logo } from "./Logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { isPathActive } = useNavActive();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div
        className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300 translate-x-0"
      >
        <Logo onClick={onClose} />

        <div className="flex flex-col space-y-6 mt-8">
          {/* Botón Pide aquí para móvil */}
          <a 
            href="https://wa.me/573113925325?text=¡Hola! Me gustaría hacer un pedido de productos orgánicos frescos." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-organic-green hover:bg-organic-green/90 text-black font-montserrat font-semibold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={onClose}
          >
            <ShoppingCart className="h-4 w-4" />
            Pide aquí
          </a>

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
                  onClick={onClose}
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
                onClick={onClose}
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
                  onClick={onClose}
                >
                  {sec.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
