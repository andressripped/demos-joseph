"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const DemoOrigen = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Optimizamos el rastreo del scroll vinculándolo solo a esta sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Transformamos el progreso (0 a 1) en altura (0% a 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="origen" className="relative py-24 md:py-32 px-6 md:px-20 overflow-hidden" style={{ background: "#100F0D" }}>
      
      {/* 
        LÍNEA DE TIEMPO VERTICAL (MOBILE-FIRST)
        Se posiciona a la izquierda en móviles y al centro-izquierda en desktop.
      */}
      <div className="absolute left-6 md:left-[15%] top-24 bottom-24 w-[2px] bg-sand/5 rounded-full overflow-hidden">
        <motion.div 
          className="w-full bg-terracotta origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-center pl-8 md:pl-[20%]">
        
        {/* Contenido de Texto */}
        <div className="md:col-span-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-10%" }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Indicador de Timeline */}
            <div className="relative">
              <span className="absolute -left-[41px] md:-left-[calc(5%+41px)] top-1 w-3 h-3 rounded-full border-2 border-[#100F0D] bg-terracotta shadow-[0_0_10px_rgba(193,83,59,0.5)] z-10" />
              <span className="block font-mono text-[10px] md:text-xs tracking-widest mb-4 md:mb-6 text-terracotta">
                I — 1632
              </span>
            </div>

            <h2 className="font-serif mb-6 md:mb-8 leading-[1.1] text-[clamp(2.5rem,6vw,4.5rem)] text-sand">
              Guaro, <em className="text-sand/70 font-light">Málaga.</em><br />El inicio.
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed text-sand/60">
              Hijo de labradores, Joseph Ximénez pasó de labrar tierra a labrar almas. Diez años como soldado de la Armada Real lo llevaron desde los campos de Andalucía hasta los puertos de las Indias. Cada trayecto era una fuga hacia adelante. Hasta que llegó a Garzón, ubicado en el actual departamento del Huila.
            </p>
          </motion.div>
        </div>

        {/* Imagen Optimizada */}
        <div className="md:col-span-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, margin: "-10%" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="aspect-[4/5] md:aspect-square rounded-2xl flex items-center justify-center overflow-hidden relative group border border-terracotta/20 bg-terracotta/5"
          >
            {/* 
              NOTA: En un entorno de producción estricto usaríamos <Image> de Next.js,
              pero para esta demo visual seguimos usando <img> estándar para asegurar compatibilidad rápida.
            */}
            <img 
              src="/joseph-origen.png" 
              alt="Origen de Joseph Ximénez" 
              loading="lazy" // Optimización vital para mobile
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100F0D] via-transparent to-transparent opacity-60" />
            
            <p className="absolute bottom-6 left-6 font-serif italic text-3xl text-sand/90 drop-shadow-lg">1632</p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};
