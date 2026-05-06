"use client";

import { motion } from "framer-motion";

export default function Act3() {
  const desertSteps = [
    {
      title: "El Desierto de la Candelaria",
      subtitle: "33 Años · La edad del sacrificio",
      text: "Llegó a este páramo buscando un paralelismo absoluto con Cristo. Inmerso en un aislamiento extremo, dejó atrás al soldado violento y al campesino errante, entregándose por completo al misticismo puro y a la contemplación divina."
    },
    {
      title: "Los 29 Cuadernos",
      subtitle: "La obra magna dictada",
      text: "Durante once años de silencio sepulcral, su única voz fue la tinta. Llenó folios enteros delineando meticulosamente el viaje del alma a través de las tres vías místicas: la Purgativa, la Iluminativa y la Unitiva."
    },
    {
      title: "La Herejía Suprema",
      subtitle: "La Vía Unitiva",
      text: "Al alcanzar la comunión directa con Dios, concluyó que la Iglesia, los sacerdotes y la confesión eran innecesarios. Esta convicción, nacida de su iluminación, fue su mayor epifanía, pero también su sentencia de muerte."
    }
  ];

  const inquisitionSteps = [
    {
      title: "La Envídia y la Denuncia",
      text: "Su sabiduría y aura mística despertaron la envidia clerical. El cura Agustín de Tovar lo denunció formalmente. El 10 de julio de 1676, el inquisidor Juan de Mier irrumpió en el desierto, arrancándolo de su santuario."
    },
    {
      title: "Doce Años en la Oscuridad",
      text: "Fue exhibido y trasladado encadenado por Sáchica y Santafé, hasta ser sepultado en las mazmorras secretas de Cartagena de Indias. Soportó más de una década de aislamiento, frío e interrogatorios del Tribunal Supremo."
    }
  ];

  return (
    <section id="retiro" className="bg-transparent relative z-20 w-full overflow-hidden">
      
      {/* 
        ========================================
        1. EL DESIERTO (Los 11 años de silencio)
        ========================================
      */}
      <div className="py-24 md:py-40 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#E8E2D2]/5">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="font-mono text-[#C1533B] text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-6">
            1665 — 1676 · El Retiro
          </span>
          <h2 className="font-serif text-[#E8E2D2] text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tight">
            Once años<br/>
            <em className="text-[#E8E2D2]/30 italic font-light">de silencio.</em>
          </h2>
        </motion.div>

        {/* Narrativa del Desierto (Timeline Serpenteante) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea central sutil */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C1533B]/20 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-24 md:space-y-32">
            {desertSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}
              >
                {/* Punto iluminado */}
                <div className="absolute left-[24px] md:left-1/2 w-3 h-3 rounded-full bg-[#C1533B] md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(193,83,59,0.8)]" />
                
                {/* Contenido */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div className={`${i % 2 !== 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <span className="font-mono text-[#C1533B] text-[10px] tracking-[0.3em] uppercase block mb-3">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl md:text-4xl text-[#E8E2D2] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#E8E2D2]/60 text-base md:text-xl leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </div>
                
                {/* Espaciador para centrar en Desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        ========================================
        2. EL MARTIRIO (La Inquisición y la Hoguera)
        ========================================
      */}
      <div id="hoguera" className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 py-32 overflow-hidden bg-transparent border-t border-[#C1533B]/5">
        
        {/* Atmósfera de Fuego (CSS Puro de alto rendimiento) */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-80 flex items-end justify-center">
          <div className="w-full h-[70vh] bg-gradient-to-t from-[#C1533B]/40 via-[#C1533B]/5 to-transparent animate-[pulse-fire_6s_infinite_alternate_ease-in-out]" />
          <div className="absolute bottom-[-10vh] w-[150vw] md:w-[80vw] h-[40vh] bg-[#C1533B]/20 blur-[100px] rounded-[100%]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto w-full"
        >
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent to-[#C1533B] mx-auto mb-10 md:mb-16 opacity-50" />
          
          <h2 className="font-serif text-[#E8E2D2] text-[clamp(3rem,8vw,6rem)] leading-[0.9] mb-16 tracking-tight">
            El Juicio y <br/>
            <em className="text-[#C1533B] italic drop-shadow-[0_0_20px_rgba(193,83,59,0.3)]">la Hoguera.</em>
          </h2>
          
          {/* Detalles Históricos de la Inquisición */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-[#100F0D]/50 p-8 md:p-12 border border-[#C1533B]/20 rounded-2xl backdrop-blur-sm mb-16">
            {inquisitionSteps.map((step, idx) => (
              <div key={idx}>
                <h3 className="font-serif text-xl md:text-2xl text-[#E8E2D2] mb-4 border-b border-[#C1533B]/30 pb-4 inline-block">{step.title}</h3>
                <p className="text-[#E8E2D2]/60 text-base md:text-lg font-light leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="py-8 border-y border-[#C1533B]/10 bg-[#C1533B]/[0.02]">
            <p className="font-serif italic text-[#E8E2D2] text-[clamp(1.5rem,4vw,2.5rem)] drop-shadow-[0_0_15px_rgba(232,226,210,0.2)]">
              "El único místico quemado vivo sin retractarse."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Keyframes de Fuego Optimizados */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-fire {
          0% { transform: scaleY(0.9); opacity: 0.6; }
          100% { transform: scaleY(1.1); opacity: 0.9; }
        }
      `}} />

    </section>
  );
}
