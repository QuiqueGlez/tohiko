import { Metadata } from 'next'
import MaracenaContent from './MaracenaContent'

export const metadata: Metadata = {
  title: "Reformas en Maracena, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Maracena, Granada. Especialistas en viviendas residenciales en el área metropolitana oeste.",
  keywords: "reformas maracena granada, obras maracena, rehabilitación maracena granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/maracena",
}

export default function MaracenaPage() {
  return <MaracenaContent />
}
