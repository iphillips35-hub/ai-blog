export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-agentic-ai-apps-2026",
    title: "Building Agentic AI Apps in 2026: From Chatbots to Reliable Workflows",
    excerpt: "Move beyond simple chat interfaces with practical patterns for tool use, planning, memory, approvals, and monitoring in agentic AI applications.",
    content: `
# Building Agentic AI Apps in 2026

AI products are moving from single-turn chatbots toward agentic workflows that can research, plan, call tools, update records, and ask for approval when confidence is low. The best systems do not simply let a model act freely; they combine model reasoning with product constraints, typed tools, observability, and human oversight.

## What Makes an App Agentic?

An agentic app can break a goal into steps, choose from available tools, inspect the result, and continue until it reaches a useful outcome. That might mean drafting a sales follow-up from CRM context, triaging support tickets, generating a pull request, or reconciling invoice data.

## Core Architecture

Most reliable agentic systems include:

- **A clear task boundary** so the model knows what it can and cannot do
- **Typed tools** with strict inputs, outputs, and permission levels
- **Short-term context** for the current task and long-term memory for durable facts
- **Evaluation hooks** that measure success, cost, latency, and failure modes
- **Human approval gates** for expensive, destructive, or sensitive actions

## Designing Safer Tool Use

Treat every tool call like a production API integration. Validate inputs before execution, return structured errors, and avoid giving the model broad access to internal systems. For high-risk actions, generate a proposed action first and require a user confirmation before anything changes.

## Planning Without Overengineering

Not every task needs a long plan. Use lightweight planning when a task has multiple dependencies, uncertain data, or external side effects. For simpler requests, a direct answer or single tool call is faster and more reliable.

## Monitoring Agents in Production

Log each step of the run, including model inputs, selected tools, tool outputs, cost, latency, and final status. This makes it possible to debug bad outcomes, improve prompts, and identify tools that need better schemas or clearer error messages.

## Conclusion

The most useful agentic products in 2026 are not magic black boxes. They are carefully scoped workflows where AI handles ambiguity while software engineering provides structure, safety, and repeatability.
    `,
    date: "2026-06-04",
    readTime: "8 min read",
    category: "Agents",
    featured: true,
    author: {
      name: "Alex Johnson",
      avatar: "AJ"
    }
  },
  {
    slug: "rag-evaluation-best-practices",
    title: "RAG Evaluation Best Practices: How to Measure Retrieval Quality",
    excerpt: "Learn how to evaluate retrieval-augmented generation systems with test sets, relevance metrics, answer groundedness, and regression checks.",
    content: `
# RAG Evaluation Best Practices

Retrieval-augmented generation is now a default pattern for enterprise AI apps, but many teams still judge quality by reading a few sample answers. That is not enough for production. A reliable RAG system needs repeatable evaluation across retrieval, generation, and user experience.

## Start With Real Questions

Build an evaluation set from support tickets, search logs, sales calls, product documentation, and internal knowledge base queries. Synthetic questions can help fill gaps, but real user language reveals messy phrasing, missing context, and ambiguous intent.

## Measure Retrieval Separately

Before judging the final answer, check whether the retriever found the right evidence. Track:

- **Recall**: did the system retrieve the documents needed to answer?
- **Precision**: were the retrieved chunks actually relevant?
- **Rank quality**: did the best evidence appear near the top?
- **Coverage**: are important topics underrepresented in the index?

## Evaluate Grounded Answers

A good RAG answer should be useful and grounded in the supplied context. Score whether the response answers the question, cites the correct source, avoids unsupported claims, and admits when the knowledge base does not contain enough information.

## Tune Chunking and Metadata

Chunk size, overlap, document structure, and metadata filters can matter more than the embedding model. Preserve headings, product names, dates, permissions, and source URLs so retrieved context is easier for the model to use.

## Add Regression Tests

Every update to prompts, indexes, embeddings, or rerankers can change behaviour. Keep a small high-value regression suite that runs in CI so quality does not drift after seemingly harmless changes.

## Conclusion

RAG quality improves fastest when teams measure each stage independently. Retrieval, reranking, prompting, and answer generation all need their own feedback loops.
    `,
    date: "2026-06-02",
    readTime: "9 min read",
    category: "RAG",
    featured: true,
    author: {
      name: "Sarah Chen",
      avatar: "SC"
    }
  },
  {
    slug: "multimodal-ai-product-design",
    title: "Multimodal AI Product Design: Practical UX Patterns for Text, Image, Audio, and Video",
    excerpt: "Design better AI features by combining text, screenshots, voice notes, documents, and video clips without overwhelming users.",
    content: `
# Multimodal AI Product Design

Multimodal models make it possible to reason across text, images, audio, documents, and video. The product challenge is deciding when those capabilities make the experience simpler rather than more complicated.

## Start With User Intent

Do not add every input type just because the model supports it. Ask what the user is trying to accomplish. A screenshot may be better than a written bug report, a voice note may be faster than a form, and a document upload may be safer than copying sensitive text into a chat box.

## Useful Multimodal Patterns

Strong use cases include:

- **Screenshot debugging** for UI issues, error messages, and layout problems
- **Document understanding** for invoices, contracts, reports, and policies
- **Voice-to-workflow** for field teams, clinicians, and mobile-first users
- **Video summarisation** for meetings, training material, and customer research

## Make Inputs Inspectable

Users need to know what the model saw. Show uploaded files, extracted text, detected entities, timestamps, and image regions where appropriate. This builds trust and makes corrections easier.

## Handle Uncertainty Clearly

Multimodal systems can misread small text, low-quality audio, or visually ambiguous content. Provide confidence cues, ask clarifying questions, and make it easy for users to edit extracted information before it is used downstream.

## Accessibility Matters

Multimodal AI should improve accessibility, not reduce it. Support captions, transcripts, keyboard navigation, alt text, and readable summaries. Always provide a text fallback for important interactions.

## Conclusion

The best multimodal products use the right input at the right moment. They reduce friction, preserve user control, and make model interpretation visible.
    `,
    date: "2026-05-29",
    readTime: "7 min read",
    category: "UX",
    featured: true,
    author: {
      name: "Michael Torres",
      avatar: "MT"
    }
  },
  {
    slug: "local-llms-for-developers",
    title: "Local LLMs for Developers: When to Run Models on Your Own Hardware",
    excerpt: "Explore when local models make sense for privacy, latency, cost control, offline workflows, and prototyping.",
    content: `
# Local LLMs for Developers

Local language models have become practical for more developer workflows. They are not always a replacement for frontier hosted models, but they are increasingly useful for private data, offline tools, repeatable tests, and cost-sensitive automation.

## When Local Models Shine

Local models are a strong fit when you need:

- **Privacy** for code, documents, or customer data that should not leave the machine
- **Low latency** for small tasks that run repeatedly
- **Offline support** for field work or restricted environments
- **Predictable costs** for high-volume internal workflows
- **Experimentation** without sending every prompt to a hosted API

## Trade-Offs to Consider

Hosted frontier models may still outperform local models on complex reasoning, long-context synthesis, and specialised multimodal tasks. Local models also require hardware planning, model management, quantisation choices, and operational updates.

## Good Developer Use Cases

Practical local workflows include code explanation, commit message drafting, log summarisation, test data generation, documentation cleanup, and first-pass classification. For high-stakes answers, combine local inference with review or escalation to a stronger hosted model.

## Hybrid Architectures

Many teams use a hybrid approach: local models for quick private tasks, hosted models for complex reasoning, and routing rules based on risk, sensitivity, and cost. This gives teams flexibility without forcing every use case into one model.

## Conclusion

Local LLMs are most valuable when they are matched to the right workload. Use them where privacy, speed, and control matter, and route harder tasks to stronger models when needed.
    `,
    date: "2026-05-24",
    readTime: "6 min read",
    category: "Infrastructure",
    featured: false,
    author: {
      name: "David Kim",
      avatar: "DK"
    }
  },
  {
    slug: "ai-coding-workflows-2026",
    title: "AI Coding Workflows in 2026: From Autocomplete to Agentic Pair Programming",
    excerpt: "A practical guide to using AI coding assistants for planning, refactoring, testing, documentation, and pull request review.",
    content: `
# AI Coding Workflows in 2026

AI coding assistants are no longer just autocomplete tools. Modern workflows combine chat, repository search, test execution, refactoring support, documentation updates, and automated pull request review.

## Use AI Before Writing Code

The highest leverage step is often planning. Ask the assistant to map the relevant files, identify data flow, list assumptions, and suggest the smallest safe change. This reduces accidental edits and helps you understand the codebase faster.

## Keep Changes Reviewable

Small, focused changes are still best. Use AI to make narrow edits, run tests, and explain the diff. Avoid asking for broad rewrites unless you have a clear acceptance criteria and enough test coverage.

## Strong Use Cases

AI pair programming works especially well for:

- **Finding relevant code** in unfamiliar repositories
- **Writing tests** around existing behaviour
- **Refactoring repetitive logic** while preserving interfaces
- **Updating documentation** after code changes
- **Reviewing diffs** for edge cases and missed imports

## Watch for Failure Modes

AI assistants can invent APIs, miss hidden dependencies, or overfit to nearby files. Verify generated code with tests, type checks, and manual review. For security-sensitive changes, inspect every line.

## Build Team Guidelines

Teams should agree on when AI-generated code is acceptable, how it should be reviewed, which data can be shared, and how to document meaningful AI-assisted changes in pull requests.

## Conclusion

The best AI coding workflow treats the assistant as a fast pair programmer, not an autopilot. Use it to accelerate understanding and implementation while keeping engineering judgement in control.
    `,
    date: "2026-05-18",
    readTime: "8 min read",
    category: "Tools",
    featured: false,
    author: {
      name: "Lisa Martinez",
      avatar: "LM"
    }
  },
  {
    slug: "responsible-ai-governance-for-builders",
    title: "Responsible AI Governance for Builders: Practical Guardrails That Ship",
    excerpt: "Turn AI ethics into day-to-day engineering practices with risk tiers, evaluations, audit logs, privacy controls, and human oversight.",
    content: `
# Responsible AI Governance for Builders

Responsible AI is moving from abstract principles to everyday product and engineering work. Teams need lightweight governance that helps them ship useful features without ignoring privacy, safety, fairness, and accountability.

## Use Risk Tiers

Not every AI feature needs the same level of review. A text summariser for public blog posts is different from an AI system that influences hiring, lending, healthcare, or legal outcomes. Define risk tiers and match each tier with appropriate checks.

## Practical Guardrails

Useful governance includes:

- **Data minimisation** so prompts contain only what the model needs
- **Permission checks** before retrieving or exposing private information
- **Evaluation sets** for quality, bias, safety, and refusal behaviour
- **Audit logs** for high-impact model decisions and tool calls
- **Human oversight** for irreversible or sensitive actions

## Make Limitations Visible

Users should know when they are interacting with AI, what sources were used, and where uncertainty exists. Good interfaces make it easy to verify, correct, or reject AI output.

## Review Vendors and Models

Governance also applies to third-party AI services. Review data retention policies, regional hosting, model update practices, security certifications, and incident response commitments before sending sensitive workloads to a provider.

## Keep Governance Iterative

AI systems change as prompts, models, datasets, and user behaviour evolve. Re-run evaluations after updates and treat production feedback as part of the governance process.

## Conclusion

Responsible AI governance works best when it is built into the delivery process. Clear risk tiers, measurable checks, and visible accountability help teams move quickly without cutting corners.
    `,
    date: "2026-05-10",
    readTime: "7 min read",
    category: "Governance",
    featured: false,
    author: {
      name: "Dr. Emily Watson",
      avatar: "EW"
    }
  }
];

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
