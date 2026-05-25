import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

export const metadata: Metadata = {
  title: "Overlay Heaven ✨ — Kawaii Desktop Overlays & Aesthetic Packs",
  description:
    "Free kawaii desktop overlays, animated mascots, OBS stream packs, and cozy widgets. Download aesthetic desktop pets and overlays for your perfect setup!",
  keywords: [
    "kawaii overlays",
    "desktop pets",
    "OBS overlays",
    "aesthetic desktop",
    "stream overlays",
    "free overlays",
    "cozy setup",
  ],
  openGraph: {
    title: "Overlay Heaven ✨",
    description: "Make Your Setup Feel Magical",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <CursorGlow />
          <FloatingParticles />
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
