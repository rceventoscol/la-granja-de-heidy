
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const RecetasVegetales = () => {
  const recetas = [
    {
      id: "crema-zanahoria",
      nombre: "Crema de Zanahoria con Jengibre",
      tiempo: "30 min",
      porciones: "4",
      dificultad: "Fácil",
      ingredientes: [
        "500g de zanahorias orgánicas",
        "1 cebolla blanca mediana",
        "2 dientes de ajo",
        "1 trozo de jengibre fresco (2cm)",
        "500ml de caldo de vegetales",
        "200ml de leche de coco",
        "Sal y pimienta al gusto",
        "Aceite de oliva extra virgen"
      ],
      preparacion: [
        "Pelar y picar las zanahorias en trozos medianos.",
        "Sofreír la cebolla y el ajo en aceite de oliva hasta que estén dorados.",
        "Agregar el jengibre rallado y cocinar por 1 minuto más.",
        "Añadir las zanahorias y el caldo, cocinar por 20 minutos hasta que estén tiernas.",
        "Licuar hasta obtener una consistencia cremosa.",
        "Incorporar la leche de coco, sazonar y servir caliente."
      ],
      imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&q=80&w=1400"
    },
    {
      id: "ensalada-broccoli",
      nombre: "Ensalada de Brócoli con Aguacate",
      tiempo: "15 min",
      porciones: "3",
      dificultad: "Muy Fácil",
      ingredientes: [
        "2 cabezas de brócoli orgánico",
        "1 aguacate Hass maduro",
        "1/4 taza de nueces picadas",
        "2 cucharadas de aceite de oliva",
        "1 limón (jugo)",
        "1 cucharada de miel orgánica",
        "Sal marina al gusto"
      ],
      preparacion: [
        "Cortar el brócoli en floretes pequeños y blanquear por 3 minutos.",
        "Enfriar inmediatamente en agua helada para mantener el color verde.",
        "Cortar el aguacate en cubos medianos.",
        "Mezclar aceite de oliva, jugo de limón y miel para hacer la vinagreta.",
        "Combinar brócoli, aguacate y nueces en un bowl.",
        "Aderezar con la vinagreta y servir inmediatamente."
      ],
      imagen: "https://images.unsplash.com/photo-1459156291710-d1fb4cf48612?auto=format&fit=crop&q=80&w=1400"
    },
    {
      id: "salteado-espinacas",
      nombre: "Salteado de Espinacas con Tomates Cherry",
      tiempo: "10 min",
      porciones: "2",
      dificultad: "Fácil",
      ingredientes: [
        "300g de espinacas frescas orgánicas",
        "200g de tomates cherry",
        "3 dientes de ajo",
        "2 cucharadas de aceite de oliva",
        "Queso feta orgánico (opcional)",
        "Sal y pimienta negra al gusto"
      ],
      preparacion: [
        "Lavar bien las espinacas y escurrir completamente.",
        "Calentar aceite de oliva en una sartén grande.",
        "Saltear el ajo laminado hasta que esté dorado.",
        "Agregar los tomates cherry y cocinar por 2 minutos.",
        "Incorporar las espinacas y saltear hasta que se marchiten.",
        "Sazonar y servir con queso feta desmenuzado por encima."
      ],
      imagen: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=1400"
    },
    {
      id: "pimientos-rellenos",
      nombre: "Pimentones Rellenos de Quinoa",
      tiempo: "45 min",
      porciones: "4",
      dificultad: "Intermedio",
      ingredientes: [
        "4 pimentones rojos grandes",
        "1 taza de quinoa orgánica",
        "1 cebolla morada picada",
        "2 tomates medianos picados",
        "100g de queso campesino",
        "Hierbas frescas (cilantro, perejil)",
        "Comino y pimentón dulce",
        "Aceite de oliva"
      ],
      preparacion: [
        "Precalentar el horno a 180°C.",
        "Cortar la parte superior de los pimentones y retirar semillas.",
        "Cocinar la quinoa según las instrucciones del paquete.",
        "Sofreír cebolla y tomate hasta que estén suaves.",
        "Mezclar quinoa cocida con el sofrito y hierbas.",
        "Rellenar los pimentones y hornear por 25 minutos.",
        "Agregar queso encima y hornear 5 minutos más."
      ],
      imagen: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=1400"
    },
    {
      id: "pure-ahuyama",
      nombre: "Puré de Ahuyama con Especias",
      tiempo: "35 min",
      porciones: "6",
      dificultad: "Fácil",
      ingredientes: [
        "1 ahuyama mediana (2kg aprox)",
        "2 cucharadas de mantequilla orgánica",
        "1/4 taza de leche orgánica",
        "1 cucharadita de canela en polvo",
        "1/2 cucharadita de nuez moscada",
        "Sal marina al gusto",
        "Miel orgánica (opcional)"
      ],
      preparacion: [
        "Precalentar el horno a 200°C.",
        "Cortar la ahuyama por la mitad y retirar las semillas.",
        "Hornear con la pulpa hacia abajo por 30 minutos hasta que esté tierna.",
        "Sacar la pulpa con una cuchara y hacer puré.",
        "Agregar mantequilla, leche y especias mientras esté caliente.",
        "Mezclar bien hasta obtener consistencia cremosa.",
        "Servir caliente como acompañamiento."
      ],
      imagen: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&q=80&w=1400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=2400')"
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container-organic h-full flex items-center">
            <div className="text-white max-w-2xl">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                5 Recetas con Vegetales de Temporada
              </h1>
              <p className="font-lora text-lg text-white/90">
                Descubre deliciosas recetas fáciles de preparar con los mejores vegetales orgánicos colombianos de temporada.
              </p>
            </div>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-16">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <p className="font-lora text-lg text-gray-600 mb-6">
                  En Colombia tenemos la fortuna de contar con una gran variedad de vegetales frescos durante todo el año. 
                  Estas 5 recetas aprovechan los sabores únicos de nuestros productos orgánicos de temporada, 
                  perfectos para crear comidas nutritivas y deliciosas.
                </p>
              </div>

              <Tabs defaultValue="crema-zanahoria" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  {recetas.map((receta) => (
                    <TabsTrigger key={receta.id} value={receta.id} className="text-xs">
                      Receta {recetas.indexOf(receta) + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {recetas.map((receta) => (
                  <TabsContent key={receta.id} value={receta.id}>
                    <Card className="overflow-hidden">
                      <div className="relative h-64 md:h-80">
                        <img 
                          src={receta.imagen} 
                          alt={receta.nombre}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-2">
                            {receta.nombre}
                          </h2>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {receta.tiempo}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {receta.porciones} porciones
                            </div>
                            <div className="flex items-center">
                              <ChefHat className="h-4 w-4 mr-1" />
                              {receta.dificultad}
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="font-montserrat font-semibold text-xl mb-4">Ingredientes</h3>
                            <ul className="space-y-2">
                              {receta.ingredientes.map((ingrediente, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-organic-green mr-2">•</span>
                                  <span className="font-lora">{ingrediente}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-montserrat font-semibold text-xl mb-4">Preparación</h3>
                            <ol className="space-y-3">
                              {receta.preparacion.map((paso, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="bg-organic-green text-black text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                    {index + 1}
                                  </span>
                                  <span className="font-lora text-gray-700">{paso}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              {/* Consejos */}
              <Card className="mt-12 bg-organic-beige/30">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl">Consejos para el Éxito</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-montserrat font-semibold mb-3">Selección de Vegetales</h4>
                      <ul className="space-y-2 font-lora text-gray-700">
                        <li>• Escoge vegetales firmes y de colores vibrantes</li>
                        <li>• Los productos orgánicos tienen mejor sabor y nutrición</li>
                        <li>• Compra productos de temporada para mejor frescura</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold mb-3">Preparación</h4>
                      <ul className="space-y-2 font-lora text-gray-700">
                        <li>• Lava bien todos los vegetales antes de usar</li>
                        <li>• Corta en tamaños uniformes para cocción pareja</li>
                        <li>• No sobre-cocines para mantener nutrientes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center mt-12">
                <h3 className="font-montserrat font-bold text-2xl mb-4">
                  ¿Te gustaron estas recetas?
                </h3>
                <p className="font-lora text-gray-600 mb-6">
                  Encuentra todos estos vegetales orgánicos frescos en nuestra tienda
                </p>
                <Link to="/tienda/vegetales">
                  <Button className="bg-organic-green text-black hover:bg-organic-green/80">
                    Ver vegetales orgánicos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RecetasVegetales;
