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
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-40 w-full rounded-xl mb-4 overflow-hidden">
              <img 
                src="/Images/Fotosreformas/reformas cocinas en granada.webp" 
                alt="Proyecto de cocina con acabados premium en Granada" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600">Diseño de cocinas modernas con muebles a medida, electrodomésticos integrados y máximo aprovechamiento del espacio.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-40 w-full rounded-xl mb-4 overflow-hidden">
              <img 
                src="/Images/Fotosreformas/reformas platos de ducha.webp" 
                alt="Proyecto de baño con plato de ducha en Granada" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600">Reforma completa de baños con cambio de bañera por plato de ducha, mamparas de cristal y grifería premium.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-40 w-full rounded-xl mb-4 overflow-hidden">
              <img 
                src="/Images/Fotosreformas/reforma cocina en granada.webp" 
                alt="Reforma de cocina en Granada con optimización del espacio" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600">Reforma integral de cocinas con distribución optimizada, isla central y acabados de alta calidad.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KitchensBathrooms


