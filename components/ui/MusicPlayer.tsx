"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, SkipForward, Volume2 } from "lucide-react";

const tracks = [
  { title: "Lofi Study Vibes", artist: "kawaii.beats", emoji: "🎵" },
  { title: "Cherry Blossom Rain", artist: "sakura.sounds", emoji: "🌸" },
  { title: "Cozy Café Morning", artist: "chill.lounge", emoji: "☕" },
  { title: "Neon Night Drive", artist: "synth.pastel", emoji: "🌙" },
];

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [progress, setProgress] = useState(35);

  const track = tracks[trackIndex];

  const nextTrack = () => setTrackIndex((i) => (i + 1) % tracks.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-5 shadow-glass"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          <Music size={18} className="text-pink-500" />
        </motion.div>
        <span className="font-display text-sm text-[var(--text-secondary)]">
          Now Vibing
        </span>
        {playing && (
          <div className="ml-auto flex gap-0.5 items-end h-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-pink-400 rounded-full"
                animate={{ height: ["4px", "14px", "6px", "14px"] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Track info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-kawaii flex items-center justify-center text-2xl shadow-kawaii flex-shrink-0">
          {track.emoji}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-[var(--text-primary)] text-sm truncate">
            {track.title}
          </p>
          <p className="text-[var(--text-secondary)] text-xs">{track.artist}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-1.5 bg-pink-100 dark:bg-pink-900/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-kawaii rounded-full"
            style={{ width: `${progress}%` }}
            animate={playing ? { width: ["35%", "100%"] } : {}}
            transition={{ duration: 180, ease: "linear" }}
          />
        </div>
        <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-1">
          <span>1:24</span>
          <span>3:52</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <Volume2 size={16} className="text-[var(--text-secondary)]" />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setPlaying(!playing)}
          className="w-10 h-10 rounded-full bg-gradient-kawaii flex items-center justify-center shadow-kawaii text-white"
        >
          {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={nextTrack}
          className="text-[var(--text-secondary)] hover:text-pink-500 transition-colors"
        >
          <SkipForward size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
