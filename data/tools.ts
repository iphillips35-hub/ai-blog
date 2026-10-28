import { Brain, Briefcase, Box, Code, Cpu, GitBranch, Layers, MessageSquare, Mic, Sparkles, Workflow, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Tool {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  category: string;
  link: string;
  featured?: boolean;
}

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    description: "OpenAI's general-purpose assistant for writing, research, analysis and everyday business tasks",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
    category: "Assistant",
    link: "https://chatgpt.com",
    featured: true,
  },
  {
    name: "Claude",
    description: "Anthropic's assistant with strong reasoning, long-document handling and coding ability",
    icon: Brain,
    color: "from-orange-500 to-red-600",
    category: "Assistant",
    link: "https://claude.ai",
    featured: true,
  },
  {
    name: "Google Gemini",
    description: "Google's multimodal assistant, built into Gmail, Docs and the rest of Google Workspace",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-600",
    category: "Assistant",
    link: "https://gemini.google.com",
    featured: true,
  },
  {
    name: "Microsoft Copilot",
    description: "AI assistant inside Word, Excel, Outlook and Teams for businesses on Microsoft 365",
    icon: Briefcase,
    color: "from-sky-500 to-blue-600",
    category: "Assistant",
    link: "https://copilot.microsoft.com",
  },
  {
    name: "Cursor",
    description: "AI-first code editor that can plan, write and refactor code across a whole project",
    icon: GitBranch,
    color: "from-indigo-500 to-blue-600",
    category: "Dev Tools",
    link: "https://cursor.com",
    featured: true,
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer with code completion, chat and agent mode in your editor and on GitHub",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    category: "Dev Tools",
    link: "https://github.com/features/copilot",
  },
  {
    name: "n8n",
    description: "Open-source workflow automation with built-in AI agent nodes; self-host or use the cloud",
    icon: Workflow,
    color: "from-pink-500 to-rose-600",
    category: "Automation",
    link: "https://n8n.io",
    featured: true,
  },
  {
    name: "Make",
    description: "Visual no-code automation platform connecting thousands of apps, with AI modules",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    category: "Automation",
    link: "https://www.make.com",
  },
  {
    name: "ElevenLabs",
    description: "Realistic AI voices and conversational voice agents for phone and web",
    icon: Mic,
    color: "from-gray-600 to-gray-900",
    category: "Voice AI",
    link: "https://elevenlabs.io",
    featured: true,
  },
  {
    name: "LangChain",
    description: "Framework for building LLM-powered apps and agents with tools, memory and retrieval",
    icon: Layers,
    color: "from-green-500 to-teal-600",
    category: "Framework",
    link: "https://www.langchain.com",
  },
  {
    name: "Ollama",
    description: "Run open-weight models like Llama, Qwen and Mistral locally on your own machine",
    icon: Cpu,
    color: "from-yellow-500 to-orange-600",
    category: "Local AI",
    link: "https://ollama.com",
  },
  {
    name: "Hugging Face",
    description: "Hub for open models and datasets, with hosted inference and demo Spaces",
    icon: Box,
    color: "from-yellow-500 to-red-600",
    category: "Platform",
    link: "https://huggingface.co",
  },
];
