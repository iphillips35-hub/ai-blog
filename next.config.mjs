/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/blog/building-agentic-ai-apps-2026", destination: "/blog", permanent: true },
      { source: "/blog/rag-evaluation-best-practices", destination: "/blog", permanent: true },
      { source: "/blog/multimodal-ai-product-design", destination: "/blog", permanent: true },
      { source: "/blog/local-llms-for-developers", destination: "/blog", permanent: true },
      { source: "/blog/ai-coding-workflows-2026", destination: "/blog", permanent: true },
      { source: "/blog/responsible-ai-governance-for-builders", destination: "/blog", permanent: true },
      { source: "/blog/category/agents", destination: "/blog", permanent: true },
      { source: "/blog/category/rag", destination: "/blog", permanent: true },
      { source: "/blog/category/ux", destination: "/blog", permanent: true },
      { source: "/blog/category/infrastructure", destination: "/blog", permanent: true },
      { source: "/blog/category/tools", destination: "/blog", permanent: true },
      { source: "/blog/category/governance", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
