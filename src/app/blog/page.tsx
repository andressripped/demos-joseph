"use client";

import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { InteractiveMap } from "./components/InteractiveMap";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <main className="font-sans flex flex-col min-h-[100dvh] pt-[76px]" style={{ background:"#F4F1EA", color:"#2B2A29" }}>
        
        {/* MAPA INTERACTIVO (INTRODUCCIÓN) */}
        <div className="w-full relative z-20 flex-1" style={{ background: "#100F0D" }}>
          <InteractiveMap />
        </div>

      </main>

      <Footer />
    </>
  );
}
