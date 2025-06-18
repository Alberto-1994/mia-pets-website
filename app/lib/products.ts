import { Product } from '@/types/product'

// Generate sample products for different categories
export const generateProducts = (category: string, count: number): Product[] => {
  const products: Product[] = []
  
  const categoryData = {
    perros: {
      names: [
        'Alimento Premium para Perros',
        'Collar Ajustable',
        'Juguete Pelota',
        'Cama Ortopédica',
        'Correa Retráctil',
        'Shampoo Antipulgas',
        'Hueso de Cuero',
        'Comedero Antideslizante',
        'Transportadora',
        'Vitaminas Caninas'
      ],
      descriptions: [
        'Alimento balanceado rico en proteínas',
        'Collar cómodo y resistente',
        'Juguete interactivo para ejercicio',
        'Cama cómoda para el descanso',
        'Correa extensible de 5 metros',
        'Shampoo natural antipulgas',
        'Hueso natural para masticar',
        'Comedero con base antideslizante',
        'Transportadora segura y cómoda',
        'Suplemento vitamínico completo'
      ]
    },
    gatos: {
      names: [
        'Arena Sanitaria',
        'Rascador Torre',
        'Alimento Gatos Adultos',
        'Juguete Ratón',
        'Cama Felina',
        'Collar Antipulgas',
        'Transportadora Gatos',
        'Comedero Doble',
        'Hierba Gatera',
        'Shampoo Felino'
      ],
      descriptions: [
        'Arena absorbente sin polvo',
        'Rascador de sisal natural',
        'Alimento premium para gatos',
        'Juguete interactivo con sonido',
        'Cama suave y lavable',
        'Collar natural antipulgas',
        'Transportadora ventilada',
        'Comedero de acero inoxidable',
        'Hierba gatera 100% natural',
        'Shampoo hipoalergénico'
      ]
    },
    aves: {
      names: [
        'Jaula para Canarios',
        'Alimento Semillas Mix',
        'Bebedero Automático',
        'Nido de Fibra',
        'Juguete Columpio',
        'Vitaminas Aves',
        'Percha Natural',
        'Comedero Exterior',
        'Grit Digestivo',
        'Spray Vitamínico'
      ],
      descriptions: [
        'Jaula espaciosa con accesorios',
        'Mezcla nutritiva de semillas',
        'Bebedero de fácil llenado',
        'Nido cómodo y natural',
        'Columpio de madera natural',
        'Suplemento vitamínico líquido',
        'Percha de madera natural',
        'Comedero que se adapta a jaulas',
        'Grit para digestión saludable',
        'Spray con vitaminas esenciales'
      ]
    },
    peces: {
      names: [
        'Acuario 50 Litros',
        'Filtro Interno',
        'Alimento Escamas',
        'Calentador Sumergible',
        'Grava Decorativa',
        'Plantas Artificiales',
        'Termómetro Digital',
        'Bomba de Aire',
        'Decoración Castillo',
        'Luz LED Acuario'
      ],
      descriptions: [
        'Acuario de cristal con tapa',
        'Filtro de 3 etapas',
        'Alimento balanceado en escamas',
        'Calentador automático 100W',
        'Grava natural coloreada',
        'Plantas decorativas realistas',
        'Termómetro de precisión',
        'Bomba silenciosa con difusor',
        'Decoración temática medieval',
        'Iluminación LED de colores'
      ]
    },
    roedores: {
      names: [
        'Jaula para Hamsters',
        'Alimento Pellets',
        'Rueda de Ejercicio',
        'Casa de Madera',
        'Bebedero Goteo',
        'Sustrato Viruta',
        'Juguete Túnel',
        'Comedero Cerámica',
        'Vitaminas Roedores',
        'Heno Timothy'
      ],
      descriptions: [
        'Jaula amplia con accesorios',
        'Pellets nutritivos balanceados',
        'Rueda silenciosa de ejercicio',
        'Casa de madera natural',
        'Bebedero antigoteo',
        'Viruta absorbente natural',
        'Túnel de juego flexible',
        'Comedero pesado antivuelco',
        'Suplemento vitamínico',
        'Heno de primera calidad'
      ]
    },
    reptiles: {
      names: [
        'Terrario 60cm',
        'Lámpara UV',
        'Sustrato Reptiles',
        'Comedero Piedra',
        'Termostato Digital',
        'Decoración Roca',
        'Alimento Tortugas',
        'Humidificador',
        'Refugio Cueva',
        'Vitaminas Reptiles'
      ],
      descriptions: [
        'Terrario de vidrio ventilado',
        'Lámpara UVB para reptiles',
        'Sustrato natural absorbente',
        'Comedero imitación piedra',
        'Control de temperatura preciso',
        'Decoración realista',
        'Alimento específico para tortugas',
        'Mantenedor de humedad',
        'Refugio natural tipo cueva',
        'Suplemento vitamínico D3'
      ]
    },
    correas: {
      names: [
        'Correa Retráctil 5m',
        'Arnés Ajustable',
        'Correa de Cuero',
        'Collar GPS',
        'Correa Doble',
        'Arnés Reflectivo',
        'Correa Elástica',
        'Collar Luminoso',
        'Correa Manos Libres',
        'Arnés Deportivo'
      ],
      descriptions: [
        'Correa extensible automática',
        'Arnés cómodo y seguro',
        'Correa de cuero genuino',
        'Collar con localizador GPS',
        'Correa para dos mascotas',
        'Arnés con bandas reflectivas',
        'Correa con amortiguación',
        'Collar LED recargable',
        'Correa para correr',
        'Arnés para actividades deportivas'
      ]
    }
  }

  const data = categoryData[category as keyof typeof categoryData] || categoryData.perros
  
  for (let i = 0; i < count; i++) {
    const nameIndex = i % data.names.length
    const price = Math.floor(Math.random() * 500) + 50
    
    products.push({
      id: i + 1,
      name: data.names[nameIndex],
      description: data.descriptions[nameIndex],
      price: price,
      image: `https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`,
      category: category
    })
  }
  
  return products
}

// Generate popular products (mix of all categories)
export const generatePopularProducts = (count: number): Product[] => {
  const categories = ['perros', 'gatos', 'aves', 'peces', 'roedores', 'reptiles', 'correas']
  const products: Product[] = []
  
  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length]
    const categoryProducts = generateProducts(category, 1)
    products.push({
      ...categoryProducts[0],
      id: i + 1
    })
  }
  
  return products
}

// WhatsApp quote function
export const handleWhatsAppQuote = (products: Product | Product[]) => {
  const phoneNumber = '5215586160482'
  let message = 'Hola! Me interesa cotizar '
  
  if (Array.isArray(products)) {
    message += `estos ${products.length} productos:\n\n`
    products.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - $${product.price.toFixed(2)}\n`
    })
  } else {
    message += `este producto:\n\n*${products.name}*\nPrecio: $${products.price.toFixed(2)}\n`
  }
  
  message += '\n¿Podrían darme más información?'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

export type { Product }