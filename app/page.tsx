import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Newsletter from "@/components/Newsletter";
import TopicPoll from "@/components/TopicPoll";
import ToolsShowcase from "@/components/ToolsShowcase";
import BusinessHelp from "@/components/BusinessHelp";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedPosts />
      <BusinessHelp />
      <ToolsShowcase />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <TopicPoll />
      </div>
      <Newsletter />
    </div>
  );
}
