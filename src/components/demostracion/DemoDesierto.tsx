"use client";

import React from "react";
import { motion } from "framer-motion";

export const DemoDesierto = () => {
  const tarjetas = [
    { 
      num: "I", 
      label: "Vía Purgativa", 
      desc: "Purificación del alma. Limpieza de los pecados a través de la penitencia y el dolor. El inicio del camino ascético en la soledad absoluta del monte." 
    },
    { 
      num: "II", 
      label: "Vía Iluminativa", 
      desc: "Contemplación de los divinos misterios. El alma se ilumina con la gracia de Dios, recibiendo inspiraciones directas y visiones místicas." 
    },
    { 
      num: "III", 
      label: "Vía Unitiva", 
      desc: "La unión interior con Dios. El estado máximo de perfección espiritual donde ya no se necesitan intermediarios terrenales ni confesores." 
    },
  ];

  return (
    <section id="desierto" className="py-24 md:py-32 overflow-hidden" style={{ background: "#100F0D" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-20 mb-12 md:mb-16">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span className="block font-mono text-[10px] md:text-xs tracking-widest mb-4 md:mb-6 text-terracotta">
            II — 1665–1676
          </span>
          <h2 className="font-serif leading-[1.1] text-[clamp(2.5rem,8vw,4.5rem)] text-sand">
            Once años<br />
            <em className="text-sand/30 font-light">de silencio</em>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-sand/60 max-w-2xl leading-relaxed">
            Se retiró al desierto a la edad de Cristo. Allí escribió 29 cuadernos, un corpus místico dictado por Dios, según sus palabras. 
            Su camino hacia la unión divina se dividió en tres etapas que la Inquisición llamaría herejía.
          </p>
        </motion.div>
      </div>

      {/* 
        OPTIMIZACIÓN MOBILE-FIRST: CSS SCROLL SNAP 
        Cero JavaScript para el carrusel. Ultra fluido en táctil y 100% nativo.
      */}
      <div className="w-full relative px-6 md:px-20">
        <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4">
          
          {/* Tarjeta Extra: Estadísticas (Opcional, para dar contexto numérico) */}
          <div className="min-w-[85vw] md:min-w-[320px] snap-center snap-always shrink-0 bg-terracotta/5 border border-terracotta/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-serif font-bold text-[5rem] md:text-[6rem] leading-none text-terracotta/20 mb-2">29</p>
              <h3 className="text-xs tracking-widest uppercase font-bold text-terracotta mb-4">Cuadernos Escritos</h3>
              <p className="text-sm md:text-base text-sand/50 leading-relaxed">
                Manuscritos de meditación profunda que desafiaron el monopolio de la Iglesia sobre la comunicación divina.
              </p>
            </div>
          </div>

          {/* Tarjetas de las Vías Místicas */}
          {tarjetas.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-[320px] snap-center snap-always shrink-0 rounded-2xl p-8 md:p-10 relative overflow-hidden group"
              style={{ background: "#F4F1EA" }} // Fondo Colonial (papel/pergamino)
            >
              {/* Textura sutil de papel usando CSS */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                   style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
              />
              
              <div className="relative z-10 h-full flex flex-col">
                <p className="font-serif italic text-4xl text-stone/40 mb-6">{item.num}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-stone font-bold mb-4">{item.label}</h3>
                <p className="text-stone/70 text-sm md:text-base leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* Espaciador final para permitir hacer scroll hasta el final y centrar la última tarjeta bien */}
          <div className="min-w-[1px] md:min-w-[20px] shrink-0" aria-hidden="true"></div>
        </div>
        
        {/* Indicador de scroll horizontal (solo visible en pantallas donde sea útil) */}
        <div className="absolute bottom-0 right-6 md:right-20 flex items-center gap-2 text-sand/30 text-[10px] uppercase tracking-widest pointer-events-none">
          <svg className="w-3 h-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Deslizar
        </div>
      </div>
      
      {/* CSS para esconder la barra de scroll y mantener la limpieza visual */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};
