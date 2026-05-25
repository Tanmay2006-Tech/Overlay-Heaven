"use client";
import { motion } from "framer-motion";
import { overlays } from "@/data/overlays";
import { OverlayCard } from "@/components/ui/OverlayCard";
import { Gift, Sparkles, Download } from "lucide-react";
import { formatNumber } from "@/lib/utils";

export default function FreePacksPage() {
  const freePacks = overlays.filter((o) => o.price === "free");
  const totalDownloads = freePacks.reduce((acc, o) => acc + o.downloads, 0);

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-8xl mb-6 inline-block"
        >
          🎁
        </motion.div>
        <h1 className="font-display text-5xl md:text-7xl text-[var(--text-primary)] mb-4">
          Free <span className="text-gradient">Packs</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
          Every single overlay, widget, and pet on this page is completely free.
          No strings attached, no paywalls, no hidden fees. 💖
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Gift, label: "Free Packs", value: freePacks.length },
            { icon: Download, label: "Total Downloads", value: formatNumber(totalDownloads) },
            { icon: Sparkles, label: "Happy Users", value: "45K+" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-2xl px-6 py-4 text-center shadow-glass">
              <Icon size={20} className="text-pink-400 mx-auto mb-1" />
              <div className="font-display text-2xl text-gradient">{value}</div>
              <div className="text-[var(--text-secondary)] text-xs">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-4xl overflow-hidden mb-16 p-10 bg-gradient-kawaii shadow-kawaii text-center"
      >
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white"
              style={{ left: `${i * 5 + 2}%`, top: `${(i % 3) * 33}%`, fontSize: "20px" }}
            >
              ✦
            </div>
          ))}
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-white mb-3 relative z-10">
          All Packs Are Always Free 🌸
        </h2>
        <p className="text-white/80 text-lg relative z-10">
          We believe kawaii setups should be accessible to everyone!
        </p>
      </motion.div>

      {/* Pack grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {freePacks.map((overlay, i) => (
          <OverlayCard key={overlay.id} overlay={overlay} index={i} />
        ))}
      </div>
    </div>
  );
}
