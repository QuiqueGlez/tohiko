import { Metadata } from 'next'
import ReformasComunidadesContent from './ReformasComunidadesContent'

export const metadata: Metadata = {
  title: "Reformas de Comunidades de Vecinos en Granada | Zonas Comunes",
  description: "Reformas de comunidades de vecinos en Granada. Mantenimiento, zonas comunes, bajantes, fontanería y accesibilidad.",
  keywords: "reformas comunidades vecinos granada, zonas comunes granada, bajantes granada, accesibilidad edificios granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/servicios/reformas-comunidades",
}

export default function ReformasComunidades() {
  return <ReformasComunidadesContent />
}
