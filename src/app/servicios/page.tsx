"use client";

import {
  Eye,
  ShieldCheck,
  Sparkles,
  Settings,
  Ruler,
  Stethoscope,
  Plus,
  Check
} from "lucide-react";
import { SectionHeading, IconBox, PendingNote, CtaBanner } from "@/components/ui";

const services = [
  {
    icon: Eye,
    title: "Examen de la vista",
    text: "Medimos tu agudeza visual para corregir miopía, hipermetropía, astigmatismo y presbicia (vista cansada). Te explicamos tu graduación sin tecnicismos.",
    note: "Si detectamos algo fuera de nuestro alcance, te canalizamos con un oftalmólogo",
  },
  {
    icon: ShieldCheck,
    title: "Asesoría de imagen",
    text: "Te orientamos para elegir el armazón que mejor se adapte a la forma de tu rostro, tu estilo personal, tu uso diario y el tipo de mica que necesitas.",
    note: "Recomendación práctica según tus facciones",
  },
  {
    icon: Sparkles,
    title: "Micas y tratamientos",
    text: "Micas digitalizadas de visión sencilla, bifocales y progresivas, con tratamientos antirreflejantes, fotocromáticos y protección contra luz azul.",
    note: "Opciones según tu graduación y estilo de vida",
  },
  {
    icon: Settings,
    title: "Ajuste y Hospital de Lentes",
    text: "Ajustamos tus lentes después del examen para que la mica quede en la posición correcta. También realizamos nivelación de varillas, cambio de plaquetas y reparaciones.",
    pending: "Disponibilidad de refacciones específicas",
  },
];

const micaRanges = [
  {
    name: "Básica",
    text: "Corrige tu graduación de forma funcional. Una opción de entrada para necesidades visuales sencillas.",
  },
  {
    name: "Estándar",
    text: "Mejor calidad óptica y mayor comodidad para el uso diario, con opción de agregar tratamientos.",
  },
  {
    name: "Panorámica",
    text: "Campo de visión más amplio y nítido, con mejor adaptación. Es la que recomendamos para una visión óptima.",
    recommended: true,
  },
];

const treatments = [
  { name: "Varilux · Essilor", text: "Micas progresivas de una de las marcas líderes a nivel mundial." },
  { name: "Kodak Lens", text: "Micas de alta calidad para resolver distintos problemas visuales." },
  { name: "Transitions", text: "Tratamiento fotocromático: la mica se oscurece con el sol y se aclara en interiores." },
  { name: "Crizal", text: "Tratamiento antirreflejante que reduce reflejos y facilita la limpieza." },
];

