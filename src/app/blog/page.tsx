"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Eliminamos la propiedad "color" y usamos #7A3B22 globalmente para el activo.
const ACTIVE_COLOR = "#7A3B22";

const chapters = [
  { id:"I", year:"1632", title:"El soldado", sub:"Guaro, Málaga",
    body:"Hijo de labradores, Joseph creció entre olivos y tierra árida. Con 18 años se enroló en el ejército. Diez años de guerra moldearon a un hombre inquieto, incapaz de quedarse quieto. Ni la tierra natal, ni el amor de Ana, ni las llanuras de Garzón lograron retenerlo." },
  { id:"II", year:"1662", title:"La traición", sub:"Garzón, Huila",
    body:"Se casó con Juana. Dos años de paz en Garzón. Pero la infidelidad rompió el único hilo que lo ataba al mundo. Una noche, acostado a su lado, escuchó algo que no era humano. Al amanecer, ya no estaba." },
  { id:"III", year:"1665", title:"El desierto", sub:"Candelaria, Boyacá",
    body:"Un pájaro le mostró el lugar. Construyó una choza. Dormía sobre tablas sin cubrirse, aunque helara. Se alimentaba de raíces y vegetales. Durante once años, no fue nadie. O lo fue todo." },
  { id:"IV", year:"1676", title:"La denuncia", sub:"Oicatá, Boyacá",
    body:"El cura Agustín de Tovar llegó con curiosidad y se fue con miedo. Los cuadernos de Joseph —sus 29 tomos— eran demasiado libres, demasiado directos, demasiado peligrosos para el dogma imperante." },
  { id:"V", year:"1688", title:"La hoguera", sub:"Cartagena de Indias",
    body:"Doce años de cárcel secreta no le arrancaron ni una sola retractación. El 30 de mayo de 1688, en el gran Auto de Fe, Joseph Ximénez ardió. Y con él, la versión oficial de la historia que intentó callarlo." },
];

