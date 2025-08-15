import React from 'react'
import { FaBolt, FaWrench, FaWindows, FaHammer, FaPaintRoller, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import StandardContactForm from '@/components/ui/StandardContactForm'

const TrabajosComplementariosContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/Images/Fotosreformas/reformas interiores granada.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trabajos <span className="text-blue-300">Complementarios</span><br />
              en Granada
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Electricidad, fontanería, ventanas de PVC y aluminio, herrería, pladur y pintura. 
              Servicios especializados incluidos en nuestras reformas integrales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Solicitar Presupuesto
              </a>
              <a href="tel:+34958123456" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros Trabajos Complementarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para completar cualquier proyecto de reforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electricidad */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBolt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Electricidad</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Instalaciones eléctricas completas
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Cuadros eléctricos y automatismos
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Iluminación LED y domótica
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Certificados y boletines
                </li>
              </ul>
            </div>

            {/* Fontanería */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaWrench className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fontanería</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Instalaciones de agua y gas
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Calefacción y suelo radiante
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Sanitarios y grifería
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Reparaciones urgentes
                </li>
              </ul>
            </div>

            {/* Ventanas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaWindows className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ventanas PVC y Aluminio</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Ventanas de PVC y aluminio
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Puertas exteriores e interiores
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Mamparas y cerramientos
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Persianas y toldos
                </li>
              </ul>
            </div>

            {/* Herrería */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHammer className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Herrería</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Rejas y cancelas de seguridad
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Escaleras y barandillas
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Estructuras metálicas
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Trabajos de forja artística
                </li>
              </ul>
            </div>

            {/* Pladur */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaWrench className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pladur y Yeso</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Tabiques y trasdosados
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Techos y falsos techos
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Muebles de obra integrados
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Acabados y molduras
                </li>
              </ul>
            </div>

            {/* Pintura */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaPaintRoller className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pintura</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Pintura interior y exterior
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Lacados y barnizados
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Técnicas decorativas especiales
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Tratamientos antihumedad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos Complementarios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Ejemplos de Trabajos Realizados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas integrales almuñecar.webp" 
                  alt="Trabajos complementarios en Almuñécar" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Almuñécar</h3>
                    <p className="text-sm">Trabajos integrales</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas integrales la zubia.webp" 
                  alt="Trabajos complementarios en La Zubia" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">La Zubia</h3>
                    <p className="text-sm">Servicios especializados</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas integrales zaidin.webp" 
                  alt="Trabajos complementarios en Zaidín" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Zaidín</h3>
                    <p className="text-sm">Oficios varios</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/armario empotrado granada.webp" 
                  alt="Armario empotrado en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Armarios Empotrados</h3>
                    <p className="text-sm">Carpintería a medida</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reforma entradas granada.webp" 
                  alt="Reforma de entradas en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Entradas</h3>
                    <p className="text-sm">Accesos renovados</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/Images/Fotosreformas/reformas dormitorios granada.webp" 
                  alt="Reformas de dormitorios en Granada" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Dormitorios</h3>
                    <p className="text-sm">Espacios personalizados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología profesional que garantiza resultados perfectos en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evaluación</h3>
              <p className="text-gray-600">Análisis detallado de las necesidades específicas de cada trabajo complementario</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planificación</h3>
              <p className="text-gray-600">Coordinación de oficios y materiales para optimizar tiempos y resultados</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ejecución</h3>
              <p className="text-gray-600">Realización de los trabajos con profesionales especializados en cada área</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Garantía</h3>
              <p className="text-gray-600">Seguimiento post-trabajo y garantía completa en todos los servicios realizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contacto" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Necesitas Trabajos Complementarios?
              </h2>
              <p className="text-xl text-gray-600">
                Contacta con nosotros y te proporcionaremos un presupuesto detallado sin compromiso
              </p>
            </div>

            <StandardContactForm
              location="Trabajos Complementarios"
              placeholder="Describe qué trabajos complementarios necesitas (electricidad, fontanería, ventanas, herrería, pladur, pintura...)..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TrabajosComplementariosContent
