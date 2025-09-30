import { Sparkles, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              About AI App Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Your trusted resource for navigating the rapidly evolving world of AI development
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We're dedicated to helping developers, entrepreneurs, and AI enthusiasts stay ahead 
              in the fast-paced world of artificial intelligence. Through in-depth tutorials, 
              honest tool reviews, and practical guides, we make AI development accessible to everyone.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Practical Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We focus on real-world applications and actionable insights that you can 
                implement immediately in your projects.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg w-fit mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Quality Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every article is thoroughly researched, tested, and reviewed to ensure 
                accuracy and relevance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Community First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're building a community of AI developers who learn from and support 
                each other on their journey.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Stay Current
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The AI landscape changes rapidly. We keep you updated with the latest 
                tools, techniques, and best practices.
              </p>
            </div>
          </div>

          {/* What We Cover */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
              What We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">📚</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Tutorials
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Step-by-step guides for building AI applications from scratch
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">🛠️</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Tool Reviews
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Honest, in-depth reviews of the latest AI tools and platforms
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">💡</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Best Practices
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Industry insights and proven patterns for AI development
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Community
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter and get weekly insights, tutorials, and tool recommendations 
              delivered straight to your inbox.
            </p>
            <Link 
              href="/newsletter"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
