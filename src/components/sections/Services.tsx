import React from 'react';
import { FaFaucet, FaWater, FaClock, FaFireAlt, FaBuilding, FaArrowRight } from 'react-icons/fa';
import { MdOutlinePlumbing } from 'react-icons/md';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative bg-gray-50 py-10 lg:py-20 overflow-hidden">
      {/* Efecto de agua decorativo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/5 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado con efecto premium */}
        <div className="text-center mb-10 lg:mb-20 max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Soluciones profesionales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray- mb-6 leading-tight">
          Tu empresa de reformas integrales en Granada que sí <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">cumple lo que promete</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600">
          Nuestro equipo multidisciplinar convierte tu proyecto de reforma en una realidad impecable con gestión integral de licencias, materiales y gremios dentro de plazo y con presupuesto sin ningún tipo de compromiso.
            <br className="hidden md:block" /> Garantía de satisfacción en todos nuestros trabajos.
          </p>
        </div>

        {/* Grid de servicios premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Reformas integrales */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/Images/Fotosreformas/reformas integrales granada.webp" 
                alt="Reforma integral en Granada - Interior moderno con puerta de madera" 
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
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>

          {/* Reformas parciales */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/Images/Fotosreformas/reformas baños en granada.webp" 
                alt="Reforma de baño en Granada" 
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
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>

          {/* Reformas de locales comerciales */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/Images/Fotosreformas/reformas cocinas en granada.webp" 
                alt="Reforma de local comercial en Granada" 
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
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>

          {/* Reformas de comunidades de vecinos */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/Images/Fotosreformas/reformas fachadas granada.webp" 
                alt="Reforma de comunidades de vecinos en Granada" 
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
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>

          {/* Reformas de piscinas */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/Images/Fotosreformas/reformas piscinas granada.webp" 
                alt="Reforma de piscinas en Granada" 
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
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>
          
        </div>

        {/* Trabajos complementarios */}
        <div className="mt-10 lg:mt-16 max-w-5xl mx-auto">
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Trabajos complementarios</h3>
            <p className="text-gray-600">También realizamos <strong>electricidad</strong>, <strong>fontanería</strong>, <strong>ventanas de PVC y aluminio</strong>, <strong>herrería</strong>, <strong>pladur y yeso</strong> y <strong>pintura</strong>. En las <strong>reformas integrales</strong> estos oficios van incluidos por defecto.</p>
          </div>
        </div>

        {/* CTA premium */}
        <div className="mt-10 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-0.5 inline-block">
            <a 
              href="#contacto" 
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold py-5 px-8 rounded-[14px] text-lg transition-all duration-300 group"
            >
              <span className="mr-3">Solicítalo ahora y descubre una obra sin sobrecostes</span>
              <span className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors">
                <FaArrowRight className="text-sm" />
              </span>
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Reformas económicas sin renunciar a la calidad: logística optimizada y metodología Lean
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;