
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, Product } from '@/config/products';
import { TIENDA_CATEGORIAS } from '@/config/navigation';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import Footer from './Footer';

const TiendaPage = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    // Si no hay categoría, redirigir a la primera categoría
    if (!categoria) {
      navigate(`/tienda/${TIENDA_CATEGORIAS[0].path.split('/').pop()}`);
      return;
    }

    // Normalizar la categoría de la URL
    const normalizedCategoria = categoria.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Buscar si la categoría existe
    const categoryExists = TIENDA_CATEGORIAS.find(cat => 
      cat.path.split('/').pop() === categoria
    );

    if (!categoryExists) {
      navigate('/tienda/vegetales');
      return;
    }

    // Filtrar productos por categoría
    const filteredProducts = PRODUCTS.filter(p => {
      const categoryMatch = p.category.toLowerCase() === normalizedCategoria.toLowerCase();
      return categoryMatch;
    });

    setProducts(filteredProducts);
    setCategoryName(categoryExists.name);
  }, [categoria, navigate]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-montserrat font-bold mb-2 text-organic-green">{categoryName}</h1>
        <p className="text-gray-600 mb-8">Productos frescos y orgánicos directamente de nuestra finca.</p>
        
        {/* Categorías - navegación horizontal */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 pb-2">
            {TIENDA_CATEGORIAS.map((cat) => (
              <a
                key={cat.name}
                href={cat.path}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                  categoria === cat.path.split('/').pop()
                    ? "bg-organic-green text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                isOrganic={product.isOrganic}
                unit={product.unit}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-500">No hay productos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TiendaPage;
