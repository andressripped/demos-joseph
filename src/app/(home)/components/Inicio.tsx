"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Inicio() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Glow animado copiado de la página principal */}
      <motion.div 
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.35, 0.18] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,#C1533B 0%,transparent 70%)" }} 
      />

      {/* Grid de puntos copiado de la página principal */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#DDD8CF 1px,transparent 1px)", backgroundSize: "28px 28px" }} 
      />

      {/* 
        3. CONTENIDO PRINCIPAL
        Animaciones de entrada calculadas, sin depender del scroll para esta primera vista,
        garantizando que se vea perfecto desde el segundo 1 en cualquier pantalla.
      */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 w-full max-w-5xl">
        
        {/* Antetítulo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.55em] uppercase text-[#C1533B] drop-shadow-sm">
            Desierto de la Candelaria · 1665–1688
          </p>
        </motion.div>

        {/* Título Monumental - Tipografía estrictamente controlada para evitar overflows */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="font-serif leading-[0.85] flex flex-col items-center"
        >
          <span className="block text-[clamp(3.5rem,15vw,11rem)] text-[#E8E2D2]">Joseph</span>
          <span className="block italic text-[clamp(3rem,13vw,9.5rem)] text-[#C1533B] mt-0 md:-mt-2 pr-4 md:pr-12">Ximénez</span>
        </motion.h1>

        {/* Cita / Bajada */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="mt-10 md:mt-16 flex flex-col items-center"
        >
          <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-[#C1533B] to-transparent mb-6 md:mb-10 opacity-60" />
          
          <p className="text-lg md:text-xl font-light max-w-xs md:max-w-md mx-auto text-[#E8E2D2]/60 leading-relaxed text-center">
            El ermitaño del Desierto de la Candelaria. Una historia que la hoguera no pudo borrar.
          </p>
        </motion.div>

      </div>

      {/* 
        4. INDICADOR DE SCROLL 
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-8 md:bottom-10 flex flex-col items-center gap-1 cursor-pointer group"
        onClick={() => {
          const titleEl = document.getElementById("pasado-title");
          if (titleEl) {
            const targetY = titleEl.getBoundingClientRect().top + window.scrollY - 80;
            const startY = window.scrollY;
            const distance = targetY - startY;
            const duration = 1000; // 1 segundo
            let start: number | null = null;
            
            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              // EaseInOutCubic
              const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
              window.scrollTo(0, startY + distance * ease);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          }
        }}
      >
        <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-[#E8E2D2]/30 mb-1 transition-colors duration-300 group-hover:text-[#C1533B]/80">
          Descubrir más
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown 
            size={34} 
            color="#C1533B" 
            strokeWidth={1.5} 
            className="opacity-80 drop-shadow-[0_0_8px_rgba(193,83,59,0.8)] transition-opacity duration-300 group-hover:opacity-100"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}
