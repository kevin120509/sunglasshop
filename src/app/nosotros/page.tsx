export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-100 h-[500px] flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 uppercase font-medium tracking-wide">[Foto Real de Interior / Equipo]</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-6">Nuestra Óptica</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Somos una óptica física ubicada en Plaza Dorada, Mérida. Nuestro objetivo es ayudarte a encontrar las mejores opciones visuales con un trato directo y sencillo.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            [Breve descripción sobre la historia o la experiencia real que encontrarán al visitar el establecimiento, sin exageraciones ni lenguaje pretencioso].
          </p>
        </div>
      </div>
    </div>
  );
}
