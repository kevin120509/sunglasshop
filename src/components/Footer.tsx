"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* BRAND COLUMN */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative h-12 w-52">
            <Image
              src="/images/logo_sunglass_shop_blanco.png"
              alt="Sunglass Shop Óptica"
              width={220}
              height={55}
              className="object-contain h-full w-auto brightness-200"
            />
          </div>
          <p className="text-neutral-400 text-base max-w-md leading-relaxed">
            Óptica física ubicada en Plaza Dorada, Mérida. Encuentra armazones, lentes de sol, micas graduadas y servicios de mantenimiento óptico de forma rápida y sencilla.
          </p>
          <div className="pt-2">
            <span className="inline-block bg-neutral-800 text-neutral-300 text-xs px-3 py-1 font-semibold uppercase tracking-wider">
              Plaza Dorada • Mérida, Yucatán
            </span>
          </div>
        </div>

        {/* NAVIGATION COLUMN (4 DISTINCT PAGES) */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white border-b border-neutral-800 pb-2">
            Páginas Principales
          </h3>
          <ul className="space-y-3 font-medium text-base text-neutral-300">
            <li>
              <Link href="/" className="hover:text-red-400 transition-colors">
                1. Inicio
              </Link>
            </li>
            <li>
              <Link href="/lentes" className="hover:text-red-400 transition-colors">
                2. Lentes y marcas
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-red-400 transition-colors">
                3. Servicios
              </Link>
            </li>
            <li>
              <Link href="/visitanos" className="hover:text-red-400 transition-colors">
                4. Visítanos
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white border-b border-neutral-800 pb-2">
            Ubicación y Contacto
          </h3>
          <ul className="space-y-4 text-sm text-neutral-300">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-red-500 shrink-0 mt-1" />
              <div>
                <strong className="block text-white text-base">Plaza Dorada</strong>
                <span>Calle 50 No. 143 x 15 y 19 Nueva Hidalgo, Loc. 64</span>
                <span className="block text-xs text-neutral-400 mt-0.5">Entrada 3 por Soriana</span>
                <span className="text-xs text-yellow-500 font-mono block mt-1">[PENDIENTE DE VALIDAR CON JUAN]</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Phone size={18} className="text-neutral-400 shrink-0 mt-1" />
              <div>
                <a
                  href="tel:9999874504"
                  onClick={() => trackEvent("click_phone", { location: "footer" })}
                  className="font-bold text-white text-base hover:text-red-400 transition-colors"
                >
                  Tel: 9999 874504
                </a>
                <span className="text-xs text-yellow-500 font-mono block">[PENDIENTE DE VALIDAR CON JUAN]</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Clock size={18} className="text-neutral-400 shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-white">Horario sugerido:</span>
                <span className="block text-neutral-300">Lunes a Sábado de 11:00 a 20:00 hrs.</span>
                <span className="text-xs text-yellow-500 font-mono block">[PENDIENTE DE VALIDAR CON JUAN]</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
        <p>© {currentYear} Sunglass Shop Óptica. Plaza Dorada, Mérida, Yucatán.</p>
        <p className="text-center md:text-right">
          Sitio de representación digital comercial. Desarrollado para el Señor Juan por CODIA.
        </p>
      </div>
    </footer>
  );
}
