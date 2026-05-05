"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const bento = [
  { col:"md:col-span-2", row:"md:row-span-2", bg:"#2B2A29", accent:"#C1533B", title:"Joseph Ximénez", sub:"1632–1688", text:"Soldado, ermitaño, escritor, hereje. La vida más insólita que la Inquisición de Cartagena conoció jamás.", large:true, quote:false },
  { col:"md:col-span-1", row:"", bg:"#C1533B", accent:"#FFF5F0", title:"29 Cuadernos", sub:"El corpus místico", text:"Escritos que él decía dictados por Dios. Suficientes para condenarlo.", large:false, quote:false },
  { col:"md:col-span-1", row:"", bg:"#354F42", accent:"#E8F0EB", title:"11 Años", sub:"En el Desierto", text:"Solo. En silencio. Construyendo una vida sin pedir permiso a nadie.", large:false, quote:false },
  { col:"md:col-span-1", row:"", bg:"#7A3B22", accent:"#FFF5F0", title:"1688", sub:"Auto de Fe", text:"La fecha que la historia no debe olvidar.", large:false, quote:false },
  { col:"md:col-span-2", row:"", bg:"#E8E2D2", accent:"#1E1D1C", title:'\u201cUn ser extra\u00f1o, salido de lo normal y fascinante.\u201d', sub:"— Patricia Enciso Patiño", text:"", large:false, quote:true },
];

export default function Demo9() {
  return (
    <main className="font-sans" style={{ background:"#F0EDE5", color:"#1E1D1C" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background:"rgba(240,237,229,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(30,29,28,0.08)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity" style={{ color:"#1E1D1C" }}>← Maquetas</Link>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden pt-20">
        <motion.div className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse at 30% 50%,rgba(193,83,59,0.07) 0%,transparent 55%),radial-gradient(ellipse at 70% 50%,rgba(53,79,66,0.07) 0%,transparent 55%)" }} />

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
          className="text-xs tracking-[0.6em] uppercase mb-8 z-10" style={{ color:"rgba(30,29,28,0.32)" }}>
          Memoria · Mística · Martirio
        </motion.p>
        <motion.h1 initial={{ opacity:0, scale:0.93 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.3, ease:"easeOut" }}
          className="font-serif z-10 leading-[0.9]" style={{ fontSize:"clamp(64px,14vw,200px)" }}>
          <span style={{ color:"#1E1D1C" }}>Joseph </span>
          <em style={{ color:"#C1533B" }}>Ximénez</em>
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.9 }}
          className="z-10 mt-8 text-xl font-light max-w-lg" style={{ color:"rgba(30,29,28,0.45)" }}>
          El ermitaño del Desierto de la Candelaria. Una historia que la hoguera no pudo borrar.
        </motion.p>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:1.2 }} className="z-10 mt-12">
          <a href="#historia"
            className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-80"
            style={{ background:"#1E1D1C", color:"#F0EDE5" }}>
            Conocer su historia
          </a>
        </motion.div>
      </section>

      {/* BENTO GRID */}
      <section id="historia" className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows:"280px" }}>
          {bento.map((item, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.7, delay:i*0.08 }}
              className={`${item.col} ${item.row} rounded-3xl p-8 flex flex-col justify-end overflow-hidden relative`}
              style={{ background:item.bg }}>
              {item.large && (
                <div className="absolute top-8 right-8 font-serif font-bold select-none pointer-events-none leading-none"
                  style={{ fontSize:"clamp(60px,10vw,120px)", color:"rgba(255,255,255,0.05)" }}>
                  JX
                </div>
              )}
              {item.quote ? (
                <div>
                  <p className="font-serif italic leading-tight mb-4" style={{ fontSize:"clamp(18px,2.5vw,30px)", color:item.accent }}>{item.title}</p>
                  <p className="text-xs tracking-widest uppercase" style={{ color:"rgba(30,29,28,0.38)" }}>{item.sub}</p>
                </div>
              ) : (
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3 font-bold" style={{ color:item.accent, opacity:0.72 }}>{item.sub}</p>
                  <h3 className="font-serif mb-3 leading-tight" style={{ fontSize:"clamp(20px,3vw,32px)", color:item.large?"#F4F1EA":item.accent }}>{item.title}</h3>
                  {item.text && <p className="text-sm leading-relaxed" style={{ color:item.large?"rgba(244,241,234,0.52)":`${item.accent}99` }}>{item.text}</p>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* LÍNEA DE VIDA */}
      <section className="py-24 px-6 md:px-20" style={{ background:"#1E1D1C" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}
            className="font-serif mb-16 leading-tight" style={{ fontSize:"clamp(40px,7vw,96px)", color:"#F0EDE5" }}>
            De Málaga<br /><em style={{ color:"#C1533B" }}>a Cartagena</em>
          </motion.h2>

          <div className="space-y-8">
            {[
              ["1632","Nace en Guaro, Málaga. Hijo de labradores. La tierra es su primer mundo."],
              ["1650–1660","Soldado. Diez años entre espadas, galeones y océanos. Aprende que el mundo es más grande que Guaro."],
              ["1662","Llega a las Indias. Se casa. Encuentra paz en Garzón. Y luego la pierde."],
              ["1665","Se retira al Desierto de la Candelaria con 33 años. Comienza a escribir."],
              ["1676","La Inquisición llega a su choza. Sus cuadernos son la prueba. Lo encadenan y se lo llevan."],
              ["1688","Hoguera en Cartagena. Auto de Fe. Nunca se retractó. Ni una sola palabra."],
            ].map(([year, text], i) => (
              <motion.div key={i} initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ duration:0.7, delay:i*0.07 }}
                className="flex gap-6 md:gap-10 items-start">
                <span className="flex-shrink-0 font-mono text-sm pt-1 w-20 md:w-28" style={{ color:"#C1533B" }}>{year}</span>
                <div className="flex-1">
                  <div className="h-px w-full mb-4" style={{ background:"rgba(244,241,234,0.06)" }} />
                  <p className="text-lg leading-relaxed" style={{ color:"rgba(240,237,229,0.55)" }}>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center" style={{ background:"#0A0908" }}>
        <p className="text-sm mb-4" style={{ color:"rgba(240,237,229,0.2)" }}>Joseph Ximénez · Desierto de la Candelaria · Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.4)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
