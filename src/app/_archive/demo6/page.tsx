"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const verses = [
  { line:"Huyó de la espada para encontrar la pluma.", year:"1665" },
  { line:"Huyó del amor para encontrar a Dios.", year:"1664" },
  { line:"Huyó del mundo para encontrarse a sí mismo.", year:"1665" },
  { line:"Y el mundo lo persiguió hasta el fuego.", year:"1688" },
];

export default function Demo6() {
  return (
    <main className="font-sans" style={{ background:"#F9F6EF", color:"#1E1D1C" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-5"
        style={{ background:"rgba(249,246,239,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(30,29,28,0.07)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity" style={{ color:"#1E1D1C" }}>← Maquetas</Link>
      </nav>

      {/* HERO minimalista de máximo impacto */}
      <section className="min-h-screen flex flex-col justify-between px-8 md:px-20 pt-24 pb-12">
        <div className="flex items-center justify-between">
          <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }}
            className="font-mono text-xs tracking-widest uppercase" style={{ color:"rgba(30,29,28,0.3)" }}>
            Nueva Granada · 1632–1688
          </motion.span>
          <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.2 }}
            className="font-mono text-xs tracking-widest uppercase" style={{ color:"rgba(30,29,28,0.3)" }}>
            Memoriam
          </motion.span>
        </div>

        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-20">
          <motion.div initial={{ opacity:0, y:60 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2, ease:"easeOut" }} className="flex-1">
            <h1 className="font-serif leading-[0.88] tracking-tighter">
              <span className="block" style={{ fontSize:"clamp(72px,15vw,200px)", color:"#1E1D1C" }}>Joseph</span>
              <span className="block italic" style={{ fontSize:"clamp(64px,13vw,175px)", color:"#C1533B" }}>Ximénez</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.8 }}
            className="flex-shrink-0 max-w-xs text-lg leading-relaxed pb-2" style={{ color:"rgba(30,29,28,0.48)" }}>
            Ermitaño. Místico. Escritor.<br />El único eremita de la Nueva Granada condenado a la hoguera.
          </motion.p>
        </div>

        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:1.5, delay:0.4, ease:"easeOut" }}
          className="h-px w-full origin-left" style={{ background:"rgba(30,29,28,0.12)" }} />
      </section>

      {/* VERSOS */}
      <section className="py-24 px-8 md:px-20" style={{ background:"#1E1D1C" }}>
        <div className="max-w-5xl mx-auto">
          {verses.map((v, i) => (
            <motion.div key={i} initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true, margin:"-50px" }} transition={{ duration:0.9, delay:i*0.09 }}
              className="flex items-baseline justify-between py-9 gap-8"
              style={{ borderBottom:"1px solid rgba(244,241,234,0.06)" }}>
              <p className="font-serif italic leading-snug flex-1" style={{ fontSize:"clamp(20px,3vw,40px)", color:"rgba(244,241,234,0.78)" }}>
                {v.line}
              </p>
              <span className="font-mono text-sm flex-shrink-0" style={{ color:"rgba(193,83,59,0.65)" }}>{v.year}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BIO en columnas */}
      <section className="py-28 px-8 md:px-20 grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}>
          <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(36px,5vw,64px)", color:"#1E1D1C" }}>
            El <em style={{ color:"#C1533B" }}>hombre</em><br />detrás del mito
          </h2>
          <p className="text-lg leading-relaxed" style={{ color:"rgba(30,29,28,0.6)" }}>
            Joseph Ximénez no fue un personaje de leyenda creado para inspirar devoción. Fue un hombre real: imperfecto, buscador, incómodo. Marcó a una mujer en un río, mató en defensa propia, huyó de la justicia. Y luego, en ese mismo caos, encontró algo que lo transformó para siempre.
          </p>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, delay:0.2 }}
          className="space-y-6 md:pt-16">
          {[
            { label:"Lugar de nacimiento", value:"Guaro, Málaga, España" },
            { label:"Profesión", value:"Soldado · Ermitaño · Escritor" },
            { label:"Años en el desierto", value:"Once (1665–1676)" },
            { label:"Sentencia", value:"Quemado vivo · Cartagena, 1688" },
            { label:"Obra", value:"29 cuadernos de meditación mística" },
          ].map((item) => (
            <div key={item.label} className="pb-5" style={{ borderBottom:"1px solid rgba(30,29,28,0.08)" }}>
              <span className="block text-xs tracking-widest uppercase font-bold mb-1" style={{ color:"#C1533B" }}>{item.label}</span>
              <span className="text-lg font-serif" style={{ color:"#1E1D1C" }}>{item.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CITA FINAL */}
      <section className="py-32 px-8 md:px-20 text-center" style={{ background:"#C1533B" }}>
        <motion.div initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:1.2 }}>
          <p className="font-serif italic leading-tight max-w-4xl mx-auto" style={{ fontSize:"clamp(32px,5.5vw,72px)", color:"#FFF5F0" }}>
            "Es tan especial y único que merece un lugar real en la historia."
          </p>
          <p className="mt-10 text-xs tracking-widest uppercase" style={{ color:"rgba(255,245,240,0.55)" }}>— Patricia Enciso Patiño</p>
        </motion.div>
      </section>

      <footer className="py-10 px-8 flex flex-col md:flex-row items-center justify-between text-xs gap-4"
        style={{ background:"#0E0C0B", color:"rgba(244,241,234,0.2)" }}>
        <p className="font-serif italic text-lg" style={{ color:"rgba(244,241,234,0.3)" }}>Joseph Ximénez</p>
        <p>Desierto de la Candelaria · Boyacá · Colombia</p>
        <Link href="/" className="hover:opacity-80 transition-opacity tracking-widest uppercase" style={{ color:"rgba(193,83,59,0.4)" }}>← Maquetas</Link>
      </footer>
    </main>
  );
}
