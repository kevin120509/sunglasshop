import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sunglass Shop Óptica | Lentes y Armazones en Plaza Dorada, Mérida",
  description:
    "Encuentra lentes oftálmicos, armazones, lentes de sol y servicios ópticos en Sunglass Shop Óptica, ubicada en Plaza Dorada, Mérida, Yucatán.",
  keywords: [
    "Sunglass Shop Óptica",
    "óptica Plaza Dorada",
    "óptica en Mérida",
    "lentes en Mérida",
    "armazones en Mérida",
    "lentes de sol Mérida",
    "examen de la vista Plaza Dorada",
    "micas graduadas Mérida"
  ],
  authors: [{ name: "Sunglass Shop Óptica" }],
  openGraph: {
    title: "Sunglass Shop Óptica | Plaza Dorada, Mérida",
    description:
      "Lentes, armazones y servicios ópticos en Plaza Dorada, Mérida, Yucatán. Conoce nuestras opciones y visítanos.",
    url: "https://www.opticasunglasshop.com.mx/",
    siteName: "Sunglass Shop Óptica",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.opticasunglasshop.com.mx/images/og_sunglass_shop.png",
        width: 1200,
        height: 630,
        alt: "Sunglass Shop Óptica Plaza Dorada Mérida"
      }
    ]
  },
  alternates: {
    canonical: "https://www.opticasunglasshop.com.mx/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
