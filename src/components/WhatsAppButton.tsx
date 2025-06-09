
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "573113925325";
  const message = "Hola, quiero hacer un pedido de productos orgánicos";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Texto "Pide ya" */}
      <div className="bg-organic-green text-black px-3 py-2 rounded-lg shadow-lg font-montserrat font-semibold text-sm animate-pulse">
        Pide ya
      </div>
      
      {/* Botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3.5 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
