# MIA PETS - Tienda de Productos para Mascotas

Una aplicación web completa desarrollada con NextJS para MIA PETS, una tienda especializada en productos para mascotas ubicada en Nezahualcóyotl, Estado de México.

## Características

- **Página de Inicio**: Información de la empresa (misión, visión, valores, objetivos) y carrusel de productos populares
- **Categorías de Productos**: Páginas específicas para perros, gatos, aves, peces, roedores, reptiles y correas
- **Base de Datos**: PostgreSQL con Prisma ORM para gestión de productos
- **Cotizaciones WhatsApp**: Solicitud de cotizaciones individuales y múltiples vía WhatsApp
- **Página de Contacto**: Ubicación, mapa, teléfono y formulario de contacto
- **Redes Sociales**: Enlaces a Facebook, Instagram y TikTok
- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Modo Oscuro/Claro**: Soporte completo para temas

## Tecnologías Utilizadas

- **Frontend**: NextJS 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Base de Datos**: PostgreSQL con Prisma ORM
- **UI Components**: Radix UI, Lucide React Icons
- **Animaciones**: Framer Motion, React Intersection Observer

## Instalación y Configuración

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd mia-pets
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env` en la raíz del proyecto:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/miapets"
```

4. **Configurar la base de datos**
```bash
npx prisma generate
npx prisma db push
```

5. **Poblar la base de datos**
Ejecutar el endpoint de seeding:
```bash
curl -X POST http://localhost:3000/api/seed
```

6. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Estructura del Proyecto

```
├── app/
│   ├── api/
│   │   ├── products/route.ts    # API para productos
│   │   └── seed/route.ts        # API para poblar BD
│   ├── categoria/[categoria]/   # Páginas de categorías
│   ├── contacto/               # Página de contacto
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página de inicio
├── components/
│   ├── header.tsx              # Navegación principal
│   ├── footer.tsx              # Pie de página
│   └── theme-provider.tsx      # Proveedor de temas
├── data/
│   └── mia_pets_data.json      # Datos de productos
├── lib/
│   └── utils.ts                # Utilidades
├── prisma/
│   └── schema.prisma           # Esquema de base de datos
└── tailwind.config.ts          # Configuración Tailwind
```

## Funcionalidades Principales

### 1. Gestión de Productos
- Visualización por categorías
- Búsqueda y filtrado
- Vista en grilla y lista
- Productos populares destacados

### 2. Cotizaciones WhatsApp
- Cotización individual por producto
- Cotización múltiple (selección de varios productos)
- Mensaje automático con detalles del producto

### 3. Contacto
- Información de la tienda
- Mapa interactivo de ubicación
- Formulario de contacto (mailto)
- Enlaces a redes sociales

### 4. Diseño y UX
- Animaciones suaves con Framer Motion
- Efectos parallax en hero section
- Transiciones y hover effects
- Diseño completamente responsivo

## API Endpoints

- `GET /api/products` - Obtener productos (con filtros opcionales)
- `POST /api/products` - Crear nuevo producto
- `POST /api/seed` - Poblar base de datos con datos JSON

## Categorías de Productos

- **Perros**: Productos específicos para perros
- **Gatos**: Productos específicos para gatos  
- **Aves**: Productos para aves
- **Peces**: Productos para peces y acuarios
- **Roedores**: Productos para roedores
- **Reptiles**: Productos para reptiles y anfibios
- **Correas**: Correas y accesorios para pasear mascotas

## Información de Contacto

- **Ubicación**: Nezahualcóyotl, Estado de México
- **Teléfono**: 55 8616 0482
- **WhatsApp**: +52 1 55 8616 0482

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Inicio en producción
npm start

# Linting
npm run lint

# Prisma
npx prisma studio          # Interfaz visual de BD
npx prisma generate        # Generar cliente
npx prisma db push         # Aplicar cambios a BD
```

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.