"use client";

import { motion } from "framer-motion";

export default function Act3() {
  const cards = [
    {
      num: "29",
      title: "Cuadernos",
      text: "Dictados directamente por Dios. Un corpus místico que delineaba la Vía Purgativa, Iluminativa y Unitiva."
    },
    {
      num: "33",
      title: "Años al Retirarse",
      text: "La edad de Cristo. Una búsqueda consciente y peligrosa de un paralelismo absoluto."
    },
    {
      num: "∞",
      title: "Herejía",
      text: "Alcanzó la unión divina y dejó de confesarse. Rompió el monopolio de la Iglesia sobre la salvación."
    }
  ];

  return (
    <section className="bg-[#050505] relative z-20 w-full overflow-hidden">
      
      {/* 
        ========================================
        1. EL DESIERTO (Los 11 años de silencio)
        ========================================
      */}
      <div className="py-24 md:py-40 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#E8E2D2]/5">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left mb-20 md:mb-32"
        >
          <span className="font-mono text-[#C1533B] text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-6">
            1665 — 1676 · Desierto de la Candelaria
          </span>
          <h2 className="font-serif text-[#E8E2D2] text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tight">
            Once años<br/>
            <em className="text-[#E8E2D2]/30 italic font-light">de silencio.</em>
          </h2>
        </motion.div>

        {/* Grid de impacto - Flujo en columna para móvil, 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="flex flex-row md:flex-col items-start gap-6 md:gap-0 border-l border-[#C1533B]/30 pl-6 md:pl-8"
            >
              <span className="font-serif text-[#E8E2D2]/90 text-[clamp(3.5rem,8vw,5rem)] leading-none md:mb-6 w-20 md:w-auto shrink-0 text-center md:text-left">
                {card.num}
              </span>
              <div>
                <h3 className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[#C1533B] mb-2 md:mb-4">
                  {card.title}
                </h3>
                <p className="text-[#E8E2D2]/50 text-sm md:text-base leading-relaxed font-light">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 
        ========================================
        2. EL MARTIRIO (La Inquisición y la Hoguera)
        ========================================
      */}
      <div className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 py-32 overflow-hidden bg-[#020202]">
        
        {/* Atmósfera de Fuego (CSS Puro de alto rendimiento, 0% JS) */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-80 flex items-end justify-center">
          <div className="w-full h-[70vh] bg-gradient-to-t from-[#C1533B]/40 via-[#C1533B]/5 to-transparent animate-[pulse-fire_6s_infinite_alternate_ease-in-out]" />
          <div className="absolute bottom-[-10vh] w-[150vw] md:w-[80vw] h-[40vh] bg-[#C1533B]/20 blur-[100px] rounded-[100%]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto w-full"
        >
          {/* Línea conectora */}
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent to-[#C1533B] mx-auto mb-10 md:mb-16 opacity-50" />
          
          <h2 className="font-serif text-[#E8E2D2] text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] mb-8 md:mb-12 tracking-tight">
            Doce años<br/>
            <em className="text-[#C1533B] italic drop-shadow-[0_0_20px_rgba(193,83,59,0.3)]">en la oscuridad.</em>
          </h2>
          
          <p className="text-[#E8E2D2]/70 text-lg md:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto">
            Acusado por el cura Agustín de Tovar. Encadenado. Enviado a la cárcel secreta de Cartagena de Indias.
          </p>
          
          <div className="mt-16 md:mt-24 py-8 md:py-12 border-y border-[#C1533B]/10 bg-[#C1533B]/[0.02] backdrop-blur-sm">
            <p className="font-serif italic text-[#E8E2D2] text-[clamp(1.5rem,5vw,3rem)] drop-shadow-[0_0_15px_rgba(232,226,210,0.2)]">
              Nunca se retractó.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 
        ========================================
        3. FOOTER MINIMALISTA
        ========================================
      */}
      <footer className="py-12 px-6 text-center border-t border-[#E8E2D2]/[0.03] relative z-10 bg-[#020202]">
        <p className="font-serif italic text-xl md:text-2xl text-[#C1533B]/50 mb-4">Joseph Ximénez</p>
        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#E8E2D2]/20">
          Una historia exhumada de la Inquisición · © 2026
        </p>
      </footer>

      {/* Keyframes de Fuego Optimizados */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-fire {
          0% { transform: scaleY(0.9); opacity: 0.6; }
          100% { transform: scaleY(1.1); opacity: 0.9; }
        }
      `}} />

    </section>
  );
}
