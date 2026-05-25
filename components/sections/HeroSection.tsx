"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Download, ArrowRight, Star } from "lucide-react";

const SPARKLE_POSITIONS = [
  { top: "15%", left: "10%", delay: 0 },
  { top: "25%", left: "85%", delay: 0.5 },
  { top: "60%", left: "5%", delay: 1 },
  { top: "70%", left: "90%", delay: 0.8 },
  { top: "40%", left: "92%", delay: 1.5 },
  { top: "80%", left: "15%", delay: 0.3 },
  { top: "10%", left: "55%", delay: 1.2 },
  { top: "85%", left: "60%", delay: 0.7 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/40 dark:bg-pink-900/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/15 rounded-full blur-3xl"
        />
      </div>

      {/* Floating sparkles */}
      {SPARKLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 dark:text-pink-500 select-none pointer-events-none"
          style={{ top: pos.top, left: pos.left }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8], rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 3, delay: pos.delay }}
        >
          {i % 2 === 0 ? "✦" : "✸"}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 shadow-glass"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-lg"
          >
            🌸
          </motion.span>
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Free kawaii overlays — no account needed
          </span>
          <div className="flex items-center gap-1 ml-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
          </div>
        </motion.div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-9xl md:text-[10rem] inline-block filter drop-shadow-2xl select-none"
          >
            🐱
          </motion.div>
          {/* Mascot shadow */}
          <motion.div
            animate={{ scaleX: [1, 0.8, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-32 h-4 bg-pink-300/30 dark:bg-pink-900/30 rounded-full blur-md mx-auto -mt-4"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          <span className="text-[var(--text-primary)]">Make Your Setup</span>
          <br />
          <span className="text-gradient glow-text">Feel Magical</span>
          <span className="text-[var(--text-primary)]"> ✨</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover hundreds of free kawaii desktop pets, animated mascots,
          OBS overlays, and cozy widgets. Transform your setup into an aesthetic dream. 🌸
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/store">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-kawaii text-white rounded-2xl font-semibold text-lg shadow-kawaii hover:shadow-glow transition-all duration-300"
            >
              <Sparkles size={20} />
              Explore Overlays
              <ArrowRight size={18} />
            </motion.button>
          </Link>
          <Link href="/free-packs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 glass text-[var(--text-primary)] rounded-2xl font-semibold text-lg shadow-glass hover:shadow-kawaii transition-all duration-300 border border-[var(--border)]"
            >
              <Download size={20} />
              Free Download
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { label: "Free Overlays", value: "200+", emoji: "✨" },
            { label: "Downloads", value: "120K+", emoji: "⬇️" },
            { label: "Happy Creators", value: "45K+", emoji: "💖" },
            { label: "5-Star Reviews", value: "8.9K+", emoji: "⭐" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-gradient">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)] text-sm flex items-center gap-1 justify-center">
                <span>{stat.emoji}</span>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] text-sm"
        >
          <span>scroll down</span>
          <div className="w-5 h-8 rounded-full border-2 border-[var(--border)] flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-pink-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
