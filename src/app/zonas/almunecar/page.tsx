import { Metadata } from 'next'
import AlmunecarContent from './AlmunecarContent'

export const metadata: Metadata = {
  title: "Reformas en Almuñécar, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Almuñécar, Granada. Especialistas en viviendas costeras y apartamentos turísticos en la Costa Tropical.",
  keywords: "reformas almunecar granada, obras almunecar, rehabilitación almunecar granada, reformas costa tropical",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/almunecar",
}

export default function AlmunecarPage() {
  return <AlmunecarContent />
}
