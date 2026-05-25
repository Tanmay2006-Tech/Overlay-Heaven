# ✨ Overlay Heaven

> A modern kawaii platform for free desktop overlays, animated mascots, OBS overlays, and cozy widgets.

## 🌸 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: Zustand + localStorage
- **Theme**: next-themes (dark/light mode)
- **Hosting**: Vercel (free tier)
- **Data**: Local JSON (no database!)
- **Auth**: None required to browse (optional Google/Discord via NextAuth)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🌟 Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import the repo on [vercel.com](https://vercel.com)
3. Click Deploy — no environment variables needed!

That's it! 🎉

## 📂 File Structure

```
/app                  # Next.js App Router pages
  /store              # Browse all overlays
  /free-packs         # Free packs showcase
  /tutorials          # Setup tutorials
  /community          # Community page
  /login              # Auth page
/components
  /layout             # Navbar, Footer, ThemeProvider
  /sections           # Page sections (Hero, Gallery, etc.)
  /ui                 # Reusable UI components
/data                 # Local JSON data
/lib                  # Utilities and Zustand store
/types                # TypeScript types
/public               # Static assets
  /downloads          # Downloadable ZIP/PNG files
  /images             # Preview images
```

## 🎨 Features

- ✅ Hero section with animated kawaii mascot
- ✅ Overlay gallery with hover animations + glow borders
- ✅ Category filtering + search
- ✅ Live desktop preview with floating widgets
- ✅ How-to-use step cards
- ✅ Community testimonials
- ✅ Trending carousel + Daily Pick
- ✅ Music player UI
- ✅ Dark/light mode toggle
- ✅ Cursor glow effect
- ✅ Floating particles
- ✅ Marquee/ticker
- ✅ Favorite system (localStorage)
- ✅ Download tracking (localStorage)
- ✅ Fully responsive
- ✅ SEO optimized

## 📦 Adding Downloads

Place ZIP or PNG files in `/public/downloads/` and reference them in `/data/overlays.ts`.

## 🆓 100% Free Stack

- No paid APIs
- No paid hosting (Vercel free tier)
- No database required
- No backend server
- No hidden fees
