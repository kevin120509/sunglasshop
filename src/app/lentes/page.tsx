"use client";

import {
  Glasses,
  Sun,
  Sparkles,
  UserCheck,
  Cpu,
  Gem
} from "lucide-react";
import { Eyebrow, SectionHeading, IconBox, PendingNote, CtaBanner } from "@/components/ui";

const categories = [
  {
    icon: Glasses,
    title: "Lentes ópticos",
    text: "Armazones duraderos, ligeros y cómodos para tu graduación diaria en materiales de acetato, metal y modelos combinados.",
    tag: "Dama, caballero y jóvenes",
  },
  {
    icon: Sparkles,
    title: "Micas digitalizadas",
    text: "Micas de visión sencilla, bifocales y progresivas panorámicas, con antirreflejante, fotocromático y filtro de luz azul.",
    tag: "Adaptadas a tu graduación",
  },
  {
    icon: Sun,
    title: "Lentes solares",
    text: "Protección contra la radiación UV del sol de Mérida en estilos clásicos, urbanos y deportivos. También pueden graduarse.",
    tag: "Filtro UV y polarizados",
  },
  {
    icon: UserCheck,
    title: "Asesoría de imagen",
    text: "Te ayudamos a elegir el armazón según la forma de tu rostro, tu estilo y el tipo de mica que necesitas.",
    tag: "Orientación personalizada",
    accent: true,
  },
];

const trends = [
  {
    icon: Cpu,
    title: "Lentes inteligentes Meta",
    text: "Lentes con cámara, audio y asistente integrados que se ven como un armazón convencional. Pregúntanos por las opciones con graduación.",
    pending: "Disponibilidad en tienda",
  },
  {
    icon: Gem,
    title: "Antirreflejante en tono oro",
    text: "Nuevos tratamientos antirreflejantes con reflejo dorado: la misma protección contra reflejos con un acabado más estético.",
  },
];

const brands = [
  "Ray-Ban",
  "Oakley",
  "Tommy Hilfiger",
  "Michael Kors",
  "Vogue",
  "Coach",
  "Guess",
  "Armani Exchange",
  "Arnette",
  "Montblanc",
  "Prada",
  "Burberry",
  "Carolina Herrera",
  "Ralph Lauren",
];

const container = "max-w-6xl mx-auto px-5 sm:px-6";

export default function LentesPage() {
  return (
    <div>

      {/* INTRO + CATEGORÍAS */}
      <section className="py-20 sm:py-24">
        <div className={`${container} space-y-14`}>
          <SectionHeading
            as="h1"
            eyebrow="Armazones, micas y solares"
            title="Lentes y marcas"
            text="Encuentra armazones, micas y lentes de sol en nuestra óptica de Plaza Dorada, con la asesoría para elegir lo que realmente necesitas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ icon: Icon, title, text, tag, accent }) => (
              <div
                key={title}
                className="group border border-neutral-200 rounded-xl p-7 flex flex-col justify-between gap-8 transition-colors hover:border-neutral-900"
              >
                <div className="space-y-5">
                  <IconBox accent={accent}>
                    <Icon size={20} />
                  </IconBox>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900">{title}</h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
                </div>
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  <span className="w-1.5 h-1.5 bg-red-600 shrink-0" />
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENDENCIAS E INNOVACIONES */}
      <section className="py-20 sm:py-24 bg-neutral-950 text-white">
        <div className={`${container} space-y-14`}>
          <div className="max-w-2xl space-y-4">
            <Eyebrow light>Tendencias</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lo nuevo en el mundo de los lentes</h2>
            <p className="text-lg text-neutral-400 leading-relaxed">Innovaciones explicadas de forma sencilla.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {trends.map(({ icon: Icon, title, text, pending }) => (
              <div key={title} className="bg-neutral-950 p-8 sm:p-10 flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <IconBox accent>
                    <Icon size={20} />
                  </IconBox>
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{text}</p>
                </div>
                {pending && <PendingNote dark>{pending}</PendingNote>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS DISPONIBLES */}
      <section className="py-20 sm:py-24">
        <div className={`${container} space-y-10`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Marcas"
              title="También encontrarás marcas como"
              text="Ven a Plaza Dorada y pruébate los modelos en tienda."
            />
            <PendingNote>Disponibilidad exacta de marcas y stock vigente</PendingNote>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 border-t border-l border-neutral-200 rounded-xl overflow-hidden">
            {brands.map((brand) => (
              <li
                key={brand}
                className="border-r border-b border-neutral-200 h-20 px-3 flex items-center justify-center text-center text-sm font-semibold tracking-tight text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                {brand}
              </li>
            ))}
          </ul>

          <p className="text-xs text-neutral-500">
            * Los modelos y marcas están sujetos a disponibilidad física en nuestra sucursal de Plaza Dorada.
          </p>
        </div>
      </section>

      <CtaBanner
        title="¿No sabes qué lentes te convienen?"
        text="Escríbenos por WhatsApp o visítanos. Te orientamos según tu graduación, tu rostro y tu presupuesto."
        message="Hola, quisiera asesoría para elegir lentes en Plaza Dorada."
        location="lentes_page"
      />
    </div>
  );
}
