"use client";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

export function DesktopPreviewSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text-primary)] mb-4">
            Live <span className="text-gradient">Preview</span> 🖥️
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            See how your setup could look with our overlays!
          </p>
        </motion.div>

        {/* Fake desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Monitor frame */}
          <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-4 shadow-2xl border-4 border-gray-800">
            {/* Notch / camera dot */}
            <div className="flex justify-center mb-3">
              <div className="w-3 h-3 bg-gray-700 rounded-full" />
            </div>

            {/* Screen */}
            <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl overflow-hidden aspect-video">
              {/* Fake wallpaper - stars */}
              <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3,
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
                  />
                ))}
              </div>

              {/* Floating desktop pet */}
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-16 left-16 text-6xl select-none filter drop-shadow-lg"
              >
                🐱
              </motion.div>
              {/* Pet sparkle trail */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-yellow-300"
                  style={{ bottom: `${60 + i * 8}px`, left: `${55 + i * 6}px`, fontSize: "10px" }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                >
                  ✦
                </motion.div>
              ))}

              {/* OBS overlay corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-pink-400/60 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pink-400/60 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-400/60 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-pink-400/60 rounded-br-lg" />

              {/* Now playing widget */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-4 right-16 glass rounded-2xl px-3 py-2 flex items-center gap-2"
              >
                <span className="text-lg">🎵</span>
                <div>
                  <p className="text-white text-xs font-semibold">lofi study beats</p>
                  <p className="text-white/60 text-xs">kawaii.vibes</p>
                </div>
                <div className="flex gap-0.5 items-end h-4 ml-1">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-pink-400 rounded-full"
                      animate={{ height: ["4px", "14px", "4px"] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Clock widget */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-16 glass rounded-2xl px-4 py-2 text-center"
              >
                <p className="text-white font-display text-2xl">11:47</p>
                <p className="text-white/60 text-xs">Saturday 🌸</p>
              </motion.div>

              {/* Cute notification */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -4, 0] }}
                className="absolute bottom-8 right-8 glass rounded-2xl px-4 py-3 flex items-center gap-3 max-w-xs"
              >
                <span className="text-2xl">💌</span>
                <div>
                  <p className="text-white text-xs font-semibold">New message from sakura.chan</p>
                  <p className="text-white/60 text-xs">omg your setup is so cute!!</p>
                </div>
              </motion.div>

              {/* Floating heart emoji */}
              <motion.div
                animate={{ y: [0, -30, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2 }}
                className="absolute bottom-20 left-28 text-2xl"
              >
                💕
              </motion.div>

              {/* Cherry blossom petals */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-300 select-none"
                  style={{
                    left: `${10 + i * 12}%`,
                    fontSize: "16px",
                  }}
                  animate={{ y: ["0vh", "120%"], x: [0, 20, -20, 10], rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6 + i,
                    delay: i * 0.8,
                    ease: "linear",
                  }}
                >
                  🌸
                </motion.div>
              ))}
            </div>
          </div>

          {/* Monitor stand */}
          <div className="flex justify-center mt-2">
            <div className="w-24 h-6 bg-gray-800 rounded-b-xl" />
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-3 bg-gray-700 rounded-full" />
          </div>

          {/* Label tags */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-1/4 -left-4 md:-left-20 bg-pink-100 dark:bg-pink-900/40 rounded-2xl px-3 py-2 text-xs font-semibold text-pink-700 dark:text-pink-300 shadow-md"
          >
            🐱 Desktop Pet
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute top-12 -right-4 md:-right-20 bg-purple-100 dark:bg-purple-900/40 rounded-2xl px-3 py-2 text-xs font-semibold text-purple-700 dark:text-purple-300 shadow-md"
          >
            🎵 Music Widget
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-1/4 -right-4 md:-right-20 bg-blue-100 dark:bg-blue-900/40 rounded-2xl px-3 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-md"
          >
            💌 Notifications
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
