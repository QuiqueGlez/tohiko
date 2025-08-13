import { Metadata } from 'next'
import ReformasPiscinasContent from './ReformasPiscinasContent'

export const metadata: Metadata = {
  title: "Reformas de Piscinas en Granada | Impermeabilización y Gresite",
  description: "Reformas de piscinas en Granada. Impermeabilización certificada, gresite o liner, depuración e iluminación. Piscina lista para la temporada.",
  keywords: "reformas piscinas granada, impermeabilización piscinas granada, gresite piscinas granada, liner piscinas granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/servicios/reformas-piscinas",
}

export default function ReformasPiscinas() {
  return <ReformasPiscinasContent />
}
