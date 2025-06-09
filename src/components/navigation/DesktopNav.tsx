
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavActive } from "@/hooks/use-nav-active";
import { CONOCENOS_SECCIONES, BLOG_SECCIONES } from "@/config/navigation";

export const DesktopNav = () => {
  const { isPathActive } = useNavActive();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
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
  );
};
