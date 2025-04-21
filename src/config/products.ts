
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  isOrganic?: boolean;
  unit?: string;
  variants?: Array<{
    id: string;
    name: string;
    price: number;
    unit?: string;
  }>;
}

export const PRODUCTS: Product[] = [
  // Vegetales
  {
    id: "pepino-organico",
    name: "Pepino Orgánico",
    price: 0, // Precio pendiente
    category: "Vegetales",
    isOrganic: true,
  },
  {
    id: "pimenton",
    name: "Pimentón",
    price: 0,
    category: "Vegetales",
  },
  {
    id: "tomate-organico",
    name: "Tomate orgánico",
    price: 0,
    category: "Vegetales",
    isOrganic: true,
  },
  // ... más vegetales
  
  // Frutas
  {
    id: "pina-oromiel",
    name: "Piña oromiel",
    price: 0,
    category: "Frutas",
  },
  {
    id: "patilla-baby",
    name: "Patilla baby",
    price: 0,
    category: "Frutas",
  },
  // ... más frutas
  
  // Huevos y Lácteos
  {
    id: "huevo-codorniz",
    name: "Huevo de codorniz",
    price: 0,
    category: "Huevos y Lácteos",
    variants: [
      {
        id: "huevo-codorniz-24",
        name: "Bandeja x 24 unidades",
        price: 0,
      }
    ]
  },
  {
    id: "mantequilla-clarificada",
    name: "Mantequilla clarificada",
    price: 0,
    category: "Huevos y Lácteos",
    variants: [
      {
        id: "mantequilla-640",
        name: "640 gr",
        price: 0,
        unit: "gr"
      },
      {
        id: "mantequilla-420",
        name: "420 gr",
        price: 0,
        unit: "gr"
      },
      {
        id: "mantequilla-200",
        name: "200 gr",
        price: 0,
        unit: "gr"
      }
    ]
  },
  
  // Carnes
  {
    id: "pollo-criollo",
    name: "Pollo Criollo",
    price: 0,
    category: "Carnes",
  },
  {
    id: "gallina-criolla",
    name: "Gallina Criolla",
    price: 0,
    category: "Carnes",
  },
  {
    id: "mojarra",
    name: "Mojarra",
    price: 0,
    category: "Carnes",
  },
  
  // Bebidas
  {
    id: "agua-grande",
    name: "Botella de agua Grande",
    price: 0,
    category: "Bebidas",
  },
  {
    id: "agua-pequena",
    name: "Botella de Agua pequeña",
    price: 0,
    category: "Bebidas",
  },
  {
    id: "soda-bretana",
    name: "Soda Bretaña",
    price: 0,
    category: "Bebidas",
  },
  
  // Miel y Polen
  {
    id: "miel-220",
    name: "Miel abejas Natural",
    price: 0,
    category: "Miel y Polen",
    variants: [
      {
        id: "miel-220gr",
        name: "220gr",
        price: 0,
        unit: "gr"
      },
      {
        id: "miel-260gr",
        name: "260gr",
        price: 0,
        unit: "gr"
      },
      // ... otros tamaños
    ]
  },
  
  // Abono
  {
    id: "abono-oro-tierra",
    name: "Abono Orgánico Oro Tierra",
    price: 0,
    category: "Abono",
    variants: [
      {
        id: "abono-1kg",
        name: "1 kilo",
        price: 0,
        unit: "kg"
      },
      {
        id: "abono-3kg",
        name: "3 kilos",
        price: 0,
        unit: "kg"
      },
      {
        id: "abono-5kg",
        name: "5 kilos",
        price: 0,
        unit: "kg"
      },
      {
        id: "abono-10kg",
        name: "10 kilos",
        price: 0,
        unit: "kg"
      },
      {
        id: "abono-20kg",
        name: "20 kilos",
        price: 0,
        unit: "kg"
      }
    ]
  }
];
