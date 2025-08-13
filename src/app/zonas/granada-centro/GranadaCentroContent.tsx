'use client'

import React from 'react'
import { FaMapMarkerAlt, FaBuilding, FaHistory, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const GranadaCentroContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas en <span className="text-blue-300">Granada Centro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Especialistas en reformas en el centro histórico de Granada con experiencia en edificios emblemáticos
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

      {/* Servicios en Granada Centro */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestros servicios en Granada Centro
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBuilding className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas Integrales</h3>
                <p className="text-gray-600">
                  Renovación completa de viviendas en el centro histórico respetando la arquitectura original.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHistory className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Rehabilitación</h3>
                <p className="text-gray-600">
                  Recuperación de edificios históricos con técnicas tradicionales y materiales auténticos.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaMapMarkerAlt className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas Parciales</h3>
                <p className="text-gray-600">
                  Baños, cocinas y salones adaptados a las características únicas del centro.
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
              Trabajamos en todas las zonas del centro
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Centro Histórico</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Plaza Nueva y alrededores</li>
                  <li>• Calle Elvira</li>
                  <li>• Plaza de la Trinidad</li>
                  <li>• Zona Catedral</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Centro Comercial</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Acera del Darro</li>
                  <li>• Gran Vía de Colón</li>
                  <li>• Calle Recogidas</li>
                  <li>• Plaza del Carmen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de trabajar en el centro */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por qué somos especialistas en Granada Centro?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHistory className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Experiencia en edificios históricos</h3>
                <p className="text-gray-600">Conocemos las particularidades de los edificios del centro y las normativas especiales.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Logística especializada</h3>
                <p className="text-gray-600">Gestionamos accesos, permisos y horarios adaptados a las restricciones del centro.</p>
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
              ¿Tienes un proyecto en Granada Centro?
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
                    placeholder="Ej: Plaza Nueva, Calle Elvira..."
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos tu proyecto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Describe tu proyecto en Granada Centro..."
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

export default GranadaCentroContent
