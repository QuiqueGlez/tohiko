'use client'

import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa'

const ShowerSwap: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    {
      src: "/Images/Fotosreformas/plato de ducha baño granada.webp", 
      alt: "Plato de ducha moderno en baño reformado Granada"
    },
    {
      src: "/Images/Fotosreformas/reforma plato de ducha granada.webp",
      alt: "Reforma completa de plato de ducha en Granada"
    },
    {
      src: "/Images/Fotosreformas/plato de ducha reformado granada.webp",
      alt: "Plato de ducha reformado con mampara en Granada"
    }
  ]

  const features = [
    { icon: FaCheckCircle, text: "Demolición controlada", desc: "Sin daños en el resto del baño" },
    { icon: FaCheckCircle, text: "Impermeabilización certificada", desc: "Garantía de 2 años" },
    { icon: FaCheckCircle, text: "Mampara de 8 mm", desc: "Cristal templado de calidad" },
    { icon: FaCheckCircle, text: "Grifería termostática", desc: "Temperatura constante y segura" },
    { icon: FaCheckCircle, text: "Entrega con limpieza final", desc: "Listo para usar inmediatamente" }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="ducha" className="relative bg-gradient-to-b from-blue-50 to-white py-10 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cambiar bañera por plato de ducha: comodidad y seguridad en 48 h
          </h2>
          <p className="text-gray-600 text-lg">
            Entras con bañera, sales con ducha italiana — cronómetro en mano.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Layout responsive mejorado */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Características mejoradas */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                ¿Qué incluye el servicio?
              </h3>
              <div className="space-y-4 flex-1">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                      <feature.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.text}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA mejorado */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a 
                  href="#contacto" 
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Solicitar presupuesto gratuito
                </a>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Respuesta en menos de 2 horas
                </p>
              </div>
            </div>

            {/* Carrusel de imágenes */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 flex flex-col h-full">
              <div className="relative flex-1 flex flex-col">
                
                {/* Imagen principal */}
                <div className="relative flex-1 w-full rounded-xl overflow-hidden mb-4">
                  <img 
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                  />
                  
                  {/* Controles del carrusel */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Imagen anterior"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Imagen siguiente"
                  >
                    <FaChevronRight />
                  </button>

                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImage === index 
                            ? 'bg-white scale-125' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Información de la imagen actual */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    {currentImage + 1} de {images.length}
                  </p>
                  <p className="text-gray-700 font-medium">
                    {images[currentImage].alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowerSwap


