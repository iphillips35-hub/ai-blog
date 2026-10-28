import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts, categorySlug, getCategories } from "@/data/blogPosts";

type Props = { params: { category: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: categorySlug(category) }));
}

function findCategory(slug: string) {
  return getCategories().find((category) => categorySlug(category) === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const category = findCategory(params.category);
  if (!category) return {};
  return {
    title: `${category} Articles`,
    description: `Articles about ${category} for people building with AI.`,
    alternates: { canonical: `/blog/category/${params.category}` },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = findCategory(params.category);
  if (!category) notFound();

  const posts = blogPosts.filter((post) => post.category === category);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All posts</span>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">{category}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 space-y-4"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
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
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
