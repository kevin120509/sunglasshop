export default function Marcas() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold uppercase tracking-tight mb-6">Marcas Disponibles</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Conoce algunas de las marcas que puedes encontrar en Sunglass Shop.
      </p>
      
      <div className="bg-gray-50 py-16 px-4 border border-gray-200">
        <p className="text-gray-400 font-medium uppercase tracking-widest mb-8">
          [Pendiente de Definir: Listado oficial y vigente de marcas]
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <span className="text-2xl font-bold uppercase tracking-widest">Ray-Ban</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Oakley</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Michael Kors</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Carolina Herrera</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Guess</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Vogue Eyewear</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Ralph Lauren</span>
        </div>
      </div>
    </div>
  );
}
