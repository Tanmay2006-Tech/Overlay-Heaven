"use client";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    emoji: "⬇️",
    title: "Download",
    description: "Pick your favorite overlay or widget pack and click Free Download. No account needed!",
    color: "from-pink-100 to-pink-200 dark:from-pink-900/40 dark:to-pink-800/40",
    iconBg: "bg-pink-400",
  },
  {
    step: 2,
    emoji: "📦",
    title: "Extract ZIP",
    description: "Unzip the downloaded file. You'll find PNG, GIF, and setup instructions inside.",
    color: "from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40",
    iconBg: "bg-purple-400",
  },
  {
    step: 3,
    emoji: "🎮",
    title: "Add to OBS/Desktop",
    description: "Drag your overlay into OBS, or use a widget app like Rainmeter for desktop widgets.",
    color: "from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40",
    iconBg: "bg-blue-400",
  },
  {
    step: 4,
    emoji: "✨",
    title: "Enjoy Your Setup!",
    description: "You're done! Share your setup with the community and tag us. 🌸",
    color: "from-mint-100 to-mint-200 dark:from-teal-900/40 dark:to-teal-800/40",
    iconBg: "bg-teal-400",
  },
];

export function HowToUseSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text-primary)] mb-4">
            How It <span className="text-gradient">Works</span> 💫
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Set up your magical desktop in under 5 minutes!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative p-6 rounded-3xl bg-gradient-to-br ${step.color} border border-white/50 dark:border-white/10 shadow-card`}
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--text-secondary)]">
                {step.step}
              </div>

              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                className={`w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center text-3xl shadow-md mb-4`}
              >
                {step.emoji}
              </motion.div>

              <h3 className="font-display text-xl text-[var(--text-primary)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-pink-300 text-xl z-10">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
