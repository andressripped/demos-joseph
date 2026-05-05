"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center" style={{ background: "#0D0C0A", borderTop: "1px solid rgba(193,83,59,0.1)" }}>
      <p className="font-serif italic text-3xl mb-3" style={{ color: "rgba(193,83,59,0.55)" }}>Joseph Ximénez</p>
      <p className="text-sm mb-4" style={{ color: "rgba(221,216,207,0.22)" }}>Desierto de la Candelaria · Boyacá, Colombia</p>
      <p className="text-xs opacity-20">© 1688–2026 Memoria Histórica</p>
    </footer>
  );
};
