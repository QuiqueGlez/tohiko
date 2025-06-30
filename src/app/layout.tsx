import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { CookieBanner } from '@/components/ui/CookieBanner'
import "./globals.css";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Cerrajero 24 horas en Coruña | Servicio Urgente",
  description: "Servicio certificado de cerrajería en Coruña con garantía escrita. Atención inmediata las 24h, festivos incluidos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="clarity"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rdri7yzl7o");
            `,
          }}
        />
      </head>
      <body className={`${openSans.className} antialiased`}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RJTK8NZPHH"></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RJTK8NZPHH');
        `,
          }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
