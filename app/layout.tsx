import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
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
    <html lang="pt-BR" className="scroll-smooth">
    
      {/* Adicionamos o suppressHydrationWarning aqui para ignorar erros causados 
          por extensões do navegador que injetam atributos no HTML 
      */}
      <body 
        className={`${inter.className} bg-white text-black`} 
        suppressHydrationWarning
      >
        {children} 
      </body>
    </html>
  );
}