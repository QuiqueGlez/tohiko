import { Metadata } from 'next'
import RealejoContent from './RealejoContent'

export const metadata: Metadata = {
  title: "Reformas en Realejo, Granada | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Realejo, Granada. Barrio histórico con arquitectura tradicional. Experiencia en edificios singulares.",
  keywords: "reformas realejo granada, obras realejo, rehabilitación realejo granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/realejo",
}

export default function RealejoPage() {
  return <RealejoContent />
}
