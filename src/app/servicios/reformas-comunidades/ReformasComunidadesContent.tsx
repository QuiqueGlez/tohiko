'use client'

import React from 'react'
import { FaBuilding, FaUsers, FaWrench, FaCheckCircle, FaPhone, FaEnvelope, FaHandsHelping } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import StandardContactForm from '@/components/ui/StandardContactForm'

const ReformasComunidadesContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas de Comunidades de Vecinos en <span className="text-blue-300">Granada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Tu comunidad segura y eficiente con mantenimiento integral y mejoras de accesibilidad
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
              ¿Qué incluye una reforma de comunidad?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBuilding className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Mantenimiento y zonas comunes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Portales y escaleras</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Patios y jardines</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Cubiertas y azoteas</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaWrench className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Bajantes y fontanería general</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Renovación de bajantes</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Instalaciones generales</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Sistemas de agua</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHandsHelping className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Mejoras de accesibilidad</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Instalación de ascensores</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Rampas de acceso</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Eliminación de barreras</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaUsers className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Fachadas y aislamientos</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Rehabilitación de fachadas</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Aislamiento térmico</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Impermeabilización</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Reformas de Comunidades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Reformas de Comunidades en Granada
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reforma fachada granada.webp" 
                  alt="Reforma de fachada de comunidad en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Fachada Principal</h3>
                    <p className="text-sm">Renovación exterior</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas fachadas granada.webp" 
                  alt="Reformas de fachadas de comunidades en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Fachadas Completas</h3>
                    <p className="text-sm">Rehabilitación integral</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/fachada comunidad de vecinos.webp" 
                  alt="Fachada de comunidad de vecinos reformada en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Comunidad de Vecinos</h3>
                    <p className="text-sm">Fachada renovada</p>
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
              Nuestro proceso para comunidades
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reunión con administrador y vecinos</h3>
                  <p className="text-gray-600">Analizamos las necesidades de la comunidad y priorizamos las intervenciones.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Informe técnico detallado</h3>
                  <p className="text-gray-600">Elaboramos un diagnóstico completo del estado del edificio y propuestas de mejora.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3. Asesoramiento en opciones de mejora</h3>
                  <p className="text-gray-600">Te orientamos sobre las soluciones más eficientes y sostenibles para tu comunidad, ayudando a tomar decisiones informadas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ejecución coordinada</h3>
                  <p className="text-gray-600">Obras planificadas para minimizar molestias a los vecinos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comunidad renovada</h3>
                  <p className="text-gray-600">Edificio seguro, eficiente y con mayor valor patrimonial.</p>
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
              ¿Tu comunidad necesita reformas?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Solicita tu estudio técnico sin compromiso y descubre las mejoras posibles
            </p>
            
            <StandardContactForm
              location="Reformas de Comunidades"
              placeholder="Describe las necesidades de reforma de tu comunidad (fachada, escaleras, azotea, patio...)..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ReformasComunidadesContent
