import { Metadata } from 'next'
import AtarfeContent from './AtarfeContent'

export const metadata: Metadata = {
  title: "Reformas en Atarfe, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Atarfe, Granada. Especialistas en viviendas históricas y modernas en el área metropolitana oeste.",
  keywords: "reformas atarfe granada, obras atarfe, rehabilitación atarfe granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/atarfe",
}

export default function AtarfePage() {
  return <AtarfeContent />
}
