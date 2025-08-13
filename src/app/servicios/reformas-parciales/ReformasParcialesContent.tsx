'use client'

import React from 'react'
import { FaBath, FaUtensils, FaCouch, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const ReformasParcialesContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas Parciales en <span className="text-blue-300">Granada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforma baños, cocinas y salones con acabados premium y muebles a medida
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

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nuestras reformas parciales
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Baños */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBath className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Reforma de Baños</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Cambio de bañera por plato de ducha</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Mamparas y griferías premium</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Azulejos y pavimentos</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Muebles de baño a medida</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Iluminación LED</li>
                </ul>
                <p className="text-sm text-gray-600">Desde 3.500€</p>
              </div>
              
              {/* Cocinas */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaUtensils className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Reforma de Cocinas</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Encimeras de cuarzo/granito</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Muebles de cocina a medida</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Electrodomésticos integrados</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Península o isla central</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Instalación eléctrica renovada</li>
                </ul>
                <p className="text-sm text-gray-600">Desde 8.000€</p>
              </div>
              
              {/* Salones */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaCouch className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Reforma de Salones</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Tabiquería y distribución</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Suelos laminados/parquet</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Pintura y decoración</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Muebles empotrados</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Sistema de climatización</li>
                </ul>
                <p className="text-sm text-gray-600">Desde 5.000€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por qué elegir reformas parciales?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Menor inversión</h3>
                <p className="text-gray-600">Renueva solo las estancias que necesitas, optimizando tu presupuesto.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Menos molestias</h3>
                <p className="text-gray-600">Obras más rápidas sin tener que abandonar tu hogar.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Resultados inmediatos</h3>
                <p className="text-gray-600">Transforma tu hogar por fases y disfruta cada mejora.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Calidad garantizada</h3>
                <p className="text-gray-600">Mismo equipo y estándares que en reformas integrales.</p>
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
              ¿Qué estancia quieres renovar?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Solicita tu presupuesto personalizado sin compromiso
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
                  <label htmlFor="estancia" className="block text-sm font-medium text-gray-700 mb-1">¿Qué quieres reformar?</label>
                  <select
                    id="estancia"
                    name="estancia"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Selecciona una estancia</option>
                    <option value="baño">Baño</option>
                    <option value="cocina">Cocina</option>
                    <option value="salon">Salón</option>
                    <option value="varios">Varias estancias</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos tu proyecto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Describe qué te gustaría cambiar..."
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

export default ReformasParcialesContent
