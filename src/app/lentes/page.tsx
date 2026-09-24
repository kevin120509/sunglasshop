"use client";

import Link from "next/link";
import {
  Glasses,
  Sun,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function LentesPage() {
  const handleWhatsappClick = () => {
    trackEvent("click_whatsapp", { location: "lentes_page" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* HEADER DE PAGINA */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-black text-white text-xs font-bold px-3.5 py-1 uppercase tracking-widest inline-block">
            Página 2 • Catálogo y Exhibición
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-gray-900">
            Lentes y Marcas
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Descubre los armazones, lentes de sol y opciones de micas que puedes encontrar en nuestra óptica de Plaza Dorada.
          </p>
        </div>

        {/* 4 CATEGORÍAS PRINCIPALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CATEGORIA 1: LENTES ÓPTICOS */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold">
                <Glasses size={28} />
              </div>
              <h2 className="text-xl font-black uppercase text-gray-900">
                Lentes Ópticos
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Armazones duraderos, ligeros y cómodos para tu graduación diaria en materiales de acetato, metal y modelos combinados.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 flex items-center text-xs font-bold text-gray-700 gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Dama, caballero y jóvenes</span>
            </div>
          </div>

          {/* CATEGORIA 2: LENTES SOLARES */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold">
                <Sun size={28} />
              </div>
              <h2 className="text-xl font-black uppercase text-gray-900">
                Lentes Solares
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Protección solar eficiente contra la radiación UV de Mérida en estilos clásicos, urbanos y deportivos.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 flex items-center text-xs font-bold text-gray-700 gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Filtro UV total y polarizados</span>
            </div>
          </div>

          {/* CATEGORIA 3: MICAS */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold">
                <Sparkles size={28} />
              </div>
              <h2 className="text-xl font-black uppercase text-gray-900">
                Micas Graduadas
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Alternativas de micas monofocales, progresivas, tratamiento antirreflejante y filtro de luz azul para pantallas.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 flex items-center text-xs font-bold text-gray-700 gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Adaptación según graduación</span>
            </div>
          </div>

          {/* CATEGORIA 4: MARCAS DISPONIBLES */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-xl font-black uppercase text-gray-900">
                Marcas Variadas
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Modelos de marcas reconocidas como Ray-Ban, Oakley, Vogue y Michael Kors listas para que las pruebes en el local.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 flex items-center text-xs font-bold text-gray-700 gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Variedad para probar en tienda</span>
            </div>
          </div>

        </div>

        {/* MARCAS CLIENTE FINAL SHOWCASE */}
        <div className="bg-white border-2 border-neutral-300 p-8 lg:p-12 space-y-8 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                Marcas que puedes encontrar en Sunglass Shop
              </h2>
              <p className="text-sm text-gray-600 font-medium mt-1">
                Ven a nuestra sucursal en Plaza Dorada y pruébate los modelos de tus marcas favoritas.
              </p>
            </div>

            {/* AVISO DE VALIDACIÓN TRANSPARENTE */}
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 px-4 py-2.5 text-xs font-mono rounded-none flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0 text-yellow-700" />
              <span>[PENDIENTE DE VALIDAR CON JUAN: Disponibilidad exacta de marcas y stock vigente]</span>
            </div>
          </div>

          {/* MATRIZ DE MARCAS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {[
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
            ].map((brand) => (
              <div
                key={brand}
                className="bg-neutral-50 border border-neutral-200 py-6 px-3 flex flex-col items-center justify-center hover:bg-neutral-100 transition-colors"
              >
                <span className="text-[10px] text-neutral-400 font-mono mb-1 uppercase">Marca</span>
                <span className="text-base font-extrabold text-neutral-900">{brand}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-neutral-200 text-center text-xs text-gray-600 font-medium">
            * Los modelos y marcas están sujetos a disponibilidad física en nuestra sucursal de Plaza Dorada.
          </div>

        </div>

        {/* CONSULTAR DISPONIBILIDAD */}
        <div className="bg-black text-white p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-black uppercase">¿Buscas una marca o armazón en particular?</h3>
            <p className="text-neutral-300 text-base max-w-xl">
              Llámanos o envíanos un WhatsApp antes de acudir para confirmarte modelos disponibles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="https://wa.me/529999874504?text=Hola,%20quisiera%20consultar%20disponibilidad%20de%20lentes%20o%20marcas%20en%20Plaza%20Dorada."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="bg-emerald-600 text-white text-center px-6 py-4 font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle size={20} />
              Consultar por WhatsApp
            </a>

            <Link
              href="/visitanos"
              className="bg-white text-black text-center px-6 py-4 font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              Visítanos en Plaza Dorada <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
