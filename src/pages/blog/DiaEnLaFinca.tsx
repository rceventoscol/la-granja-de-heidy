
import { Link } from "react-router-dom";
import { ArrowLeft, Sunrise, Sun, Sunset, Moon, Droplets, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const DiaEnLaFinca = () => {
  const horarios = [
    {
      hora: "5:30 AM",
      icono: Sunrise,
      actividad: "Inicio del Día",
      descripcion: "Comenzamos temprano para aprovechar la frescura de la mañana",
      detalles: [
        "Revisión del clima y condiciones del día",
        "Preparación de herramientas y equipos",
        "Planificación de actividades según la temporada",
        "Primer recorrido por los cultivos"
      ],
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1400"
    },
    {
      hora: "6:00 AM",
      icono: Droplets,
      actividad: "Riego y Cuidado",
      descripcion: "Sistema de riego inteligente que conserva el agua",
      detalles: [
        "Activación del sistema de riego por goteo",
        "Revisión de la humedad del suelo",
        "Aplicación de compost orgánico donde sea necesario",
        "Monitoreo de plagas de forma natural"
      ],
      imagen: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1400"
    },
    {
      hora: "8:00 AM",
      icono: Sun,
      actividad: "Cosecha Matutina",
      descripcion: "Recolección de productos en su punto óptimo de maduración",
      detalles: [
        "Cosecha de hojas verdes y hierbas aromáticas",
        "Recolección de frutas y vegetales maduros",
        "Selección cuidadosa para máxima calidad",
        "Empaque inmediato para conservar frescura"
      ],
      imagen: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1400"
    },
    {
      hora: "10:00 AM",
      icono: Sprout,
      actividad: "Siembra y Plantación",
      descripcion: "Preparación de nuevos cultivos siguiendo la rotación",
      detalles: [
        "Preparación de semilleros con semillas orgánicas",
        "Trasplante de plántulas a su ubicación definitiva",
        "Aplicación de compost y abono orgánico",
        "Protección natural contra plagas y enfermedades"
      ],
      imagen: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1400"
    },
    {
      hora: "2:00 PM",
      icono: Sun,
      actividad: "Mantenimiento",
      descripcion: "Cuidado de instalaciones y mejora continua",
      detalles: [
        "Mantenimiento de sistemas de riego",
        "Reparación y mejora de infraestructura",
        "Limpieza y organización de herramientas",
        "Preparación de compost con residuos orgánicos"
      ],
      imagen: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1400"
    },
    {
      hora: "5:00 PM",
      icono: Sunset,
      actividad: "Evaluación y Planificación",
      descripcion: "Análisis del día y preparación para el siguiente",
      detalles: [
        "Revisión de la productividad del día",
        "Registro de observaciones importantes",
        "Planificación de actividades para el día siguiente",
        "Comunicación con el equipo de distribución"
      ],
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1400"
    }
  ];

  const principios = [
    {
      titulo: "Agricultura Regenerativa",
      descripcion: "Mejoramos la salud del suelo con cada cosecha",
      practicas: [
        "Rotación de cultivos para enriquecer el suelo",
        "Uso de abonos verdes y compost orgánico",
        "Conservación de la biodiversidad natural",
        "Captación de carbono en el suelo"
      ]
    },
    {
      titulo: "Conservación del Agua",
      descripcion: "Tecnología moderna para uso eficiente del recurso",
      practicas: [
        "Sistema de riego por goteo automatizado",
        "Recolección y aprovechamiento de agua lluvia",
        "Mulching para reducir evaporación",
        "Monitoreo constante de humedad del suelo"
      ]
    },
    {
      titulo: "Biodiversidad",
      descripcion: "Ecosistema equilibrado que se autorregula",
      practicas: [
        "Cultivos asociados que se benefician mutuamente",
        "Conservación de plantas nativas",
        "Refugios para insectos benéficos",
        "Corredores biológicos para fauna local"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=2400')"
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container-organic h-full flex items-center">
            <div className="text-white max-w-2xl">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                Un Día en Nuestra Finca
              </h1>
              <p className="font-lora text-lg text-white/90">
                Te invitamos a conocer cómo es el día a día en nuestra finca orgánica, 
                donde cada detalle cuenta para ofrecerte los mejores productos.
              </p>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-organic-beige/20">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Donde Nace la Calidad que Llega a tu Mesa
              </h2>
              <p className="font-lora text-lg text-gray-700 mb-8">
                En EcoFresh, cada día comienza antes del amanecer. Nuestra finca de 15 hectáreas 
                ubicada en las montañas de Cundinamarca es el hogar de más de 50 variedades de 
                vegetales, frutas y hierbas orgánicas. Aquí, la sostenibilidad no es solo una palabra, 
                es nuestro estilo de vida.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-organic-green">15</span>
                  </div>
                  <h3 className="font-montserrat font-semibold mb-2">Hectáreas</h3>
                  <p className="font-lora text-sm text-gray-600">
                    De cultivos orgánicos certificados
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-organic-green">50+</span>
                  </div>
                  <h3 className="font-montserrat font-semibold mb-2">Variedades</h3>
                  <p className="font-lora text-sm text-gray-600">
                    De productos frescos cultivados
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-organic-green">12</span>
                  </div>
                  <h3 className="font-montserrat font-semibold mb-2">Años</h3>
                  <p className="font-lora text-sm text-gray-600">
                    De experiencia en agricultura orgánica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cronograma del Día */}
        <section className="py-16">
          <div className="container-organic">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
                Un Día Típico en la Finca
              </h2>
              
              <div className="space-y-8">
                {horarios.map((actividad, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={actividad.imagen} 
                          alt={actividad.actividad}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center mb-3">
                            <div className="bg-organic-green/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                              <actividad.icono className="h-6 w-6 text-organic-green" />
                            </div>
                            <div>
                              <div className="text-sm font-montserrat text-organic-green font-semibold">
                                {actividad.hora}
                              </div>
                              <CardTitle className="font-montserrat text-xl">{actividad.actividad}</CardTitle>
                            </div>
                          </div>
                          <p className="font-lora text-gray-600">{actividad.descripcion}</p>
                        </CardHeader>
                        <CardContent className="p-0">
                          <ul className="grid md:grid-cols-2 gap-2">
                            {actividad.detalles.map((detalle, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-organic-green mr-2 font-bold text-sm">•</span>
                                <span className="font-lora text-sm text-gray-700">{detalle}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Principios */}
        <section className="py-16 bg-gray-50">
          <div className="container-organic">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
                Nuestros Principios de Cultivo
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {principios.map((principio, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-montserrat text-xl mb-3">{principio.titulo}</CardTitle>
                      <p className="font-lora text-gray-600">{principio.descripcion}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-left">
                        {principio.practicas.map((practica, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-organic-green mr-2 font-bold">✓</span>
                            <span className="font-lora text-sm text-gray-700">{practica}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios del Equipo */}
        <section className="py-16">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
                Voces de Nuestro Equipo
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-organic-beige/30">
                  <CardContent className="p-8">
                    <p className="font-lora text-gray-700 mb-4 italic">
                      "Trabajar en esta finca me ha enseñado que la agricultura orgánica no es solo 
                      un método de cultivo, es una filosofía de vida. Cada día veo cómo nuestras 
                      prácticas regeneran la tierra y producen alimentos más nutritivos."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-organic-green/20 rounded-full flex items-center justify-center mr-4">
                        <span className="font-montserrat font-bold text-organic-green">CM</span>
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold">Carlos Méndez</p>
                        <p className="font-lora text-sm text-gray-600">Coordinador de Cultivos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-organic-beige/30">
                  <CardContent className="p-8">
                    <p className="font-lora text-gray-700 mb-4 italic">
                      "La conexión con la naturaleza que siento aquí es única. Poder contribuir a 
                      un sistema alimentario más sostenible y saludable me llena de orgullo. 
                      Nuestros clientes merecen lo mejor de la tierra."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-organic-green/20 rounded-full flex items-center justify-center mr-4">
                        <span className="font-montserrat font-bold text-organic-green">LR</span>
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold">Laura Rodríguez</p>
                        <p className="font-lora text-sm text-gray-600">Especialista en Cosecha</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Invitación */}
        <section className="py-20 bg-organic-green/10">
          <div className="container-organic">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                ¿Te Gustaría Visitarnos?
              </h2>
              <p className="font-lora text-lg text-gray-700 mb-8">
                Organizamos tours educativos para familias, escuelas y grupos interesados 
                en conocer más sobre la agricultura orgánica y sostenible. 
                ¡Ven y vive la experiencia de primera mano!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tienda">
                  <Button className="bg-organic-green text-black hover:bg-organic-green/80">
                    Ver productos de la finca
                  </Button>
                </Link>
                <a href="https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20conocer%20sobre%20los%20tours%20de%20la%20finca" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-organic-green text-organic-green hover:bg-organic-green hover:text-black">
                    Agendar visita
                  </Button>
                </a>
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

export default DiaEnLaFinca;
