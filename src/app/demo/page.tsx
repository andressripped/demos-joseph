"use client";

import { useEffect } from "react";
import Act1 from "@/components/masterpiece/Act1";
import Act2 from "@/components/masterpiece/Act2";
import Act3 from "@/components/masterpiece/Act3";
import Act4 from "@/components/masterpiece/Act4";

export default function DemoMasterpiece() {
  useEffect(() => {
    // Forzar scroll al inicio al cargar la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#050505] text-sand selection:bg-terracotta selection:text-colonial min-h-screen font-sans overflow-x-hidden">
      
      {/* Navbar Minimalista Absoluta */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference pointer-events-none">
        <div className="flex flex-col">
          <span className="font-serif italic text-lg md:text-xl text-sand tracking-widest drop-shadow-md">J. Ximénez</span>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mt-1 drop-shadow-md">1632 — 1688</span>
        </div>
        <div className="w-8 h-[1px] bg-sand/50 mt-4 hidden md:block"></div>
      </nav>

      {/* Actos de la Narrativa */}
      <Act1 />
      <Act2 />
      <Act3 />
      <Act4 />
      
    </main>
  );
}
