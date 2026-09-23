import Link from "next/link";
import { ArrowRight, MapPin, Eye, Settings, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gray-100 min-h-[70vh] flex flex-col justify-center border-b border-gray-200">
        {/* PLACEHOLDER FOTO FACHADA */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-0 overflow-hidden">
           <span className="text-gray-400 font-medium tracking-widest uppercase">[Foto Real de Fachada / Interior del Establecimiento]</span>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20">
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 max-w-xl shadow-sm border border-gray-100">
            <h1 className="text-4xl font-bold tracking-tight mb-4 uppercase">
              Sunglass Shop Óptica
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Encuentra lentes y armazones para diferentes estilos. 
            </p>
            <div className="flex items-center gap-2 text-gray-500 mb-8 font-medium">
              <MapPin size={18} />
              <span>Plaza Dorada, Mérida, Yucatán</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lentes" className="bg-black text-white px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                Conoce nuestras opciones <ArrowRight size={18} />
              </Link>
              <Link href="/contacto" className="bg-white text-black border border-gray-200 px-6 py-3 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
                Visítanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS CATEGORIAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">¿Qué puedes encontrar?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Una variedad de armazones, lentes de sol y opciones para tu visión.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 h-80 flex flex-col items-center justify-center border border-gray-100 relative group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-sm uppercase">[Foto Real Lentes Oftálmicos]</span>
              </div>
              <div className="relative z-10 bg-white px-6 py-3 mt-auto mb-6 shadow-sm font-bold uppercase tracking-wide">
                Lentes Oftálmicos
              </div>
            </div>
            <div className="bg-gray-50 h-80 flex flex-col items-center justify-center border border-gray-100 relative group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-sm uppercase">[Foto Real Lentes de Sol]</span>
              </div>
              <div className="relative z-10 bg-white px-6 py-3 mt-auto mb-6 shadow-sm font-bold uppercase tracking-wide">
                Lentes de Sol
              </div>
            </div>
            <div className="bg-gray-50 h-80 flex flex-col items-center justify-center border border-gray-100 relative group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-sm uppercase">[Foto Real Micas]</span>
              </div>
              <div className="relative z-10 bg-white px-6 py-3 mt-auto mb-6 shadow-sm font-bold uppercase tracking-wide">
                Micas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS (Solo Visual) */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Conoce algunas de las marcas que puedes encontrar</h2>
          <p className="text-gray-500 mb-12">[Pendiente de confirmar lista oficial de marcas con el negocio]</p>
          
          {/* Grids de Logos Placeholder */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
            <div className="text-xl font-bold uppercase tracking-widest">Ray-Ban</div>
            <div className="text-xl font-bold uppercase tracking-widest">Oakley</div>
            <div className="text-xl font-bold uppercase tracking-widest">Vogue</div>
            <div className="text-xl font-bold uppercase tracking-widest">Michael Kors</div>
            <div className="text-xl font-bold uppercase tracking-widest">Guess</div>
          </div>
          <div className="mt-12">
            <Link href="/marcas" className="text-sm font-bold uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
              Ver todas las marcas
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Nuestros Servicios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-100 p-8 hover:shadow-sm transition-shadow bg-gray-50">
              <Eye className="w-10 h-10 mb-6 text-black" />
              <h3 className="text-xl font-bold mb-3">Examen de la Vista</h3>
              <p className="text-gray-600 text-sm mb-4">
                [Descripción pendiente. Confirmar alcance y disponibilidad del servicio.]
              </p>
            </div>
            
            <div className="border border-gray-100 p-8 hover:shadow-sm transition-shadow bg-gray-50">
              <Settings className="w-10 h-10 mb-6 text-black" />
              <h3 className="text-xl font-bold mb-3">Hospital de Lentes</h3>
              <p className="text-gray-600 text-sm mb-4">
                [Ajustes, reparaciones y refacciones. Trabajos específicos por confirmar.]
              </p>
            </div>
            
            <div className="border border-gray-100 p-8 hover:shadow-sm transition-shadow bg-gray-50">
              <ShieldCheck className="w-10 h-10 mb-6 text-black" />
              <h3 className="text-xl font-bold mb-3">Asesoría</h3>
              <p className="text-gray-600 text-sm mb-4">
                Te ayudamos a conocer nuestras opciones y elegir los armazones o micas adecuados para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOTO DEL ESTABLECIMIENTO / CONFIRMACION */}
      <section className="py-24 bg-black text-white relative">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-0 overflow-hidden opacity-40">
           <span className="text-gray-500 font-medium tracking-widest uppercase">[Foto Real Interior / Exhibidores]</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-6">Visítanos en Plaza Dorada</h2>
          <p className="text-gray-300 text-lg mb-10">
            Conoce el establecimiento, prueba los armazones y descubre qué opción se adapta mejor a ti.
          </p>
          <Link href="/contacto" className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
            Cómo llegar y contacto
          </Link>
        </div>
      </section>

    </div>
  );
}
