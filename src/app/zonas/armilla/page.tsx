import { Metadata } from 'next'
import ArmillaContent from './ArmillaContent'

export const metadata: Metadata = {
  title: "Reformas en Armilla, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Armilla, Granada. Especialistas en viviendas unifamiliares y adosados en el área metropolitana.",
  keywords: "reformas armilla granada, obras armilla, rehabilitación armilla granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/armilla",
}

export default function ArmillaPage() {
  return <ArmillaContent />
}
