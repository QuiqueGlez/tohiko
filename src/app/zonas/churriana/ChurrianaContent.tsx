'use client'

import React from 'react'
import { FaMapMarkerAlt, FaBuilding, FaHome, FaPhone, FaEnvelope, FaArrowRight, FaTree } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import StandardContactForm from '@/components/ui/StandardContactForm'

const ChurrianaContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas en <span className="text-blue-300">Churriana de la Vega</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Especialistas en reformas en Churriana de la Vega. Experiencia en viviendas de la vega granadina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34627050312" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg">
                <FaPhone className="inline mr-2" /> Llamar ahora
              </a>
              <a href="#presupuesto" className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                <FaEnvelope className="inline mr-2" /> Pedir presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Nuestros servicios en Churriana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Reformas integrales */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src="/Images/Fotosreformas/reformas integrales granada.webp" 
                    alt="Reforma integral en Churriana" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">Reformas integrales</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-3">Qué incluye</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Demoliciones</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Instalaciones completas</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Diseño 3D</li>
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold mb-1">Resultado</div>
                  <p className="text-gray-600 mb-6">Vivienda o local listo para amueblar</p>
                  <a href="/servicios/reformas-integrales" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Ver más detalles <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>

              {/* Reformas parciales */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src="/Images/Fotosreformas/reformas baños en granada.webp" 
                    alt="Reforma de baño en Churriana" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">Reformas parciales (baños, cocinas, salón)</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-3">Qué incluye</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Plato de ducha</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Encimeras</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Muebles a medida</li>
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold mb-1">Resultado</div>
                  <p className="text-gray-600 mb-6">Estancias listas para disfrutar</p>
                  <a href="/servicios/reformas-parciales" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Ver más detalles <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>

              {/* Reformas de locales comerciales */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src="/Images/Fotosreformas/reformas locales comerciales.webp" 
                    alt="Reforma de local comercial en Churriana" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">Reformas de locales comerciales</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-3">Qué incluye</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Proyecto y licencias</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Adecuación de instalaciones</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Imagen y acabados</li>
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold mb-1">Resultado</div>
                  <p className="text-gray-600 mb-6">Local listo para facturar</p>
                  <a href="/servicios/reformas-locales-comerciales" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Ver más detalles <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>

              {/* Reformas de comunidades de vecinos */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src="/Images/Fotosreformas/reformas fachadas granada.webp" 
                    alt="Reforma de comunidades de vecinos en Churriana" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">Reformas de comunidades de vecinos</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-3">Qué incluye</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Mantenimiento y zonas comunes</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Bajantes y fontanería</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Accesibilidad</li>
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold mb-1">Resultado</div>
                  <p className="text-gray-600 mb-6">Comunidad segura y eficiente</p>
                  <a href="/servicios/reformas-comunidades" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Ver más detalles <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>

              {/* Reformas de piscinas */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src="/Images/Fotosreformas/reformas piscinas granada.webp" 
                    alt="Reforma de piscinas en Churriana" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">Reformas de piscinas</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-3">Qué incluye</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Impermeabilización certificada</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Gresite o liner</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Depuración e iluminación</li>
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold mb-1">Resultado</div>
                  <p className="text-gray-600 mb-6">Piscina lista para la temporada</p>
                  <a href="/servicios/reformas-piscinas" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Ver más detalles <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>

              {/* Trabajos complementarios */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src="/Images/Fotosreformas/reformas interiores granada.webp" 
                    alt="Trabajos complementarios en Churriana" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">Trabajos complementarios</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-3">Qué incluye</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Electricidad</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Fontanería</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Ventanas PVC y aluminio</li>
                    <li className="flex items-center text-gray-600"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Herrería, pladur y pintura</li>
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold mb-1">Resultado</div>
                  <p className="text-gray-600 mb-6">En reformas integrales va incluido</p>
                  <a href="/servicios/trabajos-complementarios" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Ver más detalles <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
                </div>
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
              Trabajamos en todas las zonas de Churriana
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Churriana Centro</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Casco urbano</li>
                  <li>• Plaza del Ayuntamiento</li>
                  <li>• Zona comercial</li>
                  <li>• Barrios tradicionales</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Zonas Residenciales y Nuevos Desarrollos</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Nuevas urbanizaciones</li>
                  <li>• Zona de expansión</li>
                  <li>• Acceso a Granada capital</li>
                  <li>• Zona metropolitana sur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de trabajar en Churriana */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Por qué somos especialistas en Churriana?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTree className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Entorno natural privilegiado</h3>
                <p className="text-gray-600">Conocemos las particularidades de construir y reformar en un entorno natural único cerca de Granada.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cercanía a Granada</h3>
                <p className="text-gray-600">Ubicación estratégica que combina tranquilidad residencial con acceso rápido a Granada capital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="presupuesto" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un proyecto en Churriana?</h2>
            <p className="text-xl mb-8 text-blue-100">Solicita tu presupuesto sin compromiso</p>
            <StandardContactForm 
              location="Churriana" 
              placeholder="Describe tu proyecto en Churriana..." 
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ChurrianaContent
