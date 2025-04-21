
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOrganic?: boolean;
}

const ProductCard = ({ id, name, price, image, category, isNew = false, isOrganic = true }: ProductCardProps) => {
  return (
    <div className="card-organic group">
      <Link to={`/producto/${id}`} className="block relative overflow-hidden">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-organic-green text-black text-xs px-2 py-1 rounded font-montserrat">
              Nuevo
            </span>
          )}
          {isOrganic && (
            <span className="bg-organic-brown text-white text-xs px-2 py-1 rounded font-montserrat">
              Orgánico
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <span className="text-xs text-gray-500 mb-1 block">{category}</span>
        <Link to={`/producto/${id}`} className="block">
          <h3 className="font-montserrat font-medium text-lg mb-2 group-hover:text-organic-green transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mt-3">
          <span className="font-montserrat font-semibold text-lg">
            ${price.toFixed(2)}
          </span>
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-organic-green hover:text-black">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
