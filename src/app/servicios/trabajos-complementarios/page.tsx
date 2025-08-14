import { Metadata } from 'next'
import TrabajosComplementariosContent from './TrabajosComplementariosContent'

export const metadata: Metadata = {
  title: "Trabajos Complementarios en Granada - Electricidad, Fontanería, Ventanas | Reformas Granada Pro",
  description: "Servicios complementarios de electricidad, fontanería, ventanas de PVC y aluminio, herrería, pladur y pintura en Granada. Incluidos en reformas integrales.",
  keywords: "electricidad Granada, fontanería Granada, ventanas PVC aluminio Granada, herrería Granada, pladur Granada, pintura Granada, trabajos complementarios",
  robots: "index, follow",
  canonical: "https://reformasgranadapro.com/servicios/trabajos-complementarios",
  openGraph: {
    title: "Trabajos Complementarios en Granada - Electricidad, Fontanería, Ventanas",
    description: "Servicios complementarios de electricidad, fontanería, ventanas de PVC y aluminio, herrería, pladur y pintura en Granada.",
    url: "https://reformasgranadapro.com/servicios/trabajos-complementarios",
    siteName: "Reformas Granada Pro",
    images: [{
      url: "https://reformasgranadapro.com/Images/Fotosreformas/reformas interiores granada.webp",
      width: 1200,
      height: 630,
      alt: "Trabajos complementarios en Granada"
    }],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabajos Complementarios en Granada - Electricidad, Fontanería, Ventanas",
    description: "Servicios complementarios de electricidad, fontanería, ventanas de PVC y aluminio, herrería, pladur y pintura en Granada.",
    images: ["https://reformasgranadapro.com/Images/Fotosreformas/reformas interiores granada.webp"]
  }
}

export default function TrabajosComplementariosPage() {
  return <TrabajosComplementariosContent />
}

