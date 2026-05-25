"use client";
import { motion } from "framer-motion";
import { PlayCircle, BookOpen, Monitor, Cpu } from "lucide-react";

const tutorials = [
  {
    emoji: "🎮",
    title: "Setting Up OBS Overlays",
    description: "Step-by-step guide to adding kawaii overlays to your OBS stream. Includes scene setup, browser sources, and positioning.",
    duration: "8 min read",
    icon: Monitor,
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40",
    tags: ["OBS", "Streaming", "Beginner"],
  },
  {
    emoji: "🐱",
    title: "Install a Desktop Pet",
    description: "How to get your first kawaii desktop pet running! Covers XWidget, Lively Wallpaper, and manual GIF setup methods.",
    duration: "5 min read",
    icon: PlayCircle,
    gradient: "from-pink-100 to-pink-200 dark:from-pink-900/40 dark:to-pink-800/40",
    tags: ["Desktop Pet", "XWidget", "Beginner"],
  },
  {
    emoji: "🖥️",
    title: "Rainmeter Widget Setup",
    description: "Install and customize Rainmeter widgets for your desktop. Includes clock, weather, music player, and system monitor skins.",
    duration: "12 min read",
    icon: Cpu,
    gradient: "from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40",
    tags: ["Rainmeter", "Widgets", "Windows"],
  },
  {
    emoji: "🌸",
    title: "Full Aesthetic Desktop Setup",
    description: "Transform your entire desktop from scratch! Wallpaper, icons, taskbar, widgets, and a cute desktop pet all in one guide.",
    duration: "20 min read",
    icon: BookOpen,
    gradient: "from-rose-100 to-rose-200 dark:from-rose-900/40 dark:to-rose-800/40",
    tags: ["Full Setup", "Advanced", "Aesthetic"],
  },
];

export default function TutorialsPage() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="text-8xl mb-6 inline-block">📖</div>
        <h1 className="font-display text-5xl md:text-7xl text-[var(--text-primary)] mb-4">
          <span className="text-gradient">Tutorials</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
          Everything you need to create your dream aesthetic setup. Beginner friendly!
        </p>
      </motion.div>

      <div className="space-y-6">
        {tutorials.map((tut, i) => (
          <motion.div
            key={tut.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 6 }}
            className={`p-6 rounded-3xl bg-gradient-to-br ${tut.gradient} border border-white/50 dark:border-white/10 cursor-pointer shadow-card hover:shadow-kawaii transition-all duration-300`}
          >
            <div className="flex items-start gap-5">
              <div className="text-5xl flex-shrink-0">{tut.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h2 className="font-display text-xl text-[var(--text-primary)]">{tut.title}</h2>
                  <span className="text-xs text-[var(--text-secondary)] whitespace-nowrap">{tut.duration}</span>
                </div>
                <p className="text-[var(--text-secondary)] text-sm mt-2 mb-4 leading-relaxed">
                  {tut.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tut.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-white/60 dark:bg-white/10 rounded-full text-xs font-medium text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming soon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center glass rounded-3xl p-8"
      >
        <div className="text-5xl mb-3">🎀</div>
        <h3 className="font-display text-2xl text-[var(--text-primary)] mb-2">More tutorials coming soon!</h3>
        <p className="text-[var(--text-secondary)]">
          Join our Discord to request tutorial topics and get notified when new guides drop. 💖
        </p>
      </motion.div>
    </div>
  );
}
