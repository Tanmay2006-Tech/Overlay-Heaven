"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import { StarRating } from "@/components/ui/StarRating";
import { BadgeCheck, MessageCircle, Heart, Users, Award } from "lucide-react";

const setups = [
  { user: "sakura.setup", emoji: "🌸", gradient: "from-pink-200 to-rose-200", pet: "🐱", description: "Cherry blossom theme + Sleepy Cat" },
  { user: "dark.aesthetic", emoji: "🖤", gradient: "from-purple-900 to-gray-900", pet: "🌙", description: "Kuromi dark pack full setup" },
  { user: "lofi.cottage", emoji: "☕", gradient: "from-amber-100 to-orange-100", pet: "🍂", description: "Cozy café vibes all day" },
  { user: "star.dreamer", emoji: "⭐", gradient: "from-blue-100 to-indigo-200", pet: "✨", description: "Celestial star fairy theme" },
  { user: "mint.bunny", emoji: "🐰", gradient: "from-green-100 to-teal-100", pet: "🌿", description: "Spring bunny companion setup" },
  { user: "berry.girl", emoji: "🍓", gradient: "from-red-100 to-pink-100", pet: "💖", description: "Strawberry widget perfection" },
];

export default function CommunityPage() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="text-8xl mb-6 inline-block">💖</div>
        <h1 className="font-display text-5xl md:text-7xl text-[var(--text-primary)] mb-4">
          Our <span className="text-gradient">Community</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
          45,000+ kawaii creators sharing their aesthetic setups. Come join the dream! 🌸
        </p>
      </motion.div>

      {/* Community stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { icon: Users, value: "45K+", label: "Members", color: "text-pink-500" },
          { icon: Heart, value: "120K+", label: "Downloads", color: "text-rose-500" },
          { icon: MessageCircle, value: "8.9K", label: "Reviews", color: "text-purple-500" },
          { icon: Award, value: "200+", label: "Free Packs", color: "text-blue-500" },
        ].map(({ icon: Icon, value, label, color }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-6 text-center shadow-glass"
          >
            <Icon size={24} className={`${color} mx-auto mb-2`} />
            <div className="font-display text-3xl text-gradient">{value}</div>
            <div className="text-[var(--text-secondary)] text-sm">{label}</div>
          </motion.div>
        ))}
      </div>

      {/* Featured setups */}
      <div className="mb-16">
        <h2 className="font-display text-3xl text-[var(--text-primary)] mb-6">✨ Featured Setups</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {setups.map((setup, i) => (
            <motion.div
              key={setup.user}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br ${setup.gradient} cursor-pointer group shadow-card`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-6xl"
                >
                  {setup.pet}
                </motion.span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-semibold">@{setup.user}</p>
                <p className="text-white/70 text-xs">{setup.description}</p>
              </div>
              <div className="absolute top-2 left-2 text-lg">{setup.emoji}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="font-display text-3xl text-[var(--text-primary)] mb-6">💬 Community Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-6 shadow-glass"
            >
              <StarRating rating={review.rating} />
              <p className="text-[var(--text-primary)] text-sm leading-relaxed mt-3 mb-4">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.username}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full ring-2 ring-pink-200 dark:ring-pink-800 bg-pink-100"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm text-[var(--text-primary)]">@{review.username}</span>
                    {review.verified && <BadgeCheck size={13} className="text-pink-500" />}
                  </div>
                  <span className="text-[var(--text-secondary)] text-xs">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
