"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

// Datos históricos de los ermitaños/místicos
const CARDS = [
  {
    id: 1,
    name: "San Antonio Abad",
    title: "El Padre del Monacato",
    dates: "251 — 356 d.C.",
    location: "Desierto de Egipto",
    description: "Considerado el iniciador de la vida eremítica. Vendió todas sus posesiones, entregó el dinero a los pobres y se retiró a la soledad del desierto. Allí soportó terribles tentaciones espirituales y físicas, marcando el camino del ascetismo puro que inspiraría a incontables místicos, incluido Joseph Ximénez.",
  },
  {
    id: 2,
    name: "San Jerónimo Penitente",
    title: "El Erudito del Desierto",
    dates: "347 — 420 d.C.",
    location: "Desierto de Calcis, Siria",
    description: "Abandonó la civilización para vivir años de penitencia extrema en una cueva. Luchó contra sus propias pasiones golpeándose el pecho con una piedra. En su silencio y soledad, tradujo las Sagradas Escrituras al latín (La Vulgata), demostrando que el aislamiento profundo puede producir la mayor obra de una vida.",
  },
  {
    id: 3,
    name: "San Francisco de Asís",
    title: "El Místico Estigmatizado",
    dates: "1182 — 1226",
    location: "Monte Alvernia, Italia",
    description: "Aunque fundó una orden itinerante, Francisco buscaba incesantemente el silencio en lugares remotos. Su clímax místico ocurrió durante su retiro en el Monte Alvernia, donde tras días de contemplación divina absoluta, alcanzó tal unión con Dios que recibió los estigmas de la Pasión en su propio cuerpo.",
  }
];

export default function CardsDemoPage() {
  const [cards, setCards] = useState(CARDS);

  // Función para pasar la carta al final del mazo
  const handleNext = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      const frontCard = newArray.shift(); // Saca el primero
      if (frontCard) newArray.push(frontCard); // Lo pone al final
      return newArray;
    });
  };

  return (
    <main className="min-h-screen font-sans overflow-hidden selection:bg-[#C1533B] selection:text-[#100F0D] flex flex-col" style={{ background: "#100F0D", color: "#DDD8CF" }}>
      
      <Navbar />

      {/* Atmósfera similar a /demo */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#DDD8CF 1px,transparent 1px)", backgroundSize: "28px 28px" }} 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle,#C1533B 0%,transparent 70%)" }} 
      />

      {/* Contenedor principal de las cartas */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pt-20">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="font-mono text-[#C1533B] text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
            Paralelismos Místicos
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#E8E2D2]">
            Ermitaños de la Historia
          </h1>
        </div>

        {/* Galería Stack */}
        <div className="relative w-full max-w-sm md:max-w-md h-[450px] md:h-[500px] perspective-[1000px]">
          <AnimatePresence>
            {cards.map((card, index) => {
              // Calculamos estilos basados en la posición de la carta en el array
              const isFront = index === 0;
              const scale = 1 - index * 0.05; // 1, 0.95, 0.90
              const yOffset = index * -30; // 0, -30px, -60px (Efecto de cascada hacia atrás/arriba)
              const zIndex = cards.length - index; // El primero (0) tiene el z-index más alto
              const opacity = 1 - index * 0.25; // 1, 0.75, 0.50

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 100 }}
                  animate={{
                    opacity: opacity,
                    scale: scale,
                    y: yOffset,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className={`absolute inset-0 bg-[#0A0908] border border-[#E8E2D2]/10 rounded-3xl p-8 md:p-10 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${isFront ? 'cursor-default' : 'cursor-pointer pointer-events-none'}`}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {/* Brillo interno de la carta */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#C1533B]/5 to-transparent rounded-t-3xl pointer-events-none" />

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="font-mono text-[#C1533B] text-[10px] tracking-widest uppercase mb-6">
                      {card.dates} · {card.location}
                    </span>
                    
                    <h2 className="font-serif text-3xl md:text-4xl text-[#E8E2D2] leading-tight mb-2">
                      {card.name}
                    </h2>
                    
                    <p className="font-serif italic text-[#E8E2D2]/50 text-lg md:text-xl mb-6">
                      {card.title}
                    </p>
                    
                    <div className="w-12 h-[1px] bg-[#C1533B]/40 mb-6" />
                    
                    <p className="text-[#E8E2D2]/70 font-light text-sm md:text-base leading-relaxed overflow-y-auto pr-2 custom-scrollbar">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="mt-16 flex items-center gap-6">
          <button 
            onClick={handleNext}
            className="flex items-center gap-3 bg-transparent border border-[#C1533B]/30 hover:bg-[#C1533B]/10 text-[#E8E2D2] px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
          >
            Siguiente Ermitaño
            <ChevronRight size={16} className="text-[#C1533B] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </main>
  );
}
