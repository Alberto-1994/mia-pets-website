"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Users, 
  ArrowRight,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Bug,
  ShoppingBag
} from 'lucide-react'
import ProductCarousel from '../components/product-carousel'
import { generatePopularProducts, handleWhatsAppQuote } from '../lib/products'
import { Product } from '@/types/product'
import LogoIcon from '@/components/LogoIcon'

const HomePage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [productsRef, productsInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [categoriesRef, categoriesInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const popularProducts = generatePopularProducts(30)

  const categories = [
    { name: 'Perros', href: '/categoria/perros', icon: Dog, color: 'bg-blue-500' },
    { name: 'Gatos', href: '/categoria/gatos', icon: Cat, color: 'bg-purple-500' },
    { name: 'Aves', href: '/categoria/aves', icon: Bird, color: 'bg-green-500' },
    { name: 'Peces', href: '/categoria/peces', icon: Fish, color: 'bg-cyan-500' },
    { name: 'Roedores', href: '/categoria/roedores', icon: Rabbit, color: 'bg-orange-500' },
    { name: 'Reptiles', href: '/categoria/reptiles', icon: Bug, color: 'bg-emerald-500' },
    { name: 'Correas', href: '/categoria/correas', icon: ShoppingBag, color: 'bg-pink-500' },
  ]

  const handleSingleQuote = (product: Product) => {
    handleWhatsAppQuote(product)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center parallax-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <LogoIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">MIA PETS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Todo lo que tu mascota necesita en un solo lugar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/catalogo"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver Catálogo
              </Link>
              <Link 
                href="/contacto"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-all duration-300"
              >
                Contactanos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Sobre Nosotros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En MIA PETS nos dedicamos a brindar los mejores productos para el cuidado y bienestar de tus mascotas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Misión",
                description: "Proporcionar productos de alta calidad para el bienestar y felicidad de las mascotas, ofreciendo un servicio excepcional a nuestros clientes en Nezahualcóyotl y sus alrededores."
              },
              {
                icon: Eye,
                title: "Visión",
                description: "Ser la tienda líder en productos para mascotas en el Estado de México, reconocida por nuestra calidad, variedad y compromiso con el cuidado animal."
              },
              {
                icon: Target, // Placeholder, will be replaced by LogoIcon conditionally
                title: "Valores",
                description: "Amor por los animales, compromiso con la calidad, servicio al cliente excepcional, honestidad en nuestras recomendaciones y responsabilidad social hacia el bienestar animal."
              },
              {
                icon: Users,
                title: "Objetivos",
                description: "Expandir nuestra gama de productos, mejorar continuamente nuestro servicio, crear una comunidad de amantes de las mascotas y ser el referente en cuidado animal."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {item.title === "Valores" ? (
                  <LogoIcon className="h-12 w-12 mb-4" />
                ) : (
                  <item.icon className="h-12 w-12 text-purple-600 mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Who We Are Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">¿Quiénes Somos?</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  MIA PETS es una empresa familiar dedicada al cuidado y bienestar de las mascotas. 
                  Ubicados en el corazón de Nezahualcóyotl, Estado de México, hemos servido a la 
                  comunidad durante años con productos de la más alta calidad.
                </p>
                <p className="text-gray-600 mb-4">
                  Nuestro equipo está formado por amantes de los animales que entienden las necesidades 
                  específicas de cada tipo de mascota. Desde perros y gatos hasta aves exóticas y reptiles, 
                  tenemos la experiencia y los productos adecuados para cada compañero animal.
                </p>
                <p className="text-gray-600">
                  Creemos que cada mascota merece lo mejor, por eso seleccionamos cuidadosamente 
                  cada producto que ofrecemos, asegurándonos de que cumplan con los más altos 
                  estándares de calidad y seguridad.
                </p>
              </div>
              <div className="relative h-64 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Equipo MIA PETS"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products Carousel */}
      <section ref={productsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ProductCarousel 
              products={popularProducts} 
              onQuote={handleSingleQuote}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Nuestras Categorías</h2>
            <p className="text-xl text-gray-600">
              Encuentra productos específicos para cada tipo de mascota
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={categoriesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={category.href}
                  className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className={`${category.color} p-6 text-white text-center`}>
                    <category.icon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-gray-600 mb-4">
                      Productos especializados para {category.name.toLowerCase()}
                    </p>
                    <div className="flex items-center justify-center text-purple-600 font-semibold">
                      Ver productos
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage