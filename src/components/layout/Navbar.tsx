'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { SITE_CONFIG } from '@/config/site'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar principal premium */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="bg-white border-2 border-blue-100 group-hover:border-blue-200 transition-colors duration-300 p-2 rounded-lg mr-3 shadow-sm">
                  <Image
                    src="/Images/logoreformasgranada.png"
                    alt="Reformas Granada Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  <span className="text-blue-600">Reformas</span>
                  <span className="text-blue-800">Granada</span>
                  <span className="text-blue-500 text-sm ml-2 bg-blue-100 px-2 py-0.5 rounded-full">Pro</span>
                </span>
              </div>
            </Link>

            {/* Menú desktop premium */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link
                href="/#servicios"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                Servicios
              </Link>
              <Link
                href="/#cobertura"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                ¿Dónde trabajamos?
              </Link>
              <Link
                href="/#nosotros"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                Sobre Nosotros
              </Link>
              <div className="ml-2 pl-4 border-l border-gray-200">
                <Link
                  href="/#contacto"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contáctanos
                </Link>
              </div>
            </nav>

            {/* Botón móvil premium */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                aria-label="Menú"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil premium */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100 shadow-lg">
            <div className="px-4 pt-3 pb-5 space-y-2">
              <Link
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                Servicios
              </Link>
              <Link
                href="#cobertura"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                ¿Dónde trabajamos?
              </Link>
              <Link
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}