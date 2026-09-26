"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL, btn, btnDark } from "@/components/ui";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Lentes y marcas", href: "/lentes" },
  { name: "Visítanos", href: "/visitanos" },
];

const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola, me gustaría obtener información sobre sus lentes y servicios en Plaza Dorada."
)}`;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handlePhoneClick = () => trackEvent("click_phone", { location: "header" });
  const handleWhatsappClick = () => trackEvent("click_whatsapp", { location: "header" });

  return (
    <header className="sticky top-0 z-50">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-neutral-950 text-neutral-300 text-xs">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-9 flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-red-500 shrink-0" />
            <span>Plaza Dorada, Mérida, Yucatán</span>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <a
              href="tel:9999874504"
              onClick={handlePhoneClick}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} />
              <span>9999 874504</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <WhatsAppIcon size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Sunglass Shop Óptica, inicio">
            <Image
              src="/images/logo_sunglass_shop_blanco.png"
              alt="Sunglass Shop Óptica"
              width={468}
              height={100}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2 transition-colors after:absolute after:left-0 after:-bottom-px after:h-0.5 after:bg-red-600 after:transition-all ${
                    isActive
                      ? "text-neutral-900 after:w-full"
                      : "text-neutral-500 hover:text-neutral-900 after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/visitanos"
              onClick={() => trackEvent("click_directions", { location: "header_cta" })}
              className={btnDark}
            >
              Cómo llegar
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden -mr-2 p-2 text-neutral-900"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white px-5 pb-6 animate-menu-in">
            <nav className="flex flex-col divide-y divide-neutral-100">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-4 text-lg font-medium flex items-center justify-between ${
                      isActive ? "text-neutral-900" : "text-neutral-500"
                    }`}
                  >
                    {link.name}
                    {isActive && <span className="w-1.5 h-1.5 bg-red-600" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 grid gap-3">
              <Link
                href="/visitanos"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  trackEvent("click_directions", { location: "mobile_menu" });
                }}
                className={btnDark}
              >
                <MapPin size={16} />
                Cómo llegar
              </Link>
              <a
                href="tel:9999874504"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handlePhoneClick();
                }}
                className={`${btn} border border-neutral-300 text-neutral-900 hover:bg-neutral-50`}
              >
                <Phone size={16} />
                Llamar al 9999 874504
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
