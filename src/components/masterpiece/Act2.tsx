"use client";

import { motion } from "framer-motion";

export default function Act2() {
  // Datos del timeline
  const timeline = [
    {
      year: "1632",
      location: "Guaro, Málaga",
      title: "De la tierra a las armas.",
      text: "Hijo de labradores, su destino parecía sellado. Sin embargo, cambió la quietud del campo por la pólvora. Diez años como soldado de la Armada Real lo arrastraron por los océanos, en una huida constante de sí mismo."
    },
    {
      year: "1660",
      location: "El Exilio",
      title: "Sangre en el río.",
      text: "Un rechazo, una navaja y el rostro cortado de una mujer. Perseguido por venganza, disparó en la madrugada y huyó para siempre. El Atlántico fue su único escudo hacia el Nuevo Reino de Granada."
    },
    {
      year: "1665",
      location: "Garzón, Huila",
      title: "Juana y la traición.",
      text: "El amor pareció darle tregua. Se casó con Juana y labraron la tierra durante dos años. Hasta que un viaje a Pasto reveló la infidelidad. Pero no hubo ira; hubo un silencio absoluto."
    }
  ];

  return (
    <section className="relative bg-[#050505] w-full">
      
      {/* 
        1. LA CRONOLOGÍA DEL CAOS (Mobile-First Vertical Flow)
        Reemplazamos el scroll horizontal defectuoso por un flujo vertical "Sticky"
        que es nativo, fluido y cero problemático en móviles.
      */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-40">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-20 md:mb-32 text-center md:text-left"
        >
          <h2 className="font-serif text-[#E8E2D2] text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] mb-4">
            El eco de <em className="text-[#C1533B] italic">la violencia.</em>
          </h2>
          <p className="text-[#E8E2D2]/50 text-lg max-w-xl font-light">
            Antes de ser santo, fue un hombre acorralado por sus propios demonios.
          </p>
        </motion.div>

        <div className="relative border-l border-[#C1533B]/20 ml-2 md:ml-6 space-y-24 md:space-y-40 pb-20">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-16">
              
              {/* Punto en la línea de tiempo */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#C1533B] shadow-[0_0_15px_rgba(193,83,59,0.8)]" />
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-6">
                  <span className="font-serif text-3xl md:text-5xl text-[#E8E2D2]/80">{item.year}</span>
                  <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C1533B]">
                    — {item.location}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-4xl text-[#E8E2D2] mb-6 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-[#E8E2D2]/60 text-base md:text-xl leading-relaxed max-w-2xl font-light">
                  {item.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        2. LA EPIFANÍA (Punto de quiebre visual)
        Un bloque de pantalla completa con oscuridad total para aislar la cita.
      */}
      <div className="relative min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center border-t border-[#100F0D]">
        
        {/* Glow de fondo para la revelación */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,241,234,0.03)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="mx-auto w-12 h-[1px] bg-[#C1533B]/50 mb-12" />
          
          <p className="font-accent text-[clamp(2rem,6vw,4.5rem)] text-[#E8E2D2] leading-[1.3] drop-shadow-[0_0_10px_rgba(244,241,234,0.1)]">
            "Una noche se acostó a su lado, cuando de repente tuvo inspiración de Dios de que se retirase a buscarlo."
          </p>
          
          <div className="mx-auto w-12 h-[1px] bg-[#C1533B]/50 mt-12 mb-8" />
          
          <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C1533B]/80">
            Cuarenta días en el monte · El silencio inicia
          </p>
        </motion.div>
      </div>

    </section>
  );
}
