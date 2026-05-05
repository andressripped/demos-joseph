"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionCita = () => {
  return (
    <section className="py-40 px-6 text-center" style={{ background: "rgba(193,83,59,0.05)", borderTop: "1px solid rgba(193,83,59,0.08)", borderBottom: "1px solid rgba(193,83,59,0.08)" }}>
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl mx-auto">
        <p className="font-accent leading-tight" style={{ fontSize: "clamp(28px,4.5vw,60px)", color: "#DDD8CF" }}>
          "Una noche se acostó al lado de su esposa Juana, cuando de repente tuvo inspiración de Dios de que se retirase a buscarlo."
        </p>


        <p className="mt-10 text-xs tracking-widest uppercase" style={{ color: "rgba(193,83,59,0.8)" }}>Confesión ante el Inquisidor Juan de Mier, 1677</p>
      </motion.div>
    </section>
  );
};
