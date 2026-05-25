"use client";
import { motion } from "framer-motion";
import { MessageCircle, Chrome, Sparkles, Star, Heart } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/15 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <div className="glass rounded-4xl p-8 shadow-kawaii">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-7xl mb-4 inline-block"
            >
              ✨
            </motion.div>
            <h1 className="font-display text-3xl text-[var(--text-primary)] mb-2">
              Welcome Back!
            </h1>
            <p className="text-[var(--text-secondary)] text-sm">
              Sign in to save favorites, track downloads, and join the community.
            </p>
          </div>

          {/* Auth buttons */}
          <div className="space-y-3 mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl font-semibold text-[var(--text-primary)] shadow-card hover:shadow-kawaii transition-all duration-300"
            >
              <Chrome size={20} className="text-blue-500" />
              Continue with Google
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-[#5865F2] text-white rounded-2xl font-semibold shadow-card hover:shadow-glow-purple transition-all duration-300"
            >
              <MessageCircle size={20} />
              Continue with Discord
            </motion.button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border)]" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-transparent text-[var(--text-secondary)] text-sm glass rounded-full py-1">
                or browse without an account
              </span>
            </div>
          </div>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-kawaii text-white rounded-2xl font-semibold shadow-kawaii hover:shadow-glow transition-all"
            >
              <Sparkles size={18} />
              Explore Free Overlays
            </motion.button>
          </Link>

          {/* Perks */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <p className="text-[var(--text-secondary)] text-xs text-center mb-3">Why sign in?</p>
            <div className="space-y-2">
              {[
                { icon: Heart, text: "Save favorites to your collection" },
                { icon: Star, text: "Get notified when new packs drop" },
                { icon: Sparkles, text: "Submit your own overlay creations" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Icon size={12} className="text-pink-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-[var(--text-secondary)] text-xs mt-4">
          By continuing, you agree to our{" "}
          <a href="#" className="text-pink-400 hover:underline">Terms</a> and{" "}
          <a href="#" className="text-pink-400 hover:underline">Privacy Policy</a>
        </p>
      </motion.div>
    </div>
  );
}
