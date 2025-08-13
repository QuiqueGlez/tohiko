import { Metadata } from 'next'
import SantaFeContent from './SantaFeContent'

export const metadata: Metadata = {
  title: "Reformas en Santa Fe, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Santa Fe, Granada. Especialistas en viviendas históricas y tradicionales en el área metropolitana.",
  keywords: "reformas santa fe granada, obras santa fe, rehabilitación santa fe granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/santa-fe",
}

export default function SantaFePage() {
  return <SantaFeContent />
}
