"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "inicio", label: "Inicio", date: "1665" },
  { id: "origen", label: "Origen", date: "1632" },
  { id: "cita", label: "La Llamada", date: "1677" },
  { id: "desierto", label: "Desierto", date: "1665-1676" },
  { id: "martirio", label: "La Hoguera", date: "1688" },
];

export const HistorySidebar = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeData = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-6 pointer-events-none">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          return (
            <div key={section.id} className="flex items-center gap-4 group pointer-events-auto cursor-pointer" onClick={() => scrollTo(section.id)}>
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 10 }}
                className="text-xs tracking-widest font-mono uppercase"
                style={{ color: "rgba(221,216,207,0.6)" }}
              >
                {section.date || section.label}
              </motion.span>
              
              <div className="relative flex items-center justify-center w-4 h-4">
                <motion.div
                  animate={{ 
                    height: isActive ? "24px" : "6px", 
                    backgroundColor: isActive ? "#C1533B" : "rgba(221,216,207,0.15)"
                  }}
                  className="w-[2px] rounded-full transition-colors duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Floating Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden pointer-events-none w-full px-6 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            style={{ 
              background: "rgba(16,15,13,0.85)", 
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(221,216,207,0.08)"
            }}
            onClick={() => {
              // On mobile, clicking it could open a menu or scroll to next. For now, it's just an indicator.
            }}
          >
            <span className="text-xs font-mono tracking-widest" style={{ color: "#C1533B" }}>
              {activeData.date}
            </span>
            <div className="w-px h-3" style={{ background: "rgba(221,216,207,0.2)" }} />
            <span className="text-sm font-serif italic" style={{ color: "#DDD8CF" }}>
              {activeData.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};
