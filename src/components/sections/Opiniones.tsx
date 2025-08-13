"use client";

import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Opiniones: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sara',
      location: 'Zaidín, Granada',
      rating: 5,
      content: 'La obra empezó el lunes y el viernes ya estaba todo como prometieron — sin polvo y con la cocina de mis sueños.',
      date: '15/05/2024'
    },
    {
      id: 2,
      name: 'Carlos',
      location: 'Realejo, Granada',
      rating: 5,
      content: 'Los únicos albañiles que llegan antes que tú al portal.',
      date: '22/04/2024'
    },
    {
      id: 3,
      name: 'Lucía',
      location: 'Armilla, Granada',
      rating: 5,
      content: 'Presupuesto cerrado y cumplieron plazos. Acabados impecables en el baño.',
      date: '10/03/2024'
    },
    {
      id: 4,
      name: 'Javier',
      location: 'La Zubia, Granada',
      rating: 5,
      content: 'Coordinación perfecta de gremios. Cero sorpresas y comunicación diaria.',
      date: '28/02/2024'
    },
    {
      id: 5,
      name: 'Elena',
      location: 'Albolote, Granada',
      rating: 4,
      content: 'Rehabilitación con aislamiento y aerotermia. Se nota el ahorro en energía.',
      date: '12/01/2024'
    },
    {
      id: 6,
      name: 'Miguel',
      location: 'Granada Centro',
      rating: 5,
      content: 'Diseño 3D y ejecución tal cual. Recomiendo 100%.',
      date: '18/12/2023'
    },
    {
      id: 7,
      name: 'Natalia',
      location: 'Motril, Granada',
      rating: 5,
      content: 'Cambio de bañera por plato de ducha en 48h. Limpieza final excelente.',
      date: '02/12/2023'
    },
    {
      id: 8,
      name: 'Álvaro',
      location: 'Churriana, Granada',
      rating: 5,
      content: 'Ventanas PVC y nueva cocina. Equipo serio y muy cuidadoso.',
      date: '20/11/2023'
    }
  ];

  return (
    <section className="relative py-10  lg:py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Elemento decorativo */}
      <div className="absolute top-20 left-0 opacity-10">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3B82F6" d="M45.7,-58.1C58.6,-48.8,67.5,-34.3,70.7,-18.9C73.9,-3.5,71.3,12.8,63.1,26.8C55,40.8,41.2,52.5,25.1,61.9C9,71.3,-9.4,78.4,-23.6,73.5C-37.8,68.6,-47.8,51.7,-57.1,35.3C-66.4,18.9,-75,2.9,-73.3,-12.1C-71.6,-27.1,-59.6,-40.9,-45.2,-49.9C-30.8,-58.8,-13.9,-62.8,1.7,-64.9C17.3,-67,34.6,-67.3,45.7,-58.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200/50 z-0"></span>
              <span className="relative z-10">Opiniones reales: la mejor garantía</span>
            </span>
            <br />de nuestras <span className="text-blue-600">reformas integrales en Granada</span>
          </h2>
          <div className="flex justify-center items-center">
            <div className="flex mr-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">+300 clientes | 15+ años | 97% satisfacción</span>
          </div>
        </div>

        {/* Carrusel de testimonios (auto-scroll) */}
        <div className="group relative mb-16 overflow-hidden">
          <div className="flex gap-6 w-max animate-[opiniones-marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${idx}`}
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="p-6 ">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-bold text-gray-800">{testimonial.rating}</span>
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <FaQuoteLeft className="absolute -top-2 left-0 text-blue-100 text-3xl" />
                    <p className="text-gray-600 pl-8 relative z-10 ml-2">{testimonial.content}</p>
                  </div>
                  <div className="text-sm text-gray-400">{testimonial.date}</div>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#34A853"/>
                      <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="#34A853"/>
                      <path d="M12 16C9.33 16 4 17.34 4 20V21C4 21.55 4.45 22 5 22H19C19.55 22 20 21.55 20 21V20C20 17.34 14.67 16 12 16Z" fill="#34A853"/>
                    </svg>
                    <span className="text-sm text-gray-600">Publicado en Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style jsx global>{`
            @keyframes opiniones-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* CTA con nuevo diseño */}
     <div className="text-center">
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    {/* Botón Deja tu opinión */}
    <a 
      href="#contacto" 
      className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
    >
      <span className="mr-3">Deja tu opinión</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
      </svg>
    </a>

    {/* Botón Ver opiniones */}
    <a 
      href="https://g.page/r/Cd.../review" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
    >
      <span className="mr-3">Ver opiniones</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
      </svg>
    </a>
  </div>

  <p className="mt-4 text-gray-500 text-sm">
    Más de 300 clientes avalan nuestra transparencia, experiencia de más de 15 años y un 97% de satisfacción.
  </p>
</div>
      </div>
    </section>
  );
};

export default Opiniones;