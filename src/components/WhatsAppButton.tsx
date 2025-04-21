
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '1234567890'; // Cambia esto por el número real

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-72 mb-2 border border-organic-green/20 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-montserrat font-semibold">¿Necesitas ayuda?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm mb-4">
            Contáctanos por WhatsApp para recibir atención personalizada sobre nuestros productos orgánicos.
          </p>
          <a 
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-organic-green text-black w-full py-2 rounded-md flex items-center justify-center font-medium hover:bg-organic-green/80 transition-colors"
          >
            Iniciar chat
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full p-3.5 shadow-lg flex items-center justify-center ${
          isOpen ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
