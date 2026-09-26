"use client";

import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export const WHATSAPP_URL = "https://wa.me/529999874504";

export const btn =
  "inline-flex items-center justify-center gap-2 h-12 px-6 text-sm font-semibold uppercase tracking-wider transition-colors rounded-lg";
export const btnPrimary = `${btn} bg-red-600 text-white hover:bg-red-700`;
export const btnWhatsapp = `${btn} bg-emerald-600 text-white hover:bg-emerald-700`;
export const btnDark = `${btn} bg-neutral-900 text-white hover:bg-neutral-700`;
export const btnLight = `${btn} bg-white text-neutral-900 hover:bg-neutral-200`;
export const btnOutlineLight = `${btn} border border-white/25 text-white hover:bg-white/10`;

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-neutral-400" : "text-neutral-500"
      }`}
    >
      <span className="h-px w-8 bg-red-600" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl space-y-4">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        className={`font-bold tracking-tight text-neutral-900 text-balance ${
          Tag === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {title}
      </Tag>
      {text && <p className="text-lg text-neutral-600 leading-relaxed text-pretty">{text}</p>}
    </div>
  );
}

export function IconBox({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={`w-11 h-11 flex items-center justify-center shrink-0 text-white rounded-lg ${
        accent ? "bg-red-600" : "bg-neutral-900"
      }`}
    >
      {children}
    </div>
  );
}

export function PendingNote({ children, dark }: { children?: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-start gap-1.5 text-[11px] font-mono leading-snug rounded ${
        dark ? "text-yellow-400" : "text-yellow-700"
      }`}
    >
      <AlertCircle size={13} className="shrink-0 mt-px" />
      <span>[PENDIENTE DE VALIDAR CON JUAN{children ? `: ${children}` : ""}]</span>
    </span>
  );
}

export function CtaBanner({
  title,
  text,
  message,
  location,
}: {
  title: string;
  text: string;
  message: string;
  location: string;
}) {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="space-y-3 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">{title}</h2>
          <p className="text-neutral-400 text-base leading-relaxed">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { location })}
            className={btnWhatsapp}
          >
            <WhatsAppIcon size={18} />
            Escríbenos por WhatsApp
          </a>
          <Link href="/visitanos" className={btnOutlineLight}>
            Cómo llegar <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
