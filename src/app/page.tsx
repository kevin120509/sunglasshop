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

      <h1 className="sr-only">Sunglass Shop Óptica</h1>

      {/* 1a. HERO MÓVIL (&lt;768px): foto completa sin recorte, info debajo */}
      <section className="md:hidden bg-neutral-950 text-white">
        <Image
          src="/images/local-fachada-hero.jpg"
          alt="Fachada de Sunglass Shop Óptica en Plaza Dorada, Mérida"
          width={1367}
          height={1151}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />

        <div className="px-5 py-6 space-y-4">
          <Eyebrow light>Plaza Dorada · Mérida, Yucatán</Eyebrow>
          <p className="text-3xl font-bold tracking-tight leading-[1.08] text-pretty">
            Examen de la vista, micas de calidad y orientación honesta.
          </p>
          <p className="text-base text-neutral-300 leading-relaxed">
            Primero resolvemos cómo ves. Después te ayudamos a elegir la mica y el armazón adecuados para ti.
          </p>

          <div className="flex flex-col gap-3 pt-1">
            <Link href="/visitanos" onClick={handleDirectionsClick} className={`${btnPrimary} w-full`}>
              <MapPin size={18} /> Cómo llegar
            </Link>
            <div className="flex gap-3">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quisiera información sobre sus lentes y servicios en Plaza Dorada.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className={`${btnWhatsapp} flex-1`}
              >
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
              <a href="tel:9999874504" onClick={handlePhoneClick} className={`${btnOutlineLight} flex-1`}>
                <Phone size={16} /> Llamar
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-neutral-200">Plaza Dorada, Local 64 · Entrada 3 por Soriana</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-neutral-200">Lunes a sábado, 11:00 a 20:00 h</span>
            </div>
          </div>
        </div>

        <div className="h-1 bg-red-600" />
      </section>

      {/* 1b. HERO ESCRITORIO (≥768px): foto real de fondo, clara arriba, información abajo */}
      <section className="hidden md:flex relative bg-neutral-950 text-white overflow-hidden min-h-[820px] lg:min-h-[760px] flex-col">
        <div className="absolute inset-x-0 bottom-0 h-px bg-red-600 z-20" />

        <Image
          src="/images/local-fachada-hero.jpg"
          alt="Interior de Sunglass Shop Óptica en Plaza Dorada, Mérida"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />

        <div className="relative z-10 flex flex-col flex-1 max-w-6xl mx-auto w-full px-5 sm:px-6 py-10 lg:py-14">
          <div className="flex-1" />

          <div className="space-y-5 max-w-xl animate-fade-up animate-delay-100 drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]">
            <Eyebrow light>Plaza Dorada · Mérida, Yucatán</Eyebrow>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-pretty">
              Examen de la vista, micas de calidad y orientación honesta.
            </p>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-md">
              Primero resolvemos cómo ves. Después te ayudamos a elegir la mica y el armazón adecuados para ti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 animate-fade-up animate-delay-200">
            <Link href="/visitanos" onClick={handleDirectionsClick} className={`${btnPrimary} w-full sm:w-auto`}>
              <MapPin size={18} /> Cómo llegar
            </Link>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quisiera información sobre sus lentes y servicios en Plaza Dorada.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className={btnWhatsapp}
            >
              <WhatsAppIcon size={18} /> WhatsApp
            </a>
            <a href="tel:9999874504" onClick={handlePhoneClick} className={btnOutlineLight}>
              <Phone size={16} /> Llamar
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-sm animate-fade-up animate-delay-300">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-neutral-200">Plaza Dorada, Local 64 · Entrada 3 por Soriana</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-neutral-200">Lunes a sábado, 11:00 a 20:00 h</span>
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
