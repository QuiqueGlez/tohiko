import { Metadata } from 'next'
import { FALLBACK_SEO } from '@/config/constants'
import ReformasIntegralesContent from './ReformasIntegralesContent'

export const metadata: Metadata = {
  title: "Reformas Integrales en Granada | Equipo Propio y Presupuesto Cerrado",
  description: "Reformas integrales completas en Granada. Equipo propio, gestión de licencias, materiales y gremios. Presupuesto cerrado y cronograma con penalizaciones.",
  keywords: "reformas integrales granada, reformas completas granada, rehabilitación viviendas granada, reformas con licencias granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/servicios/reformas-integrales",
  openGraph: {
    title: "Reformas Integrales en Granada | Reformas Granada Pro",
    description: "Reformas integrales completas en Granada con equipo propio y presupuesto cerrado.",
    type: "website",
    url: "https://www.reformasgranada.pro/servicios/reformas-integrales",
  },
}

export default function ReformasIntegralesPage() {
  return <ReformasIntegralesContent />
}
