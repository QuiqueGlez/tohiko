'use client'

import React from 'react'
import { FaHome, FaClipboardList, FaTools, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const ReformasIntegralesContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas Integrales en <span className="text-blue-300">Granada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Tu vivienda o local completamente renovado con equipo propio, licencias gestionadas y presupuesto cerrado
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

      {/* Qué incluye */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Qué incluye una reforma integral?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaTools className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Demoliciones y preparación</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Demolición selectiva</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Retirada de escombros</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Protección de elementos</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHome className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Instalaciones completas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Electricidad</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Fontanería</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Calefacción/climatización</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaClipboardList className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Diseño 3D personalizado</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Planos técnicos</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Renderizados realistas</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Distribución optimizada</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaCheckCircle className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Acabados premium</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Pavimentos y revestimientos</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Pintura y decoración</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Carpintería a medida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestro proceso de reforma integral
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consultoría y medición</h3>
                  <p className="text-gray-600">Visitamos tu propiedad, analizamos necesidades y tomamos medidas precisas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Diseño 3D y presupuesto</h3>
                  <p className="text-gray-600">Creamos el diseño personalizado y te entregamos un presupuesto cerrado sin sorpresas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Licencias y permisos</h3>
                  <p className="text-gray-600">Gestionamos todos los trámites necesarios con el ayuntamiento.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ejecución con cronograma</h3>
                  <p className="text-gray-600">Reforma completa con supervisión diaria y cumplimiento de plazos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entrega y garantía</h3>
                  <p className="text-gray-600">Tu vivienda lista para amueblar con garantía completa de 2 años.</p>
                </div>
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
              ¿Listo para tu reforma integral?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Solicita tu presupuesto sin compromiso y descubre cómo transformamos tu hogar
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
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos tu proyecto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Describe tu proyecto de reforma integral..."
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

export default ReformasIntegralesContent
