"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Clock
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function VisitanosPage() {
  const handlePhoneClick = () => {
    trackEvent("click_phone", { location: "visitanos_page" });
  };

  const handleWhatsappClick = () => {
    trackEvent("click_whatsapp", { location: "visitanos_page" });
  };

  const handleDirectionsClick = () => {
    trackEvent("click_directions", { location: "visitanos_page" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* HEADER DE PAGINA */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-red-600 text-white text-xs font-bold px-3.5 py-1 uppercase tracking-widest inline-block">
            Página 4 • Ubicación y Contacto
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-gray-900">
            Visítanos en Plaza Dorada
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Estamos ubicados físicamente en Mérida, Yucatán. Ven a probarte armazones o contáctanos directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* INFORMACIÓN DE LOCAL Y DATOS COMERCIALES */}
          <div className="lg:col-span-6 bg-black text-white p-8 space-y-8 shadow-xl border-4 border-neutral-900">
            
            <div className="border-b border-neutral-800 pb-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white flex items-center gap-3">
                <MapPin className="text-red-600 shrink-0" size={32} />
                Sunglass Shop Óptica
              </h2>
              <p className="text-neutral-300 text-lg font-bold">
                Plaza Dorada • Mérida, Yucatán
              </p>
            </div>

            {/* DETALLES DE DIRECCION SOLICITADOS */}
            <div className="space-y-6 text-sm text-neutral-200">
              
              <div className="space-y-1.5">
                <strong className="block text-white text-base uppercase font-extrabold">Ubicación exacta:</strong>
                <p className="text-base text-neutral-200 leading-snug">
                  Plaza Dorada • Calle 50 No. 143 x 15 y 19 Nueva Hidalgo, Loc. 64 (Entrada 3 por Soriana)
                </p>
                <span className="text-xs text-yellow-400 font-mono block pt-1 font-semibold">
                  [PENDIENTE DE VALIDAR CON JUAN]
                </span>
              </div>

              <div className="space-y-1.5">
                <strong className="block text-white text-base uppercase font-extrabold">Teléfono:</strong>
                <p className="text-2xl font-black text-white">
                  9999 874504
                </p>
                <span className="text-xs text-yellow-400 font-mono block pt-1 font-semibold">
                  [PENDIENTE DE VALIDAR CON JUAN]
                </span>
              </div>

              <div className="space-y-1.5">
                <strong className="block text-white text-base uppercase font-extrabold flex items-center gap-2">
                  <Clock size={18} className="text-neutral-400" />
                  Horario de Atención:
                </strong>
                <p className="text-base text-neutral-200">
                  Lunes a Sábado: 11:00 AM - 8:00 PM hrs.
                </p>
                <span className="text-xs text-yellow-400 font-mono block pt-1 font-semibold">
                  [PENDIENTE DE VALIDAR CON JUAN]
                </span>
              </div>

            </div>

            {/* BOTONES DE ACCIÓN DIRECTA MÓVIL (GRANDES Y LEGIBLES) */}
            <div className="pt-6 border-t border-neutral-800 space-y-4">
              
              {/* BOTÓN LLAMADA */}
              <a
                href="tel:9999874504"
                onClick={handlePhoneClick}
                className="w-full bg-white text-black py-4 px-6 font-black uppercase text-base tracking-wide flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors shadow-lg"
              >
                <Phone size={22} className="text-black" />
                Llamar al 9999 874504
              </a>

              {/* BOTÓN WHATSAPP */}
              <a
                href="https://wa.me/529999874504?text=Hola,%20quisiera%20consultar%20dudas%20o%20agendar%20una%20visita%20a%20Sunglass%20Shop%20en%20Plaza%20Dorada."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="w-full bg-emerald-600 text-white py-4 px-6 font-black uppercase text-base tracking-wide flex items-center justify-center gap-3 hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <MessageCircle size={22} />
                Enviar WhatsApp Directo
              </a>

              {/* BOTÓN GOOGLE MAPS */}
              <a
                href="https://maps.google.com/?q=Plaza+Dorada+Merida"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="w-full bg-red-600 text-white py-4 px-6 font-black uppercase text-base tracking-wide flex items-center justify-center gap-3 hover:bg-red-700 transition-colors shadow-lg"
              >
                <ExternalLink size={20} />
                Cómo llegar (Google Maps)
              </a>

            </div>

          </div>

          {/* INDICACIONES Y FOTO DE PRESENTACIÓN DEL LOCAL */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-neutral-50 border-2 border-neutral-300 p-8 space-y-6">
              
              <h2 className="text-2xl font-black uppercase text-gray-900">
                ¿Cómo llegar al local?
              </h2>
              
              <p className="text-gray-700 text-base leading-relaxed">
                Plaza Dorada cuenta con amplio estacionamiento. Para encontrarnos rápido, ingresa por la <strong>Entrada 3 (lado Soriana)</strong> donde verás el local de Sunglass Shop Óptica.
              </p>

              {/* TARJETA PROTAGONISTA DE FACHADA */}
              <div className="bg-neutral-900 border-2 border-neutral-800 p-6 space-y-4 text-white">
                <div className="relative h-48 bg-neutral-950 flex items-center justify-center p-4 border border-neutral-800">
                  <Image
                    src="/images/logo_sunglass_shop_blanco.png"
                    alt="Fachada Sunglass Shop Plaza Dorada"
                    width={260}
                    height={65}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
                
                <div className="text-center space-y-1">
                  <strong className="block text-white text-lg font-bold">Plaza Dorada • Mérida, Yucatán</strong>
                  <span className="text-xs text-neutral-300">Local 64 • Entrada 3 por Soriana</span>
                </div>
              </div>

              <div className="bg-neutral-100 border border-neutral-300 p-4 text-xs text-gray-800 space-y-1">
                <strong className="text-gray-900 block font-bold">Recomendación para tu visita:</strong>
                <p>
                  Puedes llamarnos o enviarnos un mensaje por WhatsApp antes de salir de casa para confirmar disponibilidad de algún modelo o servicio de graduación.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
