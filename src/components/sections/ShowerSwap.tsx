'use client'

import React from 'react'

const ShowerSwap: React.FC = () => {
  return (
    <section id="ducha" className="relative bg-gradient-to-b from-blue-50 to-white py-10 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cambiar bañera por plato de ducha: comodidad y seguridad en 48 h</h2>
          <p className="text-gray-600">Entras con bañera, sales con ducha italiana — cronómetro en mano.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <ul className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-3">
            <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>Demolición controlada</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>Impermeabilización certificada</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>Mampara de 8 mm</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>Grifería termostática</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>Entrega con limpieza final</li>
          </ul>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <div className="h-48 w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-4 flex items-center justify-center text-blue-600 font-semibold">
              Foto antes/después
            </div>
            <a href="#contacto" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">Solicitar presupuesto</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowerSwap


