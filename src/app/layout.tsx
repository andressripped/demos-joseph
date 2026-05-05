import type { Metadata } from "next";
import { Playfair_Display, Outfit, Courgette } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const courgette = Courgette({
  weight: "400",
  variable: "--font-courgette",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Ximénez | El Ermitaño",
  description: "Homenaje a Joseph Ximénez, místico y mártir del Desierto de la Candelaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${outfit.variable} ${courgette.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
