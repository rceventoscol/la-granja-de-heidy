
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const NuestraFinca = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container-organic max-w-4xl mx-auto px-4">
          <h1 className="font-montserrat font-bold text-4xl mb-8 text-organic-green">Nuestra Finca</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-700">
              Todo lo que ves en nuestra tienda nace en la finca de Heidy, un rincón mágico en El Socorro, Santander. 
              Allí, entre montañas y aire puro, viven sus gallinas felices, sueltas y bien cuidadas, que cada día nos 
              regalan huevos 100% orgánicos.
            </p>

            <p className="text-gray-700">
              Pero eso no es todo. Los vegetales también se cultivan allá, con paciencia, sin químicos y con mucho amor. 
              ¿Y quién está detrás de todo ese cuidado? La mamá de Heidy —una dura— que se encarga de que cada cosecha 
              esté llena de vida, sabor y frescura. Literal, su amor se siente en cada hoja de lechuga.
            </p>

            <p className="text-gray-700">
              Todo llega fresquito, directo del campo a tu casa, sin vueltas raras ni intermediarios. Para nosotros esto 
              no es solo vender productos, es compartir lo que somos: una familia que cultiva con amor y cree en una vida 
              más natural y consciente.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NuestraFinca;
