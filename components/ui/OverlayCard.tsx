"use client";
import { motion } from "framer-motion";
import { Heart, Download, Star, Sparkles } from "lucide-react";
import type { Overlay } from "@/types";
import { useStore } from "@/lib/store";
import { cn, formatNumber, categoryLabels, categoryColors } from "@/lib/utils";

interface OverlayCardProps {
  overlay: Overlay;
  index?: number;
}

export function OverlayCard({ overlay, index = 0 }: OverlayCardProps) {
  const { toggleFavorite, isFavorited, addDownload } = useStore();
  const favorited = isFavorited(overlay.id);

  const handleDownload = () => {
    addDownload(overlay.id);
    const link = document.createElement("a");
    link.href = overlay.downloadFile;
    link.download = overlay.id + ".zip";
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="gradient-border group relative"
    >
      <div className="glass rounded-3xl overflow-hidden hover:shadow-kawaii transition-all duration-500">
        {/* Preview area */}
        <div
          className={cn(
            "relative h-48 bg-gradient-to-br overflow-hidden",
            overlay.previewGradient
          )}
        >
          {/* Animated mascot emoji */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <span className="text-7xl drop-shadow-lg filter">{overlay.emoji}</span>
          </motion.div>

          {/* Floating sparkles in preview */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/60"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                fontSize: "12px",
              }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
            >
              ✦
            </motion.div>
          ))}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {overlay.trending && (
              <span className="px-2 py-0.5 rounded-full bg-orange-400 text-white text-xs font-bold shadow-md">
                🔥 Trending
              </span>
            )}
            {overlay.featured && (
              <span className="px-2 py-0.5 rounded-full bg-pink-500 text-white text-xs font-bold shadow-md">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Price badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full bg-green-400 text-white text-xs font-bold shadow-md uppercase tracking-wide">
              FREE
            </span>
          </div>

          {/* Favorite button */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => toggleFavorite(overlay.id)}
            className="absolute bottom-3 right-3 p-2 rounded-full glass shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Heart
              size={16}
              className={cn(
                "transition-colors",
                favorited ? "fill-pink-500 text-pink-500" : "text-white"
              )}
            />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span
            className={cn(
              "inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2",
              categoryColors[overlay.category]
            )}
          >
            {categoryLabels[overlay.category]}
          </span>

          <h3 className="font-display text-lg text-[var(--text-primary)] mb-1 leading-tight">
            {overlay.name}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 mb-3">
            {overlay.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {overlay.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-300 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-4">
            <div className="flex items-center gap-1">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-[var(--text-primary)]">
                {overlay.rating}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Download size={12} />
              <span>{formatNumber(overlay.downloads)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={12} />
              <span>{formatNumber(overlay.favorites)}</span>
            </div>
            <span className="text-[var(--text-secondary)]">{overlay.size}</span>
          </div>

          {/* Download button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-kawaii text-white rounded-2xl text-sm font-semibold shadow-kawaii hover:shadow-glow transition-all duration-300"
          >
            <Sparkles size={14} />
            Free Download
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
