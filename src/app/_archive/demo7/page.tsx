"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const facts = [
  { q: "¿Por qué lo condenaron?", a: "Porque afirmaba que sus escritos eran dictados por Dios directamente, sin necesidad de sacerdotes ni sacramentos. Para la Inquisición, eso era herejía dogmatizante en su grado más puro." },
  { q: "¿Qué decían sus 29 cuadernos?", a: "Meditaciones sobre las vías mística purgativa, iluminativa y unitiva, siguiendo a Santa Teresa de Jesús y San Juan de la Cruz, pero llevadas a un extremo autónomo y radicalmente personal." },
  { q: "¿Quién lo denunció?", a: "El cura doctrinero de Oicatá, Agustín de Tovar, quien visitó su choza y leyó en sus cuadernos proposiciones que consideró heréticas. Quería evitar que enseñara 'sus errores' a quienes lo buscaban." },
  { q: "¿Se retractó alguna vez?", a: "No. Después de doce años de cárcel secreta en Cartagena, Joseph Ximénez se negó a negar cualquiera de sus palabras. Murió en la hoguera convicto de sus ideas y convencido de su misión." },
  { q: "¿Por qué importa hoy?", a: "Su historia representa el costo eterno del pensamiento libre, la persecución de la espiritualidad auténtica y la violencia institucional contra quien se atreve a ser diferente. Un arquetipo universal." },
];

export default function Demo7() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="font-sans" style={{ background:"#EDE8DE", color:"#1E1D1C" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background:"rgba(237,232,222,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(30,29,28,0.08)" }}>
        <span className="font-serif italic text-xl" style={{ color:"#C1533B" }}>J. Ximénez</span>
        <Link href="/" className="text-xs tracking-widest uppercase opacity-40 hover:opacity-80 transition-opacity" style={{ color:"#1E1D1C" }}>← Maquetas</Link>
      </nav>

      {/* HERO asimétrico — overflow-hidden previene scroll horizontal */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background:"#2B2A29" }}>
        {/* Texto gigante de fondo — clamp controla el tamaño y clip evita overflow */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <p className="font-serif font-bold whitespace-nowrap" style={{ fontSize:"clamp(80px,18vw,260px)", color:"rgba(244,241,234,0.04)", lineHeight:1, transform:"rotate(-7deg)" }}>
            ERMITAÑO
          </p>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-20 pb-24 pt-32 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
              className="text-xs tracking-[0.5em] uppercase mb-8" style={{ color:"rgba(193,83,59,0.9)" }}>
              Homenaje Histórico
            </motion.p>
            <motion.h1 initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2, ease:"easeOut" }}
              className="font-serif leading-none">
              <span className="block" style={{ fontSize:"clamp(56px,11vw,160px)", color:"#F4F1EA" }}>Joseph</span>
              <span className="block italic" style={{ fontSize:"clamp(48px,9vw,130px)", color:"#C1533B", marginTop:"-0.05em" }}>Ximénez</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:1, delay:0.5 }} className="pb-2">
            <p className="text-xl leading-relaxed font-light mb-10" style={{ color:"rgba(244,241,234,0.5)" }}>
              El único místico ermitaño y escritor condenado a la hoguera por la Inquisición de Cartagena de Indias.
            </p>
            <div className="h-px w-full mb-8" style={{ background:"rgba(193,83,59,0.3)" }} />
            <div className="flex gap-10">
              {[{n:"1632",l:"Nacimiento"},{n:"1688",l:"Martirio"},{n:"29",l:"Cuadernos"}].map(s => (
                <div key={s.n}>
                  <p className="font-serif text-4xl" style={{ color:"#C1533B" }}>{s.n}</p>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ color:"rgba(244,241,234,0.28)" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bloques de color — historia en 3 actos */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { color:"#354F42", title:"La llamada", text:"A los 33 años, Joseph sintió el llamado divino y abandonó Garzón. Caminó hacia el Desierto de la Candelaria como lo hiciera Jesús al desierto. Once años de soledad y escritura intensa." },
            { color:"#C1533B", title:"El proceso", text:"El inquisidor Juan de Mier firmó la orden de prisión el 10 de julio de 1676. Joseph fue encadenado, trasladado a Sáchica, Villa de Leyva, Tunja y finalmente Cartagena." },
            { color:"#7A3B22", title:"La hoguera", text:"El 30 de mayo de 1688, en el gran Auto de Fe de Cartagena de Indias, Joseph Ximénez fue quemado vivo. El único de su clase. El único que no cedió." },
          ].map((b, i) => (
            <motion.div key={i} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ duration:0.8, delay:i*0.12 }}
              className="p-12 md:p-16 min-h-[440px] flex flex-col justify-end" style={{ background:b.color }}>
              <h3 className="font-serif italic mb-5 leading-tight" style={{ fontSize:"clamp(28px,4vw,48px)", color:"rgba(244,241,234,0.92)" }}>{b.title}</h3>
              <p className="text-base leading-relaxed" style={{ color:"rgba(244,241,234,0.6)" }}>{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ interactivo */}
      <section className="py-28 px-6 md:px-20" style={{ background:"#EDE8DE" }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }}
            className="font-serif mb-16 leading-tight" style={{ fontSize:"clamp(40px,6vw,72px)", color:"#1E1D1C" }}>
            Lo que <em style={{ color:"#C1533B" }}>nadie<br />te contó</em>
          </motion.h2>

          <div className="space-y-3">
            {facts.map((f, i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.07 }}
                className="rounded-2xl overflow-hidden" style={{ background:"#fff" }}>
                <button id={`faq-${i}`} onClick={() => setOpen(open===i ? null : i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left gap-4 cursor-pointer">
                  <span className="font-serif text-lg md:text-xl leading-snug" style={{ color:"#1E1D1C" }}>{f.q}</span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                    style={{ background:open===i?"#C1533B":"rgba(30,29,28,0.07)", color:open===i?"#fff":"#1E1D1C" }}>
                    {open===i ? "−" : "+"}
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: open===i ? "300px" : "0px", opacity: open===i ? 1 : 0 }}>
                  <p className="px-8 pb-7 text-base leading-relaxed" style={{ color:"rgba(30,29,28,0.62)" }}>{f.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legado */}
      <section className="py-28 px-8 md:px-20 text-center" style={{ background:"#1E1D1C" }}>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.2 }} className="max-w-3xl mx-auto">
          <h2 className="font-serif mb-8 leading-tight" style={{ fontSize:"clamp(36px,5vw,64px)", color:"#F4F1EA" }}>Ráquira lo recuerda</h2>
          <p className="text-xl leading-relaxed mb-10" style={{ color:"rgba(244,241,234,0.5)" }}>
            El artista Eduardo Rodríguez, vecino de Ráquira, esculpió su figura como acto de reivindicación. Su imagen tridimensional representa al místico que el tiempo intentó borrar y que 350 años después sigue siendo necesario recordar.
          </p>
          <div className="h-px w-24 mx-auto mb-8" style={{ background:"#C1533B" }} />
          <p className="font-serif italic text-2xl" style={{ color:"rgba(193,83,59,0.75)" }}>Desierto de la Candelaria · Boyacá, Colombia</p>
        </motion.div>
      </section>

      <footer className="py-10 text-center" style={{ background:"#0E0C0B" }}>
        <p className="text-sm mb-6" style={{ color:"rgba(244,241,234,0.18)" }}>Joseph Ximénez · 1632–1688 · Investigación: Patricia Enciso Patiño</p>
        <Link href="/" className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color:"rgba(193,83,59,0.45)" }}>← Ver todas las maquetas</Link>
      </footer>
    </main>
  );
}
