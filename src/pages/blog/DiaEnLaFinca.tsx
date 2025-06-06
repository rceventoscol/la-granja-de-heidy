
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight, Clock, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const DiaEnLaFinca = () => {
  const horarios = [
    {
      hora: "5:30 AM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Despertar con las Gallinas",
      descripcion: "La mamá de Heidy se levanta al amanecer. El aire fresco de la montaña y el canto de los gallos marcan el inicio de un nuevo día lleno de vida en la finca.",
      actividades: [
        "Revisar el estado de los animales",
        "Recolectar los huevos frescos del día",
        "Verificar que todas las gallinas estén bien",
        "Preparar el alimento natural para los animales"
      ]
    },
    {
      hora: "6:30 AM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Cuidado de las Gallinas",
      descripcion: "Las gallinas sueltas y felices reciben su cuidado matutino. Cada una tiene su personalidad y la mamá de Heidy las conoce por nombre.",
      actividades: [
        "Alimentar con granos naturales y restos de vegetales",
        "Limpiar y renovar el agua fresca",
        "Revisar nidos y recolectar huevos",
        "Observar el comportamiento para detectar cualquier problema"
      ]
    },
    {
      hora: "8:00 AM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Revisión de los Cultivos",
      descripcion: "Un recorrido por las parcelas para ver cómo van creciendo los vegetales. Cada planta recibe atención personalizada.",
      actividades: [
        "Inspeccionar el crecimiento de zanahorias y rábanos",
        "Revisar las lechugas y espinacas",
        "Verificar el sistema de riego por goteo",
        "Identificar necesidades de cada cultivo"
      ]
    },
    {
      hora: "10:00 AM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Trabajo en el Huerto",
      descripcion: "El momento más activo del día. Con las manos en la tierra, sembrando, cosechando y cuidando cada detalle.",
      actividades: [
        "Cosechar vegetales en su punto perfecto",
        "Sembrar nuevas semillas según la temporada",
        "Preparar compost con residuos orgánicos",
        "Regar las plantas que lo necesiten"
      ]
    },
    {
      hora: "12:00 PM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Pausa y Almuerzo",
      descripcion: "Un descanso merecido con un almuerzo preparado con los productos frescos de la finca. La comida sabe distinto cuando viene directo de la tierra.",
      actividades: [
        "Preparar almuerzo con vegetales recién cosechados",
        "Descansar a la sombra de los árboles",
        "Planificar las actividades de la tarde",
        "Revisar el estado del clima"
      ]
    },
    {
      hora: "2:00 PM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Mantenimiento y Cuidados",
      descripción: "Las tareas de mantenimiento que mantienen la finca en perfectas condiciones.",
      actividades: [
        "Podar plantas que lo requieran",
        "Reparar cercas y estructuras",
        "Preparar nuevas camas de siembra",
        "Organizar herramientas y materiales"
      ]
    },
    {
      hora: "4:00 PM",
      icono: <Sun className="h-6 w-6 text-organic-green" />,
      titulo: "Preparación para la Venta",
      descripcion: "Los productos se seleccionan, limpian y preparan con amor para llegar frescos a las familias de la ciudad.",
      actividades: [
        "Seleccionar los mejores vegetales del día",
        "Lavar y empacar cuidadosamente",
        "Organizar pedidos por categorías",
        "Verificar calidad y frescura"
      ]
    },
    {
      hora: "6:00 PM",
      icono: <Moon className="h-6 w-6 text-organic-green" />,
      titulo: "Últimos Cuidados del Día",
      descripcion: "Cuando el sol comienza a ocultarse, es hora de asegurar que todo esté listo para la noche.",
      actividades: [
        "Última revisión a los animales",
        "Cerrar gallineros de forma segura",
        "Regar cultivos si es necesario",
        "Recoger herramientas y materiales"
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
              <span className="text-gray-600">Un día en nuestra finca</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-organic-beige/30 to-white">
          <div className="container-organic max-w-4xl">
            <div className="text-center mb-8">
              <span className="bg-organic-green text-black text-sm px-3 py-1 rounded-full font-montserrat mb-4 inline-block">
                Nuestra Finca
              </span>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-organic-green">
                Un Día en Nuestra Finca
              </h1>
              <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
                Te mostramos cómo es el día a día en nuestra finca y cómo cuidamos cada 
                detalle de nuestros cultivos desde el amanecer hasta el atardecer.
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
                <span>📅 28 de marzo, 2025</span>
                <span>📍 El Socorro, Santander</span>
                <span>🌱 100% Orgánico</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-12">
          <div className="container-organic max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                En las montañas de El Socorro, Santander, cada día comienza antes del amanecer. 
                Aquí, en nuestra finca, el tiempo se mide no por relojes sino por los ritmos 
                naturales: el canto del gallo, la luz del sol y las necesidades de cada planta y animal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La mamá de Heidy, una mujer incansable y sabia, ha dedicado su vida a entender 
                estos ritmos. Su día está lleno de pequeños rituales que, sumados, crean la magia 
                que llega hasta tu mesa: alimentos frescos, sanos y llenos de vida.
              </p>
            </div>

            {/* Timeline del día */}
            <div className="space-y-8 mb-16">
              {horarios.map((momento, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-organic-green/20 p-3 rounded-full">
                      {momento.icono}
                    </div>
                    <div className="w-px h-16 bg-organic-green/30 mt-4 last:hidden"></div>
                  </div>
                  
                  <div className="flex-grow card-organic p-6">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-organic-green mr-2" />
                      <span className="font-montserrat font-bold text-organic-green">{momento.hora}</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl mb-3">{momento.titulo}</h3>
                    <p className="text-gray-700 mb-4">{momento.descripcion}</p>
                    <ul className="space-y-2">
                      {momento.actividades.map((actividad, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-organic-green mr-2">•</span>
                          <span className="text-gray-600">{actividad}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Filosofía de trabajo */}
            <div className="bg-organic-green/10 rounded-lg p-8 mb-16">
              <h2 className="font-montserrat font-bold text-2xl mb-6 text-organic-green text-center">
                Nuestra Filosofía: Amor en Cada Detalle
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">Paciencia Natural</h3>
                  <p className="text-gray-700">
                    Respetamos los tiempos de la naturaleza. Cada planta crece a su ritmo, 
                    sin presiones ni químicos que aceleren procesos artificialmente.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">❤️</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">Cuidado Personal</h3>
                  <p className="text-gray-700">
                    Cada gallina tiene nombre, cada planta recibe atención individual. 
                    No es agricultura industrial, es cuidado familiar.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">Sostenibilidad</h3>
                  <p className="text-gray-700">
                    Todo lo que hacemos piensa en el futuro. Compost casero, agua de lluvia, 
                    y prácticas que mejoran la tierra año tras año.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="card-organic p-8 mb-16 text-center">
              <div className="w-20 h-20 bg-organic-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👵</span>
              </div>
              <blockquote className="font-lora text-xl text-gray-700 mb-4 italic">
                "Cada huevo que recojo, cada lechuga que cosecho, lleva el amor de años cuidando esta tierra. 
                No es solo trabajo, es mi manera de cuidar a las familias que confían en nosotros."
              </blockquote>
              <cite className="font-montserrat font-semibold text-organic-green">
                - La mamá de Heidy, cuidadora de la finca
              </cite>
            </div>

            {/* Números de la finca */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center card-organic p-6">
                <div className="text-3xl font-montserrat font-bold text-organic-green mb-2">25+</div>
                <div className="text-gray-600">Gallinas felices</div>
              </div>
              <div className="text-center card-organic p-6">
                <div className="text-3xl font-montserrat font-bold text-organic-green mb-2">12</div>
                <div className="text-gray-600">Tipos de vegetales</div>
              </div>
              <div className="text-center card-organic p-6">
                <div className="text-3xl font-montserrat font-bold text-organic-green mb-2">0</div>
                <div className="text-gray-600">Químicos usados</div>
              </div>
              <div className="text-center card-organic p-6">
                <div className="text-3xl font-montserrat font-bold text-organic-green mb-2">15+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
            </div>

            {/* Ciclo de sostenibilidad */}
            <div className="bg-organic-beige/30 rounded-lg p-8">
              <h2 className="font-montserrat font-bold text-2xl mb-6 text-organic-green text-center">
                El Ciclo Perfecto de la Sostenibilidad
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🔄 Nada se Desperdicia</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Restos de vegetales alimentan a las gallinas</li>
                    <li>• Estiércol de gallinas fertiliza los cultivos</li>
                    <li>• Restos de cosecha se convierten en compost</li>
                    <li>• Agua de lluvia se recoge y reutiliza</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3">🌱 Regeneración Constante</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Rotación de cultivos mejora el suelo</li>
                    <li>• Plantas nativas atraen insectos beneficiosos</li>
                    <li>• Biodiversidad protege los cultivos naturalmente</li>
                    <li>• Cada año la tierra está más fértil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-organic-brown/10">
          <div className="container-organic text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-4">¿Te gustaría visitar nuestra finca?</h2>
            <p className="font-lora text-lg mb-8 max-w-2xl mx-auto">
              Conoce más sobre nuestros métodos de cultivo y nuestro compromiso con la agricultura sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/conocenos/nuestra-finca">
                <button className="bg-organic-green text-black px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-organic-green/80 transition-colors">
                  Conoce Más de la Finca
                </button>
              </Link>
              <Link to="/conocenos/nuestro-compromiso">
                <button className="border-2 border-organic-green text-organic-green px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-organic-green hover:text-black transition-colors">
                  Nuestro Compromiso
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DiaEnLaFinca;
