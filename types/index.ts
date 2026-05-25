export interface Overlay {
  id: string;
  name: string;
  emoji: string;
  description: string;
  category: OverlayCategory;
  tags: string[];
  rating: number;
  downloads: number;
  favorites: number;
  price: "free" | "premium";
  featured: boolean;
  trending: boolean;
  colors: string[];
  previewGradient: string;
  downloadFile: string;
  size: string;
  format: string[];
  createdAt: string;
}

export type OverlayCategory =
  | "desktop-pet"
  | "obs-overlay"
  | "widget"
  | "theme-pack"
  | "mascot"
  | "stream-pack";

export interface Review {
  id: string;
  username: string;
  avatar: string;
  rating: number;
  comment: string;
  overlayName: string;
  date: string;
  verified: boolean;
}

export interface TutorialStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  emoji?: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}
