'use client'

import React from 'react'
import { FaMapMarkerAlt, FaBuilding, FaHome, FaPhone, FaEnvelope, FaMountain } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const LaZubiaContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas en <span className="text-blue-300">La Zubia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Especialistas en reformas en La Zubia. Experiencia en viviendas unifamiliares en la zona sur del área metropolitana
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

      {/* Servicios en La Zubia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestros servicios en La Zubia
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHome className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas de Unifamiliares</h3>
                <p className="text-gray-600">
                  Renovación completa de viviendas unifamiliares aprovechando el entorno natural de La Zubia.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaMountain className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas con Vistas a Sierra Nevada</h3>
                <p className="text-gray-600">
                  Aprovechamos las vistas privilegiadas a Sierra Nevada en el diseño de terrazas y espacios exteriores.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBuilding className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Ampliaciones y Anexos</h3>
                <p className="text-gray-600">
                  Proyectos de ampliación aprovechando el mayor espacio disponible en la zona.
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
              Trabajamos en todas las zonas de La Zubia
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Núcleo Urbano</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Centro histórico</li>
                  <li>• Plaza del Ayuntamiento</li>
                  <li>• Calle Real</li>
                  <li>• Zona comercial</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Zonas Residenciales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Urbanizaciones modernas</li>
                  <li>• Zona de chalets</li>
                  <li>• Parcelas con jardín</li>
                  <li>• Acceso a Sierra Nevada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de trabajar en La Zubia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por qué somos especialistas en La Zubia?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMountain className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Entorno natural privilegiado</h3>
                <p className="text-gray-600">Aprovechamos el entorno natural y las vistas a Sierra Nevada en nuestros diseños.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Conocimiento local</h3>
                <p className="text-gray-600">Conocemos las características específicas de las viviendas y el entorno de La Zubia.</p>
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
              ¿Tienes un proyecto en La Zubia?
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
                    placeholder="Ej: Centro, Urbanización..."
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos tu proyecto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Describe tu proyecto en La Zubia..."
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

export default LaZubiaContent
