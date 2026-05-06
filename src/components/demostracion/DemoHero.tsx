"use client";

import React from "react";
import { motion } from "framer-motion";

export const DemoHero = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
      {/* 
        OPTIMIZACIÓN MOBILE-FIRST:
        Reemplazamos la animación continua de Framer Motion (JS) por una clase CSS/Tailwind 
        para el glow estático, evitando redibujados costosos en la GPU del móvil.
      */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[600px] h-[90vw] md:h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ 
          background: "radial-gradient(circle, var(--color-terracotta) 0%, transparent 60%)",
        }} 
      />
      
      {/* Grid estático optimizado */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--color-sand) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Curva de easing más suave
        className="relative z-10 text-center w-full max-w-4xl mx-auto mt-16"
      >
        <p className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.55em] uppercase mb-8 md:mb-10 text-terracotta/80">
          Desierto de la Candelaria · 1665–1688
        </p>
        
        {/* Tipografía fluida con Clamp estricto para evitar overflow en móviles pequeños (ej. iPhone SE) */}
        <h1 className="font-serif leading-[0.85] flex flex-col items-center">
          <span className="block text-[clamp(3.5rem,15vw,11rem)] text-sand">Joseph</span>
          <span className="block italic text-[clamp(3rem,13vw,9.5rem)] text-terracotta -mt-2 md:-mt-6 pr-4 md:pr-12">Ximénez</span>
        </h1>
        
        <p className="mt-10 md:mt-16 text-lg md:text-xl font-light max-w-xs md:max-w-md mx-auto text-sand/60 leading-relaxed">
          El ermitaño del Desierto de la Candelaria. Una historia que la hoguera no pudo borrar.
        </p>
      </motion.div>

      {/* Scroll indicator optimizado con CSS nativo si fuera posible, pero usamos framer para mantener coherencia sutil */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-widest uppercase text-sand/30">Bajar</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-terracotta/40" 
        />
      </motion.div>
    </section>
  );
};
