
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight, CheckCircle, Leaf, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BeneficiosOrganicos = () => {
  const beneficios = [
    {
      icono: <Heart className="h-8 w-8 text-organic-green" />,
      titulo: "Mayor Valor Nutricional",
      descripcion: "Los alimentos orgánicos contienen hasta 60% más antioxidantes que los convencionales.",
      detalles: [
        "Mayor concentración de vitaminas A, C y E",
        "Niveles superiores de minerales como hierro, magnesio y fósforo",
        "Más ácidos grasos omega-3 en productos de origen animal",
        "Antioxidantes naturales que protegen contra enfermedades"
      ]
    },
    {
      icono: <Shield className="h-8 w-8 text-organic-green" />,
      titulo: "Libre de Químicos Tóxicos",
      descripcion: "Sin pesticidas, herbicidas ni fertilizantes sintéticos que pueden afectar tu salud.",
      detalles: [
        "Reducción del 90% en residuos de pesticidas",
        "Sin organismos genéticamente modificados (GMO)",
        "No contiene antibióticos ni hormonas artificiales",
        "Menor riesgo de alergias y sensibilidades alimentarias"
      ]
    },
    {
      icono: <Leaf className="h-8 w-8 text-organic-green" />,
      titulo: "Mejor Sabor y Frescura",
      descripcion: "El respeto por los ciclos naturales resulta en alimentos más sabrosos y frescos.",
      detalles: [
        "Sabores más intensos y auténticos",
        "Texturas más firmes y naturales",
        "Aromas más pronunciados",
        "Mayor vida útil sin conservantes artificiales"
      ]
    }
  ];

  const comparacion = [
    {
      aspecto: "Pesticidas",
      organico: "0% - Libre de pesticidas sintéticos",
      convencional: "Hasta 230 tipos diferentes de residuos"
    },
    {
      aspecto: "Antioxidantes",
      organico: "20-40% más antioxidantes",
      convencional: "Niveles básicos de antioxidantes"
    },
    {
      aspecto: "Impacto Ambiental",
      organico: "Reduce contaminación y mejora biodiversidad",
      convencional: "Contamina agua y suelo, reduce biodiversidad"
    },
    {
      aspecto: "Bienestar Animal",
      organico: "Animales criados en libertad, sin confinamiento",
      convencional: "Sistemas intensivos de confinamiento"
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
              <span className="text-gray-600">Beneficios de los alimentos orgánicos</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-organic-beige/30 to-white">
          <div className="container-organic max-w-4xl">
            <div className="text-center mb-8">
              <span className="bg-organic-green text-black text-sm px-3 py-1 rounded-full font-montserrat mb-4 inline-block">
                Salud
              </span>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-organic-green">
                Beneficios de los Alimentos Orgánicos
              </h1>
              <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre por qué los alimentos orgánicos son mejores para tu salud, 
                tu familia y para el medio ambiente que todos compartimos.
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
                <span>📅 2 de abril, 2025</span>
                <span>📖 8 min de lectura</span>
                <span>🏥 Respaldado por ciencia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-12">
          <div className="container-organic max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                En un mundo donde cada vez es más difícil saber qué estamos consumiendo realmente, 
                los alimentos orgánicos representan una vuelta a lo natural, a lo que siempre debió ser: 
                comida real, cultivada con respeto por la tierra y por quienes la consumen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Los estudios científicos continúan confirmando lo que muchos ya intuían: los alimentos 
                orgánicos no solo son mejores para nuestra salud, sino que también contribuyen a un 
                planeta más sostenible y equilibrado.
              </p>
            </div>

            {/* Beneficios Principales */}
            <div className="space-y-12 mb-16">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="card-organic p-8">
                  <div className="flex items-start mb-6">
                    <div className="mr-6 mt-1">
                      {beneficio.icono}
                    </div>
                    <div>
                      <h2 className="font-montserrat font-bold text-2xl text-organic-green mb-3">
                        {beneficio.titulo}
                      </h2>
                      <p className="font-lora text-lg text-gray-600 mb-6">
                        {beneficio.descripcion}
                      </p>
                      <ul className="space-y-3">
                        {beneficio.detalles.map((detalle, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-organic-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detalle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparación */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-8 text-organic-green">
                Orgánico vs. Convencional: La Diferencia es Real
              </h2>
              <div className="card-organic p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-organic-green/20">
                        <th className="text-left py-4 font-montserrat font-semibold text-lg">Aspecto</th>
                        <th className="text-left py-4 font-montserrat font-semibold text-lg text-organic-green">Orgánico</th>
                        <th className="text-left py-4 font-montserrat font-semibold text-lg text-gray-600">Convencional</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparacion.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-4 font-montserrat font-medium">{item.aspecto}</td>
                          <td className="py-4 text-gray-700">{item.organico}</td>
                          <td className="py-4 text-gray-600">{item.convencional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Datos Científicos */}
            <div className="mb-16 bg-organic-green/10 rounded-lg p-8">
              <h2 className="font-montserrat font-bold text-2xl mb-6 text-organic-green">
                Lo Que Dice la Ciencia
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">📊 Estudios Recientes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Meta-análisis de 343 estudios confirma mayor contenido nutricional</li>
                    <li>• Universidad de Stanford: reducción significativa de residuos tóxicos</li>
                    <li>• Estudio de Harvard: menor riesgo de enfermedades neurológicas</li>
                    <li>• Investigación europea: mejor desarrollo cognitivo en niños</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🔬 Evidencia Nutricional</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 17% más antioxidantes en frutas orgánicas</li>
                    <li>• 12% más vitamina C en vegetales orgánicos</li>
                    <li>• 29% más hierro en granos orgánicos</li>
                    <li>• 21% más magnesio en cultivos orgánicos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Beneficios Ambientales */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-organic-green">
                Cuidando Nuestro Planeta
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-organic p-6 text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">Protege el Suelo</h3>
                  <p className="text-gray-700">
                    La agricultura orgánica mejora la fertilidad del suelo y previene la erosión.
                  </p>
                </div>
                <div className="card-organic p-6 text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">Agua Limpia</h3>
                  <p className="text-gray-700">
                    Sin químicos que contaminen ríos, lagos y fuentes de agua subterránea.
                  </p>
                </div>
                <div className="card-organic p-6 text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐝</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">Biodiversidad</h3>
                  <p className="text-gray-700">
                    Protege abejas, mariposas y otros polinizadores esenciales para la vida.
                  </p>
                </div>
              </div>
            </div>

            {/* Consejos Prácticos */}
            <div className="bg-organic-beige/30 rounded-lg p-8">
              <h2 className="font-montserrat font-bold text-2xl mb-6 text-organic-green">
                Cómo Empezar tu Transición a Orgánico
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🥬 Prioriza estos alimentos:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Hojas verdes (espinaca, lechuga, kale)</li>
                    <li>• Frutas de piel fina (fresas, manzanas)</li>
                    <li>• Productos lácteos y huevos</li>
                    <li>• Carnes y pollo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">💡 Consejos para el cambio:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Comienza gradualmente con algunos productos</li>
                    <li>• Lee las etiquetas y certificaciones</li>
                    <li>• Conecta con productores locales</li>
                    <li>• Cultiva tus propias hierbas y vegetales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-organic-brown/10">
          <div className="container-organic text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-4">¿Listo para hacer el cambio?</h2>
            <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
              Conoce cómo cultivamos nuestros alimentos orgánicos y nuestro compromiso con tu salud y el planeta.
            </p>
            <Link to="/conocenos/nuestro-compromiso">
              <button className="bg-organic-green text-black px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-organic-green/80 transition-colors">
                Conoce Nuestro Compromiso
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

export default BeneficiosOrganicos;
