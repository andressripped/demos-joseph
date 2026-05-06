"use client";

import { DemoHero } from "@/components/demostracion/DemoHero";
import { DemoOrigen } from "@/components/demostracion/DemoOrigen";
import { DemoCita } from "@/components/demostracion/DemoCita";
import { DemoDesierto } from "@/components/demostracion/DemoDesierto";
import { DemoMartirio } from "@/components/demostracion/DemoMartirio";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function DemostracionPage() {
  return (
    <main className="font-sans overflow-x-hidden" style={{ background: "#100F0D", color: "#DDD8CF" }}>
      <Navbar />
      
      <div className="flex flex-col min-h-screen">
        <DemoHero />
        <DemoOrigen />
        <DemoCita />
        <DemoDesierto />
        <DemoMartirio />
      </div>
      
      <Footer />
    </main>
  );
}
