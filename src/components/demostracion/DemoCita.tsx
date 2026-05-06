"use client";

import React from "react";
import { motion } from "framer-motion";

export const DemoCita = () => {
  // Animación en cascada ultra ligera (Fade-in simple)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Retraso entre cada línea
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-32 md:py-40 px-6 text-center relative" style={{ background: "rgba(193,83,59,0.03)", borderTop: "1px solid rgba(193,83,59,0.08)", borderBottom: "1px solid rgba(193,83,59,0.08)" }}>
      
      {/* Fondo optimizado, sin filtros blur pesados */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, var(--color-terracotta) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.p 
          variants={itemVariants}
          className="font-accent leading-[1.3] text-sand drop-shadow-sm" 
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          "Una noche se acostó al lado de su esposa Juana, 
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="font-accent leading-[1.3] text-sand drop-shadow-sm mt-2" 
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          cuando de repente tuvo inspiración de Dios
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="font-accent leading-[1.3] text-sand drop-shadow-sm mt-2" 
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          de que se retirase a buscarlo."
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 md:mt-16">
          <div className="w-12 h-[1px] bg-terracotta/40 mx-auto mb-6" />
          <p className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-widest uppercase text-terracotta/80 font-medium">
            Confesión ante el Inquisidor Juan de Mier, 1677
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
