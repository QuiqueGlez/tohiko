'use client'

import React, { useState } from 'react'

interface StandardContactFormProps {
  location: string
  placeholder?: string
}

const StandardContactForm: React.FC<StandardContactFormProps> = ({ 
  location, 
  placeholder = `Describe tu proyecto en ${location}...` 
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    reforma: '',
    privacidad: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    } else if (!/^[6-9]\d{8}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Introduce un número de teléfono español válido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido'
    }

    if (!formData.reforma.trim()) {
      newErrors.reforma = 'Por favor, describe qué reforma necesitas'
    }

    if (!formData.privacidad) {
      newErrors.privacidad = 'Debes aceptar la política de privacidad'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Aquí iría la lógica de envío del formulario
      console.log('Formulario válido:', formData)
      alert('Formulario enviado correctamente. Te contactaremos pronto.')
      
      // Resetear formulario
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        reforma: '',
        privacidad: false
      })
    }
  }

  return (
    <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
            aria-invalid={errors.nombre ? 'true' : 'false'}
            aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tu nombre"
          />
          {errors.nombre && (
            <p id="nombre-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
            aria-invalid={errors.telefono ? 'true' : 'false'}
            aria-describedby={errors.telefono ? 'telefono-error' : undefined}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
              errors.telefono ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="600 123 456"
          />
          {errors.telefono && (
            <p id="telefono-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.telefono}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* ¿Qué reforma necesitas? */}
        <div>
          <label htmlFor="reforma" className="block text-sm font-medium text-gray-700 mb-1">
            ¿Qué reforma necesitas? *
          </label>
          <textarea
            id="reforma"
            name="reforma"
            value={formData.reforma}
            onChange={handleInputChange}
            required
            rows={3}
            aria-invalid={errors.reforma ? 'true' : 'false'}
            aria-describedby={errors.reforma ? 'reforma-error' : undefined}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
              errors.reforma ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={placeholder}
          />
          {errors.reforma && (
            <p id="reforma-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.reforma}
            </p>
          )}
        </div>

        {/* Política de privacidad - GDPR Compliance */}
        <div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacidad"
              name="privacidad"
              checked={formData.privacidad}
              onChange={handleInputChange}
              required
              aria-invalid={errors.privacidad ? 'true' : 'false'}
              aria-describedby={errors.privacidad ? 'privacidad-error' : undefined}
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="privacidad" className="ml-2 text-sm text-gray-700">
              He leído y acepto la{' '}
              <a 
                href="/politica-privacidad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                política de privacidad
              </a>{' '}
              y el tratamiento de mis datos personales *
            </label>
          </div>
          {errors.privacidad && (
            <p id="privacidad-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.privacidad}
            </p>
          )}
        </div>



        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-400"
        >
          Solicitar presupuesto gratuito
        </button>
      </form>
    </div>
  )
}

export default StandardContactForm
