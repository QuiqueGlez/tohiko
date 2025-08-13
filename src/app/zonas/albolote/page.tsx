import { Metadata } from 'next'
import AlboloteContent from './AlboloteContent'

export const metadata: Metadata = {
  title: "Reformas en Albolote, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Albolote, Granada. Especialistas en viviendas familiares en el área metropolitana norte.",
  keywords: "reformas albolote granada, obras albolote, rehabilitación albolote granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/albolote",
}

export default function AlbolotePage() {
  return <AlboloteContent />
}
