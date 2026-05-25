"use client";
import { motion } from "framer-motion";

const items = [
  "🐱 Desktop Pets",
  "🌸 Cherry Blossom Theme",
  "🖤 Kuromi Dark Pack",
  "🐰 Bunny Companion",
  "🍓 Strawberry Widgets",
  "☕ Cozy Café OBS",
  "⭐ Star Fairy Mascot",
  "🐶 Golden Puppy",
  "✨ 100% Free",
  "💖 No Account Needed",
  "🎮 OBS Ready",
  "🖥️ Desktop Ready",
];

export function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="py-6 overflow-hidden border-y border-[var(--border)]">
      <div className="flex gap-8" style={{ width: "max-content" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-8"
          style={{ width: "max-content" }}
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-[var(--text-secondary)] font-medium text-sm">
                {item}
              </span>
              <span className="text-pink-300">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
