
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const NuestroCompromiso = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container-organic max-w-4xl mx-auto px-4">
          <h1 className="font-montserrat font-bold text-4xl mb-8 text-organic-green">Nuestro Compromiso</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-700">
              Creemos que la tierra no solo es donde sembramos, sino donde vivimos, soñamos y cuidamos el futuro. 
              Por eso, en nuestra finca todo se hace pensando en el planeta.
            </p>

            <p className="text-gray-700">
              No usamos químicos ni pesticidas que dañen el suelo o el agua. Cuidamos a los animales como parte de 
              la familia y cultivamos con prácticas que respetan los ciclos naturales. Apostamos por un modelo de 
              producción sostenible, donde la calidad nunca compite con el respeto por la vida.
            </p>

            <p className="text-gray-700">
              Además, reutilizamos, compostamos, reciclamos y buscamos constantemente formas de mejorar. Sabemos que 
              cada pequeña acción suma, y queremos que lo que llevas a tu mesa no solo te haga bien a ti, sino también 
              al mundo que compartimos.
            </p>

            <p className="text-gray-700">
              Nuestra meta no es ser una gran industria, sino una finca consciente, viva y en armonía con la naturaleza. 
              Porque si cuidamos la tierra, la tierra cuida de nosotros.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NuestroCompromiso;