export default function BlogPage() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Lógica matemática de scroll progresivo
  useEffect(() => {
    if (trackRef.current) {
      const container = trackRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = active / (chapters.length - 1);
      const targetScroll = maxScroll * progress;
      
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  }, [active]);

  return (
    <>
      <Navbar />
      
      <main className="font-sans flex flex-col min-h-[100dvh] pt-[76px]" style={{ background:"#F4F1EA", color:"#2B2A29" }}>
        
        {/* LAYOUT PRINCIPAL DEL LIBRO */}
        <div className="flex flex-col md:flex-row flex-1">
          
          {/* =========================================
              SIDEBAR DESKTOP (Solo visible en md y lg)
              ========================================= */}
          <div className="hidden md:flex flex-col flex-shrink-0 overflow-y-auto custom-scrollbar shadow-[4px_0_20px_rgba(0,0,0,0.05)] z-10 w-56 lg:w-80" style={{ background:"#2B2A29" }}>
            {chapters.map((c, i) => (
              <button key={c.id} onClick={() => setActive(i)}
                className="px-6 py-6 lg:py-8 text-left transition-all duration-300 relative border-b border-white/5"
                style={{ background:active===i ? ACTIVE_COLOR : "transparent" }}>
                <span className="block font-mono text-xs mb-1" style={{ color:active===i?"rgba(244,241,234,0.65)":"rgba(221,216,207,0.25)" }}>{c.year}</span>
                <span className="block font-serif italic text-base lg:text-lg leading-tight" style={{ color:active===i?"#F4F1EA":"rgba(221,216,207,0.4)" }}>{c.title}</span>
              </button>
            ))}
          </div>

          {/* =========================================
              CARRUSEL MÓVIL (Deslizamiento proporcional)
              ========================================= */}
          <div className="md:hidden relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-[#2B2A29] py-4">
            
            {/* Indicador Flotante Izquierdo con Gradiente */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#2B2A29] via-[#2B2A29]/80 to-transparent z-20 flex items-center justify-start pl-2 pointer-events-none">
              <button 
                onClick={() => setActive(a => Math.max(0, a-1))} 
                disabled={active===0}
                className="p-1 text-[#F4F1EA]/50 disabled:opacity-0 hover:text-[#F4F1EA] transition-opacity pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            {/* Pista de pestañas deslizante */}
            <div ref={trackRef} className="flex overflow-hidden px-10 gap-3 scroll-smooth custom-scrollbar">
              {chapters.map((c, i) => {
                const isActive = active === i;
                return (
                  <button 
                    key={c.id} 
                    onClick={() => setActive(i)}
                    className={`flex-shrink-0 px-5 py-3 rounded-lg text-left transition-all duration-300 min-w-[160px] ${
                      isActive ? "scale-100 opacity-100 shadow-lg" : "scale-90 opacity-40 hover:opacity-70"
                    }`}
                    style={{ background: isActive ? ACTIVE_COLOR : "rgba(255,255,255,0.05)" }}
                  >
                    <span className="block font-mono text-[10px] mb-1 transition-colors duration-300" style={{ color: isActive ? "rgba(244,241,234,0.65)" : "rgba(255,255,255,0.5)" }}>
                      {c.year}
                    </span>
                    <span className="block font-serif italic text-base leading-tight transition-colors duration-300" style={{ color: isActive ? "#F4F1EA" : "rgba(255,255,255,0.8)" }}>
                      {c.title}
                    </span>
                  </button>
                )
              })}
            </div>
            
            {/* Indicador Flotante Derecho con Gradiente */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#2B2A29] via-[#2B2A29]/80 to-transparent z-20 flex items-center justify-end pr-2 pointer-events-none">
              <button 
                onClick={() => setActive(a => Math.min(chapters.length-1, a+1))} 
                disabled={active===chapters.length-1}
                className="p-1 text-[#F4F1EA]/50 disabled:opacity-0 hover:text-[#F4F1EA] transition-opacity pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* =========================================
              PANEL DE CONTENIDO (ZONA DE LECTURA)
              ========================================= */}
          <div className="flex-1 flex flex-col bg-[#F4F1EA] relative min-h-[60vh] md:min-h-[80vh]">
            
            {/* Animación de Cambio de Capítulo */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={active} 
                initial={{ opacity:0, y:15 }} 
                animate={{ opacity:1, y:0 }} 
                exit={{ opacity:0, y:-15 }}
                transition={{ duration:0.3, ease:"easeOut" }}
                className="flex-1 flex flex-col p-8 md:p-16 lg:p-24 relative overflow-hidden"
              >
                {/* Año como gran marca de agua al fondo */}
                <div className="absolute bottom-10 right-10 select-none pointer-events-none" aria-hidden>
                  <p className="font-serif font-bold leading-none" style={{ fontSize:"clamp(80px,15vw,220px)", color:"rgba(43,42,41,0.03)" }}>
                    {chapters[active].year}
                  </p>
                </div>

                {/* Contenido Textual */}
                <div className="relative z-10 max-w-3xl">
                  <span className="block text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 md:mb-6 font-bold" style={{ color: ACTIVE_COLOR }}>
                    Capítulo {chapters[active].id} · {chapters[active].sub}
                  </span>
                  
                  <h2 className="font-serif mb-6 md:mb-10 leading-tight" style={{ fontSize:"clamp(40px,7vw,80px)", color:"#2B2A29" }}>
                    {chapters[active].title}
                  </h2>
                  
                  <p className="text-lg md:text-2xl leading-relaxed font-light" style={{ color:"rgba(43,42,41,0.75)" }}>
                    {chapters[active].body}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegación inferior (Anterior / Siguiente) */}
            <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 mt-auto" style={{ borderTop:"1px solid rgba(43,42,41,0.08)" }}>
              <button onClick={() => setActive(a => Math.max(0,a-1))} disabled={active===0}
                className="text-xs md:text-sm font-semibold tracking-widest uppercase transition-all disabled:opacity-20 hover:opacity-60"
                style={{ color:"#2B2A29" }}>← Anterior</button>
              
              <span className="font-mono text-xs" style={{ color:"rgba(43,42,41,0.3)" }}>{active+1} / {chapters.length}</span>
              
              <button onClick={() => setActive(a => Math.min(chapters.length-1,a+1))} disabled={active===chapters.length-1}
                className="text-xs md:text-sm font-semibold tracking-widest uppercase transition-all disabled:opacity-20 hover:opacity-70"
                style={{ color: ACTIVE_COLOR }}>Siguiente →</button>
            </div>

          </div>
        </div>

        {/* Cita final */}
        <section className="py-24 px-6 text-center border-b border-[#100F0D]/5" style={{ background:"#1A1918" }}>
          <p className="font-serif italic leading-snug max-w-4xl mx-auto" style={{ fontSize:"clamp(24px,4vw,40px)", color:"rgba(244,241,234,0.65)" }}>
            "Es el momento de reparar su memoria, pues fue martirizado por sus ideas."
          </p>
          <p className="mt-8 text-xs tracking-[0.3em] uppercase" style={{ color: ACTIVE_COLOR }}>— Patricia Enciso Patiño</p>
        </section>

      </main>

      <Footer />
    </>
  );
}
