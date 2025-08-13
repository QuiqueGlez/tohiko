'use client'

import React from 'react'

const KitchensBathrooms: React.FC = () => {
  return (
    <section id="cocinas-banos" className="relative bg-white py-10 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Especialistas en cocinas y baños a tu medida</h2>
          <p className="text-gray-600">Creamos diseño de interiores adaptado a tus gustos, combinando funcionalidad y estilo. Nos ocupamos de la obra civil y coordinamos con tu proveedor para que todo encaje como un guante.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="h-40 w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-4 flex items-center justify-center text-blue-600 font-semibold">Foto {i}</div>
              <p className="text-gray-600">Proyecto de cocina/baño con acabados premium y optimización del espacio.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KitchensBathrooms


