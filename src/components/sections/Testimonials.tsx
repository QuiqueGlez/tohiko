import React from 'react';
import { FaCheckCircle, FaClock, FaEuroSign, FaFileAlt, FaUsers } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-white py-10 lg:py-20 overflow-hidden">
      {/* Efecto decorativo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-10 lg:mb-20 max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Confianza garantizada
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Por qué estamos entre las mejores empresas de reformas?
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600">
            Los <strong>profesionales de reformas en Granada</strong> más cualificados para <strong>reformas integrales</strong>, <strong>parciales</strong> y todo tipo de servicios de <strong>construcción en Granada y provincia</strong>.
            <br className="hidden md:block" /> Servicio <strong>profesional</strong> rápido y con garantía por escrito.
          </p>
        </div>

        {/* Grid de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-5 gap-6">
            {/* Equipo propio */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaCheckCircle className="text-2xl" />
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equipo propio especializado</h3>
              <p className="text-gray-600 mb-6">Albañiles, fontaneros, electricistas y aparejadores propios.</p>
            <a href="#contacto" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Pide presupuesto <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

            {/* Materiales premium */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaClock className="text-2xl" />
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materiales premium al precio de mayorista</h3>
              <p className="text-gray-600 mb-6">Acabados de alta calidad optimizando costes y logística.</p>
            <a href="tel:+34666666666" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Llamar ahora <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

            {/* Garantía */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaEuroSign className="text-2xl" />
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seguro RC y garantía 10 años</h3>
              <p className="text-gray-600 mb-6">Tranquilidad total con cobertura y garantías por escrito.</p>
            <a href="#tarifas" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Ver condiciones <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

            {/* Licencias y subvenciones */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaFileAlt className="text-2xl" />
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestión integral de licencias y subvenciones</h3>
              <p className="text-gray-600 mb-6">Tramitación completa y asesoría técnica.</p>
            <a href="#contacto" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Pedir presupuesto <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

            {/* Lean Construction y residuos */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaUsers className="text-2xl" />
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Protocolo Lean y control de residuos</h3>
              <p className="text-gray-600 mb-6">Obra eficiente y sostenible: tu obra y el planeta importan.</p>
            <a href="#opiniones" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Ver opiniones <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-0.5 inline-block">
            <a 
              href="#contacto" 
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold py-5 px-8 rounded-[14px] text-lg transition-all duration-300 group"
            >
              <span className="mr-3">Pide hoy tu presupuesto y comprueba la diferencia</span>
              <span className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors">
                <FaArrowRight className="text-sm" />
              </span>
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            <strong>Fontanero Vigo</strong> disponible 24h - Reparación de bajantes - Servicio a domicilio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;