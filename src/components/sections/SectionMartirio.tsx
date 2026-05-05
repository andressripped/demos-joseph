"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionMartirio = () => {
  return (
    <section id="martirio" className="py-40 px-6 relative overflow-hidden" style={{ background: "#100F0D" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(193,83,59,0.6) 0%,transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <span className="block font-mono text-xs tracking-widest mb-6" style={{ color: "rgba(193,83,59,0.8)" }}>III — 30 · V · 1688</span>
          <h2 className="font-serif leading-none mb-10" style={{ fontSize: "clamp(64px,12vw,160px)", color: "#DDD8CF" }}>
            La <em style={{ color: "#C1533B" }}>hoguera</em>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(221,216,207,0.52)" }}>
            Auto de Fe. Cartagena de Indias. El único místico ermitaño jamás quemado vivo por el Tribunal en toda su historia. Doce años de prisión. No se retractó ni una sola palabra.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
