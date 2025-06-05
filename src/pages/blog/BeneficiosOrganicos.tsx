
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Leaf, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BeneficiosOrganicos = () => {
  const beneficios = [
    {
      icono: Heart,
      titulo: "Mejor para tu Salud",
      descripcion: "Los alimentos orgánicos contienen más antioxidantes y menos residuos tóxicos",
      detalles: [
        "Hasta 40% más antioxidantes que los alimentos convencionales",
        "Sin residuos de pesticidas sintéticos dañinos",
        "Mayor contenido de vitaminas y minerales esenciales",
        "Mejor perfil de ácidos grasos omega-3"
      ]
    },
    {
      icono: Leaf,
      titulo: "Protege el Medio Ambiente",
      descripcion: "La agricultura orgánica cuida la biodiversidad y los recursos naturales",
      detalles: [
        "Preserva la salud del suelo y la biodiversidad",
        "Reduce la contaminación del agua y aire",
        "Menor huella de carbono en la producción",
        "Protege a las abejas y otros polinizadores"
      ]
    },
    {
      icono: Shield,
      titulo: "Sin Químicos Tóxicos",
      descripcion: "Libres de pesticidas, herbicidas y fertilizantes sintéticos",
      detalles: [
        "No contienen residuos de glifosato ni otros herbicidas",
        "Sin conservantes artificiales dañinos",
        "No modificados genéticamente (GMO-free)",
        "Procesamiento mínimo y natural"
      ]
    },
    {
      icono: Globe,
      titulo: "Agricultura Sostenible",
      descripcion: "Prácticas que regeneran la tierra para futuras generaciones",
      detalles: [
        "Rotación de cultivos que enriquece el suelo",
        "Uso eficiente del agua y recursos naturales",
        "Apoyo a comunidades rurales locales",
        "Preservación de semillas nativas y criollas"
      ]
    }
  ];

  const comparacion = [
    {
      aspecto: "Pesticidas",
      organico: "Sin residuos tóxicos",
      convencional: "Hasta 300 tipos diferentes"
    },
    {
      aspecto: "Antioxidantes",
      organico: "40% más contenido",
      convencional: "Niveles estándar"
    },
    {
      aspecto: "Sabor",
      organico: "Más intenso y natural",
      convencional: "Puede ser más insípido"
    },
    {
      aspecto: "Vida útil",
      organico: "Más corta, más fresco",
      convencional: "Artificialmente extendida"
    },
    {
      aspecto: "Impacto ambiental",
      organico: "Regenerativo y sostenible",
      convencional: "Puede degradar el suelo"
    },
    {
      aspecto: "Precio",
      organico: "Inversión en salud",
      convencional: "Más económico inicialmente"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2400')"
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container-organic h-full flex items-center">
            <div className="text-white max-w-2xl">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                Beneficios de los Alimentos Orgánicos
              </h1>
              <p className="font-lora text-lg text-white/90">
                Descubre por qué elegir alimentos orgánicos es una inversión en tu salud y en el futuro del planeta.
              </p>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-organic-beige/20">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                ¿Qué Hace Especiales a los Alimentos Orgánicos?
              </h2>
              <p className="font-lora text-lg text-gray-700 mb-8">
                Los alimentos orgánicos son cultivados sin el uso de pesticidas sintéticos, herbicidas, 
                fertilizantes químicos o modificaciones genéticas. Este método de producción no solo 
                es mejor para tu salud, sino que también protege el medio ambiente y apoya la agricultura sostenible.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-organic-green">95%</span>
                  </div>
                  <h3 className="font-montserrat font-semibold mb-2">Menos Pesticidas</h3>
                  <p className="font-lora text-sm text-gray-600">
                    Los orgánicos tienen 95% menos residuos de pesticidas
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-organic-green">40%</span>
                  </div>
                  <h3 className="font-montserrat font-semibold mb-2">Más Antioxidantes</h3>
                  <p className="font-lora text-sm text-gray-600">
                    Mayor contenido de antioxidantes beneficiosos
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-organic-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-organic-green">0%</span>
                  </div>
                  <h3 className="font-montserrat font-semibold mb-2">Sin GMOs</h3>
                  <p className="font-lora text-sm text-gray-600">
                    Libres de organismos genéticamente modificados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Principales */}
        <section className="py-16">
          <div className="container-organic">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
                Principales Beneficios de los Alimentos Orgánicos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {beneficios.map((beneficio, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-organic-green/10 pb-4">
                      <div className="flex items-center mb-3">
                        <div className="bg-organic-green/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <beneficio.icono className="h-6 w-6 text-organic-green" />
                        </div>
                        <CardTitle className="font-montserrat text-xl">{beneficio.titulo}</CardTitle>
                      </div>
                      <p className="font-lora text-gray-600">{beneficio.descripcion}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {beneficio.detalles.map((detalle, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-organic-green mr-2 font-bold">✓</span>
                            <span className="font-lora text-gray-700">{detalle}</span>
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

        {/* Comparación */}
        <section className="py-16 bg-gray-50">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
                Orgánicos vs. Convencionales
              </h2>
              
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-organic-green/10">
                        <th className="text-left p-4 font-montserrat font-semibold">Aspecto</th>
                        <th className="text-left p-4 font-montserrat font-semibold text-organic-green">Alimentos Orgánicos</th>
                        <th className="text-left p-4 font-montserrat font-semibold">Alimentos Convencionales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparacion.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="p-4 font-montserrat font-medium">{item.aspecto}</td>
                          <td className="p-4 font-lora text-organic-green">{item.organico}</td>
                          <td className="p-4 font-lora text-gray-600">{item.convencional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mitos y Realidades */}
        <section className="py-16">
          <div className="container-organic">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
                Mitos y Realidades sobre los Orgánicos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="font-montserrat text-red-700">❌ Mito</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="font-lora font-semibold mb-3">"Los orgánicos no valen la pena por el precio"</p>
                    <p className="font-lora text-gray-600">
                      Aunque inicialmente pueden costar más, los beneficios a largo plazo para la salud 
                      y la reducción de gastos médicos compensan la inversión inicial.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="font-montserrat text-green-700">✅ Realidad</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="font-lora font-semibold mb-3">"Inversión en salud a largo plazo"</p>
                    <p className="font-lora text-gray-600">
                      Los estudios muestran que quienes consumen orgánicos tienen menor riesgo de 
                      enfermedades crónicas y mejor calidad de vida general.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="font-montserrat text-red-700">❌ Mito</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="font-lora font-semibold mb-3">"No hay diferencia nutricional"</p>
                    <p className="font-lora text-gray-600">
                      Múltiples estudios demuestran que los orgánicos tienen mayor contenido de 
                      antioxidantes y mejor perfil nutricional.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="font-montserrat text-green-700">✅ Realidad</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="font-lora font-semibold mb-3">"Mejor perfil nutricional comprobado"</p>
                    <p className="font-lora text-gray-600">
                      Los alimentos orgánicos contienen significativamente más antioxidantes, 
                      vitaminas y minerales que sus contrapartes convencionales.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-organic-green/10">
          <div className="container-organic">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Comienza tu Viaje hacia una Alimentación Más Saludable
              </h2>
              <p className="font-lora text-lg text-gray-700 mb-8">
                Descubre nuestra selección de productos orgánicos certificados, 
                cultivados con amor y respeto por la naturaleza en nuestra finca colombiana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tienda">
                  <Button className="bg-organic-green text-black hover:bg-organic-green/80">
                    Explorar productos orgánicos
                  </Button>
                </Link>
                <Link to="/conocenos/nuestra-finca">
                  <Button variant="outline" className="border-organic-green text-organic-green hover:bg-organic-green hover:text-black">
                    Conoce nuestra finca
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

export default BeneficiosOrganicos;
