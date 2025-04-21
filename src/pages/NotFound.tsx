
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-organic text-center">
          <div className="mb-6">
            <Leaf className="h-16 w-16 text-organic-green mx-auto" />
          </div>
          
          <h1 className="font-montserrat font-bold text-6xl mb-4">404</h1>
          <h2 className="font-montserrat font-semibold text-2xl mb-6">Página no encontrada</h2>
          
          <p className="font-lora text-gray-600 max-w-md mx-auto mb-8">
            Lo sentimos, la página que estás buscando parece haber sido cosechada. 
            ¡Por qué no vuelves a nuestra tienda y exploras nuestros productos frescos?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-organic-green text-black hover:bg-organic-green/80">
                Volver al inicio
              </Button>
            </Link>
            
            <Link to="/tienda">
              <Button variant="outline" className="border-organic-green text-organic-green hover:bg-organic-green hover:text-white">
                Explorar tienda
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
