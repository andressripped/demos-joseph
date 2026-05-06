"use client";

import { motion } from "framer-motion";

export default function Act1() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-[#C1533B] selection:text-[#F4F1EA]">
      
      {/* 
        1. TEXTURA Y ATMÓSFERA (MOBILE PERFECT)
        Fondo oscuro absoluto con un filtro de ruido SVG en línea para darle
        un toque de "película antigua" o pergamino quemado, sin cargar imágenes.
      */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      {/* 
        2. GLOW CENTRAL (Optimizado con CSS)
        Reemplazamos blurs masivos que rompen el móvil por un gradiente radial sutil.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] pointer-events-none opacity-[0.07]">
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle at center, #C1533B 0%, transparent 70%)" }} />
      </div>

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
          className="mb-8 md:mb-12"
        >
          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#C1533B] drop-shadow-sm">
            Cartagena de Indias · 30 de Mayo
          </p>
        </motion.div>

        {/* Título Monumental - Tipografía estrictamente controlada para evitar overflows */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="font-serif text-[#E8E2D2] flex flex-col items-center leading-[0.85] md:leading-[0.8]"
        >
          {/* El tamaño máximo es 16rem en desktop, pero baja dinámicamente en mobile sin romper márgenes */}
          <span className="block text-[clamp(5rem,22vw,16rem)] tracking-tight">1688</span>
        </motion.h1>

        {/* Cita / Bajada */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="mt-12 md:mt-20 flex flex-col items-center"
        >
          <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-[#C1533B] to-transparent mb-6 md:mb-10 opacity-60" />
          
          <p className="font-serif italic text-lg md:text-2xl lg:text-3xl text-[#E8E2D2]/70 max-w-[280px] md:max-w-2xl leading-relaxed md:leading-snug">
            El único místico ermitaño jamás quemado vivo por el Tribunal en toda su historia.
          </p>
        </motion.div>

      </div>

      {/* 
        4. INDICADOR DE SCROLL 
        Sutil, animado con CSS nativo para no gastar batería.
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-[#E8E2D2]/30">
          Descubrir
        </span>
        <div className="w-[1px] h-8 md:h-12 overflow-hidden bg-[#E8E2D2]/10 relative">
          <div className="w-full h-1/2 bg-[#C1533B] absolute top-0 animate-[scroll-down_2s_infinite]" />
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-down {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}} />

    </section>
  );
}
