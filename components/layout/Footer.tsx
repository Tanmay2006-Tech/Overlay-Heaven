import Link from "next/link";
import { Heart, Sparkles, Twitter, Github, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[var(--border)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-50/50 dark:to-purple-900/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="font-display text-2xl text-gradient">Overlay Heaven</span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xs">
              The coziest corner of the internet for kawaii desktop overlays,
              animated mascots, and aesthetic setups. Totally free, forever. 🌸
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Github, label: "GitHub", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 glass rounded-full hover:shadow-kawaii transition-all duration-300 text-[var(--text-secondary)] hover:text-pink-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-[var(--text-primary)] mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Store", "Free Packs", "Tutorials", "Community", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[var(--text-secondary)] hover:text-pink-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-[var(--text-primary)] mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Discord Server", "Submit Your Art", "Report Bug", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[var(--text-secondary)] hover:text-pink-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> by kawaii creators, for kawaii creators
          </p>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-pink-400" />
            <p className="text-[var(--text-secondary)] text-sm">100% Free · No Account Required to Browse</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
