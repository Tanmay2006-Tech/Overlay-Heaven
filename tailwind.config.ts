import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fredoka One'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        sakura: {
          50: "#fff0f6",
          100: "#ffe0ee",
          200: "#ffc0db",
          300: "#ff8cb9",
          400: "#ff5c97",
          500: "#ff2d77",
          600: "#f0065a",
          700: "#cc0049",
          800: "#a8003e",
          900: "#8c0037",
        },
        lavender: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        mint: {
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        peach: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        kawaii: {
          pink: "#FF6BB5",
          purple: "#B66DFF",
          blue: "#6DB8FF",
          mint: "#6DFFD4",
          peach: "#FFB86D",
          yellow: "#FFE96D",
          rose: "#FF8FAB",
        },
      },
      backgroundImage: {
        "gradient-kawaii":
          "linear-gradient(135deg, #FF6BB5 0%, #B66DFF 50%, #6DB8FF 100%)",
        "gradient-pastel":
          "linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1a0533 0%, #0d1b2a 50%, #1a0d33 100%)",
        "gradient-candy":
          "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        "gradient-dreamy":
          "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        "gradient-aurora":
          "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
      boxShadow: {
        kawaii: "0 0 20px rgba(255, 107, 181, 0.4), 0 0 60px rgba(182, 109, 255, 0.2)",
        glow: "0 0 30px rgba(255, 107, 181, 0.6)",
        "glow-purple": "0 0 30px rgba(182, 109, 255, 0.6)",
        "glow-blue": "0 0 30px rgba(109, 184, 255, 0.6)",
        glass: "0 8px 32px rgba(31, 38, 135, 0.15)",
        card: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "bounce-gentle": "bounceGentle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        marquee: "marquee 25s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.5", transform: "scale(1.2) rotate(180deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,107,181,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255,107,181,0.8), 0 0 80px rgba(182,109,255,0.4)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
