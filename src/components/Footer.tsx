"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { PendingNote } from "@/components/ui";
import { trackEvent } from "@/lib/analytics";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Lentes y marcas", href: "/lentes" },
  { name: "Visítanos", href: "/visitanos" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* BRAND COLUMN */}
        <div className="md:col-span-5 space-y-5">
          <Image
            src="/images/logo_sunglass_shop.png"
            alt="Sunglass Shop Óptica"
            width={468}
            height={100}
            className="h-9 w-auto"
          />
          <p className="text-sm leading-relaxed max-w-sm">
            Óptica en Plaza Dorada, Mérida. Examen de la vista, micas de calidad, armazones y lentes de sol, con orientación honesta.
          </p>
        </div>

        {/* NAVIGATION COLUMN */}
        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">Navegación</h3>
          <ul className="space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">Contacto</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="block text-white">Plaza Dorada, Loc. 64</span>
                <span className="block">Calle 50 No. 143 x 15 y 19, Nueva Hidalgo. Entrada 3 por Soriana.</span>
                <PendingNote dark />
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="shrink-0 mt-0.5" />
              <div className="space-y-1">
                <a
                  href="tel:9999874504"
                  onClick={() => trackEvent("click_phone", { location: "footer" })}
                  className="block text-white hover:text-red-400 transition-colors"
                >
                  9999 874504
                </a>
                <PendingNote dark />
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="block text-white">Lunes a sábado, 11:00 a 20:00 h</span>
                <PendingNote dark />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-neutral-500">
          <p>© {currentYear} Sunglass Shop Óptica · Plaza Dorada, Mérida, Yucatán.</p>
          <p>Sitio de representación digital comercial. Desarrollado para el Señor Juan por CODIA.</p>
        </div>
      </div>
    </footer>
  );
}
