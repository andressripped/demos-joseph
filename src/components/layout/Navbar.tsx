"use client";

import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
      style={{ background: "rgba(16,15,13,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(221,216,207,0.06)" }}>
      <span className="font-serif italic text-xl" style={{ color: "#C1533B" }}>J. Ximénez</span>
      <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase" style={{ color: "rgba(221,216,207,0.4)" }}>
        <a href="#origen" className="hover:text-[#C1533B] transition-colors">Origen</a>
        <a href="#desierto" className="hover:text-[#C1533B] transition-colors">El Desierto</a>
        <a href="#martirio" className="hover:text-[#C1533B] transition-colors">Martirio</a>
      </div>
    </nav>
  );
};
