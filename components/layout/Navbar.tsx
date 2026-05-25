"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Sparkles, Heart, Download } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", emoji: "🏠" },
  { label: "Store", href: "/store", emoji: "✨" },
  { label: "Free Packs", href: "/free-packs", emoji: "🎁" },
  { label: "Tutorials", href: "/tutorials", emoji: "📖" },
  { label: "Community", href: "/community", emoji: "💖" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { favorites, downloads } = useStore();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-kawaii py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-2xl"
          >
            ✨
          </motion.div>
          <span className="font-display text-xl text-gradient">
            Overlay Heaven
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200 group"
            >
              <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.emoji}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Favorites indicator */}
          <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-500 text-sm font-medium">
            <Heart size={14} className="fill-pink-500" />
            <span>{favorites.length}</span>
          </div>

          {/* Theme toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full glass hover:shadow-kawaii transition-all duration-300 text-[var(--text-secondary)]"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <Sun size={18} className="text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA */}
          <Link href="/store">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-kawaii text-white rounded-full text-sm font-semibold shadow-kawaii hover:shadow-glow transition-all duration-300"
            >
              <Sparkles size={14} />
              Browse Free
            </motion.button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full glass"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-3xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <button className="w-full mt-2 py-3 bg-gradient-kawaii text-white rounded-2xl font-semibold flex items-center justify-center gap-2">
                  <Sparkles size={16} /> Browse Free
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
