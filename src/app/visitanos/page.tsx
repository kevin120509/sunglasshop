"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  ExternalLink,
  Clock,
  Car,
  Info
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  WHATSAPP_URL,
  SectionHeading,
  PendingNote,
  btnLight,
  btnWhatsapp,
  btnPrimary
} from "@/components/ui";
import { trackEvent } from "@/lib/analytics";

export default function VisitanosPage() {
  const handlePhoneClick = () => trackEvent("click_phone", { location: "visitanos_page" });
  const handleWhatsappClick = () => trackEvent("click_whatsapp", { location: "visitanos_page" });
  const handleDirectionsClick = () => trackEvent("click_directions", { location: "visitanos_page" });

  const details = [
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Plaza Dorada, Local 64",
      extra: "Calle 50 No. 143 x 15 y 19, Nueva Hidalgo (Entrada 3 por Soriana)",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "9999 874504",
    },
    {
      icon: Clock,
      label: "Horario de atención",
      value: "Lunes a sábado",
      extra: "11:00 a 20:00 h",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-14">
        <SectionHeading
          as="h1"
          eyebrow="Ubicación y contacto"
          title="Visítanos en Plaza Dorada"
          text="Estamos en Mérida, Yucatán. Ven a probarte armazones o contáctanos directamente."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* DATOS DEL LOCAL */}
          <div className="lg:col-span-6 bg-neutral-950 text-white rounded-xl overflow-hidden">
            <div className="p-8 sm:p-10 space-y-8">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Sunglass Shop Óptica</h2>
                <p className="text-neutral-400">Plaza Dorada · Mérida, Yucatán</p>
              </div>

              <dl className="divide-y divide-white/10 border-y border-white/10">
                {details.map(({ icon: Icon, label, value, extra }) => (
                  <div key={label} className="py-5 flex gap-4">
                    <Icon size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">{label}</dt>
                      <dd className="text-lg text-white">{value}</dd>
                      {extra && <dd className="text-sm text-neutral-400">{extra}</dd>}
                      <dd><PendingNote dark /></dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="grid gap-3">
                <a href="tel:9999874504" onClick={handlePhoneClick} className={btnLight}>
                  <Phone size={16} />
                  Llamar al 9999 874504
                </a>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quisiera consultar dudas o agendar una visita a Sunglass Shop en Plaza Dorada.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsappClick}
                  className={btnWhatsapp}
                >
                  <WhatsAppIcon size={18} />
                  Enviar WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Plaza+Dorada+Merida"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDirectionsClick}
                  className={btnPrimary}
                >
                  <ExternalLink size={16} />
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* CÓMO LLEGAR */}
          <div className="lg:col-span-6 border border-neutral-200 rounded-xl overflow-hidden">
            <div className="bg-neutral-950 flex items-center justify-center px-10 py-20">
              <Image
                src="/images/logo_sunglass_shop.png"
                alt="Sunglass Shop Óptica Plaza Dorada"
                width={468}
                height={100}
                className="w-full max-w-[17rem] h-auto"
              />
            </div>

            <div className="p-8 sm:p-10 space-y-8">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900">¿Cómo llegar al local?</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Ingresa a Plaza Dorada por la <strong className="font-semibold text-neutral-900">Entrada 3 (lado Soriana)</strong> y encontrarás Sunglass Shop Óptica en el Local 64.
                </p>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Car size={18} className="text-neutral-400 shrink-0" />
                  <span className="text-neutral-600">Plaza Dorada cuenta con amplio estacionamiento.</span>
                </li>
                <li className="flex gap-3">
                  <Info size={18} className="text-neutral-400 shrink-0" />
                  <span className="text-neutral-600">
                    Te recomendamos llamarnos o escribirnos por WhatsApp antes de salir para confirmar disponibilidad de algún modelo o del examen de la vista.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
