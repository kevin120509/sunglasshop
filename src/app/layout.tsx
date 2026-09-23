import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunglass Shop Óptica | Plaza Dorada, Mérida",
  description: "Encuentra lentes y armazones para diferentes estilos en Sunglass Shop Óptica, Plaza Dorada, Mérida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900 antialiased flex flex-col min-h-screen`}>
        
        {/* TOP BAR - Ubicación Rápida */}
        <div className="bg-black text-white text-xs py-2 px-4 flex justify-between items-center">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Plaza Dorada, Mérida, Yucatán
            </span>
            <span className="hidden sm:flex items-center gap-4">
              {/* Placeholders de redes */}
              <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
            </span>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl tracking-tighter uppercase">
              Sunglass Shop
            </Link>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-gray-500 transition-colors">Inicio</Link>
              <Link href="/lentes" className="hover:text-gray-500 transition-colors">Lentes</Link>
              <Link href="/servicios" className="hover:text-gray-500 transition-colors">Servicios</Link>
              <Link href="/marcas" className="hover:text-gray-500 transition-colors">Marcas</Link>
              <Link href="/nosotros" className="hover:text-gray-500 transition-colors">Nosotros</Link>
            </nav>
            <Link 
              href="/contacto" 
              className="hidden md:inline-flex items-center justify-center bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Visítanos
            </Link>
            {/* Mobile menu button placeholder */}
            <button className="md:hidden p-2">
              <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-bold text-xl tracking-tighter uppercase mb-4">Sunglass Shop</h2>
              <p className="text-gray-500 text-sm max-w-sm mb-6">
                Óptica física ubicada en Plaza Dorada, Mérida. Encuentra lentes, armazones y servicios ópticos de forma rápida y sencilla.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Explora</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/lentes" className="hover:text-black transition-colors">Lentes oftálmicos y sol</Link></li>
                <li><Link href="/servicios" className="hover:text-black transition-colors">Examen y Servicios</Link></li>
                <li><Link href="/marcas" className="hover:text-black transition-colors">Marcas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Contacto</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" /> 
                  <span>Plaza Dorada<br/>Mérida, Yucatán</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> 
                  <span>[Teléfono Pendiente]</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-200 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Sunglass Shop Óptica. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Sitio de representación digital.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
