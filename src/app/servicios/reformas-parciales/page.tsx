import { Metadata } from 'next'
import ReformasParcialesContent from './ReformasParcialesContent'

export const metadata: Metadata = {
  title: "Reformas Parciales en Granada | Baños, Cocinas y Salones",
  description: "Reformas parciales de baños, cocinas y salones en Granada. Plato de ducha, encimeras y muebles a medida. Presupuesto sin sorpresas.",
  keywords: "reformas parciales granada, reforma baño granada, reforma cocina granada, plato de ducha granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/servicios/reformas-parciales",
  openGraph: {
    title: "Reformas Parciales en Granada | Reformas Granada Pro",
    description: "Reformas de baños, cocinas y salones en Granada con acabados premium.",
    type: "website",
    url: "https://www.reformasgranada.pro/servicios/reformas-parciales",
  },
}

export default function ReformasParcialesPage() {
  return <ReformasParcialesContent />
}
