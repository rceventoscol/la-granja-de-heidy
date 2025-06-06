
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecetasVegetales = () => {
  const recetas = [
    {
      titulo: "Ensalada Fresca de Zanahoria con Cilantro",
      tiempo: "15 min",
      porciones: "4 personas",
      ingredientes: [
        "4 zanahorias orgánicas grandes, ralladas",
        "1 taza de cilantro fresco picado",
        "2 cucharadas de aceite de oliva",
        "1 limón (jugo)",
        "1 cucharadita de miel de abeja",
        "Sal y pimienta al gusto"
      ],
      preparacion: [
        "Lavar y rallar las zanahorias en tiras finas.",
        "Picar finamente el cilantro fresco.",
        "En un bowl grande, mezclar las zanahorias con el cilantro.",
        "Preparar el aderezo mezclando aceite de oliva, jugo de limón, miel, sal y pimienta.",
        "Verter el aderezo sobre la ensalada y mezclar bien.",
        "Dejar reposar 10 minutos antes de servir para que se integren los sabores."
      ]
    },
    {
      titulo: "Brócoli Salteado con Ajo y Pimentón",
      tiempo: "20 min",
      porciones: "3-4 personas",
      ingredientes: [
        "1 brócoli orgánico grande, cortado en floretes",
        "1 pimentón rojo, cortado en tiras",
        "4 dientes de ajo picados",
        "3 cucharadas de aceite de oliva",
        "1 cucharadita de comino",
        "Sal al gusto",
        "Semillas de ajonjolí para decorar"
      ],
      preparacion: [
        "Blanquear el brócoli en agua hirviendo por 3 minutos, escurrir.",
        "Calentar aceite en una sartén grande a fuego medio-alto.",
        "Agregar el ajo y sofreír por 1 minuto hasta que esté dorado.",
        "Añadir el pimentón y cocinar por 2 minutos.",
        "Incorporar el brócoli, comino y sal. Saltear por 5 minutos.",
        "Servir caliente, decorado con semillas de ajonjolí."
      ]
    },
    {
      titulo: "Crema de Espinacas con Leche de Coco",
      tiempo: "30 min",
      porciones: "4 personas",
      ingredientes: [
        "2 tazas de espinacas frescas orgánicas",
        "1 cebolla blanca mediana, picada",
        "2 papas medianas, peladas y cortadas",
        "400ml de leche de coco",
        "2 tazas de caldo de vegetales",
        "2 cucharadas de aceite de oliva",
        "Sal, pimienta y nuez moscada al gusto"
      ],
      preparacion: [
        "Sofreír la cebolla en aceite hasta que esté transparente.",
        "Agregar las papas y el caldo, cocinar 15 minutos hasta que estén blandas.",
        "Añadir las espinacas y cocinar 3 minutos más.",
        "Licuar toda la mezcla hasta obtener una crema suave.",
        "Regresar a la olla, agregar leche de coco y sazonar.",
        "Cocinar 5 minutos más y servir caliente."
      ]
    },
    {
      titulo: "Tomates Rellenos de Quinoa y Vegetales",
      tiempo: "45 min",
      porciones: "4 personas",
      ingredientes: [
        "8 tomates grandes maduros",
        "1 taza de quinoa cocida",
        "1 calabacín pequeño, cortado en cubitos",
        "1 zanahoria, cortada en cubitos",
        "1/2 taza de maíz tierno",
        "3 cucharadas de aceite de oliva",
        "Hierbas frescas (albahaca, orégano)",
        "Queso campesino desmenuzado"
      ],
      preparacion: [
        "Precalentar horno a 180°C.",
        "Cortar la parte superior de los tomates y vaciar la pulpa.",
        "Sofreír calabacín, zanahoria y maíz en aceite por 5 minutos.",
        "Mezclar los vegetales con quinoa, hierbas y queso.",
        "Rellenar los tomates con la mezcla.",
        "Hornear 25 minutos hasta que los tomates estén tiernos."
      ]
    },
    {
      titulo: "Chips de Ñame con Especias Colombianas",
      tiempo: "35 min",
      porciones: "3-4 personas",
      ingredientes: [
        "2 ñames medianos, pelados",
        "3 cucharadas de aceite de oliva",
        "1 cucharadita de paprika",
        "1/2 cucharadita de comino molido",
        "1/2 cucharadita de ajo en polvo",
        "Sal al gusto",
        "Cilantro fresco para decorar"
      ],
      preparacion: [
        "Precalentar horno a 200°C.",
        "Cortar el ñame en rodajas finas (2-3mm).",
        "Mezclar aceite con todas las especias.",
        "Bañar las rodajas de ñame con la mezcla de especias.",
        "Colocar en bandeja y hornear 20-25 minutos, volteando a la mitad.",
        "Servir caliente, decorado con cilantro fresco."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-organic-beige/20 py-4">
          <div className="container-organic">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-organic-green hover:underline">Inicio</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link to="/blog" className="text-organic-green hover:underline">Blog</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">5 recetas con vegetales de temporada</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-organic-beige/30 to-white">
          <div className="container-organic max-w-4xl">
            <div className="text-center mb-8">
              <span className="bg-organic-green text-black text-sm px-3 py-1 rounded-full font-montserrat mb-4 inline-block">
                Recetas
              </span>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-organic-green">
                5 Recetas con Vegetales de Temporada
              </h1>
              <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
                Aprovecha al máximo los vegetales frescos de nuestra finca con estas deliciosas 
                recetas fáciles de preparar, llenas de sabor y nutrición.
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
                <span>📅 15 de abril, 2025</span>
                <span>⏱️ 15-45 min c/u</span>
                <span>👨‍🍳 Nivel: Fácil</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container-organic max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                Los vegetales de temporada no solo son más frescos y sabrosos, sino que también 
                están en su punto máximo de nutrición. En nuestra finca en El Socorro, Santander, 
                cultivamos estos vegetales siguiendo los ciclos naturales, sin químicos ni pesticidas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Estas 5 recetas te permitirán disfrutar de la verdadera esencia de cada vegetal, 
                resaltando sus sabores naturales con preparaciones sencillas pero deliciosas. 
                Todas las recetas utilizan ingredientes que puedes encontrar fácilmente en Colombia.
              </p>
            </div>

            {/* Recetas */}
            <div className="space-y-16">
              {recetas.map((receta, index) => (
                <div key={index} className="card-organic p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-organic-green text-black w-10 h-10 rounded-full flex items-center justify-center font-montserrat font-bold text-lg mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="font-montserrat font-bold text-2xl text-organic-green mb-2">
                        {receta.titulo}
                      </h2>
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <span>⏱️ {receta.tiempo}</span>
                        <span>👥 {receta.porciones}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-4 text-organic-green">
                        Ingredientes:
                      </h3>
                      <ul className="space-y-2">
                        {receta.ingredientes.map((ingrediente, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-organic-green mr-2">•</span>
                            <span className="text-gray-700">{ingrediente}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-4 text-organic-green">
                        Preparación:
                      </h3>
                      <ol className="space-y-3">
                        {receta.preparacion.map((paso, i) => (
                          <li key={i} className="flex items-start">
                            <span className="bg-organic-green/20 text-organic-green w-6 h-6 rounded-full flex items-center justify-center text-sm font-montserrat font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-gray-700">{paso}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips adicionales */}
            <div className="mt-16 bg-organic-green/10 rounded-lg p-8">
              <h2 className="font-montserrat font-bold text-2xl mb-6 text-organic-green">
                Consejos para Aprovechar al Máximo tus Vegetales
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🌱 Frescura</h3>
                  <p className="text-gray-700">
                    Consume los vegetales dentro de los primeros 3-5 días después de la cosecha 
                    para obtener el máximo de nutrientes y sabor.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🧊 Conservación</h3>
                  <p className="text-gray-700">
                    Guarda las hojas verdes en el refrigerador envueltas en papel húmedo. 
                    Los tubérculos se conservan mejor en lugares frescos y secos.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🔥 Cocción</h3>
                  <p className="text-gray-700">
                    Evita sobrecocinar los vegetales para preservar sus vitaminas y minerales. 
                    El salteado rápido y el vapor son excelentes opciones.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🌿 Combinaciones</h3>
                  <p className="text-gray-700">
                    Combina vegetales de diferentes colores en tus platos para obtener 
                    una variedad completa de antioxidantes y fitoquímicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-organic-brown/10">
          <div className="container-organic text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-4">¿Te gustaron estas recetas?</h2>
            <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
              Conoce más sobre nuestros vegetales orgánicos y cómo los cultivamos en nuestra finca.
            </p>
            <Link to="/conocenos/nuestra-finca">
              <button className="bg-organic-green text-black px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-organic-green/80 transition-colors">
                Conoce Nuestra Finca
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RecetasVegetales;
