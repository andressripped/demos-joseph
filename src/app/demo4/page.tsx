"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const timeline = [
  { year:"1632", event:"Nace en Guaro, Málaga, España. Hijo de labradores en la Sierra de Ronda." },
  { year:"1650", event:"Soldado de presidio. Tres años de guerra entre España y Portugal." },
  { year:"1653", event:"Se embarca en la Armada Real en Cádiz. Viaja seis años en galeones por distintos mares." },
  { year:"1660", event:"Viaja a las Indias. Desembarca en Santa Marta, Nueva Granada. Trabaja un año en Mariquita." },
  { year:"1662", event:"Se casa con Juana en Timaná. Viven dos años en Garzón. Descubre su infidelidad." },
  { year:"1664", event:"Decide alejarse para no perder la fe. Inicia el camino hacia el desierto." },
  { year:"1665", event:"Llega al Desierto de la Candelaria. Un pájaro le indica el lugar. Tiene 33 años." },
  { year:"1665–1676", event:"Escribe 29 cuadernos. Adquiere fama de santo. Otros eremitas lo siguen." },
  { year:"1676", event:"El cura Agustín de Tovar lo denuncia ante la Inquisición de Cartagena." },
  { year:"1676", event:"El inquisidor Juan de Mier emite orden de prisión el 10 de julio." },
  { year:"1676–1688", event:"Doce años en cárcel secreta en Cartagena. Interrogatorios. No se retracta jamás." },
  { year:"1688", event:"30 de mayo. Auto de Fe. Quemado vivo en Cartagena de Indias. Murió convicto de sus ideas." },
];

export default function Demo4() {
  return (
    <main className="font-sans" style={{ background:"#FAFAF7", color:"#1E1D1C" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background:"rgba(250,250,247,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(30,29,28,0.08)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity" style={{ color:"#1E1D1C" }}>← Maquetas</Link>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden pt-20" style={{ background:"#1E1D1C" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:"radial-gradient(circle,#C1533B 1px,transparent 1px)", backgroundSize:"32px 32px" }} />
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2 }} className="z-10">
          <p className="text-xs tracking-[0.6em] uppercase mb-10" style={{ color:"rgba(193,83,59,0.9)" }}>
            Cronología · 1632–1688
          </p>
          <h1 className="font-serif leading-[0.88]">
            <span className="block" style={{ fontSize:"clamp(64px,13vw,180px)", color:"#F4F1EA" }}>Una Vida</span>
            <span className="block italic" style={{ fontSize:"clamp(54px,11vw,150px)", color:"#C1533B" }}>Entre Dos Fuegos</span>
          </h1>
          <p className="mt-12 text-xl font-light max-w-xl mx-auto" style={{ color:"rgba(244,241,234,0.42)" }}>
            De la espada al desierto. Del misticismo a la hoguera. La historia completa de Joseph Ximénez.
          </p>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-2">
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.8, repeat:Infinity }}
            className="w-6 h-10 rounded-full border flex items-start justify-center pt-2"
            style={{ borderColor:"rgba(244,241,234,0.18)" }}>
            <div className="w-1 h-2 rounded-full" style={{ background:"rgba(244,241,234,0.5)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 md:px-16" style={{ background:"#FAFAF7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background:"rgba(193,83,59,0.18)", transform:"translateX(-50%)" }} />

            <div className="space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={i} initial={{ opacity:0, x: isLeft ? -30 : 30 }} whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.7 }}
                    className={`relative flex items-start md:items-center gap-6 py-8 pl-14 md:pl-0 ${isLeft?"md:flex-row":"md:flex-row-reverse"}`}>
                    {/* Punto */}
                    <div className="absolute left-[21px] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full border-2 z-10"
                      style={{ background:"#FAFAF7", borderColor:"#C1533B" }} />
                    {/* Año */}
                    <div className={`w-full md:w-[44%] ${isLeft?"md:text-right md:pr-10":"md:pl-10"}`}>
                      <span className="font-mono text-sm font-bold" style={{ color:"#C1533B" }}>{item.year}</span>
                    </div>
                    {/* Evento */}
                    <div className={`w-full md:w-[44%] ${isLeft?"md:pl-10":"md:pr-10"}`}>
                      <p className="text-base leading-relaxed" style={{ color:"rgba(30,29,28,0.7)" }}>{item.event}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CITA */}
      <section className="py-28 px-6 text-center" style={{ background:"#C1533B" }}>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}>
          <p className="font-serif italic leading-tight max-w-4xl mx-auto" style={{ fontSize:"clamp(28px,5vw,68px)", color:"#FFF8F5" }}>
            "Su caso es insólito porque fue el único místico, ermitaño y escritor condenado a la hoguera."
          </p>
          <p className="mt-8 text-xs tracking-widest uppercase" style={{ color:"rgba(255,248,245,0.6)" }}>— Patricia Enciso Patiño, Historiadora</p>
        </motion.div>
      </section>

      {/* LEGADO */}
      <section className="py-28 px-6" style={{ background:"#1E1D1C" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:1 }}>
            <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(40px,6vw,80px)", color:"#F4F1EA" }}>
              El legado <em style={{ color:"#C1533B" }}>resurge</em>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color:"rgba(244,241,234,0.55)" }}>
              350 años después, artistas, historiadores y vecinos del Desierto de la Candelaria trabajan para reparar su memoria. El escultor Eduardo Rodríguez, vecino de Ráquira, le ha dado forma tridimensional: misticismo, martirio, reivindicación.
            </p>
            <p className="text-lg leading-relaxed" style={{ color:"rgba(244,241,234,0.55)" }}>
              Joseph Ximénez pertenece a todos: al campesino, al creyente, al librepensador.
            </p>
          </motion.div>
          <motion.div initial={{ opacity:0, scale:0.94 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:1.2 }}
            className="aspect-square rounded-3xl flex items-center justify-center"
            style={{ background:"rgba(193,83,59,0.07)", border:"1px solid rgba(193,83,59,0.14)" }}>
            <div className="text-center p-10">
              <p className="font-serif italic select-none" style={{ fontSize:"clamp(48px,8vw,80px)", color:"rgba(244,241,234,0.1)" }}>Ráquira</p>
              <p className="text-xs tracking-widest uppercase mt-4" style={{ color:"rgba(193,83,59,0.5)" }}>Boyacá, Colombia</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-6 text-center" style={{ background:"#141312" }}>
        <p className="font-serif italic text-xl mb-1" style={{ color:"rgba(193,83,59,0.5)" }}>Joseph Ximénez · 1632–1688</p>
        <p className="text-sm mb-6" style={{ color:"rgba(221,216,207,0.22)" }}>Desierto de la Candelaria · Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.4)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
