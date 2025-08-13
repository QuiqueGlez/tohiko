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
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Servicios con dropdown */}
              <div className="relative group">
                <Link
                  href="/#servicios"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg flex items-center"
                >
                  Servicios
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Nuestros servicios</h3>
                    <div className="space-y-2">
                      <Link href="/servicios/reformas-integrales" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Reformas integrales</Link>
                      <Link href="/servicios/reformas-parciales" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Reformas parciales (baños, cocinas, salón)</Link>
                      <Link href="/servicios/reformas-locales-comerciales" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Reformas de locales comerciales</Link>
                      <Link href="/servicios/reformas-comunidades" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Reformas de comunidades de vecinos</Link>
                      <Link href="/servicios/reformas-piscinas" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Reformas de piscinas</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zonas con dropdown */}
              <div className="relative group">
                <Link
                  href="/#cobertura"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg flex items-center"
                >
                  ¿Dónde trabajamos?
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4 text-center">Zonas de trabajo</h3>
                    
                    {/* Granada Capital */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2 border-b border-blue-100 pb-1">Granada Capital</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/zonas/granada-centro" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Granada Centro</Link>
                        <Link href="/zonas/zaidin" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Zaidín</Link>
                        <Link href="/zonas/realejo" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Realejo</Link>
                        <Link href="/zonas/albaicin" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Albaicín</Link>
                      </div>
                    </div>
                    
                    {/* Área Metropolitana */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2 border-b border-blue-100 pb-1">Área Metropolitana</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/zonas/la-zubia" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">La Zubia</Link>
                        <Link href="/zonas/armilla" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Armilla</Link>
                        <Link href="/zonas/albolote" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Albolote</Link>
                        <Link href="/zonas/santa-fe" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Santa Fe</Link>
                        <Link href="/zonas/maracena" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Maracena</Link>
                        <Link href="/zonas/ogijares" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Ogíjares</Link>
                        <Link href="/zonas/churriana" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Churriana</Link>
                        <Link href="/zonas/peligros" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Peligros</Link>
                        <Link href="/zonas/atarfe" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Atarfe</Link>
                      </div>
                    </div>
                    
                    {/* Costa */}
                    <div>
                      <h4 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2 border-b border-blue-100 pb-1">Costa de Granada</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/zonas/motril" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Motril</Link>
                        <Link href="/zonas/almunecar" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Almuñécar</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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

            {/* Menú tablet simplificado */}
            <nav className="hidden md:flex lg:hidden items-center space-x-2">
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
                Zonas
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
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100 shadow-lg max-h-96 overflow-y-auto">
            <div className="px-4 pt-3 pb-5 space-y-2">
              {/* Servicios móvil */}
              <div className="border-b border-blue-50 pb-2">
                <Link
                  href="#servicios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-900 font-semibold"
                >
                  Servicios
                </Link>
                <div className="pl-4 space-y-1">
                  <Link href="/servicios/reformas-integrales" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-600">Reformas integrales</Link>
                  <Link href="/servicios/reformas-parciales" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-600">Reformas parciales</Link>
                  <Link href="/servicios/reformas-locales-comerciales" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-600">Reformas locales comerciales</Link>
                  <Link href="/servicios/reformas-comunidades" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-600">Reformas comunidades</Link>
                  <Link href="/servicios/reformas-piscinas" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-600">Reformas piscinas</Link>
                </div>
              </div>
              
              {/* Zonas móvil */}
              <div className="border-b border-blue-50 pb-2">
                <Link
                  href="#cobertura"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-900 font-semibold"
                >
                  ¿Dónde trabajamos?
                </Link>
                <div className="pl-4 grid grid-cols-2 gap-1">
                  <Link href="/zonas/granada-centro" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Granada Centro</Link>
                  <Link href="/zonas/zaidin" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Zaidín</Link>
                  <Link href="/zonas/realejo" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Realejo</Link>
                  <Link href="/zonas/albaicin" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Albaicín</Link>
                  <Link href="/zonas/la-zubia" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">La Zubia</Link>
                  <Link href="/zonas/armilla" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Armilla</Link>
                  <Link href="/zonas/albolote" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Albolote</Link>
                  <Link href="/zonas/santa-fe" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Santa Fe</Link>
                  <Link href="/zonas/maracena" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Maracena</Link>
                  <Link href="/zonas/ogijares" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Ogíjares</Link>
                  <Link href="/zonas/churriana" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Churriana</Link>
                  <Link href="/zonas/peligros" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Peligros</Link>
                  <Link href="/zonas/atarfe" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Atarfe</Link>
                  <Link href="/zonas/motril" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Motril</Link>
                  <Link href="/zonas/almunecar" onClick={() => setMobileMenuOpen(false)} className="block px-2 py-1 text-xs text-gray-600">Almuñécar</Link>
                </div>
              </div>
              
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