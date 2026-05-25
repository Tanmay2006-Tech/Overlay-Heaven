"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { overlays } from "@/data/overlays";
import { OverlayCard } from "@/components/ui/OverlayCard";
import type { OverlayCategory } from "@/types";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const categories: { label: string; value: "all" | OverlayCategory; emoji: string }[] = [
  { label: "All", value: "all", emoji: "✨" },
  { label: "Desktop Pets", value: "desktop-pet", emoji: "🐱" },
  { label: "OBS Overlays", value: "obs-overlay", emoji: "🎮" },
  { label: "Widgets", value: "widget", emoji: "🍓" },
  { label: "Stream Packs", value: "stream-pack", emoji: "🌙" },
  { label: "Theme Packs", value: "theme-pack", emoji: "🌸" },
  { label: "Mascots", value: "mascot", emoji: "⭐" },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<"all" | OverlayCategory>("all");

  const filtered =
    activeCategory === "all"
      ? overlays
      : overlays.filter((o) => o.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 shadow-glass">
          <Sparkles size={14} className="text-pink-500" />
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            All 100% Free
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-[var(--text-primary)] mb-4">
          Browse <span className="text-gradient">Overlays</span> 🎀
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
          Download instantly, no signup needed. OBS-ready, desktop-ready, stream-ready.
        </p>
      </motion.div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5",
              activeCategory === cat.value
                ? "bg-gradient-kawaii text-white shadow-kawaii"
                : "glass text-[var(--text-secondary)] hover:shadow-glass border border-[var(--border)]"
            )}
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filtered.map((overlay, i) => (
          <OverlayCard key={overlay.id} overlay={overlay} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
