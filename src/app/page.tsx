"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Glasses,
  Eye,
  ArrowRight,
  Layers,
  Stethoscope
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  WHATSAPP_URL,
  Eyebrow,
  SectionHeading,
  IconBox,
  btnPrimary,
  btnWhatsapp,
  btnOutlineLight
} from "@/components/ui";
import { trackEvent } from "@/lib/analytics";

const steps = [
  {
    icon: Eye,
    title: "Resolvemos tu problema visual",
    text: "Examen de la vista para detectar y corregir miopía, hipermetropía, astigmatismo o presbicia. Si notamos algo que requiere a un médico oftalmólogo, te lo decimos y te canalizamos.",
  },
  {
    icon: Layers,
    title: "Te asesoramos en la mica",
    text: "Te explicamos con claridad las opciones de micas y tratamientos según tu graduación y tu uso diario, para que entiendas qué estás eligiendo.",
  },
  {
    icon: Glasses,
    title: "Eliges tu armazón",
    text: "Con tu graduación y tu mica definidas, te orientamos para encontrar el armazón que mejor se adapte a tu rostro, estilo y presupuesto.",
  },
];

const sections = [
  {
    icon: Eye,
    title: "Servicios ópticos",
    text: "Examen de la vista, gamas de micas explicadas con claridad, ajuste de tus lentes después del examen y Hospital de Lentes para reparaciones.",
    href: "/servicios",
    cta: "Ver servicios",
    event: "view_services" as const,
  },
  {
    icon: Glasses,
    title: "Lentes y marcas",
    text: "Armazones para dama, caballero y jóvenes, lentes de sol con filtro UV, micas digitalizadas y asesoría de imagen para elegir el modelo ideal.",
    href: "/lentes",
    cta: "Ver lentes y marcas",
    event: "view_products" as const,
  },
  {
    icon: MapPin,
    title: "Visítanos en Plaza Dorada",
    text: "Conoce nuestra ubicación exacta, llamada directa, canal de WhatsApp y cómo llegar por la entrada 3 de Soriana en Mérida.",
    href: "/visitanos",
    cta: "Ver dirección",
    event: "click_directions" as const,
    accent: true,
  },
];

export default function Home() {
  const handlePhoneClick = () => trackEvent("click_phone", { section: "inicio" });
  const handleWhatsappClick = () => trackEvent("click_whatsapp", { section: "inicio" });
  const handleDirectionsClick = () => trackEvent("click_directions", { section: "inicio" });

  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-red-600" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* TEXTO */}
          <div className="lg:col-span-7 space-y-8">
            <Eyebrow light>Plaza Dorada · Mérida, Yucatán</Eyebrow>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
                Sunglass Shop <span className="text-red-600">Óptica</span>
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-200 leading-snug max-w-xl text-pretty">
                Examen de la vista, micas de calidad y orientación honesta.
              </p>
              <p className="text-base text-neutral-400 leading-relaxed max-w-lg">
                Primero resolvemos cómo ves. Después te ayudamos a elegir la mica y el armazón adecuados para ti.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/visitanos" onClick={handleDirectionsClick} className={btnPrimary}>
                <MapPin size={18} /> Cómo llegar
              </Link>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quisiera información sobre sus lentes y servicios en Plaza Dorada.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className={btnWhatsapp}
              >
                <WhatsAppIcon size={18} /> Enviar WhatsApp
              </a>
              <a href="tel:9999874504" onClick={handlePhoneClick} className={btnOutlineLight}>
                <Phone size={16} /> Llamar
              </a>
            </div>
          </div>

          {/* TARJETA DEL LOCAL */}
          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/[0.03] rounded-2xl overflow-hidden">
              <div className="flex items-center justify-center px-8 py-16 border-b border-white/10">
                <Image
                  src="/images/logo_sunglass_shop.png"
                  alt="Sunglass Shop Óptica Plaza Dorada Mérida"
                  width={468}
                  height={100}
                  className="w-full max-w-[17rem] h-auto"
                  priority
                />
              </div>

              <div className="p-7 space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <strong className="block text-white font-semibold text-base">Plaza Dorada, Local 64</strong>
                    <span className="block text-neutral-400">Calle 50 No. 143 x 15 y 19, Nueva Hidalgo</span>
                    <span className="block text-neutral-500">Entrada 3 por Soriana</span>
                  </div>
                </div>

                <Link
                  href="/visitanos"
                  onClick={handleDirectionsClick}
                  className="group flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold uppercase tracking-wider text-white hover:text-red-400 transition-colors"
                >
                  Ver mapa y cómo llegar
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROCESO DE ATENCIÓN EN 3 PASOS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-14">
          <SectionHeading
            eyebrow="Cómo te atendemos"
            title="Tres pasos, en el orden correcto"
            text="Antes de hablar de armazones, nos aseguramos de que realmente veas bien."
          />

          <ol className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-900">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="pt-8 pb-10 md:pr-10 md:[&:not(:first-child)]:pl-10 md:[&:not(:first-child)]:border-l border-neutral-200 space-y-5 border-b md:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red-600 tabular-nums">0{i + 1}</span>
                  <Icon size={22} className="text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>

          {/* ALCANCE HONESTO */}
          <div className="bg-neutral-50 border-l-2 border-red-600 rounded-r-xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6">
            <IconBox accent>
              <Stethoscope size={20} />
            </IconBox>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">Te decimos con honestidad qué podemos resolver</h3>
              <p className="text-neutral-600 leading-relaxed max-w-3xl">
                Corregimos la agudeza visual: miopía, hipermetropía, astigmatismo y presbicia (vista cansada). Condiciones como cataratas, glaucoma o complicaciones visuales por diabetes o hipertensión deben ser atendidas por un médico oftalmólogo, y así te lo indicaremos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCESOS A LAS SECCIONES */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-14">
          <SectionHeading
            eyebrow="Óptica en Plaza Dorada"
            title="¿Qué buscas hoy en Sunglass Shop?"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map(({ icon: Icon, title, text, href, cta, event, accent }) => (
              <Link
                key={href}
                href={href}
                onClick={() => trackEvent(event, { location: "home_card" })}
                className={`group bg-white border rounded-xl p-8 flex flex-col justify-between gap-10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-900/5 ${
                  accent ? "border-red-600" : "border-neutral-200 hover:border-neutral-900"
                }`}
              >
                <div className="space-y-5">
                  <IconBox accent={accent}>
                    <Icon size={20} />
                  </IconBox>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{text}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${
                    accent ? "text-red-600" : "text-neutral-900"
                  }`}
                >
                  {cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
