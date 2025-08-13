import { Metadata } from 'next'
import ZaidinContent from './ZaidinContent'

export const metadata: Metadata = {
  title: "Reformas en Zaidín, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Zaidín, Granada. Equipo propio especializado en la zona con más de 15 años de experiencia.",
  keywords: "reformas zaidin granada, obras zaidin, rehabilitación zaidin granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/zaidin",
}

export default function ZaidinPage() {
  return <ZaidinContent />
}
