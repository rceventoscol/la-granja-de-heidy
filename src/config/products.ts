
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
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
    price: 0,
    category: "Vegetales",
    isOrganic: true,
    unit: "lb",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "pimenton",
    name: "Pimentón",
    price: 0,
    unit: "lb",
    category: "Vegetales",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "tomate-organico",
    name: "Tomate orgánico",
    price: 0,
    unit: "lb",
    category: "Vegetales",
    isOrganic: true,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "tomate-milano",
    name: "Tomate Milano",
    price: 0,
    unit: "lb",
    category: "Vegetales",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "tomate-cherry",
    name: "Tomate Cherry",
    price: 0,
    unit: "lb",
    category: "Vegetales",
    image: "https://images.unsplash.com/photo-1608769236578-79a0dd5d2113?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "cebolla-blanca",
    name: "Cebolla Cabezona Blanca",
    price: 0,
    unit: "lb",
    category: "Vegetales",
    image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&q=80&w=1400",
  },
  
  // Frutas
  {
    id: "pina-oromiel",
    name: "Piña Oromiel",
    price: 0,
    unit: "lb",
    category: "Frutas",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "patilla-baby",
    name: "Patilla Baby",
    price: 0,
    unit: "lb",
    category: "Frutas",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1400",
  },
  
  // Huevos y Lácteos
  {
    id: "huevo-codorniz",
    name: "Huevo de Codorniz",
    price: 0,
    category: "Huevos y Lácteos",
    image: "https://images.unsplash.com/photo-1569977661578-0cf1eaa9b4f7?auto=format&fit=crop&q=80&w=1400",
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
    name: "Mantequilla Clarificada",
    price: 0,
    category: "Huevos y Lácteos",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=1400",
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
    unit: "lb",
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "gallina-criolla",
    name: "Gallina Criolla",
    price: 0,
    unit: "lb",
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "mojarra",
    name: "Mojarra",
    price: 0,
    unit: "lb",
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&q=80&w=1400",
  },
  
  // Bebidas
  {
    id: "agua-grande",
    name: "Botella de Agua Grande",
    price: 0,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "agua-pequena",
    name: "Botella de Agua Pequeña",
    price: 0,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "soda-bretana",
    name: "Soda Bretaña",
    price: 0,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=1400",
  },
  
  // Miel y Polen
  {
    id: "miel-220",
    name: "Miel Abejas Natural",
    price: 0,
    category: "Miel y Polen",
    image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?auto=format&fit=crop&q=80&w=1400",
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
      {
        id: "miel-270gr",
        name: "270gr",
        price: 0,
        unit: "gr"
      },
      {
        id: "miel-475gr",
        name: "475gr",
        price: 0,
        unit: "gr"
      },
      {
        id: "miel-485gr",
        name: "485gr",
        price: 0,
        unit: "gr"
      },
      {
        id: "miel-500gr",
        name: "500gr",
        price: 0,
        unit: "gr"
      }
    ]
  },
  
  // Abono
  {
    id: "abono-oro-tierra",
    name: "Abono Orgánico Oro Tierra",
    price: 0,
    category: "Abono",
    image: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&q=80&w=1400",
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
  },
  {
    id: "abono-liquido",
    name: "Abono Oro Tierra Humus Líquido",
    price: 0,
    category: "Abono",
    image: "https://images.unsplash.com/photo-1562517634-baa2da3acb4f?auto=format&fit=crop&q=80&w=1400",
    variants: [
      {
        id: "abono-liquido-medio",
        name: "Medio litro",
        price: 0,
        unit: "L"
      },
      {
        id: "abono-liquido-litro",
        name: "Litro",
        price: 0,
        unit: "L"
      },
      {
        id: "abono-liquido-galon",
        name: "Galón",
        price: 0,
        unit: "gal"
      }
    ]
  }
];

