
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
import { CONOCENOS_SECCIONES } from "@/config/navigation";

export const DesktopNav = () => {
  const { isPathActive } = useNavActive();

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

          {/* 📝 Blog - Simple button that scrolls to blog section */}
          <NavigationMenuItem>
            <button
              onClick={scrollToBlog}
              className="h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none text-gray-700 hover:text-organic-green"
            >
              📝 Blog
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