const faqs = [
  {
    q: "¿Qué problemas visuales pueden resolver en la óptica?",
    a: "Corregimos la agudeza visual: miopía, hipermetropía, astigmatismo y presbicia (vista cansada). Cataratas, glaucoma o complicaciones por diabetes o hipertensión deben ser atendidas por un médico oftalmólogo; si notamos alguna señal, te lo indicamos con honestidad.",
  },
  {
    q: "¿Por qué hay tanta diferencia de precio entre unas micas y otras?",
    a: "La calidad del material y de los tratamientos influye directamente en qué tan bien ves y qué tan rápido te adaptas. Muchas veces la falta de adaptación a unos lentes se debe a materiales de baja calidad. Te explicamos las diferencias para que elijas con información.",
  },
  {
    q: "¿Qué diferencia hay entre micas monofocales, bifocales y progresivas?",
    a: "Las monofocales (visión sencilla) corrigen una sola distancia. Las bifocales tienen dos zonas: lejos y cerca. Las progresivas permiten ver a todas las distancias con una transición suave, sin línea visible.",
  },
  {
    q: "¿Por qué es importante ajustar los lentes después de hacerlos?",
    a: "Al colocar las micas cambia el peso y la posición del armazón, y puede curvarse hacia adentro o hacia afuera. El armazón debe tener una ligera inclinación (ángulo pantoscópico) y la altura y distancia correctas; esto es especialmente importante para leer con progresivos.",
  },
  {
    q: "¿Necesito cita para el examen de la vista?",
    a: "Te recomendamos escribirnos por WhatsApp o llamarnos antes de tu visita para confirmar disponibilidad.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const container = "max-w-6xl mx-auto px-5 sm:px-6";

export default function ServiciosPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      {/* INTRO + SERVICIOS */}
      <section className="py-20 sm:py-24">
        <div className={`${container} space-y-14`}>
          <SectionHeading
            as="h1"
            eyebrow="Servicios ópticos"
            title="Primero resolvemos cómo ves"
            text="Te explicamos con claridad cada paso para que tomes la mejor decisión sobre tu vista y tus lentes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-xl overflow-hidden">
            {services.map(({ icon: Icon, title, text, note, pending }, i) => (
              <div key={title} className="bg-white p-8 sm:p-10 flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <IconBox accent={!!pending}>
                      <Icon size={20} />
                    </IconBox>
                    <span className="text-sm font-semibold text-neutral-300 tabular-nums">0{i + 1}</span>
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h2>
                  <p className="text-neutral-600 leading-relaxed">{text}</p>
                </div>
                {pending ? (
                  <PendingNote>{pending}</PendingNote>
                ) : (
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{note}</p>
                )}
              </div>
            ))}
          </div>

          {/* ALCANCE HONESTO */}
          <div className="bg-neutral-950 text-white rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6">
            <IconBox accent>
              <Stethoscope size={20} />
            </IconBox>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Honestidad ante todo</h2>
              <p className="text-neutral-400 leading-relaxed max-w-3xl">
                Nuestra prioridad es que veas bien. Si durante el examen notamos señales de cataratas, glaucoma o complicaciones por diabetes o hipertensión, te recomendaremos acudir con un médico oftalmólogo antes de cualquier otra cosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAMAS DE MICAS */}
      <section className="py-20 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className={`${container} space-y-14`}>
          <SectionHeading
            eyebrow="Micas"
            title="No todas las micas son iguales"
            text="Te explicamos las diferencias entre cada gama para que elijas con información."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {micaRanges.map(({ name, text, recommended }, i) => (
              <div
                key={name}
                className={`relative rounded-xl overflow-hidden p-8 space-y-4 ${
                  recommended ? "bg-neutral-950 text-white" : "bg-white border border-neutral-200"
                }`}
              >
                {recommended && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-bl-lg">
                    Recomendada
                  </span>
                )}
                <span className={`text-sm font-semibold tabular-nums ${recommended ? "text-red-500" : "text-neutral-400"}`}>
                  Gama 0{i + 1}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
                <p className={`leading-relaxed ${recommended ? "text-neutral-300" : "text-neutral-600"}`}>{text}</p>
              </div>
            ))}
          </div>

          {/* MARCAS DE MICAS Y TRATAMIENTOS */}
          <div className="pt-6 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-neutral-200 pb-6">
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900">Micas y tratamientos con respaldo</h3>
              <p className="text-sm text-neutral-500 max-w-md">
                Marcas de laboratorio reconocidas internacionalmente y laboratorios locales de Mérida.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {treatments.map(({ name, text }) => (
                <div key={name} className="space-y-2">
                  <h4 className="flex items-center gap-2 font-semibold text-neutral-900">
                    <Check size={16} className="text-red-600 shrink-0" />
                    {name}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿SABÍAS QUE? + FAQ */}
      <section className="py-20 sm:py-24">
        <div className={`${container} grid grid-cols-1 lg:grid-cols-12 gap-14`}>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-36 border border-neutral-200 rounded-xl p-8 space-y-5">
              <IconBox>
                <Ruler size={20} />
              </IconBox>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                ¿Sabías que tus lentes deben tener una inclinación?
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Se llama <strong className="text-neutral-900 font-semibold">ángulo pantoscópico</strong>: una ligera inclinación del armazón, de alrededor de 15 grados, que junto con la altura y distancia correctas permite que la mica trabaje como debe. Es clave para leer cómodamente con lentes progresivos.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Por eso, después de colocar tus micas, ajustamos el armazón. Pregúntanos en tu visita.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-7 space-y-8">
            <SectionHeading eyebrow="Dudas comunes" title="Preguntas frecuentes" />
            <div className="border-t border-neutral-900">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group border-b border-neutral-200">
                  <summary className="flex items-start justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-medium text-lg text-neutral-900 hover:text-red-600 transition-colors">
                    {q}
                    <Plus size={20} className="shrink-0 mt-1 text-neutral-400 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="pb-6 pr-10 text-neutral-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaBanner
        title="¿Tienes dudas sobre tu vista o tus lentes?"
        text="Visítanos en Plaza Dorada o escríbenos por WhatsApp. Te orientamos sin compromiso."
        message="Hola, quisiera consultar información sobre sus servicios ópticos en Plaza Dorada."
        location="servicios_page"
      />
    </div>
  );
}
