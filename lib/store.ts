"use client";
import { create } from "zustand";

interface Store {
  favorites: string[];
  downloads: string[];
  darkMode: boolean;
  musicPlaying: boolean;
  toggleFavorite: (id: string) => void;
  addDownload: (id: string) => void;
  toggleMusic: () => void;
  isFavorited: (id: string) => boolean;
  isDownloaded: (id: string) => boolean;
}

export const useStore = create<Store>((set, get) => ({
  favorites: [],
  downloads: [],
  darkMode: false,
  musicPlaying: false,

  toggleFavorite: (id: string) => {
    const { favorites } = get();
    const isFav = favorites.includes(id);
    const newFavs = isFav
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    set({ favorites: newFavs });
    if (typeof window !== "undefined") {
      localStorage.setItem("oh_favorites", JSON.stringify(newFavs));
    }
  },

  addDownload: (id: string) => {
    const { downloads } = get();
    if (!downloads.includes(id)) {
      const newDownloads = [...downloads, id];
      set({ downloads: newDownloads });
      if (typeof window !== "undefined") {
        localStorage.setItem("oh_downloads", JSON.stringify(newDownloads));
      }
    }
  },

  toggleMusic: () => set((state) => ({ musicPlaying: !state.musicPlaying })),

  isFavorited: (id: string) => get().favorites.includes(id),
  isDownloaded: (id: string) => get().downloads.includes(id),
}));
