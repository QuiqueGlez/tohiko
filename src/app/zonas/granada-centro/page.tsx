import { Metadata } from 'next'
import GranadaCentroContent from './GranadaCentroContent'

export const metadata: Metadata = {
  title: "Reformas en Granada Centro | Reformas Granada Pro",
  description: "Reformas integrales y parciales en Granada Centro. Equipo propio, licencias gestionadas y presupuesto cerrado. Servicio especializado en el centro histórico.",
  keywords: "reformas granada centro, reformas centro granada, obras granada centro, rehabilitación centro granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/zonas/granada-centro",
  openGraph: {
    title: "Reformas en Granada Centro | Reformas Granada Pro",
    description: "Especialistas en reformas en Granada Centro con experiencia en edificios históricos.",
    type: "website",
    url: "https://www.reformasgranada.pro/zonas/granada-centro",
  },
}

export default function GranadaCentroPage() {
  return <GranadaCentroContent />
}
