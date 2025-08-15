'use client'

import React from 'react'
import { FaBath, FaUtensils, FaCouch, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import StandardContactForm from '@/components/ui/StandardContactForm'

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

      {/* Galería de Reformas Parciales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Ejemplos de Reformas Parciales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/expecialistas cocina granada.webp" 
                  alt="Especialistas en cocinas Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Cocina Premium</h3>
                    <p className="text-sm">Electrodomésticos integrados</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reforma cocina granada.webp" 
                  alt="Reforma de cocina en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Cocina Moderna</h3>
                    <p className="text-sm">Isla central</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reforma dormitorio granada.webp" 
                  alt="Reforma de dormitorio en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Dormitorio</h3>
                    <p className="text-sm">Espacio optimizado</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas salon granada.webp" 
                  alt="Reforma de salón en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Salón Moderno</h3>
                    <p className="text-sm">Ambiente acogedor</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/salon reformado granada.webp" 
                  alt="Salón reformado en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Salón Reformado</h3>
                    <p className="text-sm">Espacio renovado</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/baño reformado granada.webp" 
                  alt="Baño reformado en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Baño Reformado</h3>
                    <p className="text-sm">Máximo confort</p>
                  </div>
                </div>
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
            
            <StandardContactForm
              location="Reformas Parciales"
              placeholder="Describe qué estancias quieres renovar (baño, cocina, salón...)..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ReformasParcialesContent
