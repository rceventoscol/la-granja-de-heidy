
import { Link } from "react-router-dom";
import { CONOCENOS_SECCIONES, BLOG_SECCIONES, CATALOGO_URL } from "@/config/navigation";
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
          <div>
            <a
              href={CATALOGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-semibold text-organic-green flex items-center mb-4"
              onClick={onClose}
            >
              📄 Catálogo
            </a>
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
