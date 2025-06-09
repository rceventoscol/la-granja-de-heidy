import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
const MessageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="fixed bottom-6 right-6 z-50">
      {isOpen}
      
      
    </div>;
};
export default MessageButton;