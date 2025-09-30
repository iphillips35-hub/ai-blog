import { Cpu, Sparkles, Zap, Code, Brain, MessageSquare, Image, Database, GitBranch, Layers, Box, Workflow } from "lucide-react";

const tools = [
  {
    name: "GPT-4",
    description: "OpenAI's most advanced language model for natural conversations, complex reasoning, and creative tasks",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
    category: "LLM",
    link: "https://openai.com/gpt-4"
  },
  {
    name: "Claude",
    description: "Anthropic's constitutional AI for safe, helpful conversations with strong reasoning capabilities",
    icon: Brain,
    color: "from-orange-500 to-red-600",
    category: "LLM",
    link: "https://claude.ai"
  },
  {
    name: "Midjourney",
    description: "AI-powered image generation for stunning visual content from text descriptions",
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
    category: "Image Gen",
    link: "https://midjourney.com"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source text-to-image model for creative projects with full control and customization",
    icon: Image,
    color: "from-yellow-500 to-orange-600",
    category: "Image Gen",
    link: "https://stability.ai"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code and entire functions in real-time across multiple languages",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    category: "Dev Tools",
    link: "https://github.com/features/copilot"
  },
  {
    name: "Cursor",
    description: "AI-first code editor built for pair programming with AI, featuring natural language editing",
    icon: GitBranch,
    color: "from-indigo-500 to-blue-600",
    category: "Dev Tools",
    link: "https://cursor.sh"
  },
  {
    name: "TensorFlow",
    description: "End-to-end open-source platform for machine learning with comprehensive ecosystem",
    icon: Cpu,
    color: "from-indigo-500 to-purple-600",
    category: "Framework",
    link: "https://tensorflow.org"
  },
  {
    name: "PyTorch",
    description: "Open-source machine learning framework with dynamic computation graphs and Python-first approach",
    icon: Zap,
    color: "from-red-500 to-orange-600",
    category: "Framework",
    link: "https://pytorch.org"
  },
  {
    name: "LangChain",
    description: "Framework for developing applications powered by language models with chains and agents",
    icon: Workflow,
    color: "from-green-500 to-teal-600",
    category: "Framework",
    link: "https://langchain.com"
  },
  {
    name: "Pinecone",
    description: "Vector database optimized for AI applications, semantic search, and recommendation systems",
    icon: Database,
    color: "from-blue-500 to-purple-600",
    category: "Infrastructure",
    link: "https://pinecone.io"
  },
  {
    name: "Weaviate",
    description: "Open-source vector database with GraphQL API and hybrid search capabilities",
    icon: Layers,
    color: "from-teal-500 to-green-600",
    category: "Infrastructure",
    link: "https://weaviate.io"
  },
  {
    name: "Hugging Face",
    description: "Platform for sharing and deploying machine learning models with thousands of pre-trained options",
    icon: Box,
    color: "from-yellow-500 to-red-600",
    category: "Platform",
    link: "https://huggingface.co"
  }
];

const categories = Array.from(new Set(tools.map(tool => tool.category)));

export default function ToolsPage() {
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
              Discover the most powerful tools for building AI applications
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto py-4">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold whitespace-nowrap">
              All Tools
            </button>
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
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
            Want to suggest a tool?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Know an amazing AI tool that should be featured? Let us know!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all">
            Submit a Tool
          </button>
        </div>
      </div>
    </div>
  );
}
