'use client'

import React from 'react'
import { FaMapMarkerAlt, FaBuilding, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const ZaidinContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas en <span className="text-blue-300">Zaidín</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Especialistas en reformas en Zaidín con más de 15 años de experiencia en la zona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34627050312"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg"
              >
                <FaPhone className="inline mr-2" /> Llamar ahora
              </a>
              <a
                href="#presupuesto"
                className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                <FaEnvelope className="inline mr-2" /> Pedir presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios en Zaidín */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestros servicios en Zaidín
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBuilding className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas Integrales</h3>
                <p className="text-gray-600">
                  Renovación completa de viviendas en Zaidín adaptadas a las características de la zona.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHome className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas Parciales</h3>
                <p className="text-gray-600">
                  Baños, cocinas y salones modernos que se adaptan perfectamente a las viviendas del Zaidín.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaMapMarkerAlt className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Rehabilitación</h3>
                <p className="text-gray-600">
                  Mejoras energéticas y actualizaciones para edificios residenciales del barrio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas específicas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Trabajamos en todas las zonas del Zaidín
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zaidín Centro</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Avenida de Andalucía</li>
                  <li>• Calle Periodista Eugenio Selles</li>
                  <li>• Plaza del Zaidín</li>
                  <li>• Zona comercial principal</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Zaidín Vergeles</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Barrio de los Vergeles</li>
                  <li>• Zona residencial moderna</li>
                  <li>• Urbanizaciones privadas</li>
                  <li>• Acceso directo a la Circunvalación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de trabajar en Zaidín */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por qué somos especialistas en Zaidín?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBuilding className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Conocimiento del barrio</h3>
                <p className="text-gray-600">Más de 15 años trabajando en Zaidín nos permiten conocer las tipologías de vivienda y sus necesidades específicas.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Logística optimizada</h3>
                <p className="text-gray-600">Excelente comunicación con el resto de Granada y facilidades de aparcamiento para nuestros equipos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="presupuesto" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes un proyecto en Zaidín?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Solicita tu presupuesto especializado sin compromiso
            </p>
            
            <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="600 123 456"
                  />
                </div>
                
                <div>
                  <label htmlFor="zona" className="block text-sm font-medium text-gray-700 mb-1">Zona específica</label>
                  <input
                    type="text"
                    id="zona"
                    name="zona"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Ej: Zaidín Centro, Vergeles..."
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos tu proyecto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Describe tu proyecto en Zaidín..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Solicitar presupuesto gratuito
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ZaidinContent
