"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Menu, X, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Lentes y marcas", href: "/lentes" },
    { name: "Servicios", href: "/servicios" },
    { name: "Visítanos", href: "/visitanos" },
  ];

  const handlePhoneClick = () => {
    trackEvent("click_phone", { location: "header" });
  };

  const handleWhatsappClick = () => {
    trackEvent("click_whatsapp", { location: "header" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <MapPin size={16} className="text-red-500 shrink-0" />
            <span>Plaza Dorada, Mérida, Yucatán</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="tel:9999874504"
              onClick={handlePhoneClick}
              className="flex items-center gap-1 hover:text-gray-300 transition-colors py-0.5 px-2 bg-gray-900 rounded"
            >
              <Phone size={13} />
              <span>Tel: 9999 874504</span>
            </a>

            <a
              href="https://wa.me/529999874504?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20sus%20lentes%20y%20servicios%20en%20Plaza%20Dorada."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-48 max-w-[200px] flex items-center">
            <Image
              src="/images/logo_sunglass_shop.png"
              alt="Sunglass Shop Óptica"
              width={200}
              height={50}
              className="object-contain h-full w-auto"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION (4 DISTINCT PAGES) */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-base">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 border-b-2 transition-colors ${
                  isActive
                    ? "border-black text-black font-bold"
                    : "border-transparent text-gray-700 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/visitanos"
            onClick={() => trackEvent("click_directions", { location: "header_cta" })}
            className="bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors rounded-none shadow-xs"
          >
            Visítanos
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3 text-black focus:outline-hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-bold text-lg text-gray-900 border-b border-gray-100 pb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 px-1 block ${
                    isActive ? "text-red-600 font-extrabold" : "hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/visitanos"
              onClick={() => {
                setIsMobileMenuOpen(false);
                trackEvent("click_directions", { location: "mobile_menu" });
              }}
              className="w-full bg-black text-white text-center py-4 font-bold uppercase text-base hover:bg-gray-800 transition-colors"
            >
              Visítanos en Plaza Dorada
            </Link>

            <a
              href="tel:9999874504"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handlePhoneClick();
              }}
              className="w-full border-2 border-black text-black text-center py-3.5 font-bold uppercase text-sm flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <Phone size={18} />
              Llamar al 9999 874504
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
