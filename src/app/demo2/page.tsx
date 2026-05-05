"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Demo2() {
  return (
    <main className="font-sans" style={{ background: "#100F0D", color: "#DDD8CF" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background:"rgba(16,15,13,0.88)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(221,216,207,0.06)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-30 hover:opacity-70 transition-opacity" style={{ color:"#DDD8CF" }}>← Maquetas</Link>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Glow animado */}
        <motion.div animate={{ scale:[1,1.12,1], opacity:[0.18,0.35,0.18] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,#C1533B 0%,transparent 70%)" }} />
        {/* Grid de puntos */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:"radial-gradient(circle,#DDD8CF 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.5, ease:"easeOut" }}
          className="z-10 text-center px-6">
          <p className="text-xs tracking-[0.55em] uppercase mb-10" style={{ color:"rgba(193,83,59,0.85)" }}>
            Nueva Granada · Inquisición de Cartagena
          </p>
          <h1 className="font-serif leading-[0.9]">
            <span className="block" style={{ fontSize:"clamp(70px,14vw,190px)", color:"#DDD8CF" }}>Joseph</span>
            <span className="block italic" style={{ fontSize:"clamp(60px,12vw,160px)", color:"#C1533B" }}>Ximénez</span>
          </h1>
          <p className="mt-12 text-xl font-light max-w-md mx-auto" style={{ color:"rgba(221,216,207,0.45)" }}>
            Soldado. Ermitaño. Escritor. Hereje.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color:"rgba(221,216,207,0.25)" }}>Bajar</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.8, repeat:Infinity }}
            className="w-px h-10" style={{ background:"rgba(193,83,59,0.4)" }} />
        </motion.div>
      </section>

      {/* Sección 1: Origen */}
      <section className="py-32 px-6 md:px-20" style={{ background:"#100F0D" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-100px" }} transition={{ duration:1 }}>
              <span className="block font-mono text-xs tracking-widest mb-6" style={{ color:"#C1533B" }}>I — 1632</span>
              <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(40px,7vw,88px)", color:"#DDD8CF" }}>
                Guaro, <em>Málaga.</em><br />El inicio.
              </h2>
              <p className="text-lg leading-relaxed" style={{ color:"rgba(221,216,207,0.55)" }}>
                Hijo de labradores, Joseph Ximénez pasó de labrar tierra a labrar almas. Diez años como soldado de la Armada Real lo llevaron desde los campos de Andalucía hasta los puertos de las Indias. Cada trayecto era una fuga hacia adelante. Hasta que llegó Garzón.
              </p>
            </motion.div>
          </div>
          <div className="md:col-span-2">
            <motion.div initial={{ opacity:0, scale:0.88 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:1.2 }}
              className="aspect-square rounded-3xl flex items-center justify-center"
              style={{ border:"1px solid rgba(193,83,59,0.18)", background:"rgba(193,83,59,0.04)" }}>
              <p className="font-serif italic text-center select-none" style={{ fontSize:"clamp(60px,10vw,120px)", color:"rgba(193,83,59,0.22)" }}>1632</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="py-40 px-6 text-center" style={{ background:"rgba(193,83,59,0.05)", borderTop:"1px solid rgba(193,83,59,0.08)", borderBottom:"1px solid rgba(193,83,59,0.08)" }}>
        <motion.div initial={{ opacity:0, y:60 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.2 }} className="max-w-3xl mx-auto">
          <p className="font-serif italic leading-tight" style={{ fontSize:"clamp(28px,4.5vw,60px)", color:"#DDD8CF" }}>
            "Una noche se acostó a su lado, cuando de repente tuvo inspiración de Dios de que se retirase a buscarlo."
          </p>
          <p className="mt-10 text-xs tracking-widest uppercase" style={{ color:"rgba(193,83,59,0.8)" }}>Confesión ante el Inquisidor Juan de Mier, 1677</p>
        </motion.div>
      </section>

      {/* Sección 2: El desierto */}
      <section className="py-32 px-6 md:px-20" style={{ background:"#100F0D" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:1.5 }}>
            <span className="block font-mono text-xs tracking-widest mb-6" style={{ color:"#C1533B" }}>II — 1665–1676</span>
            <h2 className="font-serif mb-16 leading-tight" style={{ fontSize:"clamp(40px,8vw,110px)", color:"#DDD8CF" }}>
              Once años<br /><em style={{ color:"rgba(221,216,207,0.22)" }}>de silencio</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px" style={{ background:"rgba(221,216,207,0.06)" }}>
            {[
              { num:"29", label:"Cuadernos", desc:"Dictados por Dios, según él. Un corpus místico que la Inquisición llamó herejía." },
              { num:"33", label:"Años al retirarse", desc:"La edad de Cristo. Joseph lo sabía. La correspondencia era deliberada." },
              { num:"∞", label:"Seguidores", desc:"Otros eremitas llegaron a imitarlo. Su fama de santo se extendía sin que él lo buscara." },
            ].map((item) => (
              <div key={item.num} className="p-10 md:p-12" style={{ background:"#100F0D" }}>
                <p className="font-serif font-bold leading-none mb-4 select-none" style={{ fontSize:"clamp(60px,10vw,100px)", color:"rgba(193,83,59,0.32)" }}>{item.num}</p>
                <p className="text-xs tracking-widest uppercase mb-4 font-bold" style={{ color:"#C1533B" }}>{item.label}</p>
                <p className="text-sm leading-relaxed" style={{ color:"rgba(221,216,207,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: El fuego */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ background:"#100F0D" }}>
        <motion.div
          initial={{ opacity:0, scale:0.8 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }}
          transition={{ duration:2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(193,83,59,0.6) 0%,transparent 70%)", filter:"blur(40px)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.5 }}>
            <span className="block font-mono text-xs tracking-widest mb-6" style={{ color:"rgba(193,83,59,0.8)" }}>III — 30 · V · 1688</span>
            <h2 className="font-serif leading-none mb-10" style={{ fontSize:"clamp(64px,12vw,160px)", color:"#DDD8CF" }}>
              La <em style={{ color:"#C1533B" }}>hoguera</em>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto" style={{ color:"rgba(221,216,207,0.52)" }}>
              Auto de Fe. Cartagena de Indias. El único místico ermitaño jamás quemado vivo por el Tribunal en toda su historia. Doce años de prisión. No se retractó ni una sola palabra.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center" style={{ background:"#0D0C0A", borderTop:"1px solid rgba(193,83,59,0.1)" }}>
        <p className="font-serif italic text-3xl mb-3" style={{ color:"rgba(193,83,59,0.55)" }}>Joseph Ximénez</p>
        <p className="text-sm mb-8" style={{ color:"rgba(221,216,207,0.22)" }}>Desierto de la Candelaria · Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.4)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
