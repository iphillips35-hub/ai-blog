import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Newsletter from "@/components/Newsletter";
import ToolsShowcase from "@/components/ToolsShowcase";
import BannerAd from "@/components/ads/BannerAd";
import NativeAd from "@/components/ads/NativeAd";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <BannerAd position="top" />
      <FeaturedPosts />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NativeAd />
      </div>
      <ToolsShowcase />
      <Newsletter />
    </div>
  );
}
