import React from 'react';
import { FaChevronDown, FaTools, FaClock, FaCalendarAlt, FaFire, FaWater, FaHome } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: '¿Cuánto cuesta una reforma integral de vivienda?',
      answer: 'Depende de superficie, calidades y licencias, pero oscila entre 450 €/m² y 700 €/m². Pide tu presupuesto sin ningún tipo de compromiso y lo sabrás con exactitud.',
      icon: <FaTools className="text-blue-500 text-xl" />
    },
    {
      id: 2,
      question: '¿Trabajáis en la provincia o solo en la capital?',
      answer: 'Cubrimos ciudad y provincia: Armilla, Albolote, Santa Fe, La Zubia, Motril y más.',
      icon: <FaClock className="text-blue-500 text-xl" />
    },
    {
      id: 3,
      question: '¿Gestionáis licencias y permisos?',
      answer: 'Sí. Incluimos gestión integral de licencias municipales y autonómicas.',
      icon: <FaCalendarAlt className="text-blue-500 text-xl" />
    }
  ];

  return (
    <section className="relative py-10 lg:py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Elemento decorativo */}
      <div className="absolute top-20 right-0 opacity-10">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3B82F6" d="M45.7,-58.1C58.6,-48.8,67.5,-34.3,70.7,-18.9C73.9,-3.5,71.3,12.8,63.1,26.8C55,40.8,41.2,52.5,25.1,61.9C9,71.3,-9.4,78.4,-23.6,73.5C-37.8,68.6,-47.8,51.7,-57.1,35.3C-66.4,18.9,-75,2.9,-73.3,-12.1C-71.6,-27.1,-59.6,-40.9,-45.2,-49.9C-30.8,-58.8,-13.9,-62.8,1.7,-64.9C17.3,-67,34.6,-67.3,45.7,-58.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado */}
        <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="hidden lg:absolute inset-x-0 bottom-2 h-3 bg-blue-200/50 z-0"></span>
              <span className="relative z-10">Preguntas Frecuentes</span>
            </span>
            <br />sobre <span className="text-blue-600">reformas en Granada</span>
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos tus dudas sobre servicios de reformas integrales, parciales y construcción en Granada y provincia
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <details 
              key={faq.id} 
              className="mb-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <summary className="list-none cursor-pointer">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 text-gray-400 group-open:text-blue-500 group-open:rotate-180 transition-all">
                      <FaChevronDown />
                    </div>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6 -mt-4">
                <p className="text-gray-600 pl-10">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
       <div className="text-center mt-10 lg:mt-16">
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    {/* Botón Contacto */}
    <a 
      href="#contacto" 
      className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
    >
      <span className="mr-3">¿Necesitas una reforma en Granada?</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
      </svg>
    </a>

    {/* Botón Urgencias */}
    <a 
      href="tel:+34612345678" 
      className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
    >
      <span className="mr-3">Urgencias 24 horas</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    </a>
  </div>

  <p className="mt-4 text-gray-500 text-sm">
    <strong>Profesionales de reformas en Granada</strong> disponibles para presupuestos y trabajos programados
  </p>
</div>
      </div>
    </section>
  );
};

export default FAQ;