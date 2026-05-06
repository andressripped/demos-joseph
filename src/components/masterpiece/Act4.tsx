"use client";

import { motion } from "framer-motion";

export default function Act4() {
  return (
    <section className="relative z-30 bg-[#050505] text-[#E8E2D2] pt-32 pb-12 overflow-hidden border-t border-[#C1533B]/10">
      
      {/* Luz tenue de fondo para diferenciar la época */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(232,226,210,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ENCABEZADO DEL LEGADO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="font-mono text-[#E8E2D2]/30 text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
            El Legado · Siglo XXI
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-tight text-[#E8E2D2]">
            La memoria <br/>
            <em className="text-[#C1533B] italic drop-shadow-[0_0_15px_rgba(193,83,59,0.2)]">rescatada.</em>
          </h2>
        </motion.div>

        {/* LA ESCULTURA & EL ARTE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-32 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl mb-6 text-[#E8E2D2]">El Rostro del Ermitaño</h3>
            <p className="text-lg md:text-xl font-light leading-relaxed text-[#E8E2D2]/60 mb-8">
              Una historia que se negó a ser ceniza. Hoy, el artista y humanista Eduardo Rodríguez, desde Ráquira, ha esculpido la memoria tridimensional de Joseph, reivindicando su figura como místico y mártir del desierto.
            </p>
            <div className="w-12 h-[1px] bg-[#C1533B]/50" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="aspect-[4/3] bg-[#100F0D] border border-[#E8E2D2]/5 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden group shadow-2xl"
          >
            {/* Espacio para la imagen de la escultura real */}
            <p className="font-mono text-[#C1533B]/40 text-xs tracking-widest uppercase relative z-10">
              [ Escultura de Eduardo Rodríguez ]
            </p>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C1533B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
          </motion.div>
        </div>

        {/* ESCALABILIDAD: EL LIBRO Y EVENTOS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#0A0A0A] border border-[#C1533B]/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl"
        >
          {/* Brillo sutil detrás del libro */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C1533B]/5 blur-[80px] pointer-events-none rounded-full" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <span className="font-mono text-[#C1533B] text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-4">
              Investigación Histórica
            </span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 text-[#E8E2D2]">Del desierto a la hoguera</h3>
            <p className="font-light text-[#E8E2D2]/50 mb-10 leading-relaxed text-base md:text-lg">
              La exhaustiva investigación de Patricia Enciso Patiño que desentierra los folios originales del Archivo Histórico Nacional de Madrid, trayendo a la luz la verdad oculta del ermitaño.
            </p>
            
            {/* Botón preparado para E-Commerce, sutil pero llamativo */}
            <button className="bg-transparent border border-[#C1533B]/40 hover:bg-[#C1533B]/10 text-[#E8E2D2] px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300">
              Adquirir el Libro
            </button>
          </div>

          <div className="w-full md:w-[280px] shrink-0 aspect-[3/4] bg-[#050505] border border-[#E8E2D2]/10 rounded-lg flex items-center justify-center relative shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 group cursor-pointer overflow-hidden">
            {/* Espacio para la portada del libro */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#C1533B]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="font-serif italic text-2xl text-[#E8E2D2]/20 -rotate-90 origin-center tracking-widest group-hover:text-[#E8E2D2]/40 transition-colors duration-500">
              El Libro
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
