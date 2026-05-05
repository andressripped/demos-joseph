"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Demo8() {
  return (
    <main className="font-sans" style={{ background:"#0A0908", color:"#DDD8CF" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background:"rgba(10,9,8,0.9)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(221,216,207,0.06)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-30 hover:opacity-70 transition-opacity" style={{ color:"#DDD8CF" }}>← Maquetas</Link>
      </nav>

      {/* HERO: Carta manuscrita */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 pt-28 relative overflow-hidden">
        {/* Líneas de papel */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage:"repeating-linear-gradient(transparent,transparent 30px,rgba(221,216,207,0.6) 30px,rgba(221,216,207,0.6) 31px)" }} />

        <motion.div initial={{ opacity:0, y:50, rotate:-1 }} animate={{ opacity:1, y:0, rotate:-0.5 }}
          transition={{ duration:1.5, ease:"easeOut" }}
          className="relative max-w-2xl w-full p-10 md:p-16 rounded-sm"
          style={{ background:"#F4F1E8", color:"#1E1D1C", boxShadow:"0 40px 120px rgba(0,0,0,0.7)", border:"1px solid rgba(43,42,41,0.18)" }}>

          {/* Línea decorativa */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex-1 h-px" style={{ background:"rgba(43,42,41,0.18)" }} />
            <span className="font-mono text-xs tracking-widest uppercase whitespace-nowrap" style={{ color:"rgba(43,42,41,0.38)" }}>Desierto de la Candelaria · c. 1669</span>
            <div className="flex-1 h-px" style={{ background:"rgba(43,42,41,0.18)" }} />
          </div>

          <p className="font-serif italic leading-relaxed" style={{ fontSize:"clamp(18px,2.5vw,28px)", color:"#1E1D1C" }}>
            "Escribo lo que Dios me ordena. No por vanidad ni capricho, sino porque sería desobediencia guardar silencio cuando Él habla. Cada línea de estos cuadernos es un acto de fe, no de rebeldía. Que quien los lea, los entienda así."
          </p>

          <div className="mt-10 pt-8 border-t" style={{ borderColor:"rgba(43,42,41,0.12)" }}>
            <p className="font-serif text-xl" style={{ color:"rgba(43,42,41,0.55)" }}>Joseph Ximénez</p>
            <p className="text-sm tracking-wide mt-1" style={{ color:"rgba(43,42,41,0.32)" }}>Ermitaño, Desierto de la Candelaria</p>
          </div>

          {/* Sello */}
          <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background:"#C1533B" }}>
            <span className="font-serif font-bold text-xs text-center leading-tight" style={{ color:"#fff" }}>J·X</span>
          </div>
        </motion.div>
      </section>

      {/* Documentos de archivo */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}
            className="font-serif mb-20 leading-tight" style={{ fontSize:"clamp(40px,7vw,96px)", color:"#DDD8CF" }}>
            El archivo <em style={{ color:"#C1533B" }}>perdido</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { ref:"AHN · Madrid · Folio 22v", title:"La orden de prisión", text:"El 10 de julio de 1676, el inquisidor Juan de Mier firmó la orden de prisión contra Joseph Ximénez. El documento fue el resultado de una pesquisa que llevaba más de un año sin que él lo supiera." },
              { ref:"AHN · Madrid · Folio 2r", title:"La denuncia", text:"El cura Agustín de Tovar declaró haber visitado su choza y haber leído en sus cuadernos proposiciones heréticas. Quería evitar que 'enseñara sus errores a otras personas que acudían a buscarlo'." },
              { ref:"AHN · Madrid · Folio 66r", title:"La inspiración divina", text:"En su propia confesión, Joseph relató: 'Una noche se acostó a su lado, cuando de repente tuvo inspiración de Dios de que se retirase a buscarlo'. Era la madrugada que lo cambió todo." },
              { ref:"Medina, 1899", title:"El Auto de Fe", text:"El 30 de mayo de 1688, en un ostentoso Auto de Fe, Joseph Ximénez fue relajado en la hoguera. En toda la historia del Tribunal de Cartagena, fue el único eremita en recibir esa condena." },
            ].map((doc, i) => (
              <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:0.8, delay:i*0.1 }}
                className="p-8 rounded-2xl" style={{ background:"rgba(221,216,207,0.04)", border:"1px solid rgba(221,216,207,0.07)" }}>
                <p className="font-mono text-xs mb-6 tracking-widest" style={{ color:"#C1533B" }}>{doc.ref}</p>
                <h3 className="font-serif text-2xl mb-4" style={{ color:"#DDD8CF" }}>{doc.title}</h3>
                <p className="text-base leading-relaxed" style={{ color:"rgba(221,216,207,0.5)" }}>{doc.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="py-24 px-6" style={{ background:"rgba(193,83,59,0.06)", borderTop:"1px solid rgba(193,83,59,0.1)", borderBottom:"1px solid rgba(193,83,59,0.1)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n:"711", label:"Procesados en total por el Tribunal de Cartagena" },
            { n:"7", label:"Condenados por herejía formal en toda su historia" },
            { n:"1", label:"Único místico ermitaño quemado vivo" },
            { n:"350+", label:"Años después, su memoria resurge" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.7, delay:i*0.1 }}>
              <p className="font-serif font-bold leading-none mb-3" style={{ fontSize:"clamp(48px,8vw,96px)", color:"#C1533B" }}>{s.n}</p>
              <p className="text-sm leading-snug" style={{ color:"rgba(221,216,207,0.45)" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEGADO */}
      <section className="py-32 px-6 text-center">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.2 }} className="max-w-3xl mx-auto">
          <h2 className="font-serif mb-10 leading-tight" style={{ fontSize:"clamp(36px,6vw,80px)", color:"#DDD8CF" }}>
            La llama <em style={{ color:"#C1533B" }}>no se apagó</em>
          </h2>
          <p className="text-xl leading-relaxed" style={{ color:"rgba(221,216,207,0.5)" }}>
            350 años después, el pueblo de Ráquira y el Desierto de la Candelaria redescubren a Joseph Ximénez. Su historia se convierte en arte, en escultura, en conversación colectiva. El fuego que encendieron sus verdugos no destruyó su legado: lo iluminó.
          </p>
        </motion.div>
      </section>

      <footer className="py-10 text-center" style={{ background:"#060504" }}>
        <p className="text-sm mb-4" style={{ color:"rgba(221,216,207,0.18)" }}>Joseph Ximénez · 1632–1688 · Investigación: Patricia Enciso Patiño</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.4)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
