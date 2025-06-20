import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, Award, TrendingUp, Truck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

// Datos de ejemplo para productos destacados
const featuredProducts = [{
  id: "1",
  name: "Zanahorias orgánicas",
  price: 3.99,
  image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=1400",
  category: "Raíces y Tubérculos",
  isNew: true
}, {
  id: "2",
  name: "Lechugas frescas",
  price: 2.49,
  image: "https://images.unsplash.com/photo-1622206151242-c23286977150?auto=format&fit=crop&q=80&w=1400",
  category: "Hojas y Lechugas",
  isOrganic: true
}, {
  id: "3",
  name: "Naranjas de montaña",
  price: 4.99,
  image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=1400",
  category: "Frutas de Montaña",
  isNew: true
}, {
  id: "4",
  name: "Aguacate Hass",
  price: 5.99,
  image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=1400",
  category: "Vegetales de Fruto",
  isOrganic: true
}];

// Datos de ejemplo para blog posts
const blogPosts = [{
  id: "1",
  title: "5 recetas con vegetales de temporada",
  excerpt: "Aprovecha al máximo los vegetales frescos con estas deliciosas recetas fáciles de preparar.",
  image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1400",
  date: "15 de abril, 2025",
  category: "Recetas"
}, {
  id: "2",
  title: "Beneficios de los alimentos orgánicos",
  excerpt: "Descubre por qué los alimentos orgánicos son mejores para tu salud y para el medio ambiente.",
  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1400",
  date: "2 de abril, 2025",
  category: "Salud"
}, {
  id: "3",
  title: "Un día en nuestra finca",
  excerpt: "Te mostramos cómo es el día a día en nuestra finca y cómo cuidamos cada detalle de nuestros cultivos.",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1400",
  date: "28 de marzo, 2025",
  category: "Nuestra Finca"
}];
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Call to Action Button */}
        <section className="py-8 bg-white">
          <div className="container-organic">
            <div className="text-center">
              <a 
                href="https://wa.me/573113925325?text=¡Hola! Me gustaría hacer un pedido de productos orgánicos frescos." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-organic-green hover:bg-organic-green/90 text-black font-montserrat font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="h-6 w-6" />
                Pide aquí - WhatsApp
              </a>
              <p className="text-gray-600 mt-3 font-lora">
                Productos frescos directo del campo a tu mesa
              </p>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-organic-beige/30">
          <div className="container-organic">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl mb-4">¿Por qué elegirnos?</h2>
              <p className="font-lora text-gray-600 max-w-2xl mx-auto">
                Nuestros productos son cultivados siguiendo prácticas sostenibles y regenerativas,
                respetando los ciclos naturales y cuidando el medio ambiente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-organic-green h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">100% Orgánico</h3>
                <p className="text-gray-600">
                  Productos cultivados sin pesticidas ni químicos dañinos.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-organic-green h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">Alta Calidad</h3>
                <p className="text-gray-600">
                  Seleccionamos cada producto para garantizar la mejor calidad.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-organic-green h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">Sostenible</h3>
                <p className="text-gray-600">
                  Agricultura regenerativa que mejora la salud del suelo.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-organic-green h-8 w-8" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">Entrega Local</h3>
                <p className="text-gray-600">
                  Del campo a tu mesa en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Banner */}
        <section className="py-24 bg-organic-green/10 relative overflow-hidden">
          <div className="container-organic relative z-10">
            
          </div>
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=2400" alt="Vegetales orgánicos" className="object-cover w-full h-full" />
          </div>
        </section>
        
        {/* Blog Preview - Added ID for scroll targeting */}
        <section id="blog" className="py-16">
          <div className="container-organic">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-montserrat font-bold text-3xl">Blog</h2>
              <Link to="/blog">
                <Button variant="outline" className="border-organic-green text-organic-green hover:bg-organic-green hover:text-white">
                  Ver todos
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="/blog/recetas-vegetales" target="_blank" rel="noopener noreferrer" className="group">
                <div className="card-organic h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1400" alt="5 recetas con vegetales de temporada" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-organic-green text-black text-xs px-2 py-1 rounded font-montserrat">
                        Recetas
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-gray-500 mb-2">15 de abril, 2025</span>
                    <h3 className="font-montserrat font-semibold text-xl mb-3 group-hover:text-organic-green transition-colors">
                      5 recetas con vegetales de temporada
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">Aprovecha al máximo los vegetales frescos con estas deliciosas recetas fáciles de preparar.</p>
                    <span className="font-montserrat text-organic-green font-medium inline-flex items-center group-hover:underline">
                      Leer más
                    </span>
                  </div>
                </div>
              </a>

              <a href="/blog/beneficios-organicos" target="_blank" rel="noopener noreferrer" className="group">
                <div className="card-organic h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1400" alt="Beneficios de los alimentos orgánicos" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-organic-green text-black text-xs px-2 py-1 rounded font-montserrat">
                        Salud
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-gray-500 mb-2">2 de abril, 2025</span>
                    <h3 className="font-montserrat font-semibold text-xl mb-3 group-hover:text-organic-green transition-colors">
                      Beneficios de los alimentos orgánicos
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">Descubre por qué los alimentos orgánicos son mejores para tu salud y para el medio ambiente.</p>
                    <span className="font-montserrat text-organic-green font-medium inline-flex items-center group-hover:underline">
                      Leer más
                    </span>
                  </div>
                </div>
              </a>

              <a href="/blog/dia-en-la-finca" target="_blank" rel="noopener noreferrer" className="group">
                <div className="card-organic h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1400" alt="Un día en nuestra finca" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-organic-green text-black text-xs px-2 py-1 rounded font-montserrat">
                        Nuestra Finca
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-gray-500 mb-2">28 de marzo, 2025</span>
                    <h3 className="font-montserrat font-semibold text-xl mb-3 group-hover:text-organic-green transition-colors">
                      Un día en nuestra finca
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">Te mostramos cómo es el día a día en nuestra finca y cómo cuidamos cada detalle de nuestros cultivos.</p>
                    <span className="font-montserrat text-organic-green font-medium inline-flex items-center group-hover:underline">
                      Leer más
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-organic-brown/10">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
                Conoce nuestra finca
              </h2>
              <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
                Te invitamos a conocer más sobre nuestros métodos de cultivo, nuestro compromiso con el
                medio ambiente y cómo llevamos la sostenibilidad a cada rincón de nuestra finca.
              </p>
              <Link to="/conocenos/nuestra-finca">
                <Button className="bg-organic-green text-black hover:bg-organic-green/80">
                  Visitar nuestra finca
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default Index;
