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
  Stethoscope,
  Clock
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";
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
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-14 lg:gap-y-10 items-start">

          {/* COPY */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up animate-delay-100">
            <Eyebrow light>Plaza Dorada · Mérida, Yucatán</Eyebrow>
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

          {/* VISUAL: foto real del local + info integrada */}
          <div className="lg:col-span-5 lg:row-span-2 lg:row-start-1 animate-fade-up animate-delay-300">
            <div className="h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 flex flex-col">
              <div className="relative flex-1 min-h-[20rem]">
                <Image
                  src="/images/local-fachada.jpg"
                  alt="Fachada de Sunglass Shop Óptica en Plaza Dorada, Mérida"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/95 to-transparent" />
              </div>

              <div className="border-t border-white/10 bg-black/30 p-7 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <strong className="block text-white font-semibold text-base">Plaza Dorada, Local 64</strong>
                    <span className="block text-neutral-400">Calle 50 No. 143 x 15 y 19, Nueva Hidalgo</span>
                    <span className="block text-neutral-500">Entrada 3 por Soriana</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <strong className="block text-white font-semibold text-base">Lunes a sábado</strong>
                    <span className="block text-neutral-400">11:00 a 20:00 h</span>
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

          {/* ACCIONES: 1 CTA primario + secundarios */}
          <div className="lg:col-span-7 lg:row-start-2 flex flex-col gap-3 animate-fade-up animate-delay-200">
            <Link href="/visitanos" onClick={handleDirectionsClick} className={`${btnPrimary} w-full sm:w-auto`}>
              <MapPin size={18} /> Cómo llegar
            </Link>
            <div className="flex gap-3">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quisiera información sobre sus lentes y servicios en Plaza Dorada.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className={`${btnWhatsapp} flex-1 sm:flex-none`}
              >
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
              <a href="tel:9999874504" onClick={handlePhoneClick} className={`${btnOutlineLight} flex-1 sm:flex-none`}>
                <Phone size={16} /> Llamar
              </a>
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
                className="pt-8 pb-10 md:pr-10 md:[&:not(:first-child)]:pl-10 md:[&:not(:first-child)]:border-l border-neutral-200 border-b md:border-b-0"
              >
                <Reveal delay={i * 120} className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-red-600 tabular-nums">0{i + 1}</span>
                    <Icon size={22} className="text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{text}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* ALCANCE HONESTO */}
          <Reveal delay={100}>
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
          </Reveal>
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
            {sections.map(({ icon: Icon, title, text, href, cta, event, accent }, i) => (
              <Reveal key={href} delay={i * 120}>
                <Link
                href={href}
                onClick={() => trackEvent(event, { location: "home_card" })}
                className={`group bg-white border rounded-xl p-8 flex flex-col justify-between gap-10 h-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-900/5 ${
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
