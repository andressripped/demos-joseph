import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joseph Ximénez — Homenaje · Maquetas",
  description: "Selección de maquetas de landing page para el homenaje a Joseph Ximénez, ermitaño del Desierto de la Candelaria.",
};

const demos = [
  {
    id: 1,
    title: "Colonial Clásico",
    description: "Tipografía elegante, fondo pergamino, secciones bien definidas con estadísticas y citas históricas.",
    bg: "#F4F1EA",
    fg: "#2B2A29",
    accent: "#C1533B",
    tag: "Elegante",
  },
  {
    id: 2,
    title: "Místico Oscuro",
    description: "Hero sticky con parallax, glow animado, secciones en fondo negro con alta dramaturgia visual.",
    bg: "#100F0D",
    fg: "#DDD8CF",
    accent: "#C1533B",
    tag: "Oscuro",
  },
  {
    id: 3,
    title: "Capítulos Interactivos",
    description: "Navegación entre 5 capítulos históricos mediante tabs. Layout asimétrico tipo museo digital.",
    bg: "#2B2A29",
    fg: "#F4F1EA",
    accent: "#C1533B",
    tag: "Interactivo",
  },
  {
    id: 4,
    title: "Cronología",
    description: "Línea de tiempo vertical con todos los hitos de su vida. Hero tipográfico de alto impacto.",
    bg: "#1E1D1C",
    fg: "#F4F1EA",
    accent: "#C1533B",
    tag: "Narrativo",
  },
  {
    id: 5,
    title: "Paneles Cinematográficos",
    description: "Secciones fullscreen de alto contraste al estilo cine. Hero con texto enorme y transparente.",
    bg: "#0E0C0B",
    fg: "#F4F1EA",
    accent: "#C1533B",
    tag: "Cinematográfico",
  },
  {
    id: 6,
    title: "Poesía Tipográfica",
    description: "Tipografía a escala máxima, versos que cuentan la historia sin ilustraciones. Datos biográficos en tabla elegante.",
    bg: "#F9F6EF",
    fg: "#1E1D1C",
    accent: "#C1533B",
    tag: "Minimalista",
  },
  {
    id: 7,
    title: "FAQ Expandible",
    description: "Hero asimétrico con texto rotado. Bloques de color para las etapas. Preguntas históricas expandibles.",
    bg: "#EDE8DE",
    fg: "#1E1D1C",
    accent: "#C1533B",
    tag: "Moderno",
  },
  {
    id: 8,
    title: "Archivo Documental",
    description: "Carta manuscrita animada como hero. Secciones con referencias de archivo histórico y cifras del Tribunal.",
    bg: "#0A0908",
    fg: "#DDD8CF",
    accent: "#C1533B",
    tag: "Documental",
  },
  {
    id: 9,
    title: "Bento Grid",
    description: "Grid estilo Bento con tarjetas de distintos tamaños. Hero limpio y línea de vida en modo oscuro.",
    bg: "#F0EDE5",
    fg: "#1E1D1C",
    accent: "#C1533B",
    tag: "Contemporáneo",
  },
  {
    id: 10,
    title: "Hero Parallax Premium",
    description: "Hero con parallax real, transición al blanco, sección del desierto con cuaderno animado y CTA de legado.",
    bg: "#1E1D1C",
    fg: "#F4F1EA",
    accent: "#C1533B",
    tag: "Premium",
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: "#0E0C0B", color: "#F4F1EA" }}
    >
      {/* Header */}
      <header className="pt-20 pb-12 px-6 md:px-16 text-center border-b" style={{ borderColor: "rgba(244,241,234,0.06)" }}>
        <p className="text-xs tracking-[0.6em] uppercase mb-6" style={{ color: "rgba(193,83,59,0.8)" }}>
          Homenaje · Maquetas para el cliente
        </p>
        <h1 className="font-serif italic text-6xl md:text-8xl mb-4" style={{ color: "#F4F1EA" }}>
          Joseph Ximénez
        </h1>
        <p className="text-lg font-light max-w-xl mx-auto" style={{ color: "rgba(244,241,234,0.45)" }}>
          10 maquetas de landing page. Cada una con un concepto visual distinto para presentar al cliente.
        </p>
      </header>

      {/* Grid de demos */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.id}
              href={`/demo${demo.id}`}
              id={`demo-link-${demo.id}`}
              className="group block rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Tarjeta de preview */}
              <div
                className="h-52 flex items-center justify-center relative overflow-hidden"
                style={{ background: demo.bg }}
              >
                {/* Decoración de fondo */}
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${demo.accent}55 0%, transparent 70%)`,
                  }}
                />
                <div className="z-10 text-center px-6">
                  <p
                    className="font-serif italic text-3xl md:text-4xl leading-tight"
                    style={{ color: demo.fg }}
                  >
                    {demo.title}
                  </p>
                  <p
                    className="mt-3 text-xs tracking-widest uppercase font-bold"
                    style={{ color: demo.accent }}
                  >
                    {demo.tag}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div
                className="p-6"
                style={{ background: "rgba(244,241,234,0.04)", borderTop: "1px solid rgba(244,241,234,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs" style={{ color: "rgba(193,83,59,0.7)" }}>
                    /demo{demo.id}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(193,83,59,0.1)", color: "#C1533B" }}
                  >
                    {demo.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(244,241,234,0.45)" }}>
                  {demo.description}
                </p>
                <div
                  className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide transition-all duration-300 group-hover:gap-4"
                  style={{ color: "#C1533B" }}
                >
                  <span>Ver maqueta</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-xs border-t" style={{ borderColor: "rgba(244,241,234,0.06)", color: "rgba(244,241,234,0.2)" }}>
        <p>Homenaje a Joseph Ximénez · Desierto de la Candelaria, Boyacá, Colombia</p>
      </footer>
    </main>
  );
}
