import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-organic-beige">
      <div className="container-organic py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-organic-green" />
              <span className="font-montserrat font-bold text-xl">EcoFresh</span>
            </Link>
            <p className="text-sm text-gray-600">
              Ofrecemos productos orgánicos frescos de nuestra finca a tu mesa, 
              promoviendo la agricultura regenerativa y sostenible.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/lagranjadeheidy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-organic-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-organic-green transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link to="/conocenos" className="text-gray-600 hover:text-organic-green transition-colors">
                  Conócenos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-organic-green transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">La Granja de Heidy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tienda/vegetales" className="text-gray-600 hover:text-organic-green transition-colors">Cra. 38 #48-45</Link>
              </li>
              <li>
                <Link to="/tienda/frutas-tropicales" className="text-gray-600 hover:text-organic-green transition-colors">Cabecera del llano</Link>
              </li>
              <li>
                <Link to="/tienda/huevos-lacteos" className="text-gray-600 hover:text-organic-green transition-colors">Bucaramanga</Link>
              </li>
              <li>
                <Link to="/tienda/cajas-suscripciones" className="text-gray-600 hover:text-organic-green transition-colors">Santander</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-organic-green mt-0.5" />
                <span className="text-gray-600">+573113925325</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-organic-green mt-0.5" />
                <span className="text-gray-600">info@ecofresh.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <a href="https://wa.me/573113925325" target="_blank" rel="noopener noreferrer" className="inline-block bg-organic-green text-black px-4 py-2 rounded-md hover:bg-organic-green/80 transition-colors font-montserrat">
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} EcoFresh. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;