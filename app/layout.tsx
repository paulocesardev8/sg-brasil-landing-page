import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG Brasil Porcelanato | Alto Padrão e Sofisticação",
  description: "Curadoria exclusiva de porcelanatos em grandes formatos, marmorizados e amadeirados. O acabamento que sua obra merece.",
  openGraph: {
    title: "SG Brasil Porcelanato | Alto Padrão",
    description: "Transforme seu ambiente com a elegância dos nossos porcelanatos.",
    images: ['/images/og-image-sgbrasil.jpg'], // Certifique-se de ter uma imagem na pasta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Adicionamos o suppressHydrationWarning aqui para ignorar erros causados 
          por extensões do navegador que injetam atributos no HTML 
      */}
      <body 
        className={`${inter.className} bg-white text-black`} 
        suppressHydrationWarning
      >
        {children}

        {/* --- SCRIPTS DE RASTREAMENTO --- */}

        {/* GOOGLE TAG (GA4) 
        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=G-GYR5QWSWK2`}
        />
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GYR5QWSWK2');
            `,
          }}
        />*/}

        {/* META PIXEL */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '425164433308044');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}