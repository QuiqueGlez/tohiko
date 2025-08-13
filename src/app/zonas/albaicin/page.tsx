import { Metadata } from 'next'
import AlbaicinContent from './AlbaicinContent'

export const metadata: Metadata = {
  title: "Reformas en Albaicín, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Albaicín, Granada. Patrimonio de la Humanidad. Especialistas en arquitectura árabe y tradicional.",
  keywords: "reformas albaicin granada, obras albaicin, rehabilitación albaicin granada, patrimonio humanidad",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/albaicin",
}

export default function AlbaicinPage() {
  return <AlbaicinContent />
}
