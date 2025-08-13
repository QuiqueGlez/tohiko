import { Metadata } from 'next'
import OgijaresContent from './OgijaresContent'

export const metadata: Metadata = {
  title: "Reformas en Ogíjares, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Ogíjares, Granada. Especialistas en viviendas modernas en el área metropolitana sur.",
  keywords: "reformas ogijares granada, obras ogijares, rehabilitación ogijares granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/ogijares",
}

export default function OgijaresPage() {
  return <OgijaresContent />
}
