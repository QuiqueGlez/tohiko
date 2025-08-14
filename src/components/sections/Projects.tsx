'use client'

import React from 'react'

type Project = {
  title: string
  summary: string
  details: string[]
  image: string
}

const projects: Project[] = [
  {
    title: 'Ático en el Albaicín convertido en loft',
    summary: 'Optimización de espacio y luz natural con soluciones a medida.',
    details: ['Memoria técnica', 'Selección de materiales', 'Métricas de ahorro energético'],
    image: '/Images/Fotosreformas/reformas en salon.webp'
  },
  {
    title: 'Rehabilitación de edificio catalogado',
    summary: 'Refuerzo estructural y restauración respetando normativa histórica.',
    details: ['Cálculo estructural', 'Restauración de envolvente', 'Gestión de licencias'],
    image: '/Images/Fotosreformas/reforma fachada granada.webp'
  },
  {
    title: 'Instalación de ventanas PVC en vivienda',
    summary: 'Mejora de eficiencia energética y confort acústico.',
    details: ['Triple junta', 'Vidrio bajo emisivo', 'Ahorro estimado 40%'],
    image: '/Images/Fotosreformas/reformas granada pro.webp'
  }
]

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="relative bg-white py-10 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nuestros proyectos de construcción y reformas, tu carta de presentación
          </h2>
          <p className="text-lg text-gray-600">
            Recorre viviendas y locales transformados. Cada proyecto incluye memoria técnica, materiales y métricas de ahorro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="h-40 w-full rounded-xl mb-4 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.summary}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {p.details.map((d, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>{d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


