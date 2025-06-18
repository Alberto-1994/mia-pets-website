"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Bug,
  ShoppingBag
} from 'lucide-react'
import LogoIcon from './LogoIcon'

const Footer = () => {
  const categories = [
    { name: 'Perros', href: '/categoria/perros', icon: Dog },
    { name: 'Gatos', href: '/categoria/gatos', icon: Cat },
    { name: 'Aves', href: '/categoria/aves', icon: Bird },
    { name: 'Peces', href: '/categoria/peces', icon: Fish },
    { name: 'Roedores', href: '/categoria/roedores', icon: Rabbit },
    { name: 'Reptiles', href: '/categoria/reptiles', icon: Bug },
    { name: 'Correas', href: '/categoria/correas', icon: ShoppingBag },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8" />
              <span className="text-2xl font-bold">MIA PETS</span>
            </div>
            <p className="text-gray-300">
              Tu tienda de confianza para todo lo que tu mascota necesita. 
              Productos de calidad y el mejor servicio en Nezahualcóyotl.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Nezahualcóyotl, Estado de México</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>55 8616 0482</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 MIA PETS. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer