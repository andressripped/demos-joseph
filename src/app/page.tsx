"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionOrigen } from "@/components/sections/SectionOrigen";
import { SectionCita } from "@/components/sections/SectionCita";
import { SectionDesierto } from "@/components/sections/SectionDesierto";
import { SectionMartirio } from "@/components/sections/SectionMartirio";

export default function HomePage() {
  return (
    <main className="font-sans" style={{ background: "#100F0D", color: "#DDD8CF" }}>
      <Navbar />
      <Hero />
      <SectionOrigen />
      <SectionCita />
      <SectionDesierto />
      <SectionMartirio />
      <Footer />
    </main>
  );
}
