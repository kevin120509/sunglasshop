"use client";

import Link from "next/link";
import {
  Eye,
  ShieldCheck,
  Sparkles,
  Settings,
  AlertCircle,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ServiciosPage() {
  const handleWhatsappClick = () => {
    trackEvent("click_whatsapp", { location: "servicios_page" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* HEADER DE PAGINA */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-black text-white text-xs font-bold px-3.5 py-1 uppercase tracking-widest inline-block">
            Página 3 • Servicios Ópticos
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-gray-900">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Explicamos con claridad y sencillez lo que podemos hacer por ti en Sunglass Shop.
          </p>
        </div>

        {/* MÁXIMO 4 SERVICIOS PRINCIPALES SOLICITADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SERVICIO 1: EXAMEN DE LA VISTA */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-8 space-y-4 flex flex-col justify-between hover:border-black transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center font-bold">
                <Eye size={28} />
              </div>
              <h2 className="text-2xl font-black uppercase text-gray-900">
                1. Examen de la Vista
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Consulta nuestro servicio de examen de la vista y recibe orientación clara sobre tus opciones de graduación y cuidado visual.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 text-xs text-gray-600 font-bold uppercase tracking-wider">
              Atención directa sin tecnicismos
            </div>
          </div>

          {/* SERVICIO 2: ASESORÍA PARA ELEGIR TUS LENTES */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-8 space-y-4 flex flex-col justify-between hover:border-black transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center font-bold">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-2xl font-black uppercase text-gray-900">
                2. Asesoría para Elegir tus Lentes
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Te ayudamos a conocer armazones que se adapten a la forma de tu rostro, tu estilo personal y tu uso diario.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 text-xs text-gray-600 font-bold uppercase tracking-wider">
              Recomendación práctica según tus facciones
            </div>
          </div>

          {/* SERVICIO 3: MICAS Y SOLUCIONES VISUALES */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-8 space-y-4 flex flex-col justify-between hover:border-black transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center font-bold">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black uppercase text-gray-900">
                3. Micas y Soluciones Visuales
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Conoce alternativas de micas monofocales, progresivas panorámicas, tratamiento antirreflejante y protección contra luz azul de pantallas.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 text-xs text-gray-600 font-bold uppercase tracking-wider">
              Opciones según tus requerimientos de visión
            </div>
          </div>

          {/* SERVICIO 4: HOSPITAL DE LENTES / AJUSTES Y REFACCIONES */}
          <div className="bg-neutral-50 border-2 border-neutral-200 p-8 space-y-4 flex flex-col justify-between hover:border-black transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center font-bold">
                <Settings size={28} />
              </div>
              <h2 className="text-2xl font-black uppercase text-gray-900">
                4. Hospital de Lentes (Ajustes y Refacciones)
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Ajustes, nivelación de varillas, cambio de plaquetas y reparación para tus lentes, según la disponibilidad de piezas para tu modelo.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 text-xs text-yellow-800 font-mono flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0 text-yellow-700" />
              <span>[PENDIENTE DE VALIDAR CON JUAN: Disponibilidad de refacciones específicas]</span>
            </div>
          </div>

        </div>

        {/* SECCION DE CONTACTO */}
        <div className="bg-black text-white p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-black uppercase">¿Necesitas un ajuste o consulta sobre tus lentes?</h3>
            <p className="text-neutral-300 text-base max-w-xl">
              Visítanos en Plaza Dorada o escríbenos por WhatsApp para resolver tus dudas directamente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="https://wa.me/529999874504?text=Hola,%20quisiera%20consultar%20información%20sobre%20sus%20servicios%20ópticos%20en%20Plaza%20Dorada."
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
