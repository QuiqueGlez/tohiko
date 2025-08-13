import { Metadata } from 'next'
import PeligrosContent from './PeligrosContent'

export const metadata: Metadata = {
  title: "Reformas en Peligros, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Peligros, Granada. Especialistas en viviendas residenciales en el área metropolitana norte.",
  keywords: "reformas peligros granada, obras peligros, rehabilitación peligros granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/peligros",
}

export default function PeligrosPage() {
  return <PeligrosContent />
}
