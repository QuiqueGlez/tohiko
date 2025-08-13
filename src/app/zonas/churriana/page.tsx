import { Metadata } from 'next'
import ChurrianaContent from './ChurrianaContent'

export const metadata: Metadata = {
  title: "Reformas en Churriana de la Vega, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Churriana de la Vega, Granada. Especialistas en viviendas de la vega granadina.",
  keywords: "reformas churriana granada, obras churriana, rehabilitación churriana granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/churriana",
}

export default function ChurrianaPage() {
  return <ChurrianaContent />
}
