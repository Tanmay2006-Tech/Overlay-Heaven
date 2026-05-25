"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import { StarRating } from "@/components/ui/StarRating";
import { BadgeCheck } from "lucide-react";

export function CommunitySection() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text-primary)] mb-4">
            The <span className="text-gradient">Community</span> Loves Us 💖
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Join 45,000+ creators who've upgraded their setups with Overlay Heaven.
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6 shadow-glass hover:shadow-kawaii transition-all duration-300"
            >
              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} size={16} />
              </div>

              {/* Comment */}
              <p className="text-[var(--text-primary)] text-sm leading-relaxed mb-4">
                "{review.comment}"
              </p>

              {/* Overlay name */}
              <div className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 rounded-full text-xs text-pink-600 dark:text-pink-300 font-medium inline-block mb-4">
                Re: {review.overlayName}
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-pink-200 dark:ring-pink-800 flex-shrink-0 bg-pink-100">
                  <Image
                    src={review.avatar}
                    alt={review.username}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-sm text-[var(--text-primary)] truncate">
                      @{review.username}
                    </p>
                    {review.verified && (
                      <BadgeCheck size={14} className="text-pink-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Share your setup and get featured! 🌸
          </p>
          <a
            href="/community"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl text-[var(--text-primary)] font-semibold border border-[var(--border)] hover:shadow-kawaii transition-all duration-300"
          >
            Join Our Community 💕
          </a>
        </motion.div>
      </div>
    </section>
  );
}
