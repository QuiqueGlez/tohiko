import { Metadata } from 'next'
import LaZubiaContent from './LaZubiaContent'

export const metadata: Metadata = {
  title: "Reformas en La Zubia, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en La Zubia, Granada. Especialistas en viviendas unifamiliares en la zona sur del área metropolitana.",
  keywords: "reformas la zubia granada, obras la zubia, rehabilitación la zubia granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/la-zubia",
}

export default function LaZubiaPage() {
  return <LaZubiaContent />
}
