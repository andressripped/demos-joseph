"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Demo5() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });
  const watermarkOpacity = useTransform(scrollYProgress, [0, 1], [0.06, 0.14]);

  const panels = [
    {
      label: "El Hombre",
      title: "Del campo a la armada",
      body: "Soldado durante diez años. Recorrió España y cruzó el océano. No era un campesino común: sabía leer, escribir, y soñar más allá de lo que sus ojos podían ver.",
      accent: "#7FBF9E",
      bg: "#1C2B23",
      num: "01",
    },
    {
      label: "El Eremita",
      title: "Solo con Dios",
      body: "En una choza sin puertas, durmiendo sobre tablas, comiendo raíces. Escribía sin parar: palabras que decía le dictaba Dios. Once años sin rendirle cuentas a nadie.",
      accent: "#F4A58A",
      bg: "#2A1510",
      num: "02",
    },
    {
      label: "El Acusado",
      title: "La máquina del miedo",
      body: "La Inquisición nunca dejó pasar a alguien con demasiados seguidores y demasiadas ideas propias. Fue encerrado en una celda secreta por doce años. En silencio.",
      accent: "#D4A96A",
      bg: "#211A0F",
      num: "03",
    },
    {
      label: "El Mártir",
      title: "30 de mayo, 1688",
      body: "Frente a la multitud reunida para el Auto de Fe, Joseph Ximénez no pronunció la retractación. Las llamas consumieron su cuerpo. Su historia, no.",
      accent: "#F4A58A",
      bg: "#1A0D09",
      num: "04",
    },
  ];

  return (
    <main ref={heroRef} className="font-sans" style={{ color: "#F4F1EA" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
        style={{ background: "rgba(14,12,11,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(244,241,234,0.06)" }}>
        <span className="font-serif italic text-xl" style={{ color: "#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#F4F1EA" }}>← Maquetas</Link>
      </nav>

      {/* Hero fullscreen tipográfico */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: "#0E0C0B" }}>
        {/* Textura diagonal */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#F4F1EA 0,#F4F1EA 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />

        {/* Watermark animado */}
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden select-none"
          style={{ opacity: watermarkOpacity }}>
          <p className="font-serif font-bold leading-none text-center" style={{ fontSize: "22vw", color: "#F4F1EA", WebkitTextStroke: "1px rgba(244,241,234,0.3)" }}>ERMITAÑO</p>
          <p className="font-serif font-bold leading-none text-center" style={{ fontSize: "16vw", color: "#C1533B", WebkitTextStroke: "1px rgba(193,83,59,0.4)" }}>1632–1688</p>
        </motion.div>

        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.4, ease:"easeOut" }}
          className="z-10 text-center px-6">
          <p className="text-xs tracking-[0.55em] uppercase mb-8" style={{ color:"rgba(193,83,59,0.85)" }}>Memoria · Historia · Misterio</p>
          <h1 className="font-serif text-center leading-none">
            <span className="block" style={{ fontSize:"clamp(56px,14vw,200px)", color:"#F4F1EA" }}>Joseph</span>
            <span className="block italic" style={{ fontSize:"clamp(48px,11vw,160px)", color:"#C1533B", marginTop:"-0.05em" }}>Ximénez</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl font-light max-w-lg mx-auto" style={{ color:"rgba(244,241,234,0.4)" }}>
            La historia del único místico quemado por la Inquisición de Cartagena de Indias.
          </p>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2">
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.8, repeat:Infinity }}
            className="w-6 h-10 rounded-full border flex items-start justify-center pt-2"
            style={{ borderColor:"rgba(244,241,234,0.2)" }}>
            <div className="w-1 h-2 rounded-full" style={{ background:"rgba(244,241,234,0.5)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Fullscreen panels */}
      {panels.map((panel, i) => (
        <section key={i} className="min-h-screen flex flex-col md:flex-row" style={{ background: panel.bg }}>
          {/* Visual side — número grande */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:1.5 }}
            className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen flex items-center justify-center relative overflow-hidden">
            <p className="font-serif font-bold select-none leading-none" style={{ fontSize:"clamp(100px,20vw,260px)", color:panel.accent, opacity:0.1 }}>
              {panel.num}
            </p>
            <div className="absolute inset-0" style={{ background:`radial-gradient(circle at center,${panel.accent}18 0%,transparent 70%)` }} />
            {/* Línea decorativa */}
            <motion.div initial={{ scaleY:0 }} whileInView={{ scaleY:1 }} viewport={{ once:true }} transition={{ duration:1.2, delay:0.3 }}
              className="absolute left-1/2 top-12 bottom-12 w-px origin-top hidden md:block"
              style={{ background:`linear-gradient(to bottom,transparent,${panel.accent}50,transparent)` }} />
          </motion.div>

          {/* Text side */}
          <div className="w-full md:w-1/2 flex items-center p-10 md:p-20">
            <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-100px" }} transition={{ duration:1 }}>
              <span className="block text-xs tracking-[0.45em] uppercase mb-6 font-bold" style={{ color:panel.accent }}>
                {panel.num} — {panel.label}
              </span>
              <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(36px,5vw,64px)", color:"#F4F1EA" }}>{panel.title}</h2>
              <p className="text-lg leading-relaxed" style={{ color:"rgba(244,241,234,0.55)" }}>{panel.body}</p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Cita final */}
      <section className="py-40 px-6 text-center relative overflow-hidden" style={{ background:"#F4F1EA" }}>
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
          <p className="font-serif font-bold" style={{ fontSize:"35vw", color:"#C1533B", lineHeight:1 }}>JX</p>
        </div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.2 }} className="relative z-10">
          <p className="font-serif italic leading-tight max-w-5xl mx-auto" style={{ fontSize:"clamp(36px,5vw,72px)", color:"#2B2A29" }}>
            "Un ser extraño, salido de lo normal, <em style={{ color:"#C1533B" }}>fascinante.</em>"
          </p>
          <p className="mt-10 text-sm tracking-widest uppercase" style={{ color:"rgba(43,42,41,0.38)" }}>— Patricia Enciso Patiño</p>
        </motion.div>
      </section>

      <footer className="py-12 px-6 text-center" style={{ background:"#0E0C0B", borderTop:"1px solid rgba(244,241,234,0.05)" }}>
        <p className="text-sm mb-6" style={{ color:"rgba(244,241,234,0.18)" }}>Homenaje a Joseph Ximénez · Desierto de la Candelaria, Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.45)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
