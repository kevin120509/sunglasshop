export default function Lentes() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold uppercase tracking-tight mb-8">Nuestros Lentes</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Escaparate digital con fotografías reales de nuestras opciones de armazones y micas. [Sin ecommerce, sin precios ficticios].
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 uppercase font-medium tracking-wide">[Foto Real Lentes Oftálmicos]</span>
        </div>
        <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 uppercase font-medium tracking-wide">[Foto Real Lentes de Sol]</span>
        </div>
        <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 uppercase font-medium tracking-wide">[Foto Real Lentes Deportivos]</span>
        </div>
        <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 uppercase font-medium tracking-wide">[Foto Real Tipos de Micas]</span>
        </div>
      </div>
    </div>
  );
}
