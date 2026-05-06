"use client";

import React from "react";
import { motion } from "framer-motion";

export const DemoMartirio = () => {
  return (
    <section id="hoguera" className="relative py-32 md:py-48 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]" style={{ background: "#100F0D" }}>
      
      {/* 
        OPTIMIZACIÓN MOBILE-FIRST:
        En lugar de miles de partículas calculadas por JS, usamos una animación CSS 
        de degradado y opacidad para simular el resplandor y calor de la hoguera.
        Es acelerado por hardware y consume 0% de CPU.
      */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow central animado lentamente */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] aspect-square rounded-full opacity-40 mix-blend-screen"
          style={{ 
            background: "radial-gradient(circle at 50% 100%, var(--color-terracotta) 0%, transparent 60%)",
            animation: "pulse-fire 8s infinite alternate ease-in-out"
          }} 
        />
        {/* Capa de humo sutil */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{ 
            background: "linear-gradient(to top, rgba(43,42,41,1) 0%, transparent 100%)" 
          }} 
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-15%" }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="block font-mono text-[10px] md:text-xs tracking-widest mb-6 md:mb-8 text-terracotta">
            III — 30 · V · 1688
          </span>
          
          <h2 className="font-serif leading-[0.9] mb-8 md:mb-12 flex flex-col items-center">
            <span className="text-[clamp(3.5rem,10vw,7rem)] text-sand drop-shadow-md">La</span>
            <em className="text-[clamp(4.5rem,12vw,8.5rem)] text-terracotta italic drop-shadow-[0_0_15px_rgba(193,83,59,0.4)]">hoguera</em>
          </h2>
          
          <p className="text-lg md:text-2xl leading-relaxed text-sand/70 max-w-2xl mx-auto font-light">
            Auto de Fe. Cartagena de Indias. El único místico ermitaño jamás quemado vivo por el Tribunal en toda su historia. 
          </p>
          
          <div className="mt-12 md:mt-16 inline-block bg-stone/50 border border-sand/5 px-6 md:px-10 py-5 rounded-lg backdrop-blur-sm">
            <p className="text-sand/90 font-serif italic text-xl md:text-2xl">
              "Doce años de prisión. <br className="md:hidden"/>No se retractó ni una sola palabra."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Estilos CSS para animaciones nativas */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-fire {
          0% { transform: translate(-50%, 20%) scale(1); opacity: 0.2; filter: blur(40px); }
          50% { transform: translate(-50%, 15%) scale(1.05); opacity: 0.5; filter: blur(50px); }
          100% { transform: translate(-50%, 10%) scale(1.1); opacity: 0.3; filter: blur(45px); }
        }
      `}} />
    </section>
  );
};
