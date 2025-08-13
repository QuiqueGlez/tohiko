import { Metadata } from 'next'
import MotrilContent from './MotrilContent'

export const metadata: Metadata = {
  title: "Reformas en Motril, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Motril, Granada. Especialistas en la costa granadina con experiencia en viviendas costeras.",
  keywords: "reformas motril granada, obras motril, rehabilitación motril granada, reformas costa granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/motril",
}

export default function MotrilPage() {
  return <MotrilContent />
}
