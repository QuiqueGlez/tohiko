'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCalendarCheck, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const PremiumPlumbingHero: React.FC = () => {
  return (
    <section className="relative bg-blue-900 text-white flex items-center overflow-hidden min-h-[100svh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/Images/reformasgranada.webp"
          alt="Equipo realizando reformas en Granada"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay a la izquierda solo para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent md:via-blue-900/40 lg:via-blue-900/30"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto */}
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-0 lg:bg-transparent lg:backdrop-blur-none">
            <div className="mb-6 sm:mb-8 flex items-center">
              <div className="w-12 sm:w-16 h-1 bg-blue-400 mr-4"></div>
              <span className="uppercase tracking-widest text-blue-300 font-semibold text-xs sm:text-sm">Servicios Profesionales</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="block mb-2 sm:mb-4">Reformas</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Granada Pro</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-blue-100 max-w-lg leading-relaxed">
              Más de 15 años realizando <strong>reformas integrales en Granada</strong>. Nuestro equipo combina
              diseño, materiales de primera y ejecución excelente para entregar tu proyecto a tiempo y sin sorpresas.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="tel:+34600123456"
                className="relative group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition w-full sm:w-auto text-center"
                aria-label="Llama ahora"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-lg" /> Llámanos
                </span>
                <span className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition"></span>
              </a>

              <a
                href="#servicios"
                className="relative group border-2 border-blue-300 hover:bg-white/10 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl text-base sm:text-lg hover:border-blue-100 transition w-full sm:w-auto text-center"
                aria-label="Ver servicios"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-3 text-lg" /> Ver Servicios
                </span>
              </a>
            </div>
          </div>

          {/* Formulario - Visible en todos los tamaños pero con diferentes estilos */}
          <div className="lg:justify-end lg:flex">
            <form
              action="#"
              method="POST"
              className="bg-white/95 lg:bg-white/90 backdrop-blur-md text-blue-900 p-6 sm:p-8 rounded-2xl w-full lg:w-[26rem] shadow-2xl lg:transform lg:hover:scale-105 transition duration-300"
            >
              <h3 className="font-bold text-lg sm:text-xl mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-blue-600 text-xl sm:text-2xl" />
                Pide tu presupuesto
              </h3>

              {/* Nombre */}
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full rounded-lg border border-blue-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Teléfono */}
              <div className="mb-4">
                <label htmlFor="telefono" className="block text-sm font-medium mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="w-full rounded-lg border border-blue-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="600 123 456"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-blue-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Descripción breve */}
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1">
                  ¿Qué reforma necesitas?
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  className="w-full rounded-lg border border-blue-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Cuéntanos tu proyecto…"
                />
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Solicitar presupuesto
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Gradiente decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>

      {/* Burbujas decorativas - Ocultas en móvil */}
      <div className="hidden sm:block">
        <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-blue-500/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-blue-400/30 animate-pulse delay-300"></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-blue-300/20 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default PremiumPlumbingHero;