import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contacto() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold uppercase tracking-tight mb-6 text-center">Visítanos</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
        Ven a conocer nuestras opciones o contáctanos para cualquier duda.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* INFO DE CONTACTO */}
        <div className="bg-gray-50 p-8 border border-gray-100">
          <h2 className="text-2xl font-bold uppercase mb-8">Información de Contacto</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1" />
              <div>
                <h3 className="font-bold uppercase">Ubicación</h3>
                <p className="text-gray-600">Plaza Dorada<br/>Mérida, Yucatán</p>
                <p className="text-sm text-gray-400 mt-1">[Pendiente local exacto]</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="mt-1" />
              <div>
                <h3 className="font-bold uppercase">Teléfono / WhatsApp</h3>
                <p className="text-gray-600">[Pendiente de definir]</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="mt-1" />
              <div>
                <h3 className="font-bold uppercase">Horarios</h3>
                <p className="text-gray-600">[Pendiente de definir]</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="mt-1" />
              <div>
                <h3 className="font-bold uppercase">Redes / Correo</h3>
                <p className="text-gray-600">[Pendientes datos definitivos]</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* MAPA PLACEHOLDER */}
        <div className="bg-gray-200 min-h-[400px] flex items-center justify-center border border-gray-300">
           <span className="text-gray-500 uppercase font-medium tracking-wide">[Placeholder para Mapa Interactivo de Plaza Dorada]</span>
        </div>
      </div>
    </div>
  );
}
