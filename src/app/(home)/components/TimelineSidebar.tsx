"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const demoSections = [
  { id: "inicio", label: "Inicio", date: "" },
  { id: "pasado", label: "El Pasado", date: "1632" },
  { id: "retiro", label: "El Retiro", date: "1665" },
  { id: "hoguera", label: "La Hoguera", date: "1688" },
  { id: "legado", label: "El Legado", date: "S.XXI" },
];

export const TimelineSidebar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // Ref para rastrear qué secciones están visibles en todo momento
    const visibleSections = new Set<string>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        
        if (id === "footer") {
          setIsFooterVisible(entry.isIntersecting);
          return;
        }

        if (entry.isIntersecting) {
          visibleSections.add(id);
        } else {
          visibleSections.delete(id);
        }
      });

      // Lógica de selección:
      // Queremos que la sección activa sea la "más avanzada" en la cronología 
      // de entre las que son visibles en el área central.
      const visibleArray = Array.from(visibleSections);
      if (visibleArray.length > 0) {
        const latestVisible = demoSections
          .filter(s => visibleSections.has(s.id))
          .pop(); // Toma el último en el orden del array demoSections
        
        if (latestVisible) {
          setActiveSection(latestVisible.id);
        }
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Detecta en el 50% central de la pantalla
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    demoSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    const footerElement = document.getElementById("footer");
    if (footerElement) observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeData = demoSections.find(s => s.id === activeSection) || demoSections[0];
  const isVisible = activeSection !== "inicio" && !isFooterVisible;

  return (
    <>
      {/* Desktop Sidebar (Izquierda, más visible, oculto en inicio) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-start gap-8 pointer-events-none"
          >
            {demoSections.slice(1).map((section) => {
              const isActive = activeSection === section.id;
              return (
                <div key={section.id} className="flex items-center gap-5 group pointer-events-auto cursor-pointer" onClick={() => scrollTo(section.id)}>
                  
                  {/* Linea vertical o punto */}
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <motion.div
                      animate={{ 
                        height: isActive ? "32px" : "12px", 
                        backgroundColor: isActive ? "#C1533B" : "rgba(232,226,210,0.3)"
                      }}
                      className="w-[3px] rounded-full transition-colors duration-500"
                    />
                  </div>

                  {/* Texto */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isActive ? 1 : 0.3, x: isActive ? 0 : -10 }}
                    className="flex flex-col"
                  >
                    <span className="text-sm font-mono tracking-widest uppercase font-bold transition-colors duration-300 group-hover:text-[#C1533B]" style={{ color: isActive ? "#C1533B" : "#E8E2D2" }}>
                      {section.date}
                    </span>
                    <span className="text-xs font-serif italic mt-1 transition-colors duration-300 group-hover:text-[#E8E2D2]" style={{ color: isActive ? "#E8E2D2" : "rgba(232,226,210,0.5)" }}>
                      {section.label}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden pointer-events-none w-full px-6 flex justify-center">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              style={{ 
                background: "rgba(16,15,13,0.95)", 
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(232,226,210,0.15)"
              }}
            >
              <span className="text-sm font-mono tracking-widest font-bold" style={{ color: "#C1533B" }}>
                {activeData.date}
              </span>
              <div className="w-px h-4" style={{ background: "rgba(232,226,210,0.3)" }} />
              <span className="text-sm font-serif italic font-medium" style={{ color: "#E8E2D2" }}>
                {activeData.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
