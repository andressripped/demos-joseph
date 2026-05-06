"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Glow animado */}
      <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.35, 0.18] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,#C1533B 0%,transparent 70%)" }} />
      {/* Grid de puntos */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle,#DDD8CF 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center px-6">
        <p className="text-xs tracking-[0.55em] uppercase mb-10" style={{ color: "rgba(193,83,59,0.85)" }}>
          Desierto de la Candelaria · 1665–1688
        </p>
        <h1 className="font-serif leading-[0.9]">
          <span className="block" style={{ fontSize: "clamp(70px,14vw,190px)", color: "#DDD8CF" }}>Joseph</span>
          <span className="block italic" style={{ fontSize: "clamp(60px,12vw,160px)", color: "#C1533B" }}>Ximénez</span>
        </h1>
        <p className="mt-12 text-xl font-light max-w-md mx-auto" style={{ color: "rgba(221,216,207,0.45)" }}>
          El ermitaño del Desierto de la Candelaria. Una historia que la hoguera no pudo borrar.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={34} style={{ color: "rgba(193,83,59,0.6)" }} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};
