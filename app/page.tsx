import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Newsletter from "@/components/Newsletter";
import TopicPoll from "@/components/TopicPoll";
import ToolsShowcase from "@/components/ToolsShowcase";
import BusinessHelp from "@/components/BusinessHelp";
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
      <BusinessHelp />
      <ToolsShowcase />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <TopicPoll />
      </div>
      <Newsletter />
    </div>
  );
}
