"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Demo10() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end center"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <main className="font-sans" style={{ background:"#F4F1EA", color:"#1E1D1C" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background:"rgba(244,241,234,0.88)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(30,29,28,0.07)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity" style={{ color:"#1E1D1C" }}>← Maquetas</Link>
      </nav>

      {/* HERO CON PARALLAX REAL */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div style={{ scale:bgScale }} className="absolute inset-0">
          <div className="absolute inset-0"
            style={{ background:"linear-gradient(135deg,#2B2A29 0%,#5A1A0E 40%,#C1533B 70%,#7A3B22 100%)" }} />
          <div className="absolute inset-0 opacity-[0.18]"
            style={{ backgroundImage:"radial-gradient(circle,rgba(244,241,234,0.9) 1px,transparent 1px)", backgroundSize:"24px 24px" }} />
        </motion.div>
        <div className="absolute inset-0" style={{ background:"rgba(10,9,8,0.42)" }} />

        <motion.div style={{ y:textY, opacity:textOpacity }} className="z-10 text-center px-6 pointer-events-none">
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.3 }}
            className="text-xs tracking-[0.6em] uppercase mb-10" style={{ color:"rgba(244,241,234,0.5)" }}>
            Desierto de la Candelaria · 1665–1688
          </motion.p>
          <motion.h1 initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.4, ease:"easeOut" }}
            className="font-serif leading-[0.88]">
            <span className="block" style={{ fontSize:"clamp(72px,14vw,200px)", color:"#F4F1EA" }}>Joseph</span>
            <span className="block italic" style={{ fontSize:"clamp(62px,12vw,170px)", color:"#F4A58A", marginTop:"-0.04em" }}>Ximénez</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.2, delay:1 }}
            className="mt-12 text-xl md:text-2xl font-light max-w-lg mx-auto" style={{ color:"rgba(244,241,234,0.5)" }}>
            El ermitaño que escribió con Dios.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity }}
            className="w-6 h-10 rounded-full border flex items-start justify-center pt-2 mx-auto"
            style={{ borderColor:"rgba(244,241,234,0.28)" }}>
            <div className="w-1 h-2 rounded-full" style={{ background:"rgba(244,241,234,0.55)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 md:px-20" style={{ background:"#fff" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}>
              <p className="text-xs tracking-widest uppercase mb-8 font-bold" style={{ color:"#C1533B" }}>1632 · Guaro, Málaga</p>
              <h2 className="font-serif mb-10 leading-tight" style={{ fontSize:"clamp(36px,5.5vw,72px)", color:"#1E1D1C" }}>
                El hombre que abandonó todo para escribirle a Dios
              </h2>
              <p className="text-xl leading-relaxed mb-6" style={{ color:"rgba(30,29,28,0.62)" }}>
                Nacido en España, curtido por diez años de vida militar, Joseph Ximénez llegó a las Indias sin buscar riqueza ni poder. Una noche en Garzón escuchó algo que cambió todo. Dejó a su esposa dormida, salió sin mirar atrás y comenzó a caminar hacia el desierto.
              </p>
              <p className="text-xl leading-relaxed" style={{ color:"rgba(30,29,28,0.62)" }}>
                Allí pasaría once años. Escribiría veintinueve cuadernos. Adquiriría fama de santo. Y sería condenado a morir en las llamas.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:1 }}
            className="space-y-7 md:pt-20">
            {[
              { n:"1632", l:"Nace en Andalucía" },
              { n:"1650", l:"Soldado de la Armada" },
              { n:"1665", l:"Se retira al desierto" },
              { n:"1688", l:"Muere en la hoguera" },
            ].map((s) => (
              <div key={s.n} className="flex items-center gap-5">
                <span className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                  style={{ background:"rgba(193,83,59,0.08)", color:"#C1533B" }}>{s.n}</span>
                <span className="text-base font-medium" style={{ color:"rgba(30,29,28,0.55)" }}>{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DESIERTO */}
      <section className="relative overflow-hidden" style={{ background:"#2B2A29" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2" style={{ minHeight:"560px" }}>
          <div className="flex flex-col justify-center p-10 md:p-20">
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:1.1 }}>
              <p className="text-xs tracking-widest uppercase mb-6 font-bold" style={{ color:"#C1533B" }}>El Desierto · 1665–1676</p>
              <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(36px,5.5vw,72px)", color:"#F4F1EA" }}>
                Once años de <em style={{ color:"#C1533B" }}>pura</em> escritura
              </h2>
              <p className="text-lg leading-relaxed" style={{ color:"rgba(244,241,234,0.55)" }}>
                En una choza sin puerta, sobre un camastro de palos, alimentándose de raíces, Joseph llenó veintinueve cuadernos con sus meditaciones. Los frailes del convento cercano le regalaban pan y queso. A cambio, él les regalaba palabras que ningún sacerdote se había atrevido a escribir.
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-center p-10 relative overflow-hidden" style={{ background:"rgba(193,83,59,0.07)" }}>
            <motion.div animate={{ rotate:[0,3,0,-3,0] }} transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
              className="w-44 h-60 rounded-sm flex items-center justify-center"
              style={{ background:"#F4F1E8", boxShadow:"0 20px 60px rgba(0,0,0,0.5)", border:"1px solid rgba(193,83,59,0.18)" }}>
              <div className="text-center p-6">
                <p className="font-serif font-bold leading-none mb-2" style={{ fontSize:"72px", color:"rgba(193,83,59,0.28)" }}>29</p>
                <div className="h-px my-3" style={{ background:"rgba(43,42,41,0.2)" }} />
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color:"rgba(43,42,41,0.4)" }}>Cuadernos</p>
              </div>
            </motion.div>
            <div className="absolute bottom-8 right-8 font-serif italic select-none pointer-events-none"
              style={{ fontSize:"clamp(48px,8vw,100px)", color:"rgba(193,83,59,0.07)", lineHeight:1 }}>1665</div>
          </div>
        </div>
      </section>

      {/* MARTIRIO */}
      <section className="py-28 px-6" style={{ background:"#F4F1EA" }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.2 }}>
            <p className="text-xs tracking-widest uppercase mb-6 font-bold" style={{ color:"#C1533B" }}>30 de mayo · 1688 · Cartagena de Indias</p>
            <h2 className="font-serif mb-10 leading-none" style={{ fontSize:"clamp(56px,11vw,160px)", color:"#1E1D1C" }}>
              El Auto de <em style={{ color:"#C1533B" }}>Fe</em>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ color:"rgba(30,29,28,0.62)" }}>
              Doce años en una celda secreta. Interrogatorio tras interrogatorio. Una sola respuesta: no. No se retractó. No negó sus cuadernos. No negoció su fe. El 30 de mayo de 1688, Joseph Ximénez ardió en la hoguera. Era el único místico ermitaño en toda la historia del Tribunal en recibir esa sentencia.
            </p>
            <blockquote className="font-serif italic leading-snug" style={{ fontSize:"clamp(24px,3.5vw,44px)", color:"#C1533B" }}>
              "Su fuerza estaba en los arquetipos que imitaba y representaba: el del eremita y el de Jesús en el desierto."
            </blockquote>
            <p className="mt-5 text-xs tracking-widest uppercase" style={{ color:"rgba(30,29,28,0.3)" }}>— Patricia Enciso Patiño</p>
          </motion.div>
        </div>
      </section>

      {/* CTA LEGADO */}
      <section style={{ background:"#1E1D1C" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:1 }}>
              <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(36px,5.5vw,72px)", color:"#F4F1EA" }}>
                Ráquira vive<br /><em style={{ color:"#C1533B" }}>su memoria</em>
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color:"rgba(244,241,234,0.5)" }}>
                350 años después, el artista Eduardo Rodríguez esculpió en Ráquira la figura de Joseph Ximénez. La escultura lo presenta como místico y mártir: una reivindicación de quien fue silenciado por atreverse a pensar con libertad.
              </p>
              <a href="#" className="inline-block px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-85"
                style={{ background:"#C1533B", color:"#fff" }}>
                Apoyar el proyecto de memoria
              </a>
            </motion.div>
          </div>

          <div className="min-h-[400px] flex items-center justify-center relative overflow-hidden" style={{ background:"rgba(193,83,59,0.05)" }}>
            <motion.div animate={{ scale:[1,1.06,1], opacity:[0.35,0.65,0.35] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
              className="absolute inset-0" style={{ background:"radial-gradient(circle at center,rgba(193,83,59,0.35) 0%,transparent 70%)" }} />
            <p className="font-serif italic select-none pointer-events-none"
              style={{ fontSize:"clamp(80px,18vw,200px)", color:"rgba(193,83,59,0.09)", lineHeight:0.9 }}>JX</p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center" style={{ background:"#0A0908" }}>
        <p className="font-serif italic text-2xl mb-2" style={{ color:"rgba(193,83,59,0.45)" }}>Joseph Ximénez · 1632–1688</p>
        <p className="text-sm mb-6" style={{ color:"rgba(244,241,234,0.18)" }}>Desierto de la Candelaria · Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.4)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
