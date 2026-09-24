"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Glasses,
  Eye,
  ChevronRight
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const handlePhoneClick = () => {
    trackEvent("click_phone", { section: "inicio" });
  };

  const handleWhatsappClick = () => {
    trackEvent("click_whatsapp", { section: "inicio" });
  };

  const handleDirectionsClick = () => {
    trackEvent("click_directions", { section: "inicio" });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      
      {/* 1. HERO / INICIO CON ENFOQUE VISUAL Y DIRECTO */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO COMERCIAL DIRECTO */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* INSIGNIA DE UBICACION REAL */}
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-none text-xs sm:text-sm font-bold uppercase tracking-wider">
              <MapPin size={16} className="text-red-600 shrink-0" />
              <span>Plaza Dorada • Mérida, Yucatán</span>
            </div>

            {/* TITULO Y SUBTITULO SOLICITADO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Sunglass Shop <span className="text-red-600">Óptica</span>
            </h1>

            <p className="text-xl sm:text-2xl text-neutral-200 font-medium leading-relaxed max-w-2xl">
              Lentes, armazones y servicios ópticos en Plaza Dorada, Mérida.
            </p>

            {/* CTAS PRINCIPALES: CÓMO LLEGAR, WHATSAPP Y LLAMAR */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/visitanos"
                onClick={handleDirectionsClick}
                className="bg-red-600 text-white text-center px-8 py-4 text-base sm:text-lg font-black uppercase tracking-wide hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MapPin size={22} /> Cómo llegar
              </Link>

              <a
                href="https://wa.me/529999874504?text=Hola,%20quisiera%20información%20sobre%20sus%20lentes%20y%20servicios%20en%20Plaza%20Dorada."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="bg-emerald-600 text-white text-center px-8 py-4 text-base sm:text-lg font-black uppercase tracking-wide hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle size={22} /> Enviar WhatsApp
              </a>
            </div>

            {/* BOTONES SECUNDARIOS RÁPIDOS */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-4 text-sm font-bold">
              <a
                href="tel:9999874504"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 px-5 py-3 transition-colors"
              >
                <Phone size={16} className="text-red-500" />
                <span>Llamar al 9999 874504</span>
              </a>

              <Link
                href="/lentes"
                onClick={() => trackEvent("view_products", { location: "hero" })}
                className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-5 py-3 transition-colors uppercase"
              >
                <Glasses size={16} />
                <span>Ver Lentes y Marcas</span>
              </Link>
            </div>

          </div>

          {/* COLUMNA DERECHA: TARJETA PROTAGONISTA DEL ESTABLECIMIENTO */}
          <div className="lg:col-span-5 relative">
            <div className="bg-neutral-900 border-2 border-neutral-700 p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Local Físico
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 font-bold uppercase">
                  Plaza Dorada
                </span>
              </div>

              {/* CONTENEDOR VISUAL CON LOGOTIPO OFICIAL */}
              <div className="relative h-56 bg-neutral-950 flex items-center justify-center p-6 border border-neutral-800">
                <Image
                  src="/images/logo_sunglass_shop_blanco.png"
                  alt="Sunglass Shop Óptica Plaza Dorada Mérida"
                  width={300}
                  height={75}
                  className="object-contain max-h-full w-auto"
                  priority
                />
              </div>

              {/* DATOS CLAVE DE LA SUCURSAL */}
              <div className="space-y-3 text-sm text-neutral-200">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-base font-bold">Plaza Dorada</strong>
                    <span>Calle 50 No. 143 x 15 y 19 Nueva Hidalgo, Loc. 64</span>
                    <span className="block text-xs text-neutral-400">Entrada 3 por Soriana • Mérida, Yucatán</span>
                  </div>
                </div>
              </div>

              <Link
                href="/visitanos"
                onClick={handleDirectionsClick}
                className="w-full bg-white text-black text-center py-3.5 font-black uppercase text-sm tracking-wide block hover:bg-neutral-200 transition-colors"
              >
                Ver mapa y cómo llegar
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* 2. ACCESOS DIRECTOS A LAS 3 SECCIONES SECUNDARIAS */}
      <section className="py-20 bg-neutral-100 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="bg-black text-white text-xs font-bold px-3.5 py-1 uppercase tracking-widest inline-block">
              Óptica Real en Plaza Dorada
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900">
              ¿Qué buscas hoy en Sunglass Shop?
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Navega fácilmente por las secciones de nuestra óptica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SECCION LENTES Y MARCAS */}
            <div className="bg-white border-2 border-neutral-200 p-8 shadow-xs hover:border-black transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center">
                  <Glasses size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                  Lentes y Marcas
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Armazones para dama, caballero y jóvenes, lentes de sol con filtro UV y marcas destacadas como Ray-Ban, Oakley, Vogue y Michael Kors.
                </p>
              </div>

              <Link
                href="/lentes"
                onClick={() => trackEvent("view_products", { location: "home_card" })}
                className="inline-flex items-center gap-2 font-black uppercase text-sm text-black hover:text-red-600 pt-4 border-t border-neutral-200"
              >
                Ver Lentes y Marcas <ChevronRight size={18} />
              </Link>
            </div>

            {/* SECCION SERVICIOS */}
            <div className="bg-white border-2 border-neutral-200 p-8 shadow-xs hover:border-black transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                  Servicios Ópticos
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Examen de la vista, asesoría directa para elegir armazón, micas con graduación y servicio de Hospital de Lentes para ajustes y reparaciones.
                </p>
              </div>

              <Link
                href="/servicios"
                onClick={() => trackEvent("view_services", { location: "home_card" })}
                className="inline-flex items-center gap-2 font-black uppercase text-sm text-black hover:text-red-600 pt-4 border-t border-neutral-200"
              >
                Ver Servicios Ópticos <ChevronRight size={18} />
              </Link>
            </div>

            {/* SECCION VISÍTANOS */}
            <div className="bg-white border-2 border-red-600 p-8 shadow-xs hover:bg-red-50/50 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                  Visítanos en Plaza Dorada
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Conoce nuestra ubicación exacta, llamada directa, canal de WhatsApp y cómo llegar por la entrada 3 de Soriana en Mérida.
                </p>
              </div>

              <Link
                href="/visitanos"
                onClick={handleDirectionsClick}
                className="inline-flex items-center gap-2 font-black uppercase text-sm text-red-600 hover:text-red-700 pt-4 border-t border-neutral-200"
              >
                Ver Dirección y WhatsApp <ChevronRight size={18} />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
