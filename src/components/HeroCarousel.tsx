
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: "/lovable-uploads/a0c333f1-d2bd-4a9a-ad80-e1281bf5b1f5.png",
    title: "Del campo 100% Natural",
    description: "Productos frescos directamente desde nuestra tienda local, cultivados con amor y respeto.",
    cta: "Explorar tienda",
    link: "/tienda"
  },
  {
    image: "/lovable-uploads/97e369c4-ac63-4845-8fa8-aa5779a9c317.png",
    title: "Verduras frescas de temporada",
    description: "Pimientos verdes y otros vegetales cultivados con las mejores prácticas agrícolas.",
    cta: "Ver productos",
    link: "/tienda/vegetales"
  },
  {
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=2400",
    title: "Agricultura regenerativa",
    description: "Nuestro compromiso con prácticas sostenibles que restauran el suelo y el ecosistema.",
    cta: "Conoce más",
    link: "/conocenos/compromiso"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container-organic">
              <div className="max-w-lg text-white p-6">
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                  {slide.title}
                </h1>
                <p className="font-lora text-lg mb-8">
                  {slide.description}
                </p>
                <Link to={slide.link}>
                  <Button className="bg-organic-green text-black hover:bg-organic-green/90">
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-30 hover:bg-black/50 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-30 hover:bg-black/50 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
