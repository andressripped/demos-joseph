"use client";

import React from "react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { CardCarousel } from "./components/CardCarousel";
import { ArtShowcase } from "./components/ArtShowcase";

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen font-sans overflow-x-hidden selection:bg-[#C1533B] selection:text-[#100F0D] flex flex-col" style={{ background: "#100F0D", color: "#DDD8CF" }}>
        <div className="w-full pt-20 flex flex-col">
          <CardCarousel />
        </div>
        <ArtShowcase />
        <Footer />
      </main>
    </>
  );
}
