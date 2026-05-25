"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { overlays } from "@/data/overlays";
import { OverlayCard } from "@/components/ui/OverlayCard";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import type { OverlayCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: { label: string; value: "all" | OverlayCategory }[] = [
  { label: "All", value: "all" },
  { label: "Desktop Pets", value: "desktop-pet" },
  { label: "OBS Overlays", value: "obs-overlay" },
  { label: "Widgets", value: "widget" },
  { label: "Stream Packs", value: "stream-pack" },
  { label: "Theme Packs", value: "theme-pack" },
  { label: "Mascots", value: "mascot" },
];

export default function StorePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | OverlayCategory>("all");
  const [sortBy, setSortBy] = useState<"rating" | "downloads" | "newest">("downloads");

  const filtered = overlays
    .filter((o) => {
      const matchCat = category === "all" || o.category === category;
      const matchSearch =
        !search ||
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.tags.some((t) => t.includes(search.toLowerCase()));
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "downloads") return b.downloads - a.downloads;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-5xl md:text-7xl text-[var(--text-primary)] mb-4">
          The <span className="text-gradient">Store</span> ✨
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">
          {overlays.length} free packs — all lovingly crafted for kawaii creators
        </p>
      </motion.div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
          <input
            type="text"
            placeholder="Search overlays..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 glass rounded-2xl border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-700 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-[var(--text-secondary)] flex-shrink-0" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="glass border border-[var(--border)] rounded-2xl px-4 py-3 text-[var(--text-primary)] focus:outline-none cursor-pointer"
          >
            <option value="downloads">Most Downloaded</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
              category === cat.value
                ? "bg-gradient-kawaii text-white shadow-kawaii"
                : "glass text-[var(--text-secondary)] border border-[var(--border)] hover:shadow-glass"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-[var(--text-secondary)] text-sm mb-6">
        Showing {filtered.length} results
        {search && ` for "${search}"`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((overlay, i) => (
            <OverlayCard key={overlay.id} overlay={overlay} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <span className="text-8xl block mb-4">🔍</span>
          <h3 className="font-display text-2xl text-[var(--text-primary)] mb-2">No results found</h3>
          <p className="text-[var(--text-secondary)]">Try a different search term or category!</p>
        </div>
      )}
    </div>
  );
}
