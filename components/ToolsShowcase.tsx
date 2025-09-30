import Link from "next/link";
import { Cpu, Sparkles, Zap, Code, Brain, MessageSquare } from "lucide-react";

const tools = [
  {
    name: "GPT-4",
    description: "Advanced language model for natural conversations and complex tasks",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
    category: "LLM"
  },
  {
    name: "Midjourney",
    description: "AI-powered image generation for stunning visual content",
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
    category: "Image Gen"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code faster",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    category: "Dev Tools"
  },
  {
    name: "Claude",
    description: "Constitutional AI for safe and helpful conversations",
    icon: Brain,
    color: "from-orange-500 to-red-600",
    category: "LLM"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source text-to-image model for creative projects",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    category: "Image Gen"
  },
  {
    name: "TensorFlow",
    description: "End-to-end platform for building ML applications",
    icon: Cpu,
    color: "from-indigo-500 to-purple-600",
    category: "Framework"
  }
];

export default function ToolsShowcase() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Popular AI Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the most powerful tools shaping the AI landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-br ${tool.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/tools"
            className="inline-flex items-center space-x-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-500 hover:shadow-xl transition-all"
          >
            <span>Explore All Tools</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
