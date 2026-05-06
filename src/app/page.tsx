"use client";

import { useEffect } from "react";
import Act1 from "@/components/masterpiece/Act1";
import Act2 from "@/components/masterpiece/Act2";
import Act3 from "@/components/masterpiece/Act3";
import Act4 from "@/components/masterpiece/Act4";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoSidebar } from "@/components/layout/DemoSidebar";

export default function HomePage() {
  useEffect(() => {
    // Forzar scroll al inicio al cargar la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen font-sans overflow-x-hidden selection:bg-[#C1533B] selection:text-[#100F0D]" style={{ background: "#100F0D", color: "#DDD8CF" }}>
      
      <Navbar />
      <DemoSidebar />

      {/* Actos de la Narrativa */}
      <Act1 />
      <Act2 />
      <Act3 />
      <Act4 />
      
      <Footer />

    </main>
  );
}
