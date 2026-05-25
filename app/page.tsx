import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DesktopPreviewSection } from "@/components/sections/DesktopPreviewSection";
import { HowToUseSection } from "@/components/sections/HowToUseSection";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { CommunitySection } from "@/components/sections/CommunitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <GallerySection />
      <DesktopPreviewSection />
      <HowToUseSection />
      <TrendingSection />
      <CommunitySection />
    </>
  );
}
