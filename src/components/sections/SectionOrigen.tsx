"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionOrigen = () => {
  return (
    <section id="origen" className="py-32 px-6 md:px-20" style={{ background: "#100F0D" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
            <span className="block font-mono text-xs tracking-widest mb-6" style={{ color: "#C1533B" }}>I — 1632</span>
            <h2 className="font-serif mb-8 leading-tight" style={{ fontSize: "clamp(40px,7vw,88px)", color: "#DDD8CF" }}>
              Guaro, <em>Málaga.</em><br />El inicio.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(221,216,207,0.55)" }}>
              Hijo de labradores, Joseph Ximénez pasó de labrar tierra a labrar almas. Diez años como soldado de la Armada Real lo llevaron desde los campos de Andalucía hasta los puertos de las Indias. Cada trayecto era una fuga hacia adelante. Hasta que llegó a Garzón, ubicado en el actual departamento del Huila.
            </p>
          </motion.div>
        </div>
        <div className="md:col-span-2">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
            className="aspect-square rounded-3xl flex items-center justify-center overflow-hidden relative group"
            style={{ border: "1px solid rgba(193,83,59,0.18)", background: "rgba(193,83,59,0.04)" }}>
            <img 
              src="/joseph-origen.png" 
              alt="Origen de Joseph Ximénez" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100F0D] to-transparent opacity-40" />
            <p className="absolute bottom-6 left-6 font-serif italic text-2xl" style={{ color: "rgba(221,216,207,0.8)" }}>1632</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
