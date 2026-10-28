import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI Tools Directory",
  description: "The AI assistants, automation platforms, voice AI and developer tools worth knowing about.",
  alternates: { canonical: "/tools" },
};

const categories = Array.from(new Set(tools.map(tool => tool.category)));

type Props = { searchParams: { category?: string } };

export default function ToolsPage({ searchParams }: Props) {
  const active = categories.find(c => c === searchParams.category);
  const visibleTools = active ? tools.filter(tool => tool.category === active) : tools;
  const tabClass = (selected: boolean) =>
    selected
      ? "px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold whitespace-nowrap"
      : "px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              AI Tools Directory
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The AI assistants, automation platforms and developer tools worth knowing about
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto py-4">
            <Link href="/tools" scroll={false} className={tabClass(!active)} aria-current={!active ? "page" : undefined}>
              All Tools
            </Link>
            {categories.map(category => (
              <Link
                key={category}
                href={`/tools?category=${encodeURIComponent(category)}`}
                scroll={false}
                className={tabClass(active === category)}
                aria-current={active === category ? "page" : undefined}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`bg-gradient-to-br ${tool.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never miss a useful tool
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the AI tools worth a small business&apos;s time, explained in plain English.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            Get new tools by email
          </Link>
        </div>
      </div>
    </div>
  );
}
