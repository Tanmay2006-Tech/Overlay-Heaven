"use client";
import { motion } from "framer-motion";
import { getDailyPick, getTrendingOverlays } from "@/data/overlays";
import { OverlayCard } from "@/components/ui/OverlayCard";
import { Flame, Star, Calendar } from "lucide-react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

export function TrendingSection() {
  const dailyPick = getDailyPick();
  const trending = getTrendingOverlays();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Daily Pick + Music Player */}
          <div className="lg:col-span-1 space-y-6">
            {/* Daily Pick */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 shadow-glass"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-pink-500" />
                <h3 className="font-display text-xl text-[var(--text-primary)]">
                  Daily Pick ✨
                </h3>
              </div>
              <div className={`rounded-2xl p-4 bg-gradient-to-br ${dailyPick.previewGradient} mb-4 flex items-center justify-center`}>
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-7xl"
                >
                  {dailyPick.emoji}
                </motion.span>
              </div>
              <h4 className="font-display text-lg text-[var(--text-primary)] mb-1">{dailyPick.name}</h4>
              <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{dailyPick.description}</p>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = dailyPick.downloadFile;
                  link.download = dailyPick.id + ".zip";
                  link.click();
                }}
                className="w-full py-2.5 bg-gradient-kawaii text-white rounded-2xl text-sm font-semibold shadow-kawaii hover:shadow-glow transition-all"
              >
                Download Today's Pick 🎁
              </button>
            </motion.div>

            {/* Music Player */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MusicPlayer />
            </motion.div>
          </div>

          {/* Right: Trending */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2">
                <Flame size={22} className="text-orange-400" />
                <h2 className="font-display text-3xl text-[var(--text-primary)]">
                  Trending Now 🔥
                </h2>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trending.slice(0, 4).map((overlay, i) => (
                <OverlayCard key={overlay.id} overlay={overlay} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
