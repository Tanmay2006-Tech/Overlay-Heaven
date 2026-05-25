"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

const EMOJIS = ["✨", "🌸", "💫", "⭐", "🎀", "💕", "🌟", "🦋"];

export function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        emoji: EMOJIS[i % EMOJIS.length],
        x: Math.random() * 100,
        size: Math.random() * 12 + 10,
        delay: Math.random() * 10,
        duration: Math.random() * 8 + 12,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.x}%`,
            fontSize: `${p.size}px`,
            opacity: 0.3,
          }}
          initial={{ y: "110vh" }}
          animate={{ y: "-10vh" }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
