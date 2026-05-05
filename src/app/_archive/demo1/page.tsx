"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Demo1() {
  return (
    <main className="min-h-screen font-sans" style={{ background: "#F4F1EA", color: "#2B2A29" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5"
        style={{ background: "rgba(244,241,234,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(43,42,41,0.08)" }}>
        <span className="font-serif italic text-2xl" style={{ color: "#C1533B" }}>J. Ximénez</span>
        <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase" style={{ color: "rgba(43,42,41,0.45)" }}>
          {["#origen|Origen", "#desierto|El Desierto", "#martirio|Martirio", "#legado|Legado"].map(s => {
            const [href, label] = s.split("|");
            return <a key={href} href={href} className="hover:text-[#C1533B] transition-colors duration-200">{label}</a>;
          })}
        </div>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#2B2A29" }}>← Maquetas</Link>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(43,42,41,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(43,42,41,1) 60px)" }} />
        <motion.div animate={{ scale:[1,1.12,1], opacity:[0.07,0.14,0.07] }} transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #C1533B 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="inline-block mb-8 px-5 py-2 rounded-full text-xs tracking-[0.35em] uppercase font-bold"
            style={{ background: "rgba(193,83,59,0.09)", color: "#C1533B" }}>
            Nueva Granada · 1632 — 1688
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="font-serif leading-[0.92] mb-8" style={{ fontSize: "clamp(72px,13vw,180px)", color: "#2B2A29" }}>
            Joseph<br /><em style={{ color: "#C1533B" }}>Ximénez</em>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: "rgba(43,42,41,0.62)" }}>
            Ermitaño, místico y escritor. El único eremita condenado a la hoguera por la Inquisición de Cartagena de Indias.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#origen" className="px-9 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5"
              style={{ background: "#C1533B", color: "#fff" }}>Descubrir su historia</a>
            <a href="#legado" className="px-9 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-300 hover:border-[#C1533B] hover:text-[#C1533B]"
              style={{ borderColor: "rgba(43,42,41,0.2)", color: "#2B2A29" }}>Su legado hoy</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(43,42,41,0.28)" }}>Bajar</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.8, repeat:Infinity }}
            className="w-px h-10" style={{ background: "#C1533B", opacity: 0.45 }} />
        </motion.div>
      </section>

      {/* ORIGEN */}
      <section id="origen" className="py-28 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-80px" }} variants={fadeUp} custom={0}>
            <span className="block text-xs tracking-[0.35em] uppercase mb-6 font-bold" style={{ color: "#C1533B" }}>01 — Origen</span>
            <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(40px,6vw,72px)", color:"#2B2A29" }}>
              De Málaga<br /><em>a las Indias</em>
            </h2>
            <p className="text-lg leading-relaxed mb-5" style={{ color:"rgba(43,42,41,0.7)" }}>
              Nacido en 1632 en Guaro, Málaga, Joseph Ximénez fue soldado durante diez años, recorriendo España y los mares. Una traición en tierras de Garzón quebró su mundo terrenal y encendió una llama espiritual que ya nadie pudo apagar.
            </p>
            <p className="text-lg leading-relaxed" style={{ color:"rgba(43,42,41,0.7)" }}>
              Con apenas 33 años —la edad de Cristo— sintió el llamado de retirarse al desierto. Dejó todo: la espada, el amor, la sociedad. Y comenzó a caminar hacia la Candelaria.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-80px" }} variants={fadeUp} custom={1} className="relative">
            <div className="w-full aspect-[3/4] rounded-3xl flex items-center justify-center overflow-hidden p-10"
              style={{ background:"linear-gradient(135deg,#E8E2D2 0%,#F4F1EA 100%)" }}>
              <div className="absolute inset-5 rounded-2xl border pointer-events-none" style={{ borderColor:"rgba(193,83,59,0.2)" }} />
              <div className="z-10 text-center">
                <p className="font-serif italic leading-snug" style={{ fontSize:"clamp(22px,2.8vw,34px)", color:"rgba(43,42,41,0.4)" }}>
                  "Una noche tuvo inspiración de Dios de que se retirase a buscarlo."
                </p>
                <p className="mt-8 text-xs tracking-[0.35em] uppercase" style={{ color:"#C1533B" }}>Proceso Inquisitorial, 1677</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-36 h-36 rounded-full -z-10" style={{ background:"rgba(193,83,59,0.1)" }} />
          </motion.div>
        </div>
      </section>

      {/* DESIERTO */}
      <section id="desierto" className="py-28 px-6" style={{ background:"#F4F1EA" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} custom={0} className="text-center mb-20">
            <span className="block text-xs tracking-[0.35em] uppercase mb-6 font-bold" style={{ color:"#C1533B" }}>02 — El Desierto de la Candelaria</span>
            <h2 className="font-serif leading-tight" style={{ fontSize:"clamp(40px,7vw,88px)", color:"#2B2A29" }}>Once años de <em>silencio</em></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n:"29", label:"Cuadernos escritos", text:"Meditaciones espirituales que él afirmaba eran dictadas por Dios mismo. Un corpus místico sin precedentes en la Nueva Granada colonial." },
              { n:"11", label:"Años en el desierto", text:"De 1665 a 1676. Vivió en una choza de madera, alimentándose de raíces y lo que los frailes del convento vecino le obsequiaban." },
              { n:"1688", label:"Fin de su historia", text:"La Inquisición tardó doce años en encontrarlo, juzgarlo y condenarlo. Nunca se retractó de ninguna de sus páginas escritas." },
            ].map((card, i) => (
              <motion.div key={card.n} initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} custom={i}
                className="p-10 rounded-3xl" style={{ background:"#ffffff" }}>
                <p className="font-serif font-bold leading-none mb-3" style={{ fontSize:"clamp(56px,8vw,96px)", color:"#C1533B" }}>{card.n}</p>
                <p className="font-bold text-xs tracking-[0.35em] uppercase mb-5" style={{ color:"#2B2A29" }}>{card.label}</p>
                <p className="text-base leading-relaxed" style={{ color:"rgba(43,42,41,0.65)" }}>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARTIRIO */}
      <section id="martirio" className="py-28 px-6" style={{ background:"#2B2A29" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} custom={0} className="relative order-2 md:order-1">
            <div className="w-full aspect-square rounded-3xl flex items-center justify-center overflow-hidden"
              style={{ background:"rgba(244,241,234,0.04)", border:"1px solid rgba(244,241,234,0.07)" }}>
              <motion.div animate={{ opacity:[0.2,0.5,0.2] }} transition={{ duration:4, repeat:Infinity }}
                className="absolute inset-0" style={{ background:"radial-gradient(circle,rgba(193,83,59,0.35) 0%,transparent 70%)" }} />
              <p className="font-serif italic text-center z-10 px-10 leading-tight select-none"
                style={{ fontSize:"clamp(32px,5vw,60px)", color:"rgba(244,241,234,0.18)" }}>30 · V · 1688</p>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border pointer-events-none"
              style={{ borderColor:"rgba(193,83,59,0.2)" }} />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} custom={1} className="order-1 md:order-2">
            <span className="block text-xs tracking-[0.35em] uppercase mb-6 font-bold" style={{ color:"#C1533B" }}>03 — El Martirio</span>
            <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(40px,6vw,72px)", color:"#F4F1EA" }}>
              La hoguera<br /><em style={{ color:"#C1533B" }}>de Cartagena</em>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color:"rgba(244,241,234,0.58)" }}>
              El 30 de mayo de 1688, en un gran Auto de Fe, Joseph Ximénez fue quemado vivo en Cartagena de Indias. Fue el único místico, ermitaño y escritor condenado a la hoguera por el Tribunal de Cartagena en toda su historia.
            </p>
            <p className="text-lg leading-relaxed" style={{ color:"rgba(244,241,234,0.58)" }}>
              Doce años de prisión secreta no doblegaron su convicción. Hasta el final, defendió que sus escritos eran mandato divino.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEGADO */}
      <section id="legado" className="py-28 px-6" style={{ background:"#F4F1EA" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} custom={0}>
            <span className="block text-xs tracking-[0.35em] uppercase mb-6 font-bold" style={{ color:"#C1533B" }}>04 — Legado</span>
            <h2 className="font-serif mb-10 leading-tight" style={{ fontSize:"clamp(40px,7vw,88px)", color:"#2B2A29" }}>Una memoria <em>viva</em></h2>
            <p className="text-xl leading-relaxed mb-12" style={{ color:"rgba(43,42,41,0.65)" }}>
              Hoy, artistas como Eduardo Rodríguez en Ráquira le rinden homenaje con esculturas que devuelven su dignidad. Su figura resuena como símbolo del pensamiento libre, de la fe que trasciende los dogmas y de la memoria que los siglos no pueden borrar.
            </p>
            <blockquote className="font-serif italic leading-snug" style={{ fontSize:"clamp(24px,3.5vw,44px)", color:"#C1533B" }}>
              "Un espíritu libre, en el borde que separa a Dios de los hombres."
            </blockquote>
            <p className="mt-5 text-xs tracking-[0.35em] uppercase" style={{ color:"rgba(43,42,41,0.32)" }}>— Patricia Enciso Patiño, historiadora</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-14 px-6 text-center" style={{ background:"#2B2A29" }}>
        <p className="font-serif italic text-2xl mb-2" style={{ color:"rgba(244,241,234,0.45)" }}>Joseph Ximénez · 1632–1688</p>
        <p className="text-sm mb-8" style={{ color:"rgba(244,241,234,0.22)" }}>Desierto de la Candelaria · Boyacá, Colombia</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.5)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
