import { Metadata } from 'next'
import ReformasLocalesComercialesContent from './ReformasLocalesComerciales'

export const metadata: Metadata = {
  title: "Reformas de Locales Comerciales en Granada | Licencias Incluidas",
  description: "Reformas de locales comerciales en Granada. Proyecto, licencias, adecuación de instalaciones e imagen. Local listo para facturar.",
  keywords: "reformas locales comerciales granada, licencias apertura granada, reformas tiendas granada, locales comerciales granada",
  robots: "index, follow",
  canonical: "https://www.reformasgranada.pro/servicios/reformas-locales-comerciales",
}

export default function ReformasLocalesComerciales() {
  return <ReformasLocalesComercialesContent />
}
