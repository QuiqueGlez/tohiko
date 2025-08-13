'use client'

import React from 'react'
import { FaMapMarkerAlt, FaUmbrellaBeach, FaBuilding, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const MotrilContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas en <span className="text-blue-300">Motril</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Especialistas en reformas en Motril y la costa de Granada. Experiencia en viviendas costeras y apartamentos turísticos
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

      {/* Servicios en Motril */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestros servicios en Motril
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaUmbrellaBeach className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas de Apartamentos Turísticos</h3>
                <p className="text-gray-600">
                  Espacios optimizados para el alquiler vacacional con diseño funcional y atractivo.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHome className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Viviendas Vacacionales</h3>
                <p className="text-gray-600">
                  Reformas adaptadas al clima costero con materiales resistentes a la humedad marina.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBuilding className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Tratamientos Anti-humedad</h3>
                <p className="text-gray-600">
                  Soluciones especializadas para combatir la humedad marina típica de la costa.
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
              Trabajamos en todas las zonas de Motril
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Motril Centro</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Casco histórico</li>
                  <li>• Zona comercial</li>
                  <li>• Barrio de San Antonio</li>
                  <li>• Ensanche urbano</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Playa Granada y Costa</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Playa Granada</li>
                  <li>• Torrenueva</li>
                  <li>• Carchuna</li>
                  <li>• Primera línea de playa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de trabajar en Motril */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por qué somos especialistas en Motril?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUmbrellaBeach className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Experiencia en clima costero</h3>
                <p className="text-gray-600">Conocemos los desafíos del ambiente marino y usamos materiales específicos para la costa.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mercado turístico</h3>
                <p className="text-gray-600">Entendemos las necesidades del sector turístico y optimizamos espacios para el alquiler vacacional.</p>
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
              ¿Tienes un proyecto en Motril?
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
                    placeholder="Ej: Playa Granada, Centro..."
                  />
                </div>
                
                <div>
                  <label htmlFor="tipoPropiedad" className="block text-sm font-medium text-gray-700 mb-1">Tipo de propiedad</label>
                  <select
                    id="tipoPropiedad"
                    name="tipoPropiedad"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Selecciona el tipo</option>
                    <option value="apartamento-turistico">Apartamento turístico</option>
                    <option value="vivienda-vacacional">Vivienda vacacional</option>
                    <option value="primera-residencia">Primera residencia</option>
                    <option value="local-comercial">Local comercial</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos tu proyecto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Describe tu proyecto en Motril..."
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

export default MotrilContent
