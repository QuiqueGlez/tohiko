'use client'

import React from 'react'
import { FaStore, FaClipboardList, FaTools, FaCheckCircle, FaPhone, FaEnvelope, FaCertificate } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import StandardContactForm from '@/components/ui/StandardContactForm'

const ReformasLocalesComerciales: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas de Locales Comerciales en <span className="text-blue-300">Granada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Tu local comercial listo para facturar con proyecto, licencias e imagen completa
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
              ¿Qué incluye una reforma de local comercial?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaCertificate className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Proyecto técnico completo</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Planos de distribución</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Memoria técnica</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Cumplimiento normativas</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaClipboardList className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Gestión integral de licencias</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Licencia de apertura</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Trámites municipales</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Seguimiento completo</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaTools className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Adecuación de instalaciones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Electricidad comercial</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Fontanería y saneamiento</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Climatización y ventilación</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaStore className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Imagen y acabados premium</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Diseño interior comercial</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Escaparates y vitrinas</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Señalética y rotulación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Locales Comerciales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Locales Comerciales Reformados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reforma local comercial nuevo.webp" 
                  alt="Reforma de local comercial nuevo en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Local Nuevo</h3>
                    <p className="text-sm">Diseño moderno</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reforma local.webp" 
                  alt="Reforma de local comercial en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Local Reformado</h3>
                    <p className="text-sm">Optimización completa</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas locales comerciales.webp" 
                  alt="Reformas de locales comerciales en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Locales Comerciales</h3>
                    <p className="text-sm">Especialización sectorial</p>
                  </div>
                </div>
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
              Nuestro proceso para locales comerciales
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Análisis del negocio y local</h3>
                  <p className="text-gray-600">Estudiamos tu modelo de negocio y las características del local para optimizar la distribución.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proyecto técnico y licencias</h3>
                  <p className="text-gray-600">Elaboramos el proyecto completo y gestionamos todas las licencias necesarias.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Diseño interior comercial</h3>
                  <p className="text-gray-600">Creamos un espacio que maximice las ventas y ofrezca la mejor experiencia al cliente.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ejecución con mínimas molestias</h3>
                  <p className="text-gray-600">Reforma adaptada a tus horarios de negocio para minimizar las pérdidas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local listo para facturar</h3>
                  <p className="text-gray-600">Tu negocio operativo con todas las licencias en regla y diseño optimizado.</p>
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
              ¿Listo para abrir tu negocio?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Solicita tu presupuesto sin compromiso y descubre cómo crear el local perfecto
            </p>
            
            <StandardContactForm
              location="Reformas de Locales Comerciales"
              placeholder="Describe tu proyecto de local comercial (restaurante, tienda, oficina...)..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ReformasLocalesComerciales
