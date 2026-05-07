"use client";

import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <main className="font-sans flex flex-col min-h-[100dvh] pt-[76px]" style={{ background:"#F4F1EA", color:"#2B2A29" }}>
        
        <div className="w-full flex-1 flex items-center justify-center">
          <p className="text-xl font-serif text-[#2B2A29]/50">El contenido del blog irá aquí</p>
        </div>

      </main>

      <Footer />
    </>
  );
}
