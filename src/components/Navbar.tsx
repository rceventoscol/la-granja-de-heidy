
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Leaf } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const storeCategories = [
  { name: "Vegetales", href: "/tienda/vegetales" },
  { name: "Frutas", href: "/tienda/frutas" },
  { name: "Hierbas", href: "/tienda/hierbas" },
  { name: "Huevos y Lácteos", href: "/tienda/huevos-lacteos" },
  { name: "Despensa y Abarrotes", href: "/tienda/despensa" },
  { name: "Carnes", href: "/tienda/carnes" },
  { name: "Abono Orgánico", href: "/tienda/abono-organico" },
];

const aboutUsLinks = [
  { name: "Nuestra Finca", href: "/conocenos/finca" },
  { name: "La Despensa", href: "/conocenos/despensa" },
  { name: "Nuestro Compromiso", href: "/conocenos/compromiso" },
  { name: "Cómo Hacer un Pedido", href: "/conocenos/pedido" },
  { name: "Entregas", href: "/conocenos/entregas" },
];

const blogLinks = [
  { name: "Recetas", href: "/blog/recetas" },
  { name: "Nuestra Finca", href: "/blog/finca" },
  { name: "Nuestros Productos", href: "/blog/productos" },
];

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-organic-green/20">
      <div className="container-organic py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-la-granja-de-heidy.png" alt="La Granja De Heidy" className="h-8 w-auto" />
            <span className="font-montserrat font-bold text-2xl">La Granja De Heidy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="font-montserrat text-foreground hover:text-organic-green transition-colors px-3 py-2">
                    Inicio
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-montserrat">Tienda</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 w-[500px]">
                      {storeCategories.map((category) => (
                        <NavigationMenuLink asChild key={category.name}>
                          <Link 
                            to={category.href}
                            className="block p-2 hover:bg-organic-beige/50 rounded"
                          >
                            {category.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-montserrat">Conócenos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col p-4 w-[250px]">
                      {aboutUsLinks.map((link) => (
                        <NavigationMenuLink asChild key={link.name}>
                          <Link 
                            to={link.href}
                            className="block p-2 hover:bg-organic-beige/50 rounded"
                          >
                            {link.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-montserrat">Blog</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col p-4 w-[250px]">
                      {blogLinks.map((link) => (
                        <NavigationMenuLink asChild key={link.name}>
                          <Link 
                            to={link.href}
                            className="block p-2 hover:bg-organic-beige/50 rounded"
                          >
                            {link.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-organic-green text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 py-6">
                  <Link to="/" className="font-montserrat text-lg font-semibold">
                    Inicio
                  </Link>
                  
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold mb-3">Tienda</h3>
                    <div className="grid gap-2 pl-3">
                      {storeCategories.map((category) => (
                        <Link 
                          key={category.name}
                          to={category.href}
                          className="text-muted-foreground hover:text-organic-green transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold mb-3">Conócenos</h3>
                    <div className="grid gap-2 pl-3">
                      {aboutUsLinks.map((link) => (
                        <Link 
                          key={link.name}
                          to={link.href}
                          className="text-muted-foreground hover:text-organic-green transition-colors"
                        >
                          {link.name}
                      </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold mb-3">Blog</h3>
                    <div className="grid gap-2 pl-3">
                      {blogLinks.map((link) => (
                        <Link 
                          key={link.name}
                          to={link.href}
                          className="text-muted-foreground hover:text-organic-green transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
