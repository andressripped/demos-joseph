"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const chapters = [
  { id:"I", year:"1632", title:"El soldado", sub:"Guaro, Málaga", color:"#354F42",
    body:"Hijo de labradores, Joseph creció entre olivos y tierra árida. Con 18 años se enroló en el ejército. Diez años de guerra moldearon a un hombre inquieto, incapaz de quedarse quieto. Ni la tierra natal, ni el amor de Ana, ni las llanuras de Garzón lograron retenerlo." },
  { id:"II", year:"1662", title:"La traición", sub:"Garzón, Huila", color:"#7A3B22",
    body:"Se casó con Juana. Dos años de paz en Garzón. Pero la infidelidad rompió el único hilo que lo ataba al mundo. Una noche, acostado a su lado, escuchó algo que no era humano. Al amanecer, ya no estaba." },
  { id:"III", year:"1665", title:"El desierto", sub:"Candelaria, Boyacá", color:"#2B2A29",
    body:"Un pájaro le mostró el lugar. Construyó una choza. Dormía sobre tablas sin cubrirse, aunque helara. Se alimentaba de raíces y vegetales. Durante once años, no fue nadie. O lo fue todo." },
  { id:"IV", year:"1676", title:"La denuncia", sub:"Oicatá, Boyacá", color:"#5C4A1E",
    body:"El cura Agustín de Tovar llegó con curiosidad y se fue con miedo. Los cuadernos de Joseph —sus 29 tomos— eran demasiado libres, demasiado directos, demasiado peligrosos para el dogma imperante." },
  { id:"V", year:"1688", title:"La hoguera", sub:"Cartagena de Indias", color:"#C1533B",
    body:"Doce años de cárcel secreta no le arrancaron ni una sola retractación. El 30 de mayo de 1688, en el gran Auto de Fe, Joseph Ximénez ardió. Y con él, la versión oficial de la historia que intentó callarlo." },
];

import { useState } from "react";

export default function Demo3() {
  const [active, setActive] = useState(0);

  return (
    <main className="font-sans flex flex-col min-h-screen" style={{ background:"#F4F1EA", color:"#2B2A29" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
        style={{ background:"rgba(244,241,234,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(43,42,41,0.08)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <div className="flex gap-2">
          {chapters.map((c, i) => (
            <button key={c.id} id={`nav-ch-${c.id}`} onClick={() => setActive(i)}
              className="w-8 h-8 rounded-full text-xs font-bold font-mono transition-all duration-300"
              style={{ background:active===i ? chapters[i].color : "transparent", color:active===i?"#F4F1EA":"rgba(43,42,41,0.35)", border:`1px solid ${active===i?chapters[i].color:"rgba(43,42,41,0.12)"}` }}>
              {c.id}
            </button>
          ))}
        </div>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity" style={{ color:"#2B2A29" }}>← Maquetas</Link>
      </nav>

      {/* LAYOUT */}
      <div className="flex flex-col md:flex-row flex-1 pt-[64px] min-h-screen">

        {/* Sidebar de capítulos */}
        <div className="w-full md:w-72 flex-shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-visible" style={{ background:"#2B2A29" }}>
          {chapters.map((c, i) => (
            <button key={c.id} id={`ch-tab-${c.id}`} onClick={() => setActive(i)}
              className="flex-1 md:flex-none px-5 py-6 md:py-8 text-left transition-all duration-300 relative border-b border-white/5 min-w-[120px] md:min-w-0"
              style={{ background:active===i?c.color:"transparent" }}>
              <span className="block font-mono text-xs mb-1" style={{ color:active===i?"rgba(244,241,234,0.65)":"rgba(221,216,207,0.25)" }}>{c.year}</span>
              <span className="block font-serif italic text-base md:text-lg leading-tight" style={{ color:active===i?"#F4F1EA":"rgba(221,216,207,0.4)" }}>{c.title}</span>
            </button>
          ))}
        </div>

        {/* Panel de contenido */}
        <div className="flex-1 flex flex-col">
          <motion.div key={active} initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, ease:"easeOut" }}
            className="flex-1 flex flex-col p-8 md:p-20 relative overflow-hidden">
            {/* Año como marca de agua */}
            <div className="absolute bottom-0 right-0 select-none pointer-events-none" aria-hidden>
              <p className="font-serif font-bold leading-none" style={{ fontSize:"clamp(100px,18vw,260px)", color:"rgba(43,42,41,0.03)" }}>
                {chapters[active].year}
              </p>
            </div>

            <div className="relative z-10">
              <span className="block text-xs tracking-[0.4em] uppercase mb-5 font-bold" style={{ color:chapters[active].color }}>
                Capítulo {chapters[active].id} · {chapters[active].sub}
              </span>
              <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(48px,8vw,100px)", color:"#2B2A29" }}>
                {chapters[active].title}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl" style={{ color:"rgba(43,42,41,0.65)" }}>
                {chapters[active].body}
              </p>
            </div>
          </motion.div>

          {/* Bottom nav */}
          <div className="flex items-center justify-between px-8 md:px-20 py-6" style={{ borderTop:"1px solid rgba(43,42,41,0.08)" }}>
            <button id="prev-ch" onClick={() => setActive(a => Math.max(0,a-1))} disabled={active===0}
              className="text-sm font-semibold tracking-widest uppercase transition-all disabled:opacity-20 hover:opacity-60"
              style={{ color:"#2B2A29" }}>← Anterior</button>
            <span className="font-mono text-xs" style={{ color:"rgba(43,42,41,0.3)" }}>{active+1} / {chapters.length}</span>
            <button id="next-ch" onClick={() => setActive(a => Math.min(chapters.length-1,a+1))} disabled={active===chapters.length-1}
              className="text-sm font-semibold tracking-widest uppercase transition-all disabled:opacity-20 hover:opacity-70"
              style={{ color:"#C1533B" }}>Siguiente →</button>
          </div>
        </div>
      </div>

      {/* Cita final */}
      <section className="py-20 px-6 text-center" style={{ background:"#2B2A29" }}>
        <p className="font-serif italic leading-snug max-w-4xl mx-auto" style={{ fontSize:"clamp(24px,4vw,52px)", color:"rgba(244,241,234,0.65)" }}>
          "Es el momento de reparar su memoria, pues fue martirizado por sus ideas."
        </p>
        <p className="mt-6 text-xs tracking-widest uppercase" style={{ color:"rgba(193,83,59,0.75)" }}>— Patricia Enciso Patiño</p>
      </section>

      <footer className="py-8 px-6 text-center" style={{ background:"#100F0D" }}>
        <p className="text-sm mb-4" style={{ color:"rgba(221,216,207,0.2)" }}>Joseph Ximénez · Desierto de la Candelaria · Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.4)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
