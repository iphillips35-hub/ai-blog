import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, categorySlug, getCategories } from "@/data/blogPosts";
import BannerAd from "@/components/ads/BannerAd";
import NativeAd from "@/components/ads/NativeAd";

export const metadata: Metadata = {
  title: "Guides",
  description: "Plain-English guides to AI tools, website security and automation for UK small businesses.",
  alternates: { canonical: "/blog" },
};

const sections = [
  { audience: "business", title: "For small businesses", intro: "Plain-English guides to AI, security and automation." },
  { audience: "builders", title: "For builders", intro: "Technical guides for developers and agencies building with AI." },
] as const;

export default function BlogPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Guides
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Practical AI, website security and automation for UK small businesses
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto py-4">
            <Link 
              href="/blog"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold whitespace-nowrap"
            >
              All Posts
            </Link>
            {categories.map(category => (
              <Link
                key={category}
                href={`/blog/category/${categorySlug(category)}`}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Top Banner Ad */}
      <BannerAd position="top" />

      {/* Blog Posts */}
      {sections.map((section, sectionIndex) => {
        const posts = blogPosts.filter(post => post.audience === section.audience);
        if (posts.length === 0) return null;
        return (
          <Fragment key={section.audience}>
            {sectionIndex > 0 && (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <NativeAd />
              </div>
            )}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{section.intro}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                <article 
                  key={post.slug}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                      {post.category.charAt(0).toUpperCase()}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                          {post.author.avatar}
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {post.author.name}
                        </span>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
                ))}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
