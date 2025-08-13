'use client'

import React from 'react'
import { FaMapMarkerAlt, FaBuilding, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const ChurrianaContent: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reformas en <span className="text-blue-300">Churriana de la Vega</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Especialistas en reformas en Churriana de la Vega. Experiencia en viviendas de la vega granadina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34627050312" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg">
                <FaPhone className="inline mr-2" /> Llamar ahora
              </a>
              <a href="#presupuesto" className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                <FaEnvelope className="inline mr-2" /> Pedir presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Nuestros servicios en Churriana</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaHome className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas de la Vega</h3>
                <p className="text-gray-600">Renovación de viviendas tradicionales en la vega granadina.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaBuilding className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas Rurales</h3>
                <p className="text-gray-600">Modernización de casas rurales y cortijos en Churriana.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaMapMarkerAlt className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Reformas Parciales</h3>
                <p className="text-gray-600">Baños, cocinas y espacios en entorno rural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="presupuesto" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un proyecto en Churriana?</h2>
            <p className="text-xl mb-8 text-blue-100">Solicita tu presupuesto sin compromiso</p>
            <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Tu nombre" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
                <input type="tel" placeholder="600 123 456" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
                <textarea placeholder="Describe tu proyecto en Churriana..." rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">Solicitar presupuesto gratuito</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ChurrianaContent
