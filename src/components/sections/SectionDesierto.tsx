"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionDesierto = () => {
  return (
    <section id="desierto" className="py-32 px-6 md:px-20" style={{ background: "#100F0D" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <span className="block font-mono text-xs tracking-widest mb-6" style={{ color: "#C1533B" }}>II — 1665–1676</span>
          <h2 className="font-serif mb-16 leading-tight" style={{ fontSize: "clamp(40px,8vw,110px)", color: "#DDD8CF" }}>
            Once años<br /><em style={{ color: "rgba(221,216,207,0.22)" }}>de silencio</em>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(221,216,207,0.06)" }}>
          {[
            { num: "29", label: "Cuadernos", desc: "Dictados por Dios, según él. Un corpus místico que la Inquisición llamó herejía." },
            { num: "33", label: "Años al retirarse", desc: "La edad de Cristo. Joseph lo sabía. La correspondencia era deliberada." },
            { num: "∞", label: "Seguidores", desc: "Otros eremitas llegaron a imitarlo. Su fama de santo se extendía sin que él lo buscara." },
          ].map((item) => (
            <div key={item.num} className="p-10 md:p-12" style={{ background: "#100F0D" }}>
              <p className="font-serif font-bold leading-none mb-4 select-none" style={{ fontSize: "clamp(60px,10vw,100px)", color: "rgba(193,83,59,0.32)" }}>{item.num}</p>
              <p className="text-xs tracking-widest uppercase mb-4 font-bold" style={{ color: "#C1533B" }}>{item.label}</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(221,216,207,0.45)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
